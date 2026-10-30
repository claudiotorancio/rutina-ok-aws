import prisma from "../../config/dbConnection.js";

export const crearOrdenTrabajo = async (req, res) => {

    if (!req.isAuthenticated || req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden crear ordenes de trabajo" });
    }

    const {
        id_cliente,
        id_equipo,
        id_tecnico,
        tipificacion, // <-- Actualizado al nombre correcto del enum del esquema
        prioridad,
        fecha_programada,
        descripcion_tarea
    } = req.body;

    // Validación básica inicial
    if (!id_cliente) {
        return res.status(400).json({ error: "El cliente es obligatorio para crear la orden de trabajo." });
    }

    try {

        // Crear la orden de trabajo con el cliente obligatorio y el equipo opcional
        const nuevaOrden = await prisma.ordenTrabajo.create({
            data: {
                id_cliente: parseInt(id_cliente),
                id_equipo: id_equipo ? parseInt(id_equipo) : null, // <-- Opcional (null si no se envía)
                id_tecnico: parseInt(id_tecnico),
                tipificacion,
                prioridad: prioridad || "BAJA",
                fecha_programada: new Date(fecha_programada).toISOString(),
                descripcion_tarea,
                estado: "PENDIENTE"
            },
            include: {
                cliente: true, // <-- Relación directa con el cliente
                equipo: true,  // <-- Relación opcional con el equipo
                tecnico: {
                    include: {
                        usuario: {
                            select: {
                                nombre: true, apellido: true, telefono: true
                            }
                        },
                        ordenes: true
                    }
                }
            }
        });

        // Devolver respuesta exitosa con los datos estructurados de forma segura
        return res.status(201).json({
            message: "Orden de trabajo creada con éxito",
            orden: {
                id_orden: nuevaOrden.id_orden,
                fecha: nuevaOrden.fecha_programada,
                prioridad: nuevaOrden.prioridad,
                estado: nuevaOrden.estado,
                tipificacion: nuevaOrden.tipificacion,
                descripcion: nuevaOrden.descripcion_tarea,
                tecnico_asignado: `${nuevaOrden.tecnico.usuario.nombre} ${nuevaOrden.tecnico.usuario.apellido}`,
                ordenes_asignadas: nuevaOrden.tecnico.ordenes,

                // Mapeo seguro del equipo (si es null, enviamos estructura por defecto)
                equipo: nuevaOrden.equipo ? {
                    id_equipo: nuevaOrden.equipo.id_equipo,
                    nombre: nuevaOrden.equipo.nombre_equipo,
                    marca: nuevaOrden.equipo.marca,
                    ubicacion: nuevaOrden.equipo.ubicacion_interna,
                    tipo_refrigerante: nuevaOrden.equipo.tipo_refrigerante
                } : null,

                // Datos directos del cliente
                cliente: {
                    id_cliente: nuevaOrden.cliente.id_cliente,
                    empresa: nuevaOrden.cliente.nombre_empresa,
                    contacto: nuevaOrden.cliente.contacto_nombre,
                    direccion: nuevaOrden.cliente.direccion,
                    telefono: nuevaOrden.cliente.telefono
                }
            }
        });

    } catch (error) {
        console.error("Error al crear orden de trabajo", error.message || error);

        if (error.code === "P2009" || error.message.includes("Invalid value for enum")) {
            return res.status(400).json({ error: "Valores inválidos para los enums de prioridad o tipificación." });
        }
        return res.status(500).json({ error: "Error interno del servidor al generar la orden." });
    }

};