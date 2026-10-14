import { AdminService } from "../../services/adminService.js";
import { mostrarLoader, mostrarError } from "../../config/helpersInterfaz.js";


const adminService = new AdminService();


const mainContainer = document.getElementById('main-container-content');

// Vista de Técnicos
export const cargarVistaTecnicos = async () => {
  mostrarLoader();
  try {
    const tecnicos = await adminService.getTecnicos();
    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-person-badge text-accent me-2"></i>Gestión de Técnicos</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Técnico</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

    if (!tecnicos || tecnicos.length === 0) {
      html += `<tr><td colspan="4" class="text-center text-muted py-3">No hay técnicos registrados.</td></tr>`;
    } else {
      tecnicos.forEach(t => {
        html += `
          <tr class="border-secondary">
            <td class="fw-semibold">${t.nombre} ${t.apellido || ''}</td>
            <td><span class="badge bg-dark border border-secondary text-info">${t.especialidad || 'HVAC / Electromecánica'}</span></td>
            <td>
              <span class="badge ${t.activo !== false ? 'bg-success' : 'bg-secondary'}">
                ${t.activo !== false ? 'Activo' : 'Inactivo'}
              </span>
            </td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
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
    console.error('Error al cargar técnicos:', error);
    mostrarError('Error al cargar la lista de técnicos. Verifique sesión de admin.');
  }
}