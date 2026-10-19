import { Router } from "express";
import { crearOrdenTrabajo } from "../controllers/ordenes/crearOrden.controllers.js";
import { validarActualizarOrden, validarOrdenTrabajo } from "../middlewares/validators/ordenTrabajo.validator.js";
import { esAdministrador, estaAuthenticado } from "../middlewares/auth.middleware.js";
import actualizarEstadoOt from "../controllers/mantenimiento/movil/actualizarEstadoOt.controllers.js";
import { validarTokenMovil } from "../middlewares/jwt.middlewares.js";
import obtenerOrdenes from "../controllers/mantenimiento/movil/obtenerOrdenesMovil.controllers.js";
import registrarIntervencion from "../controllers/mantenimiento/movil/intervenciones.controllers.js";
import { uploadSingle } from "../middlewares/uploadS3.js";
import { eliminarOrden } from "../controllers/ordenes/eliminarOrden.controllers.js";
import { obtenerOrdenPorId } from "../controllers/ordenes/obtenerOrdenId.controllers.js";
import { reasignarOrdenTrabajo } from "../controllers/ordenes/reasignarOrden.controllers.js";

const router = Router()




router.post("/crear-orden", validarOrdenTrabajo, estaAuthenticado, esAdministrador, crearOrdenTrabajo);
router.put("/actualizar-estado", validarActualizarOrden, validarTokenMovil, actualizarEstadoOt);
router.get("/obtener-ordenes", validarTokenMovil, obtenerOrdenes);
router.post("/registrar-intervencion", (req, res) => {
    console.log("Lo que va en mi req.body", req.body)
}, validarTokenMovil, uploadSingle, registrarIntervencion);
router.delete('/eliminar-orden/:id', estaAuthenticado, esAdministrador, eliminarOrden);
router.get('/obtener-orden/:id', estaAuthenticado, esAdministrador, obtenerOrdenPorId);
router.put('/reasignar-orden/:id', estaAuthenticado, esAdministrador, reasignarOrdenTrabajo);


export default router;