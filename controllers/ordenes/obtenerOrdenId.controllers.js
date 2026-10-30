import prisma from "../../config/dbConnection.js";

//Detalles de la orden
export const obtenerOrdenPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const idOrden = parseInt(id, 10);

        if (isNaN(idOrden)) {
            return res.status(400).json({ success: false, message: 'ID inválido.' });
        }

        const orden = await prisma.ordenTrabajo.findUnique({
            where: { id_orden: idOrden },
            include: {
                cliente: true, // <-- Ahora el cliente se incluye de forma directa
                equipo: true,  // <-- El equipo es opcional (puede venir null si es un trabajo general)
                tecnico: {
                    include: { usuario: true } // Traemos los datos del usuario técnico
                },
                intervenciones: true // Historial técnico asociado a la orden
            }
        });

        if (!orden) {
            return res.status(404).json({ success: false, message: 'La orden de trabajo no existe.' });
        }

        return res.status(200).json({
            success: true,
            data: orden
        });

    } catch (error) {
        console.error("Error al obtener detalle de orden:", error);
        return res.status(500).json({ success: false, error: "Error interno del servidor." });
    }
};

export default obtenerOrdenPorId;