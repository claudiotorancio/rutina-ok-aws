import { Router } from "express";
import authRoutes from "./auth.routes.js";
import adminRoutes from "./admin.routes.js"

const router = Router();

// ===== AUTHENTICATION =====
router.use("/auth", authRoutes);

// ===== ADMIN =====
router.use("/admin", adminRoutes)

export default router;