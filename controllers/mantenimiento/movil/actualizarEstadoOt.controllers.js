import prisma from "../../../config/dbConnection.js";

const actualizarEstadoOt = async (req, res) => {
    // Recibo los datos desde appInventor
    const { id_orden, nuevo_estado } = req.body;

    // Saco el id del técnico desde el token
    const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

    try {
        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: parseInt(id_orden) }
        });

        // Verificar si la orden existe
        if (!orden) {
            return res.status(404).json({ success: false, error: "La orden de trabajo no fue encontrada" });
        }

        // Verificar si la orden pertenece al técnico autenticado
        if (orden.id_tecnico !== id_tecnico_autenticado) {
            return res.status(403).json({ success: false, error: "Acceso denegado, sin permisos para modificar orden" });
        }

        const estado_destino = nuevo_estado.toUpperCase();
        const estadosPosibles = ["REPROGRAMAR", "COMPLETADA"];

        if (!estadosPosibles.includes(estado_destino)) {
            return res.status(400).json({ success: false, error: "Estado no válido" });
        }

        // Si intenta completarla, verificamos que exista una intervención registrada
        if (estado_destino === "COMPLETADA") {
            const intervencionExistente = await prisma.intervencion.findFirst({
                where: { id_orden: orden.id_orden }
            });

            // Si no existe la intervención o no está registrada/creada
            if (!intervencionExistente) {
                return res.status(400).json({
                    success: false,
                    error: "No se puede cerrar la orden porque no hay ninguna intervención registrada."
                });
            }
        }

        // Actualización de campos en Supabase mediante Transacción
        const ordenActualizada = await prisma.$transaction(async (tx) => {
            // Actualizar el estado de la OT
            const ot = await tx.ordenTrabajo.update({
                where: { id_orden: orden.id_orden },
                data: { estado: estado_destino }
            });

            // Si la orden se completó, marcamos la intervención como realizada
            if (estado_destino === "COMPLETADA") {
                await tx.intervencion.update({
                    where: { id_orden: orden.id_orden },
                    data: { realizada: true }
                });
            }

            // Actualizar disponibilidad del técnico según estado
            if (estado_destino === "COMPLETADA" || estado_destino === "REPROGRAMAR") {
                // Dependiendo de tu lógica de negocio, si se completa/reprograma puede quedar disponible o en campo
                await tx.tecnico.update({
                    where: { id_usuario: id_tecnico_autenticado },
                    data: { estado_disponibilidad: "DISPONIBLE" }
                });
            } else {
                await tx.tecnico.update({
                    where: { id_usuario: id_tecnico_autenticado },
                    data: { estado_disponibilidad: "EN_CAMPO" }
                });
            }
            return ot;
        });

        // Devolver datos en caso de éxito
        return res.json({
            success: true,
            message: "Orden actualizada correctamente",
            id_orden: ordenActualizada.id_orden,
            nuevo_estado: ordenActualizada.estado,
            orden
        });

    } catch (error) {
        console.error("Error al actualizar orden desde móvil", error.message || error);
        return res.status(500).json({ success: false, error: "Error interno del servidor al procesar la orden." });
    }
}

export default actualizarEstadoOt;