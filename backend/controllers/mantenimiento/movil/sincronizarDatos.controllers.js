// controllers/movil/sincronizacion.controller.js
import prisma from "../../../config/dbConnection.js";

const sincronizarDatosMovil = async (req, res) => {
    // Obtenemos el ID del técnico autenticado por el token JWT
    const id_tecnico_autenticado = req.usuarioMovil?.id_usuario;

    try {
        if (!id_tecnico_autenticado) {
            return res.status(401).json({
                success: false,
                error: "No se pudo identificar al técnico autenticado."
            });
        }

        // Ejecutamos todas las consultas en paralelo para que sea súper rápido
        const [ordenesAsignadas, clientes, equipos, tecnicos] = await Promise.all([
            // 1. Órdenes: SOLO las de este técnico y que estén pendientes
            prisma.ordenTrabajo.findMany({
                where: {
                    id_tecnico: id_tecnico_autenticado,
                    estado: {
                        notIn: ['COMPLETADA', 'CANCELADA']
                    }
                },
                include: {
                    equipo: {
                        include: {
                            cliente: {
                                select: {
                                    nombre_empresa: true,
                                    direccion: true,
                                    contacto_nombre: true,
                                    telefono: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    creado_en: 'desc'
                }
            }),

            // 2. Clientes: Todos (para catálogos o referencias)
            prisma.cliente.findMany(),

            // 3. Equipos: Todos (por si se necesitan consultar)
            prisma.equipo.findMany(),

            // 4. Técnicos: Todos (opcional, por si querés mostrar nombres en la app)
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

        // Retornamos el paquete unificado para la app móvil
        return res.status(200).json({
            success: true,
            mensaje: "Sincronización exitosa",
            datos: {
                ordenes: ordenesAsignadas, // Filtradas por técnico
                clientes: clientes,         // Catálogo completo
                equipos: equipos,           // Catálogo completo
                tecnicos: tecnicos          // Catálogo completo
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