import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import prisma from '../../config/dbConnection.js';
import helpers from './helpers/helpers.js';

//signin
passport.use(
    "local.signin",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await prisma.usuario.findUnique({
                    where: { email }
                });
                if (!user) {
                    return done(null, false, { message: 'Usuario o contraseña incorrectos' });
                }
                const isValidPassword = await helpers.matchPassword(password, user.password);

                if (!isValidPassword) {
                    return done(null, false, { message: 'Usuario o contraseña incorrectos' });
                }

                //Remover el campo de contraseña antes de pasar el usuario a la sesión
                const { password: _, ...userWithoutPassword } = user;
                return done(null, userWithoutPassword);

            } catch (err) {
                console.log('Error en LocalStrategy:', err.stack);
                return done(err, false, { message: 'Error en el servidor' });
            }
        }));

//SerialUser

passport.serializeUser((user, done) => {
    try {
        done(null, user.id_usuario);
    } catch (err) {
        console.log('Error en serializeUser:', err.stack);
        done(err, null);
    }
});

//DeserializeUser
passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.usuario.findUnique({
            where: { id_usuario: id }
        });
        if (!user) {
            return done(new Error('Usuario no encontrado'), null);
        }
        //Remover el campo de contraseña antes de pasar el usuario a la sesión
        const { password: _, ...userWithoutPassword } = user;
        done(null, userWithoutPassword);
    } catch (err) {
        console.log('Error en deserializeUser:', err.stack);
        done(err, null);
    }
});

passport.use(
    "local.signup",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            try {
                const { nombre, apellido, telefono, tipo_usuario } = req.body;

                const existingUser = await prisma.usuario.findUnique({
                    where: { email }
                });

                if (existingUser) {
                    return done(null, false, { message: 'El correo electrónico ya está en uso' });
                }



                const newUser = await prisma.usuario.create({
                    data: {
                        nombre,
                        apellido,
                        email,
                        password: await helpers.encryptPassword(password),
                        telefono,
                        tipo_usuario
                    },
                    include: {
                        administrador: true,
                        tecnico: true
                    }
                });

                //Remover el campo de contraseña antes de pasar el usuario a la sesión
                const { password: _, ...userWithoutPassword } = newUser;
                return done(null, userWithoutPassword);
            } catch (err) {
                console.log('Error en LocalStrategy (signup):', err.stack);
                return done(err, false, { message: 'Error en el servidor' });
            }
        }
    )
);



export default passport;