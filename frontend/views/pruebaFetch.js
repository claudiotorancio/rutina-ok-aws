import getPrueba from "../services/prueba.services.js";

const btn = document.getElementById("fetchPrueba");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  await getPrueba();
  console.log("click en boton fetchPrueba");
}
)