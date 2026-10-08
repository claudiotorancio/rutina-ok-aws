import passport from '../../config/lib/passport.js';

const signup = async (req, res) => {
    const { nombre, apellido, email, password, telefono, tipo_usuario } = req.body;

    console.log(req.body)

    if (!nombre || !apellido || !email || !password || !telefono || !tipo_usuario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        passport.authenticate('local.signup', (err, user, info) => {
            if (err) {
                console.error("Error en la autenticación:", err);
                return res.status(500).json({ error: "Error en la autenticación" });
            }
            if (!user) {
                return res.status(400).json({ error: "Este correo electronico ya esta registrado. Si olvidó su contraseña, puede solicitar un restablecimiento" });
            }
            res.status(201).json({
                message: "Usuario registrado correctamente"
            })
        })(req, res);
    } catch (error) {
        console.error("Error de servidor", error);
        res.status(500).json({ message: "Error de servidor" });

    }
}

export default signup;