// controllers/movil/intervenciones.controller.js
import prisma from "../../../config/dbConnection.js";

const registrarIntervencion = async (req, res) => {

    const id_orden  = req.query.id_orden;
    const  tipo  = req.query.tipo;
    const  detalles_json  = req.query.detalles_json;
    console.log(id_orden)

    //Validar tecnico autenticado
    const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

    try {
        // Validaciones de la orden en Supabase
        const orden = await prisma.ordenTrabajo.findUnique({ where: { id_orden: parseInt(id_orden) } });

        if (!orden) return res.status(404).json({ success: false, error: "La orden de trabajo no existe." });

        //Verificar si la orden pertenece al tecnico autenticadp
        if (orden.id_tecnico !== id_tecnico_autenticado) {
            res.status(403).json({ succes: false, error: "Acceso denegado, sin permisos para modificar orden " })
        }

        // TRANSACCIÓN
        const resultado = await prisma.$transaction(async (tx) => {

            const fotoAntesFile = req.files?.["foto_antes"]?.[0];
            const fotoDespuesFile = req.files?.["foto_despues"]?.[0];

            // capturo las URL reales
            const urlAntes = fotoAntesFile ? fotoAntesFile.location : null;
            const urlDespues = fotoDespuesFile ? fotoDespuesFile.location : null;


            // Decodificamos el JSON de los formularios de App Inventor de forma segura
            const infoFormulario = typeof detalles_json === "string" ? JSON.parse(detalles_json) : (detalles_json || {});

            // Unificacion
            const detallesFinales = {
                ...infoFormulario,
                fotos_evidencia: {
                    antes_url: urlAntes,
                    despues_url: urlDespues
                }
            };

            // Crear la intervención en Supabase
            const nuevaIntervencion = await tx.intervencion.create({
                data: {
                    id_orden: orden.id_orden,
                    tipo: tipo.toUpperCase(),
                    detalles_json: detallesFinales
                }
            });


            return { nuevaIntervencion };
        });

        return res.status(201).json({
            success: true,
            message: `¡Informe guardado! Intervención de tipo ${tipo} registrada con éxito.`,
            id_intervencion: resultado.nuevaIntervencion.id_intervencion,
        });

    } catch (error) {
        console.error("Error al registrar intervención técnica:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor al procesar el cierre." });
    }
};

export default registrarIntervencion;
