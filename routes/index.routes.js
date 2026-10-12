import { Router } from "express";
import authRoutes from "./auth.routes.js";
import adminRoutes from "./admin.routes.js"
import ordenTrabajoRoutes from "./ordenTrabajo.routes.js"

const router = Router();

// ===== AUTHENTICATION =====
router.use("/auth", authRoutes);

// ===== ADMIN =====
router.use("/admin", adminRoutes);

// ===== ORDENES TRABAJO =====
router.use("/orden", ordenTrabajoRoutes)

export default router;