import prisma from "../../../config/dbConnection.js";

const actualizarEstadoOt = async (req, res) => {
    //recibo los datos desde appInventor
    const { id_orden, nuevo_estado } = req.body;

    //saco el iddel tecnico desde el token
    const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

    try {
        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });
        //verificar si la orden existe
        if (!orden) {
            res.status(404).json({ succes: false, error: "La orden de trabajo no fue encontrada" })
        }

        //Verificar si la orden pertenece al tecnico autenticadp
        if (orden.id_tecnico !== id_tecnico_autenticado) {
            res.status(403).json({ succes: false, error: "Acceso denegado, sin permisos para modificar orden " })
        }

        const estado_destino = nuevo_estado.toUpperCase();


        const estadosPosibles = ["ACEPTADA", "EN_PROCESO"];

        //Actualziación de campos en Supabase

        const ordenActualizada = await prisma.$transaction(async (tx) => {
            //Actualizar el estado de la OT
            const ot = await tx.ordenTrabajo.update({
                where: { id_orden: orden.id_orden },
                data: { estado: estado_destino }
            });

            if (estadosPosibles.includes(estado_destino.toUpperCase())) {
                await tx.tecnico.update({
                    where: { id_usuario: id_tecnico_autenticado },
                    data: { estado_disponibilidad: "EN_CAMPO" }
                })
            } else {
                await tx.tecnico.update({
                    where: { id_usuario: id_tecnico_autenticado },
                    data: { estado_disponibilidad: "DISPONIBLE" }
                })
            }
            return ot;
        });
        //Devolver datos en caso de exito
        return res.json({
            success: true,
            message: "Orden actualziada correctamente",
            id_orden: ordenActualizada.id_orden,
            nuevo_estado: ordenActualizada.estado,
            orden
        });

    } catch (error) {

        console.error("Error al aceptar orden desde movil", error.message || error);
        return res.status(500).json({ success: false, error: "Error interno del servidor al procesar la orden." });

    }
}

export default actualizarEstadoOt;