
//Verificar para el front que hay una session activa
export const estaAuthenticado = (req, res, next) => {
    if (!req.isAuthenticated() || !req.user) {
        return res.status(401).json({
            autthenticated: false,
            error: "Acceso denegado. Debe iniciar sesión"
        })
    }
    next(); // si esta logueado sigue
}

//Verificar que es administrador

export const esAdministrador = (req, res, next) => {
    if (req.user.tipo_usuario !== "ADMIN") {
        return res.status(403).json({
            error: "Acceso denegado."
        })
    }
    next()
}