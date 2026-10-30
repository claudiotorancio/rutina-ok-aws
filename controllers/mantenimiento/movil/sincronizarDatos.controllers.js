import prisma from "../../../config/dbConnection.js";

const sincronizarDatosMovil = async (req, res) => {
    // Obtener el id del técnico autenticado
    const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

    try {
        if (!id_tecnico_autenticado) {
            return res.status(401).json({
                success: false,
                error: "No se pudo identificar al técnico autenticado."
            });
        }

        // Consultas en paralelo
        const [ordenesAsignadas, clientes, equipos, tecnicos] = await Promise.all([
            // Órdenes pendientes con la nueva estructura de relaciones
            prisma.ordenTrabajo.findMany({
                where: {
                    id_tecnico: id_tecnico_autenticado,
                    estado: {
                        notIn: ['COMPLETADA', 'REPROGRAMAR']
                    }
                },
                // Incluimos cliente de forma directa y equipo de forma opcional
                include: {
                    cliente: {
                        select: {
                            id_cliente: true,
                            nombre_empresa: true,
                            direccion: true,
                            contacto_nombre: true,
                            telefono: true
                        }
                    },
                    equipo: {
                        select: {
                            id_equipo: true,
                            nombre_equipo: true,
                            marca: true,
                            modelo: true,
                            numero_serie: true,
                            ubicacion_interna: true
                        }
                    }
                },
                orderBy: {
                    creado_en: 'desc'
                }
            }),

            // Clientes
            prisma.cliente.findMany(),

            // Equipos
            prisma.equipo.findMany(),

            // Técnicos
            prisma.tecnico.findMany({
                include: {
                    usuario: {
                        select: {
                            nombre: true,
                            apellido: true,
                            email: true,
                            telefono: true
                        }
                    }
                }
            })
        ]);

        // Ok si devuelve los datos
        return res.status(200).json({
            success: true,
            mensaje: "Sincronización exitosa",
            datos: {
                ordenes: ordenesAsignadas,
                clientes: clientes,
                equipos: equipos,
                tecnicos: tecnicos
            }
        });

    } catch (error) {
        console.error("Error al sincronizar datos móviles:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno del servidor al sincronizar."
        });
    }
};

export default sincronizarDatosMovil;