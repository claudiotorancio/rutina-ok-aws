import prisma from "../../config/dbConnection.js";


const crearOrdenTrabajo = async (req, res) => {

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

        //Crear el json de la nueva orden de trabajo
        const nuevaOrden = await prisma.ordenTrabajo.create({
            data: {
                id_equipo: parseInt(id_equipo),
                id_tecnico: parseInt(id_tecnico),
                tipo_mantenimiento,
                prioridad: prioridad || "BAJA",
                fecha_programada: new Date(fecha_programada).toISOString(),
                descripcion_tarea,
                estado: "PENDIENTE"
            },
            include: {
                equipo: {
                    select: {
                        nombre_equipo: true,
                        marca: true,
                        ubicacion_interna: true,
                        tipo_refrigerante: true,
                        cliente: true
                    }

                },
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

        //Devolver respuesta exitosa con lso datos

        return res.status(201).json({
            message: "Orden de trabajo creada con exito",

            orden: {
                id_orden: nuevaOrden.id_orden,
                fecha: nuevaOrden.fecha_programada,
                prioridad: nuevaOrden.prioridad,
                estado: nuevaOrden.estado,
                tipo_mantenimiento: nuevaOrden.tipo_mantenimiento,
                descripcion: nuevaOrden.descripcion_tarea,
                tecnico_asignado: `${nuevaOrden.tecnico.usuario.nombre} ${nuevaOrden.tecnico.usuario.apellido}`,
                ordenes_asignadas: nuevaOrden.tecnico.ordenes,
                equipo: {
                    id_equipo: id_equipo,
                    nombre: nuevaOrden.equipo.nombre_equipo,
                    marca: nuevaOrden.equipo.marca,
                    ubicacion: nuevaOrden.equipo.ubicacion_interna,
                    tipo_refrigerante: nuevaOrden.equipo.tipo_refrigerante
                },
                cliente: {
                    empresa: nuevaOrden.equipo.cliente.nombre_empresa,
                    contacto: nuevaOrden.equipo.cliente.contacto_nombre,
                    direccion: nuevaOrden.equipo.cliente.direccion,
                    telefono: nuevaOrden.equipo.cliente.telefono
                }
            }
        });

    } catch (error) {
        console.error("Error al crear orden de trabajo", error.message || error);

        //verificar qeu no existan duplciados
        if (error.code === "P2009" || error.message.includes("Invalid value for enum")) {
            return res.status(400).json({ error: "Valores inválidos para los enums de prioridad o tipo de mantenimiento." });
        }
        return res.status(500).json({ error: "Error interno del servidor al generar la orden." });
    }

};

export default crearOrdenTrabajo;