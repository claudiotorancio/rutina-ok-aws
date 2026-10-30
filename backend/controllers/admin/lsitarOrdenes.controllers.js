import prisma from "../../config/dbConnection.js";

const listarOrdenesAdmin = async (req, res) => {

    if (!req.isAuthenticated || req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden ver las órdenes de trabajo" });
    }

    const { estado, id_tecnico, prioridad, id_cliente } = req.query;

    // Construimos dinámicamente el filtro según los query params
    const filtros = {};
    if (estado) filtros.estado = estado;
    if (id_tecnico) filtros.id_tecnico = parseInt(id_tecnico);
    if (prioridad) filtros.prioridad = prioridad;
    if (id_cliente) filtros.id_cliente = parseInt(id_cliente); // <-- ¡Nuevo filtro útil!

    try {

        const ordenes = await prisma.ordenTrabajo.findMany({
            where: filtros,
            include: {
                // Relación directa con el cliente (ahora es el eje central)
                cliente: {
                    select: {
                        id_cliente: true,
                        nombre_empresa: true,
                        contacto_nombre: true,
                        direccion: true,
                        telefono: true
                    }
                },
                // Relación con el equipo (ahora es opcional / nullable)
                equipo: {
                    select: {
                        id_equipo: true,
                        nombre_equipo: true,
                        marca: true,
                        modelo: true,
                        numero_serie: true,
                        ubicacion_interna: true
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