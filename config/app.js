import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import mainRoutes from "../routes/index.routes.js";
import passport from "./lib/passport.js";
import sessionMiddleware from "../middlewares/sessionMiddleware.js";

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

//Ruta ppal hacia servidor
app.use("/api", mainRoutes);


export default app;
