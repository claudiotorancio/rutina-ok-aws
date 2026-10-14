import { cargarVistaConfiguracion } from "../views/ajustes/cargarVistaConfiguracion.js";
import { cargarVistaClientes } from "../views/clientes/cargarVistaClientes.js";
import { cargarVistaEquipos } from "../views/equipos/cargarVistaEquipos.js";
import { cargarVistaOrdenes } from "../views/ordenes/cargarVistaOrdenes.js";
import { cargarVistaTecnicos } from "../views/tecnicos/cargarVistaTecnicos.js";
import { cargarVistaIntervenciones } from "../views/intervenciones/cargarVistaIntervenciones.js";


const navLinks = document.querySelectorAll('.sidebar .nav-link');

export const inicializarNavegacion = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();

            // Cambiar estado visual del link seleccionado
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const tab = link.getAttribute('data-tab');

            switch (tab) {
                case 'dashboard':
                    window.location.href = '/panel-admin';;
                    break;
                case 'ordenes':
                    await cargarVistaOrdenes();
                    break;
                case 'tecnicos':
                    await cargarVistaTecnicos();
                    break;
                case 'intervenciones':
                    await cargarVistaIntervenciones();
                    break;
                case 'clientes':
                    await cargarVistaClientes();
                    break;
                case 'equipos':
                    await cargarVistaEquipos();
                    break;
                case 'configuracion':
                    await cargarVistaConfiguracion();
                    break;
                default:
                    await cargarVistaOrdenes();
                    break;
            }
        });
    });
};