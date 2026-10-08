import { Router } from "express";
import { resetTecnico } from "../controllers/admin/resetTecnico.controller.js";
import registrarTecnico from "../controllers/admin/registrarTecnico.controllers.js";


const router = Router();

router.put("/reset-tecnico", resetTecnico)
router.post("/registrar-tecnico", registrarTecnico)



export default router;