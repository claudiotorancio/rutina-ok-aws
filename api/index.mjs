//index.js
import app from "../backend/config/app.js";

//Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT;

//Habilitar la escucha del servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto:  ${PORT}`);
});