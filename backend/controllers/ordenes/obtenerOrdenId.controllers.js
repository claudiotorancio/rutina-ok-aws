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
                equipo: {
                    include: { cliente: true } // Traemos el cliente a través del equipo
                },
                tecnico: {
                    include: { usuario: true } // Traemos los datos del usuario técnico
                },
                intervenciones: true // ¡Acá traemos el historial técnico!
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