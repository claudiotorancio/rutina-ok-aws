import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import mainRoutes from "../routes/index.routes.js";
import passport from "./lib/passport.js";
import sessionMiddleware from "../middlewares/sessionMiddleware.js";
import path from "path"
import { fileURLToPath } from "url";
import { esAdministrador, estaAuthenticado, verificarAdmin } from "../middlewares/auth.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("trust proxy", 1); //confianza en el proxyd e primer nivel

//Middlewares de base
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(express.json());
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
    return res.sendFile(path.join(__dirname, "../../frontend/dist/panel.html"));
});
//ruta relativ a la pagina ppal /login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

//Servir los archivos estaticos
app.use(express.static(path.join(__dirname, '../../frontend/dist')));


//Ruta ppal hacia servidor
app.use("/api", mainRoutes);




export default app;
