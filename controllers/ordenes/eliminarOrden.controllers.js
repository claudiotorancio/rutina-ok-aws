import prisma from "../../config/dbConnection.js";

export const eliminarOrden = async (req, res) => {

    try {
        const { id } = req.params;
        const idOrden = parseInt(id, 10)
        await prisma.ordenTrabajo.delete({
            where: {
                id_orden: idOrden
            }
        })

        return res.status(201).json({
            success: true,
            message: 'Orden eliminada correctamente'
        })

    } catch (error) {

        console.error("Error al eliminar orden de trabajo", error.message || error);

        // Verificar si existeo existe
        if (error.code === 'P2025') {
            return res.status(404).json({
                success: false,
                message: 'La orden de trabajo que intentás eliminar no existe.'
            });
        }

        // verificar qeu no tenga intervenciones
        if (error.code === 'P2003') {
            return res.status(400).json({
                success: false,
                message: 'No se puede eliminar esta orden porque tiene intervenciones de trabajo asociadas.'
            });
        }

        return res.status(500).json({
            success: false,
            error: "Error interno del servidor al eliminar la orden de trabajo."
        });
    }
};