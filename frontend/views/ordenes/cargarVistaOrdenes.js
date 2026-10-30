import { mostrarError, mostrarLoader, getBadgeEstado, mostrarExito } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { mostrarModalConfirmacion } from "../mostrarModal.js";
import { cargarVistaAnadirOrden } from "./cargarVistaAnadirOrden.js";
import { cargarVistaDetalleOrden } from "./cargarVistaDetalleOrden.js";

const ordenService = new OrdenService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaOrdenes = async () => {
  mostrarLoader();
  try {
    const ordenes = await ordenService.getOrdenes();

    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-clipboard-check text-accent me-2"></i>Órdenes de Trabajo</h5>
            <button class="btn btn-accent btn-sm" id="btn-nueva-orden"><i class="bi bi-plus-lg me-1"></i>Nueva Orden</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Cliente</th>
                  <th>Ubicación / Activo</th>
                  <th>Técnico Asignado</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody id="tabla-ordenes-body">
    `;

    if (!ordenes || ordenes.length === 0) {
      html += `<tr><td colspan="6" class="text-center text-muted py-3">No hay órdenes de trabajo registradas.</td></tr>`;
    } else {
      ordenes.forEach(o => {
        // Datos del cliente directos desde o.cliente
        const clienteNom = o.cliente?.nombre_empresa || 'N/A';
        const direccionCliente = o.cliente?.direccion || 'S/C';

        // Si tiene equipo asociado lo mostramos, sino indicamos que es general
        const infoEquipo = o.equipo ? `<i class="bi bi-cpu me-1"></i>${o.equipo.nombre_equipo}` : `<span class="text-muted fst-italic">Trabajo General (Sin equipo)</span>`;

        const tecnicoNom = o.tecnico?.usuario ? `${o.tecnico.usuario.nombre} ${o.tecnico.usuario.apellido || ''}` : 'Sin Asignar';

        html += `
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${o.id_orden}</td>
            <td>
              <div class="fw-semibold">${clienteNom}</div>
              <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${direccionCliente}</small>
            </td>
            <td>${infoEquipo}</td>
            <td><i class="bi bi-person me-1"></i>${tecnicoNom}</td>
            <td>${getBadgeEstado(o.estado)}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm mb-1 btn-ver-detalle" title="Ver Detalle" data-id="${o.id_orden}"><i class="bi bi-eye"></i></button>
              <button class="btn btn-outline-danger btn-sm btn-eliminar-orden" title="Eliminar" data-id="${o.id_orden}"><i class="bi bi-trash"></i></button>
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

    const btnNuevaOrden = document.getElementById('btn-nueva-orden');
    if (btnNuevaOrden) {
      btnNuevaOrden.addEventListener('click', () => {
        cargarVistaAnadirOrden();
      });
    }

    const tBodyOrdenes = document.getElementById('tabla-ordenes-body');

    tBodyOrdenes.addEventListener('click', async (e) => {
      const btnEliminar = e.target.closest('.btn-eliminar-orden');
      const btnVerDetalle = e.target.closest('.btn-ver-detalle');

      // Cargar vista detalles
      if (btnVerDetalle) {
        const idOrden = btnVerDetalle.dataset.id;
        cargarVistaDetalleOrden(idOrden);
      }

      // Eliminar orden
      if (btnEliminar) {
        const idOrden = btnEliminar.dataset.id;

        const confirmado = await mostrarModalConfirmacion(
          "Confirmar eliminación",
          `¿Estás seguro de que deseas eliminar la orden #${idOrden}?`
        );

        if (!confirmado) return;

        try {
          await ordenService.eliminarOrden(idOrden);

          const fila = btnEliminar.closest('tr');
          if (fila) fila.remove();

          mostrarExito(`La orden #${idOrden} fue eliminada con éxito.`);

        } catch (error) {
          console.error('Error al eliminar orden de trabajo:', error);
          mostrarError(error.message || 'Error al eliminar la orden de trabajo.');
        }
      }
    });

  } catch (error) {
    console.error('Error al cargar órdenes de trabajo:', error);
    mostrarError('Error al cargar las órdenes de trabajo del servidor.');
  }
};