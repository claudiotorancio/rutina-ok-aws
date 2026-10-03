//index.js
import app from "../backend/config/app.js";

//Definir el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

//Habilitar la escucha del servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});