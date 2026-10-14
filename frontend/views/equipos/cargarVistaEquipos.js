import { mostrarError, mostrarLoader } from "../../config/helpersInterfaz";
import { AdminService } from "../../services/adminService";

const adminService = new AdminService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaEquipos = async () => {
    mostrarLoader();
    try {
        const equipos = await adminService.getEquipos();
        let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-cpu text-accent me-2"></i>Equipos / HVAC e Instalaciones</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Registrar Equipo</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Nombre / Tag</th>
                  <th>Marca / Modelo</th>
                  <th>Nº de Serie</th>
                  <th>Cliente Perteneciente</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

        if (!equipos || equipos.length === 0) {
            html += `<tr><td colspan="5" class="text-center text-muted py-3">No hay equipos registrados.</td></tr>`;
        } else {
            equipos.forEach(eq => {
                const clienteNom = eq.cliente?.nombre_empresa || 'Sin cliente asignado';
                html += `
          <tr class="border-secondary">
            <td class="fw-semibold text-white">${eq.nombre_equipo}</td>
            <td><span class="badge bg-dark border border-secondary text-light">${eq.marca || 'N/A'} ${eq.modelo || ''}</span></td>
            <td class="text-muted font-monospace">${eq.numero_serie || '-'}</td>
            <td><i class="bi bi-building text-secondary me-1"></i>${clienteNom}</td>
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
        console.error('Error al cargar equipos:', error);
        mostrarError('Error al obtener la lista de equipos.');
    }
}