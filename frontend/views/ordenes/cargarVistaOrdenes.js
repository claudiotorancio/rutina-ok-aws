import { mostrarError, mostrarLoader, getBadgeEstado } from "../../config/helpersInterfaz.js";
import { AdminService } from "../../services/adminService.js";

const adminService = new AdminService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaOrdenes = async () => {
    mostrarLoader();
    try {
        // Si tu servicio tiene el método getOrdenesTrabajo() o getOrdenes()
        const ordenes = await adminService.getOrdenes()

        let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-clipboard-check text-accent me-2"></i>Órdenes de Trabajo</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nueva Orden</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Cliente</th>
                  <th>Equipo / Ubicación</th>
                  <th>Técnico Asignado</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

        if (!ordenes || ordenes.length === 0) {
            html += `<tr><td colspan="6" class="text-center text-muted py-3">No hay órdenes de trabajo registradas.</td></tr>`;
        } else {
            ordenes.forEach(o => {
                const clienteNom = o.equipo.cliente?.nombre_empresa || o.clienteNombre || 'N/A';
                const equipoNom = o.equipo?.nombre_equipo || o.equipoNombre || 'General';
                const tecnicoNom = o.tecnico ? `${o.tecnico.usuario.nombre} ${o.tecnico.usuario.apellido || ''}` : 'Sin Asignar';

                html += `
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${o.id_orden}</td>
            <td>${clienteNom}</td>
            <td class="text-muted"><i class="bi bi-cpu me-1"></i>${equipoNom}</td>
            <td><i class="bi bi-person me-1"></i>${tecnicoNom}</td>
            <td>${getBadgeEstado(o.estado)}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1" title="Ver Detalle"><i class="bi bi-eye"></i></button>
              <button class="btn btn-outline-warning btn-sm" title="Editar"><i class="bi bi-pencil"></i></button>
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
        console.error('Error al cargar órdenes de trabajo:', error);
        mostrarError('Error al cargar las órdenes de trabajo del servidor.');
    }
}