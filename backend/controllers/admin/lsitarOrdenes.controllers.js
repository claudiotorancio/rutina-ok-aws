import prisma from "../../config/dbConnection.js";

const listarOrdenesAdmin = async (req, res) => {

    if (!req.isAuthenticated || req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden crear ordenes de trabajo" })
    }

    const { estado, id_tecnico, prioridad } = req.query;

    // Construimos dinámicamente el filtro según los query params
    const filtros = {};
    if (estado) filtros.estado = estado;
    if (id_tecnico) filtros.id_tecnico = parseInt(id_tecnico);
    if (prioridad) filtros.prioridad = prioridad;

    try {

        const ordenes = await prisma.ordenTrabajo.findMany({
            where: filtros,
            include: {
                equipo: {
                    select: {
                        nombre_equipo: true,
                        marca: true,
                        modelo: true,
                        ubicacion_interna: true,
                        cliente: {
                            select: { nombre_empresa: true }
                        }
                    }
                },
                tecnico: {
                    include: {
                        usuario: {
                            select: { nombre: true, apellido: true }
                        }
                    }
                },
                intervenciones: {
                    select: {
                        id_intervencion: true,
                        tipo: true,
                        creado_en: true
                    }
                }
            },
            orderBy: {
                fecha_programada: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            total: ordenes.length,
            ordenes
        });

    } catch (error) {
        console.error('Error al listar órdenes para el admin:', error);
        return res.status(500).json({
            error: 'Error interno al obtener las órdenes de trabajo.'
        });
    }
};

export default listarOrdenesAdmin;
