// middlewares/jwt.middleware.js
import { verificarToken } from "../config/lib/helpers/jwt.js";

export const validarTokenMovil = (req, res, next) => {
    // 1. App Inventor enviará el token en la cabecera 'Authorization'
    const authHeader = req.headers["authorization"];

    // El formato estándar es "Bearer TEXTO_DEL_TOKEN"
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. Token no proporcionado desde el móvil." });
    }

    // 2. Usamos tu helper para verificar que no haya expirado ni haya sido alterado
    const payloadDecodificado = verificarToken(token);

    if (!payloadDecodificado) {
        return res.status(403).json({ error: "Token inválido o expirado. Inicia sesión nuevamente." });
    }

    // 3.Inyectamos el id_usuario descifrado directamente en el req
    req.usuarioMovil = {
        id_usuario: payloadDecodificado.id_usuario,
        tipo_usuario: payloadDecodificado.tipo_usuario
    };

    next(); // Permite continuar al controlador que manejará los datos
};


