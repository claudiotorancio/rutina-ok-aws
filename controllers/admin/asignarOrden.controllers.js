import prisma from "../../config/dbConnection.js";

const asignarOrdenTrabajo = async (req, res) => {

    if (!req.isAuthenticated || req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden crear ordenes de trabajo" });
    }

    const {
        id_cliente,
        id_equipo,
        id_tecnico,
        tipificacion,
        prioridad,
        fecha_programada,
        descripcion_tarea
    } = req.body;

    // Validamos que el cliente esté presente
    if (!id_cliente) {
        return res.status(400).json({ error: 'El cliente es obligatorio para crear la orden de trabajo.' });
    }

    try {
        // 1. Verificamos que el cliente exista
        const clienteExiste = await prisma.cliente.findUnique({
            where: { id_cliente: parseInt(id_cliente) }
        });

        if (!clienteExiste) {
            return res.status(404).json({ error: 'El cliente especificado no existe.' });
        }

        // 2. Verificamos que el técnico exista y esté activo
        const tecnicoExiste = await prisma.tecnico.findUnique({
            where: { id_usuario: parseInt(id_tecnico) },
            include: { usuario: true }
        });

        if (!tecnicoExiste) {
            return res.status(404).json({ error: 'El técnico especificado no existe.' });
        }

        // 3. (Opcional pero recomendado) Si mandaron equipo, validamos que exista
        if (id_equipo) {
            const equipoExiste = await prisma.equipo.findUnique({
                where: { id_equipo: parseInt(id_equipo) }
            });
            if (!equipoExiste) {
                return res.status(404).json({ error: 'El equipo especificado no existe.' });
            }
        }

        // 4. Creamos la Orden de Trabajo vinculada al cliente (y opcionalmente al equipo)
        const nuevaOrden = await prisma.ordenTrabajo.create({
            data: {
                id_cliente: parseInt(id_cliente),
                id_equipo: id_equipo ? parseInt(id_equipo) : null, // <-- Ahora es opcional (null si no se envía)
                id_tecnico: parseInt(id_tecnico),
                tipificacion: tipificacion,
                prioridad: prioridad || 'BAJA',
                fecha_programada: new Date(fecha_programada).toISOString(),
                descripcion_tarea,
                estado: 'PENDIENTE'
            },
            include: {
                cliente: true, // <-- Incluimos los datos del cliente directamente
                equipo: true,  // <-- Incluimos el equipo (si tiene, sino vendrá null)
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