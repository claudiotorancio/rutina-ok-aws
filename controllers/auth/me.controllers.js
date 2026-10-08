const getProfile = async (req, res) => {
    try {
        //Traer el req.user sin el password
        const { password: _, ...userClean } = req.user;

        //Enviamos los datos al perfil
        return res.json({
            authenticated: true,
            user: userClean
        });

    } catch (error) {
        console.error("Error en endpoint auth/me", error);
        return res.status(500).json({ eror: "Error internod el servidor" });
    }
};

export default getProfile;