
import { inicializarLogout } from '../views/registro/logout.js';
import { inicializarNavegacion } from '../config/inicializarNavegacion.js';
//Importar los estilos css
import "./assets/css/admin.css";


// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {

  inicializarLogout();
  inicializarNavegacion();
});