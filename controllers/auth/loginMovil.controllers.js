import prisma from "../../config/dbConnection.js";
import helpers from "../../config/lib/helpers/helpers.js";
import { generarToken } from "../../config/lib/helpers/jwt.js";

const loginMovil = async (req, res) => {
    //recibir los datos
    const { email, password } = req.body;

    try {
        //Buscar el usuario en la base de datos
        const usuario = await prisma.usuario.findUnique({ where: { email } });
        if (!usuario) {
            return res.status(401).json({ error: "Credenciales invalidadas" });
        }

        //Filtrar el rol
        if (usuario.tipo_usuario !== "TECNICO") {
            return res.status(401).json({ error: "Acceso denegado. App exclusiva para técnicos" });
        }

        //Comparar contraseñas
        const isValidPassword = await helpers.matchPassword(password, usuario.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: "Credenciales invalidas" });
        };

        //generar Token
        const token = generarToken({
            id_usuario: usuario.id_usuario,
            tipo_usuario: usuario.tipo_usuario
        });

        const { password: _, ...usuarioMovil } = usuario;

        //Devolver el usuario autenticado
        return res.json({
            message: "Login móvil exitoso",
            token,
            usuarioMovil
        });
    } catch (error) {
        console.error("Error en login móvil: ", error);
        res.status(400).json({ error: "Error en la autenticación" });
        return res.status(500).json({ error: "Error interno del servidor" })
    }
};

export default loginMovil;
