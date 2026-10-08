//logout.controllers.js

const logout = (req, res) => {
    try {

        //Verificar que exista una session activa
        if (!req.isAuthenticated()) {
            return res.status(400).json({ error: "No hay ninguna sesión activa para cerrar." });
        }

        // //Logout de passport para limpiar el req.user
        req.logout((err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: "Error durante el logout" });
            }

            // Ejecutamos la destrucción en Supabase
            req.session.destroy((destroyErr) => {
                if (destroyErr) {
                    console.error("Error al destruir sesión:", destroyErr);
                    // Si Supabase falla, igual intentamos limpiar al cliente
                    res.clearCookie("user_sid");
                    return res.status(500).json({ success: false, message: "Error al limpiar la sesión" });
                }

                //SI TODO SALE BIEN: Borramos la cookie y respondemos AQUÍ ADENTRO
                res.clearCookie("user_sid");
                return res.status(200).json({ success: true, message: "logout exitoso" });
            });
        });

    } catch (error) {
        console.log("Error en la función logout", error);
        res.status(500).json({ message: "Error interno del servidor" })

    }
}

export default logout;