import { mostrarLoader, mostrarError } from "../../config/helpersInterfaz.js";
import { ClienteService } from "../../services/clienteService.js";
import { cargarVistaClientes } from "./cargarVistaClientes.js"; // Para volver al listado
import { vistaNuevoClienteHTML } from "./vistaNuevoClienteHTML.js";

const clienteService = new ClienteService();
const mainContainer = document.getElementById('main-container-content');

export const cargarVistaCrearCliente = async () => {

    mainContainer.innerHTML = vistaNuevoClienteHTML();

    // --- EVENTOS DE LA VISTA ---

    // Botón Volver / Cancelar
    const volverAlListado = () => cargarVistaClientes();
    document.getElementById('btn-volver-clientes').addEventListener('click', volverAlListado);
    document.getElementById('btn-cancelar').addEventListener('click', volverAlListado);

    // Manejo del Submit del formulario
    document.getElementById('form-crear-cliente').addEventListener('submit', async (e) => {
        e.preventDefault();

        // Recolectar datos de los inputs
        const nuevoCliente = {
            nombre_empresa: document.getElementById('nombre_empresa').value.trim(),
            email: document.getElementById('email').value.trim() || null,
            telefono: document.getElementById('telefono').value.trim() || null,
            direccion: document.getElementById('direccion').value.trim() || null,
        };

        try {
            mostrarLoader();

            // Llamada al servicio para crear el cliente en el backend (ej: POST /api/admin/clientes)
            await clienteService.crearCliente(nuevoCliente);

            // Una vez creado con éxito, volvemos a la tabla principal de clientes
            await cargarVistaClientes();

        } catch (error) {
            console.error('Error al crear el cliente:', error);
            mostrarError('No se pudo registrar el nuevo cliente en el servidor.', () => cargarVistaClientes());
        }
    });
};