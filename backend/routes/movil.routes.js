import { Router } from "express";
import { validarTokenMovil } from "../middlewares/jwt.middlewares.js";
import sincronizarDatosMovil from "../controllers/mantenimiento/movil/sincronizarDatos.controllers.js";

const router = Router()


router.get("/sincronizar", validarTokenMovil, sincronizarDatosMovil);



export default router;