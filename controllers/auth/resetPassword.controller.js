import prisma from "../../config/dbConnection.js"
import helpers from "../../config/lib/helpers/helpers.js";

// controllers/auth/password.controller.js
const resetPassword = async (req, res) => {
    //creamos el req.body
    const { id_usuario, nuevaPassword } = req.body;

    if (!id_usuario || !nuevaPassword) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    try {
        // bsucar el usuario
        const usuario = await prisma.usuario.findUnique({
            where: { id_usuario: parseInt(id_usuario) }
        });

        // validarlo
        if (!usuario) {
            return res.status(404).json({ error: "El usuario especificado no existe en el sistema." });
        }

        // verificar qeu sea tecnico
        if (usuario.tipo_usuario !== "TECNICO") {
            return res.status(403).json({ error: "Acceso denegado. Este proceso es exclusivo para cuentas de técnicos." });
        }

        // comprobar si ya reemplazo la contraseña
        if (!usuario.debe_cambiar_pass) {
            return res.status(400).json({ error: "Esta cuenta ya configuró su contraseña definitiva. Utiliza el login normal." });
        }

        const hashedPassword = await helpers.encryptPassword(nuevaPassword, 10);

        await prisma.usuario.update({
            where: { id_usuario: id_usuario },
            data: {
                password: hashedPassword,
                debe_cambiar_pass: false
            }
        });

        res.json({ message: "Contraseña actualizada con éxito. Ya puedes usar el CMMS." });
    } catch (error) {
        res.status(500).json({ error: "No se pudo actualizar la contraseña corporativa." });
    }
};

export default resetPassword


