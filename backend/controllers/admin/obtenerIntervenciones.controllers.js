import prisma from "../../config/dbConnection.js";

export const obtenerIntervenciones = async (req, res) => {
    try {
        // Consultamos todas las intervenciones ordenadas de la más reciente a la más antigua
        const intervenciones = await prisma.intervencion.findMany({
            orderBy: { creado_en: 'desc' }, // Asumiendo que tenés un timestamp de creación
            include: {
                orden: {
                    include: {
                        equipo: {
                            include: {
                                cliente: true // Traemos también los datos del cliente y equipo
                            }
                        },
                        tecnico: true // Traemos el técnico que realizó el trabajo
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            intervenciones
        });

    } catch (error) {
        console.error("Error al obtener las intervenciones:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno al intentar listar las intervenciones."
        });
    }
};