import { mostrarLoader, mostrarErrorServidor } from "../../config/helpersInterfaz.js";
import { ClienteService } from "../../services/clienteService.js";
import { mostrarModalConfirmacion } from "../mostrarModal.js";
import { cargarVistaCrearCliente } from "./cargarVistaNuevoCliente.js";
import { cargarVistaDetalleCliente } from "./cargarVistaDetalleCliente.js"; // <-- Importamos la nueva vista

const clienteService = new ClienteService()

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaClientes = async () => {
  mostrarLoader();
  try {
    const clientes = await clienteService.getClientes();
    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-building text-accent me-2"></i>Gestión de Clientes</h5>
            <button class="btn btn-accent btn-sm" id="btn-ir-nuevo-cliente"><i class="bi bi-plus-lg me-1"></i>Nuevo Cliente</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Razón Social / Nombre</th>
                  <th>Contacto</th>
                  <th>Teléfono</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

    if (!clientes || clientes.length === 0) {
      html += `<tr><td colspan="4" class="text-center text-muted py-3">No hay clientes registrados.</td></tr>`;
    } else {
      clientes.forEach(c => {
        html += `
          <tr class="border-secondary">
            <td class="fw-semibold">${c.nombre_empresa}</td>
            <td class="text-muted">${c.email || 'Sin correo'}</td>
            <td>${c.telefono || '-'}</td>
            <td class="text-end">
              <!-- Botón Ver Detalle -->
              <button class="btn btn-outline-info btn-sm me-1 btn-ver-detalle" data-id="${c.id_cliente}" title="Ver Detalle">
                <i class="bi bi-eye"></i>
              </button>
              <!-- Botón Toggle Estado -->
              <button class="btn btn-outline-${c.activo ? 'warning' : 'success'} btn-sm me-1 btn-toggle-estado" 
                      data-id="${c.id_cliente}" 
                      title="${c.activo ? 'Pausar Cliente' : 'Activar Cliente'}">
                <i class="bi ${c.activo ? 'bi-pause-fill' : 'bi-play-fill'}"></i>
              </button>
            </td>
          </tr>
        `;
      });
    }

    html += `
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
    mainContainer.innerHTML = html;

    // Ir a formulario de nuevo cliente
    document.getElementById('btn-ir-nuevo-cliente').addEventListener('click', () => {
      cargarVistaCrearCliente();
    });

    // Delegación de eventos para la tabla (Ver detalle y Toggle estado)
    const tablaCuerpo = document.querySelector('tbody');
    tablaCuerpo.addEventListener('click', async (e) => {
      const btnVer = e.target.closest('.btn-ver-detalle');
      const btnToggle = e.target.closest('.btn-toggle-estado');

      // 1. Ver Detalle
      if (btnVer) {
        const idCliente = btnVer.getAttribute('data-id');
        cargarVistaDetalleCliente(idCliente);
        return;
      }

      // 2. Toggle Estado
      if (btnToggle) {
        const idCliente = btnToggle.getAttribute('data-id');

        const confirmacion = await mostrarModalConfirmacion('Confirmación', '¿Desea actualizar el estado del cliente?');
        if (!confirmacion) return;

        try {
          mostrarLoader();
          await clienteService.toggleEstadoCliente(idCliente);
          await cargarVistaClientes();
        } catch (error) {
          console.error('Error al cambiar el estado del cliente:', error);
          mostrarErrorServidor('No se pudo actualizar el estado del cliente.', () => cargarVistaClientes());
        }
      }
    });

  } catch (error) {
    console.error('Error al cargar clientes:', error);
    mostrarErrorServidor('Error al obtener los clientes del sistema.', () => cargarVistaClientes());
  }
};