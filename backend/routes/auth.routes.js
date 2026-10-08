import { Router } from 'express';
import signup from '../controllers/auth/signup.controllers.js';
import signin from '../controllers/auth/signin.controllers.js';
import logout from '../controllers/auth/logout.controllers.js';
import getProfile from '../controllers/auth/me.controllers.js';
import { estaAuthenticado } from '../middlewares/auth.middleware.js';
import loginMovil from '../controllers/auth/loginMovil.controllers.js';
import resetPassword from '../controllers/auth/resetPassword.controller.js';
import { prueba } from '../controllers/pruebaControllers.js';


const router = Router();

//---- Rutas Web para administrador ----
router.post('/signup', signup);
router.post("/signin", signin);
router.delete("/logout", logout);
router.get("/me", estaAuthenticado, getProfile);

//---- Ruta M{ovil (App Inventor) ----
router.post("/login-movil", loginMovil);
router.put("/reset-password", resetPassword)
router.get("/prueba", estaAuthenticado, prueba)

export default router;