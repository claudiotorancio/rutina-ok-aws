import { Router } from "express";
import { resetTecnico } from "../controllers/admin/resetTecnico.controller.js";
import registrarTecnico from "../controllers/admin/registrarTecnico.controllers.js";
import { valdiarAsignarOT, validarCrearCliente, validarCrearEquipo, validarRegistroTecnico, validarResetTecnico } from "../middlewares/validators/admin.validator.js";
import { esAdministrador, estaAuthenticado } from "../middlewares/auth.middleware.js";
import { actualizarTecnico, listarTecnicosDisponibilidad } from "../controllers/admin/listarTecnicosDisp.contrrollers.js";
import asignarOrdenTrabajo from "../controllers/admin/asignarOrden.controllers.js";
import listarOrdenesAdmin from "../controllers/admin/lsitarOrdenes.controllers.js";
import { actualizarCliente, actualizarEquipo, crearCliente, crearEquipo, listarClientes, listarEquipos } from "../controllers/admin/adminInventario.controllers.js";
import { validar } from "../middlewares/validators/common/common.validators.js";


const router = Router();

router.put("/reset-tecnico", validarResetTecnico, resetTecnico);
router.post("/registrar-tecnico", validarRegistroTecnico, registrarTecnico);
router.get("/tecnicos", estaAuthenticado, esAdministrador, listarTecnicosDisponibilidad);
router.put('/tecnicos/:id', estaAuthenticado, esAdministrador, actualizarTecnico);
router.post("/asignar-orden", valdiarAsignarOT, estaAuthenticado, esAdministrador, asignarOrdenTrabajo);
router.get("/listar-ordenes", estaAuthenticado, esAdministrador, listarOrdenesAdmin);
router.get('/clientes', estaAuthenticado, esAdministrador, listarClientes);
router.post('/clientes', validarCrearCliente, estaAuthenticado, esAdministrador, crearCliente);
router.put('/clientes/:id', estaAuthenticado, esAdministrador, actualizarCliente);
router.get('/equipos', estaAuthenticado, esAdministrador, listarEquipos);
router.post('/equipos', validarCrearEquipo, estaAuthenticado, esAdministrador, crearEquipo);
router.put('/equipos/:id', estaAuthenticado, esAdministrador, actualizarEquipo);


export default router;