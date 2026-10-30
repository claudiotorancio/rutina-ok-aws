
import { inicializarLogout } from '../views/registro/inicializarLogout.js';
import { inicializarNavegacion } from '../config/inicializarNavegacion.js';
//Importar los estilos css
import "./assets/css/admin.css";
import { cargarVistaDashboard } from '../views/dashboard/cargarVistaDashboard.js';


// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
  inicializarNavegacion();
  inicializarLogout();
  await cargarVistaDashboard();

});