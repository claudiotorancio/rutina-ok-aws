import getPrueba from "../services/prueba.services.js";

const btn = document.getElementById("fetchPrueba");

btn.addEventListener("click",  (e) => {
    e.preventDefault();
    getPrueba();
    console.log("click en boton fetchPrueba");
  }
)