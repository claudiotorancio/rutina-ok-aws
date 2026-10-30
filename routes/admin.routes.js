import { Router } from "express";
import { resetTecnico } from "../controllers/admin/resetTecnico.controller.js";
import { alternarEstadoTecnico, registrarTecnico } from "../controllers/admin/registrarTecnico.controllers.js";
import { valdiarAsignarOT, validarCrearCliente, validarCrearEquipo, validarRegistroTecnico, validarResetTecnico } from "../middlewares/validators/admin.validator.js";
import { esAdministrador, estaAuthenticado } from "../middlewares/auth.middleware.js";
import { actualizarTecnico, listarTecnicosDisponibilidad } from "../controllers/admin/listarTecnicosDisp.contrrollers.js";
import asignarOrdenTrabajo from "../controllers/admin/asignarOrden.controllers.js";
import listarOrdenesAdmin from "../controllers/admin/lsitarOrdenes.controllers.js";
import { actualizarCliente, crearCliente, listarClientes } from "../controllers/admin/clientes.controllers.js";
import { desactivarCliente } from "../controllers/admin/clientes.controllers.js";
import { actualizarEquipo, crearEquipo, desactivarEquipo, listarEquipos } from "../controllers/admin/equipos.controllers.js";
import { obtenerIntervencioById, obtenerIntervenciones } from "../controllers/admin/obtenerIntervenciones.controllers.js";


const router = Router();

//================ TECNICOS =====================
router.put("/reset-tecnico", validarResetTecnico, resetTecnico);
router.post("/registrar-tecnico", validarRegistroTecnico, registrarTecnico);
router.get("/tecnicos", estaAuthenticado, esAdministrador, listarTecnicosDisponibilidad);
router.put('/tecnicos/:id', estaAuthenticado, esAdministrador, actualizarTecnico);
router.patch('/tecnicos/:id/desactivar', estaAuthenticado, esAdministrador, alternarEstadoTecnico);

//================ ORDENES =====================
router.post("/asignar-orden", valdiarAsignarOT, estaAuthenticado, esAdministrador, asignarOrdenTrabajo);
router.get("/listar-ordenes", estaAuthenticado, esAdministrador, listarOrdenesAdmin);

//================ CLIENTES =====================
router.get('/clientes', estaAuthenticado, esAdministrador, listarClientes);
router.post('/clientes', validarCrearCliente, estaAuthenticado, esAdministrador, crearCliente);
router.put('/clientes/:id', estaAuthenticado, esAdministrador, actualizarCliente);
router.patch('/clientes/:id/desactivar', estaAuthenticado, esAdministrador, desactivarCliente);

//================ EQUIPOS =====================
router.get('/equipos', estaAuthenticado, esAdministrador, listarEquipos);
router.post('/equipos', validarCrearEquipo, estaAuthenticado, esAdministrador, crearEquipo);
router.put('/equipos/:id', estaAuthenticado, esAdministrador, actualizarEquipo);
router.patch('/equipos/:id/desactivar', estaAuthenticado, esAdministrador, desactivarEquipo);

//================ INTERVENCIONES =====================
router.get("/intervenciones", estaAuthenticado, esAdministrador, obtenerIntervenciones);
router.get("/obtener-intervencion/:id", estaAuthenticado, esAdministrador, obtenerIntervencioById);

export default router;