import express, {urlencoded}  from "express";
import cors from "cors";
import mainRoutes from "../routes/index.routes.js";

const app = express();

app.set("trust proxy", 1); //confianza en el proxyd e primer nivel


//Middlewares de base
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

//Ruta ppal
app.use("/", mainRoutes);

export default app;
