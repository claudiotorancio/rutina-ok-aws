import { Router } from 'express';
import signup from '../controllers/auth/signup.controllers.js';
import signin from '../controllers/auth/signin.controllers.js';
import logout from '../controllers/auth/logout.controllers.js';
import getProfile from '../controllers/auth/me.controllers.js';
import { estaAuthenticado } from '../middlewares/auth.middleware.js';
import loginMovil from '../controllers/auth/loginMovil.controllers.js';
import resetPassword from '../controllers/auth/resetPassword.controller.js';
import { validarResetPassword, validarSignin } from '../middlewares/validators/auth.validator.js';


const router = Router();

//---- Rutas Web para administrador ----
router.post('/signup', signup);
router.post("/signin", validarSignin, signin);
router.delete("/logout", logout);
router.get("/me", estaAuthenticado, getProfile);

//---- Ruta M{ovil (App Inventor) ----
router.post("/login-movil", validarSignin, loginMovil);
router.put("/reset-password", validarResetPassword, resetPassword)

export default router;