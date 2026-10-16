import prisma from "../../config/dbConnection.js";

export const reasignarOrdenTrabajo = async (req, res) => {

    const { id } = req.params; // id_orden que viene por la URL
    const { id_tecnico } = req.body; // Nuevo técnico asignado

    try {
        const idOrden = parseInt(id, 10);
        const idTecnico = parseInt(id_tecnico, 10);

        // 1. Verificamos que la orden exista
        const ordenExiste = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: idOrden }
        });

        if (!ordenExiste) {
            return res.status(404).json({ error: 'La orden de trabajo no existe.' });
        }

        // 2. Tu misma validación: Verificamos que el nuevo técnico exista y esté disponible
        const tecnicoExiste = await prisma.tecnico.findUnique({
            where: { id_usuario: idTecnico },
            include: { usuario: true }
        });

        if (!tecnicoExiste) {
            return res.status(404).json({ error: 'El técnico especificado no existe.' });
        }

        if (tecnicoExiste.estado_disponibilidad === 'INACTIVO' || tecnicoExiste.estado_disponibilidad === 'LICENCIA') {
            return res.status(400).json({
                error: `No se puede reasignar la OT. El técnico se encuentra en estado: ${tecnicoExiste.estado_disponibilidad}`
            });
        }

        // 3. UPDATE en lugar de CREATE
        const ordenActualizada = await prisma.ordenTrabajo.update({
            where: { id_orden: idOrden },
            data: { id_tecnico: idTecnico },
            include: {
                equipo: {
                    include: { cliente: true }
                },
                tecnico: {
                    include: {
                        usuario: { select: { nombre: true, apellido: true } }
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            mensaje: 'Orden de trabajo reasignada exitosamente.',
            orden: ordenActualizada
        });

    } catch (error) {
        console.error('Error al reasignar orden de trabajo:', error);
        return res.status(500).json({
            error: 'Error interno del servidor al reasignar la orden.'
        });
    }
};