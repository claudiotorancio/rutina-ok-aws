import { mostrarLoader, mostrarError } from "../../config/helpersInterfaz.js";
import { ClienteService } from "../../services/clienteService.js";

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
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Cliente</button>
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
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
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
  } catch (error) {
    console.error('Error al cargar clientes:', error);
    mostrarError('Error al obtener los clientes del sistema.');
  }
}