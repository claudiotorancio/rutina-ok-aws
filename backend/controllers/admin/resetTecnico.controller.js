// controllers/admin/resetTecnico.controller.js
import prisma from "../../config/dbConnection.js";
import helpers from "../../config/lib/helpers/helpers.js";


export const resetTecnico = async (req, res) => {
    // 1. Candado de seguridad: Solo el ADMIN web logueado puede resetear claves
    if (!req.isAuthenticated() || req.user.tipo_usuario !== 'ADMIN') {
        return res.status(403).json({ error: "Acceso denegado. Acción exclusiva de administradores." });
    }

    const { id_usuario, nuevaPasswordTemporal } = req.body;

    try {

        const hashedPassword = await helpers.encryptPassword(nuevaPasswordTemporal, 10);

        // 2. Actualizamos al técnico: Pisamos la clave con la temporal y encendemos el flag
        await prisma.usuario.update({
            where: { id_usuario: parseInt(id_usuario) },
            data: {
                password: hashedPassword,
                debe_cambiar_pass: true //  Activamos el flag de vuelta para obligarlo a cambiarla en el móvil
            }
        });

        return res.json({
            success: true,
            message: "Contraseña restablecida con éxito. El técnico deberá cambiarla en su próximo ingreso."
        });

    } catch (error) {
        console.error("Error al restablecer contraseña desde Admin:", error);
        return res.status(500).json({ error: "Error interno al procesar el restablecimiento." });
    }
};
