
import passport from "../../config/lib/passport.js";


const signin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    //Implementar con passport la valdiación del login
    try {
        passport.authenticate("local.signin", (err, user, info) => {
            //Manejo de errores de autenticacion
            if (err) {
                console.error("Errorr en la autenticación", err);
                res.status(400).json({ err: "Error en la autenticación" });
            }
            //Verficar si el usuario fue encontrado
            if (!user) {
                return res.status(401).json({ err: "Usuario o contraseña incorrectos" });
            }

            //Autenticacion de la session con la devolucion del user
            req.logIn(user, (err) => {
                if (err) {
                    console.error("Error al iniciar sesión", err);
                    return res.status(500).json({ error: "Error al iniciar sesión" });
                }

                //Devolver el usuario autenticado
                return res.json({
                    message: "Inicio de sesión exitoso",
                    user: req.user
                });
            });
        })(req, res);
    } catch (error) {
        console.error("Error de servidor", error)
        res.status(500).json({ error: "Error de servidor" })
    }
};

export default signin;