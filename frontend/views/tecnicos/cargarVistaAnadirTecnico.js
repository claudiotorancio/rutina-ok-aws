import { TecnicoService } from "../../services/tecnicoService.js";
import { mostrarExito, mostrarError } from "../../config/helpersInterfaz.js";
import { cargarVistaTecnicos } from "./cargarVistaTecnicos.js";
import { mostrarModalConfirmacion } from "../mostrarModal.js";
import { vistaTecnicosHTML } from "./vistaAnadirTecnicosHTML.js";

const tecnicoService = new TecnicoService();
const mainContainer = document.getElementById('main-container-content');

// Vista del formulario para Añadir Nuevo Técnico
export const cargarVistaAnadirTecnico = () => {
    try {


        mainContainer.innerHTML = vistaTecnicosHTML();

        // Inicializamos los eventos de los botones y el submit del formulario
        inicializarEventosFormulario();

    } catch (error) {
        console.error('Error al cargar la vista de añadir técnico:', error);
        mostrarError('No se pudo cargar el formulario.');
    }
};

// Lógica de los eventos del formulario
const inicializarEventosFormulario = () => {
    const form = document.getElementById('form-anadir-tecnico');
    const btnVolver = document.getElementById('btn-volver');
    const btnCancelar = document.getElementById('btn-cancelar');

    // Botones para volver a la tabla de órdenes
    const volverAlListado = async () => {
        // Acá llamás a tu función que renderiza de nuevo la tabla de órdenes
        await cargarVistaTecnicos();
    };

    if (btnVolver) btnVolver.addEventListener('click', volverAlListado);
    if (btnCancelar) btnCancelar.addEventListener('click', volverAlListado);

    // Manejo del envío de datos
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nuevoTecnico = {
            nombre: document.getElementById('nombreTecnico').value.trim(),
            apellido: document.getElementById('apellidoTecnico').value.trim(),
            especialidad: document.getElementById('especialidadTecnico').value.trim(),
            telefono: document.getElementById('telefonoTecnico').value.trim(),
            email: document.getElementById('emailTecnico').value.trim(),
            password: document.getElementById('passwordTecnico').value.trim()
        };

        try {
            // Llamada directa para registrar 
            await tecnicoService.registrarTecnico(nuevoTecnico);
            mostrarExito('Técnico registrado con éxito.');
            volverAlListado();

        } catch (error) {
            console.error('Error al registrar técnico:', error);
            mostrarError(error.message || 'Error al registrar el técnico.');
        }
    });
};