// controllers/movil/intervenciones.controller.js
import prisma from "../../../config/dbConnection.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // Asegurate de tener instalado @aws-sdk/client-s3

// Inicializar cliente S3
const s3Client = new S3Client({
    region: process.env.S3_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const registrarIntervencion = async (req, res) => {
    const {
        id_orden,
        tipo,
        detalles_json,
        foto_antes,
        foto_despues
    } = req.body;

    // Validar tecnico autenticado 
    const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

    try {
        // Validaciones de la orden 
        const orden = await prisma.ordenTrabajo.findUnique({ where: { id_orden: parseInt(id_orden) } });

        if (!orden) return res.status(404).json({ success: false, error: "La orden de trabajo no existe." });

        // Verificar si la orden pertenece al tecnico autenticado
        if (orden.id_tecnico !== id_tecnico_autenticado) {
            return res.status(403).json({ success: false, error: "Acceso denegado, sin permisos para modificar orden." });
        }

        const intervencion = await prisma.intervencion.findMany({ where: { id_orden: parseInt(id_orden) } });

        if (intervencion.realizada) return res.status(403).json({ success: false, error: "La orden de trabajo se ecuentra finalizda." });


        // Función auxiliar para subir un Base64 a S3
        const subirBase64AS3 = async (base64String, nombreCarpeta = "intervenciones") => {
            if (!base64String) return null;

            // Limpiar el prefijo data:image/... si lo tuviera
            const base64Data = Buffer.from(base64String.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            const fileName = `${nombreCarpeta}/${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

            const uploadParams = {
                Bucket: process.env.BUCKET_AWS,
                Key: fileName,
                Body: base64Data,
                ContentType: 'image/png',
                // ACL: 'public-read' // Opcional según cómo tengas configurado tu bucket S3
            };

            await s3Client.send(new PutObjectCommand(uploadParams));

            // Retornar la URL pública del archivo en S3
            return `https://${process.env.BUCKET_AWS}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com/${fileName}`;
        };

        // TRANSACCIÓN
        const resultado = await prisma.$transaction(async (tx) => {

            // Subimos ambas fotos a S3 en paralelo o secuencial
            const urlAntes = await subirBase64AS3(foto_antes, "antes");
            const urlDespues = await subirBase64AS3(foto_despues, "despues");

            // Decodificamos el JSON de los formularios de App Inventor de forma segura
            const infoFormulario = typeof detalles_json === "string" ? JSON.parse(detalles_json) : (detalles_json || {});

            // Unificacion de detalles y URLs
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