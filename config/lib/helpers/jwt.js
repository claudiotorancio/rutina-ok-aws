import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET_KEY || "secreto_movil_super_seguro";

/**
 * Genera un token JWT firmado digitalmente
 * @param {Object} payload - Datos a encriptar (id_usuario, tipo_usuario)
 * @returns {String} Token firmado
 */

export const generarToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {
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
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        return null
    }
};

