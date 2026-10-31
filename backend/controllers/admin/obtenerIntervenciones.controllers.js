import prisma from "../../config/dbConnection.js";

export const obtenerIntervenciones = async (req, res) => {
    try {
        // Consultamos todas las intervenciones ordenadas de la más reciente a la más antigua
        const intervenciones = await prisma.intervencion.findMany({
            orderBy: { creado_en: 'desc' },
            include: {
                orden: {
                    include: {
                        cliente: true, // <-- ¡Ahora el cliente está directo en la orden!
                        equipo: true,  // <-- El equipo ahora es opcional (puede venir null)
                        tecnico: {
                            include: {
                                usuario: {
                                    select: { nombre: true, apellido: true }
                                }
                            }
                        }
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

// Obtener intervenciones por ID (con el detalle completo actualizado)
export const obtenerIntervencioById = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID inválido.' });
        }

        const intervencion = await prisma.intervencion.findUnique({
            where: { id_intervencion: parseInt(id) },
            include: {
                orden: {
                    include: {
                        cliente: true, // <-- Directo al cliente
                        equipo: true,  // <-- Opcional
                        tecnico: {
                            include: {
                                usuario: {
                                    select: { nombre: true, apellido: true, telefono: true }
                                }
                            }
                        }
                    }
                }
            }
        });

        if (!intervencion) {
            return res.status(404).json({ success: false, message: 'La intervención no existe.' });
        }

        return res.status(200).json({
            success: true,
            data: intervencion
        });

    } catch (error) {
        console.error("Error al obtener detalle de la intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};

//Contar interv. para mostrar en nortificación
export const contarIntervencionesNuevas = async (req, res) => {
    try {
        const cantidadNoVistas = await prisma.intervencion.count({
            where: {
                visto: false
            }
        });

        return res.json({ success: true, count: cantidadNoVistas });

    } catch (error) {
        console.error("Error al obtener detalle de la intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });

    }
}

//Contar interv. para mostrar en nortificación
export const marcarIntervencionesComoVistas = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID inválido.' });
        }

        await prisma.intervencion.update({
            where: {
                id_intervencion: parseInt(id)
            },
            data: { visto: true }
        });

        return res.json({ success: true });

    } catch (error) {
        console.error("Error al obtener detalle de la intervención:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });

    }
}