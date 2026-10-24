
import { verificarToken } from "../config/lib/helpers/jwt.js";

export const validarTokenMovil = (req, res, next) => {
    // Obtener el token de la cabecera
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. Token no proporcionado desde el móvil." });
    }

    // verificar qeu no haya expirado
    const payloadDecodificado = verificarToken(token);

    if (!payloadDecodificado) {
        return res.status(403).json({ error: "Token inválido o expirado. Inicia sesión nuevamente." });
    }

    //inyectar los datos del usuario
    req.usuarioMovil = {
        id_usuario: payloadDecodificado.id_usuario,
        tipo_usuario: payloadDecodificado.tipo_usuario
    };
    //Continuar con el siguiente middleware
    next();
};


