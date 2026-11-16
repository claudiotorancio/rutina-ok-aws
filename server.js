import app from "./config/app";


//Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

//Habilitar la escucha del servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
});