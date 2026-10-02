import { Router } from "express";
import { prueba } from "../controllers/pruebaControllers.js";

const router = Router();

router.get("/api/prueba", prueba);

export default router;