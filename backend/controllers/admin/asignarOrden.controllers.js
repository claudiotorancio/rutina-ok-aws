import prisma from "../../config/dbConnection.js";

const asignarOrdenTrabajo = async (req, res) => {

    if (!req.isAuthenticated || req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden crear ordenes de trabajo" })
    }

    const {
        id_equipo,
        id_tecnico,
        tipo_mantenimiento,
        prioridad,
        fecha_programada,
        descripcion_tarea
    } = req.body;


    try {
        // Verificamos que el técnico exista y esté activo
        const tecnicoExiste = await prisma.tecnico.findUnique({
            where: { id_usuario: parseInt(id_tecnico) },
            include: { usuario: true }
        });

        if (!tecnicoExiste) {
            return res.status(404).json({ error: 'El técnico especificado no existe.' });
        }


        // Creamos la Orden de Trabajo en estado PENDIENTE por defecto
        const nuevaOrden = await prisma.ordenTrabajo.create({
            data: {
                id_equipo: parseInt(id_equipo),
                id_tecnico: parseInt(id_tecnico),
                tipo_mantenimiento,
                prioridad: prioridad || 'BAJA',
                fecha_programada: new Date(fecha_programada).toISOString(),
                descripcion_tarea,
                estado: 'PENDIENTE'
            },
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

        return res.status(201).json({
            success: true,
            mensaje: 'Orden de trabajo asignada exitosamente al técnico.',
            orden: nuevaOrden
        });

    } catch (error) {
        console.error('Error al asignar orden de trabajo:', error);
        return res.status(500).json({
            error: 'Error interno del servidor al crear y asignar la orden.'
        });
    }
};

export default asignarOrdenTrabajo;