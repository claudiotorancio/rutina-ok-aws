import { mostrarError, mostrarLoader } from "../../config/helpersInterfaz.js";
import { IntervencionService } from "../../services/intervencionService.js";

const intervencionService = new IntervencionService();
const mainContainer = document.getElementById('main-container-content');

export const cargarVistaIntervenciones = async () => {
  mostrarLoader();
  try {
    // Llamada al servicio que consume el endpoint /api/admin/intervenciones
    const respuesta = await intervencionService.getIntervenciones();

    // Extraemos el array de intervenciones del JSON recibido
    const intervenciones = respuesta.intervenciones || [];

    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-tools text-accent me-2"></i>Intervenciones Técnicas Realizadas</h5>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Orden / Tipo</th>
                  <th>Cliente y Equipo</th>
                  <th>Técnico</th>
                  <th>Detalles / Observaciones</th>
                  <th>Evidencia Fotos</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

    if (!intervenciones || intervenciones.length === 0) {
      html += `<tr><td colspan="7" class="text-center text-muted py-3">No hay intervenciones registradas.</td></tr>`;
    } else {
      intervenciones.forEach(i => {
        const idIntervencion = i.id_intervencion;
        const idOrden = i.id_orden;
        const tipoIntervencion = i.tipo.replace(/_/g, ' '); // Ej: RECARGA_GAS -> RECARGA GAS

        // Extrayendo datos relacionados de forma segura
        const clienteNombre = i.orden?.equipo?.cliente?.nombre_empresa || 'Cliente N/A';
        const equipoNombre = i.orden?.equipo?.nombre_equipo || 'Equipo N/A';

        // Si el modelo de técnico guarda nombre y apellido o solo ID/Matricula
        const tecnicoInfo = i.orden?.tecnico ? `Técnico #${i.orden.tecnico.id_usuario} (${i.orden.tecnico.usuario.nombre} ${i.orden.tecnico.usuario.apellido || ''})` : 'Sin Asignar';

        // Detalles dinámicos desde el JSON
        const observaciones = i.detalles_json?.observaciones || 'Sin observaciones';
        const salaEquipo = i.detalles_json?.sala_equipo ? `<br><small class="text-muted"><i class="bi bi-geo-alt"></i> ${i.detalles_json.sala_equipo}</small>` : '';

        // Fotos de evidencia en S3
        const fotoAntes = i.detalles_json?.fotos_evidencia?.antes_url;
        const fotoDespues = i.detalles_json?.fotos_evidencia?.despues_url;

        let linksFotos = '<span class="text-muted small">Sin fotos</span>';
        if (fotoAntes || fotoDespues) {
          linksFotos = `<div class="d-flex gap-1">`;
          if (fotoAntes) linksFotos += `<a href="${fotoAntes}" target="_blank" class="btn btn-sm btn-outline-secondary py-0 px-1" title="Ver foto Antes"><i class="bi bi-image"></i> Antes</a>`;
          if (fotoDespues) linksFotos += `<a href="${fotoDespues}" target="_blank" class="btn btn-sm btn-outline-secondary py-0 px-1" title="Ver foto Después"><i class="bi bi-image-fill"></i> Después</a>`;
          linksFotos += `</div>`;
        }

        // Fecha formateada
        const fecha = new Date(i.creado_en).toLocaleDateString('es-AR', {
          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        html += `
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${idIntervencion}</td>
            <td>
              <span class="badge bg-secondary mb-1">OT #${idOrden}</span>
              <div class="fw-semibold text-info small">${tipoIntervencion}</div>
            </td>
            <td>
              <div class="fw-semibold">${clienteNombre}</div>
              <small class="text-muted"><i class="bi bi-cpu me-1"></i>${equipoNombre}</small>
            </td>
            <td><small><i class="bi bi-person-badge me-1"></i>${tecnicoInfo}</small></td>
            <td>
              <span>${observaciones}</span>
              ${salaEquipo}
              <div class="text-muted" style="font-size: 0.75rem;"><i class="bi bi-clock"></i> ${fecha}</div>
            </td>
            <td>${linksFotos}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm" title="Ver Detalle Completo" onclick="verDetalleIntervencion(${idIntervencion})">
                <i class="bi bi-eye"></i>
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
  } catch (error) {
    console.error('Error al cargar intervenciones:', error);
    mostrarError('Error al cargar las intervenciones técnicas del servidor.');
  }
};