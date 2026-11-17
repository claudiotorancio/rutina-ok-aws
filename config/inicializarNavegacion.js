import { cargarVistaDashboard } from "../views/dashboard/cargarVistaDashboard.js";
import { cargarVistaConfiguracion } from "../views/ajustes/cargarVistaConfiguracion.js";
import { cargarVistaClientes } from "../views/clientes/cargarVistaClientes.js";
import { cargarVistaEquipos } from "../views/equipos/cargarVistaEquipos.js";
import { cargarVistaOrdenes } from "../views/ordenes/cargarVistaOrdenes.js";
import { cargarVistaTecnicos } from "../views/tecnicos/cargarVistaTecnicos.js";
import { cargarVistaIntervenciones } from "../views/intervenciones/vistaIntervenciones/cargarVistaIntervenciones.js";
// import { IntervencionService } from "../services/intervencionService.js";
import { actualizarNotificacionesIntervenciones } from "../views/dashboard/notificacionIntervenciones.js";

// const intervencionService = new IntervencionService();

const navLinks = document.querySelectorAll('.sidebar .nav-link');

// Función centralizada para cambiar de vista y actualizar el menú lateral
export const navegarA = async (tab) => {
    // 1. Actualizar estado visual del sidebar
    navLinks.forEach(l => l.classList.remove('active'));
    const linkCorrespondiente = document.querySelector(`.sidebar .nav-link[data-tab="${tab}"]`);
    if (linkCorrespondiente) {
        linkCorrespondiente.classList.add('active');
    }

    // 2. Cargar la vista correspondiente
    switch (tab) {
        case 'dashboard':
            await cargarVistaDashboard();
            break;
        case 'ordenes':
            await cargarVistaOrdenes();
            break;
        case 'tecnicos':
            await cargarVistaTecnicos();
            break;
        case 'intervenciones':
            await cargarVistaIntervenciones();
            // await intervencionService.patchIntervencionesVistas();
            //quitar el badge de notificacion
            actualizarNotificacionesIntervenciones(0);
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
            await cargarVistaDashboard();
            break;
    }

    // 3. Ocultar el menú lateral en dispositivos móviles al hacer clic en una opción
    const offcanvasElement = document.getElementById('sidebarMobile');
    if (offcanvasElement) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        // Si el menú está abierto y estamos en una pantalla chica (< 992px), lo cerramos
        if (bsOffcanvas && window.innerWidth < 992) {
            bsOffcanvas.hide();
        }
    }
};

export const inicializarNavegacion = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            await navegarA(tab);
        });
    });

};