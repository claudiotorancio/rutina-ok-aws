import {baseUrl} from "./baseUrl.js";

 const getPrueba = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/prueba`);
      const data = await response.json();

       if (!response.ok) {
        // Aquí manejas el mensaje de error que envía el backend
        throw new Error(response.error || "Error en la solicitud.");
      }

      console.log("Respuesta del servidor:", data);
    return data;
  } catch (error) {
    console.error("Error fetching prueba:", error);
    throw error;
  }
 }

export default getPrueba;