import { Router } from "express";
import crearOrdenTrabajo from "../controllers/mantenimiento/ordenes.controllers.js";
import { validarActualizarOrden, validarOrdenTrabajo } from "../middlewares/validators/ordenTrabajo.validator.js";
import { esAdministrador, estaAuthenticado } from "../middlewares/auth.middleware.js";
import actualizarEstadoOt from "../controllers/mantenimiento/movil/actualizarEstadoOt.controllers.js";
import { validarTokenMovil } from "../middlewares/jwt.middlewares.js";
import obtenerOrdenes from "../controllers/mantenimiento/movil/obtenerOrdenesMovil.controllers.js";
import registrarIntervencion from "../controllers/mantenimiento/movil/intervenciones.controllers.js";
import { uploadSingle } from "../middlewares/uploadS3.js";

const router = Router()


router.post("/crear-orden", validarOrdenTrabajo, estaAuthenticado, esAdministrador, crearOrdenTrabajo);
router.put("/actualizar-estado", validarActualizarOrden, validarTokenMovil, actualizarEstadoOt);
router.get("/obtener-ordenes", validarTokenMovil, obtenerOrdenes);
router.post("/registrar-intervencion", validarTokenMovil, uploadSingle, registrarIntervencion);


export default router;