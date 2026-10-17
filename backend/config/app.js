import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import mainRoutes from "../routes/index.routes.js";
import passport from "./lib/passport.js";
import sessionMiddleware from "../middlewares/sessionMiddleware.js";
import path from "path"
import { fileURLToPath } from "url";
import { verificarAdmin } from "../middlewares/auth.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("trust proxy", 1); //confianza en el proxyd e primer nivel

//Middlewares de base

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(morgan("dev"))
app.use(cookieParser());

//Inicio y mantenimiento de session
app.use(sessionMiddleware)
app.use(passport.initialize());
app.use(passport.session());

// verificación antes de express.static paa sacar del panel
app.get("/panel.html", verificarAdmin);

//entrar como admin
app.get("/panel-admin", verificarAdmin, (req, res) => {
    // console.log("pase por app.js (panel-admin)")
    //Evitar qeu el navegador guarde esta ruta protegida
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    return res.sendFile(path.join(__dirname, "../../frontend/dist/panel.html"));
});


//Servir los archivos estaticos
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

//Ruta ppal hacia servidor
app.use("/api", mainRoutes);

app.get("/*catchall", (req, res) => {
    // console.log("pase por app.js (/catcall)")
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});


export default app;
