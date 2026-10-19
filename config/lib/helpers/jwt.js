import jwt from "jsonwebtoken";

/**
 * Genera un token JWT firmado digitalmente
 * @param {Object} payload - Datos a encriptar (id_usuario, tipo_usuario)
 * @returns {String} Token firmado
 */

export const generarToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "30d"
    })
};

/**
 * Verifica si un token es válido y descifra sus datos
 * @param {String} token - El token recibido del celular
 * @returns {Object|null} Payload descifrado o null si es inválido/expiró
 */

export const verificarToken = (token) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.error("Error detallado de JWT:", error.message); // Esto te mostrará si falló por firma o expiración
        return null;
    }
};

