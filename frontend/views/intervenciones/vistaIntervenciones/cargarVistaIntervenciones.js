import { mostrarError, mostrarLoader } from "../../../config/helpersInterfaz.js";
import { IntervencionService } from "../../../services/intervencionService.js";
import { cargarVistaDetalleIntervencion } from "../vistaDetallesIntervenciones/cargarVistaDetalleIntervencion.js";
import { vistaIntervencionesHTML } from "./vistaIntervencionesHTML.js";

const intervencionService = new IntervencionService();
const mainContainer = document.getElementById('main-container-content');

export const cargarVistaIntervenciones = async () => {
  mostrarLoader();
  try {
    // Llamada al servicio que consume el endpoint /api/admin/intervenciones
    const respuesta = await intervencionService.getIntervenciones();
    const intervenciones = respuesta.intervenciones || [];

    //Renderizar la vista HTML ppal
    mainContainer.innerHTML = vistaIntervencionesHTML();

    // Función auxiliar para renderizar las filas en la tabla
    const renderizarTabla = (filtroTipo) => {
      const tbody = document.getElementById('tabla-intervenciones-body');

      // Filtrar array según la pestaña seleccionada
      const filtradas = filtroTipo === 'todos'
        ? intervenciones
        : intervenciones.filter(i => i.tipo && i.tipo.toUpperCase() === filtroTipo.toUpperCase());

      // Actualizar contadores en los badges
      actualizarContadores(intervenciones);

      if (!filtradas || filtradas.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-3">No hay intervenciones registradas en esta categoría.</td></tr>`;
        return;
      }

      let filasHtml = '';
      filtradas.forEach(i => {
        const idIntervencion = i.id_intervencion;
        const idOrden = i.id_orden;
        const tipoIntervencion = i.tipo ? i.tipo.replace(/_/g, ' ') : 'OTRO';

        const clienteNombre = i.detalles_json?.cliente_interv || i.orden?.equipo?.cliente?.nombre_empresa || 'Cliente N/A';
        const tecnicoNombre = i.detalles_json?.tecnico_interv || 'Técnico N/A';

        const fecha = i.creado_en ? new Date(i.creado_en).toLocaleDateString('es-AR', {
          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        }) : 'Fecha N/A';

        filasHtml += `
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${idIntervencion}</td>
            <td>
              <span class="badge bg-secondary mb-1">OT #${idOrden}</span>
              <div class="fw-semibold text-info small">${tipoIntervencion}</div>
            </td>
            <td>
              <div class="fw-semibold">${clienteNombre}</div>
            </td>
            <td><small><i class="bi bi-person-badge me-1"></i>${tecnicoNombre}</small></td>
            <td>
              <div class="text-muted small"><i class="bi bi-clock me-1"></i>${fecha}</div>
            </td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm btn-ver-detalle" data-id="${idIntervencion}" title="Ver Detalle Completo">
                <i class="bi bi-eye"></i>
              </button>
            </td>
          </tr>
        `;
      });

      tbody.innerHTML = filasHtml;

      document.querySelectorAll('.btn-ver-detalle').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          cargarVistaDetalleIntervencion(id, () => cargarVistaIntervenciones());
        });
      });
    };

    // Actualizar contadores de las solapas con los 4 tipos del enum
    const actualizarContadores = (lista) => {
      const total = lista.length;
      const preventivo = lista.filter(i => i.tipo && i.tipo.toUpperCase() === 'PREVENTIVO').length;
      const correctivo = lista.filter(i => i.tipo && i.tipo.toUpperCase() === 'CORRECTIVO').length;
      const recargaGas = lista.filter(i => i.tipo && i.tipo.toUpperCase() === 'RECARGA_GAS').length;
      const instalacionElectrica = lista.filter(i => i.tipo && i.tipo.toUpperCase() === 'INSTALACION_ELECTRICA').length;

      document.getElementById('badge-todos').textContent = total;
      document.getElementById('badge-preventivo').textContent = preventivo;
      document.getElementById('badge-correctivo').textContent = correctivo;
      document.getElementById('badge-recarga_gas').textContent = recargaGas;
      document.getElementById('badge-instalacion_electrica').textContent = instalacionElectrica;
    };

    // Renderizado inicial
    renderizarTabla('todos');

    // Configurar eventos de clic en las pestañas
    const tabs = document.querySelectorAll('#intervencionesTabs .nav-link');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active', 'text-light', 'border-bottom', 'border-2', 'border-accent');
          t.classList.add('text-muted');
        });

        tab.classList.add('active', 'text-light', 'border-bottom', 'border-2', 'border-accent');
        tab.classList.remove('text-muted');

        const tipoSeleccionado = tab.getAttribute('data-tipo');
        renderizarTabla(tipoSeleccionado);
      });
    });

  } catch (error) {
    console.error('Error al cargar intervenciones:', error);
    mostrarError('Error al cargar las intervenciones técnicas del servidor.', () => cargarVistaIntervenciones());
  }
};