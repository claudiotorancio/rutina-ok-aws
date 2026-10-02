import baseUrl from "../baseUrl.js";

export const getPrueba = async () => {
  try {
    const response = await fetch(`${baseUrl}/api`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching prueba:", error);
    throw error;
  }
}