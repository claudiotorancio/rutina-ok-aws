import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import mainRoutes from "../routes/index.routes.js";
import passport from "./lib/passport.js";
import sessionMiddleware from "../middlewares/sessionMiddleware.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { esAdministrador, estaAuthenticado } from "../middlewares/auth.middleware.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

// 3. Ruta Raíz Protegida
app.get('/', estaAuthenticado, esAdministrador, (req, res) => {
    // Si pasa el middleware, Express le entrega el index.html del panel administrativo
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// La ruta del login es pública
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/login.html'));
});


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

//Ruta ppal hacia servidor
app.use("/api", mainRoutes);





export default app;
