
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

export const verificarAdmin = (req, res, next) => {

    // Si la sesión de Passport está activa y el usuario es ADMIN
    if (req.isAuthenticated() && req.user?.tipo_usuario === 'ADMIN') {
        // console.log("estoy en el middleware, verificarAdmin")
        return next(); // Permitimos que continúe a la siguiente ruta o archivo
    }

    // SI NO ESTÁ LOGUEADO (o ya hizo logout), lo expulsamos al login de raíz
    return res.redirect("./");
};