import { mostrarError, mostrarExito, mostrarLoader } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { EquipoService } from "../../services/equipoService.js";
import { TecnicoService } from "../../services/tecnicoService.js";
import { cargarVistaOrdenes } from './cargarVistaOrdenes.js';

const ordenService = new OrdenService();
const equipoService = new EquipoService();
const tecnicoService = new TecnicoService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaAnadirOrden = async () => {
  mostrarLoader();
  try {
    // Obtenemos en paralelo los equipos y técnicos para poblar los selectores del formulario
    const [equiposRes, tecnicosRes] = await Promise.all([
      equipoService.getEquipos(),
      tecnicoService.getTecnicos()
    ]);

    const equipos = equiposRes?.equipos || equiposRes || [];
    const tecnicos = tecnicosRes?.tecnicos || tecnicosRes || [];

    let html = `
      <div class="col-12 col-lg-8 mx-auto">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="fw-bold m-0"><i class="bi bi-plus-circle text-accent me-2"></i>Crear Nueva Orden de Trabajo</h5>
            <button class="btn btn-outline-secondary btn-sm" id="btn-volver-ordenes">
              <i class="bi bi-arrow-left me-1"></i>Volver
            </button>
          </div>

          <form id="form-crear-orden" class="needs-validation" novalidate>
            
            <!-- Fila: Tipo de Mantenimiento y Prioridad -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="tipo_mantenimiento" class="form-label text-muted small fw-semibold">Tipificación</label>
                <select class="form-select bg-dark text-light border-secondary" id="tipificacion" required>
                  <option value="" selected disabled>Seleccione el tipo...</option>
                  <option value="AIRE_ACONDICIONADO">Aire Acondicionado</option>
                  <option value="INSTALACION_ELECTRICA">Instalación Eléctrica</option>
                </select>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="prioridad" class="form-label text-muted small fw-semibold">Prioridad</label>
                <select class="form-select bg-dark text-light border-secondary" id="prioridad" required>
                  <option value="" selected disabled>Seleccione prioridad...</option>
                  <option value="BAJA">Baja</option>
                  <option value="MEDIA">Media</option>
                  <option value="ALTA">Alta</option>
                  <option value="URGENTE">Urgente</option>
                </select>
              </div>
            </div>

            <!-- Fila: Equipo y Técnico Asignado -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="id_equipo" class="form-label text-muted small fw-semibold">Equipo / Activo</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_equipo" required>
                  <option value="" selected disabled>Seleccione un equipo...</option>
        `;

    equipos.forEach(eq => {
      html += `<option value="${eq.id_equipo}">${eq.nombre_equipo} (${eq.cliente?.nombre_empresa || 'S/C'})</option>`;
    });

    html += `
                </select>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="id_tecnico" class="form-label text-muted small fw-semibold">Técnico Responsable</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_tecnico" required>
                  <option value="" selected disabled>Seleccione un técnico...</option>
        `;
    console.log(tecnicos.usuario)
    tecnicos.forEach(tec => {
      const nombreTec = tec.nombre ? `${tec.nombre} ${tec.apellido || ''}` : `Técnico #${tec.id_usuario}`;
      html += `<option value="${tec.id_usuario}">${nombreTec} - ${tec.especialidad || 'General'}</option>`;
    });

    html += `
                </select>
              </div>
            </div>

            <!-- Fila: Fecha Programada -->
            <div class="mb-3">
              <label for="fecha_programada" class="form-label text-muted small fw-semibold">Fecha Programada</label>
              <input type="datetime-local" class="form-control bg-dark text-light border-secondary" id="fecha_programada" required>
            </div>

            <!-- Descripción de la tarea -->
            <div class="mb-4">
              <label for="descripcion_tarea" class="form-label text-muted small fw-semibold">Descripción y Detalle de la Tarea</label>
              <textarea class="form-control bg-dark text-light border-secondary" id="descripcion_tarea" rows="4" placeholder="Indique los trabajos específicos a realizar, repuestos necesarios, etc." required></textarea>
            </div>

            <!-- Botones de Acción -->
            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-outline-secondary" id="btn-cancelar">Cancelar</button>
              <button type="submit" class="btn btn-accent px-4"><i class="bi bi-check-lg me-1"></i>Asignar Orden</button>
            </div>

          </form>
        </div>
      </div>
    `;

    mainContainer.innerHTML = html;

    // Configurar los eventos del formulario post-renderizado
    configurarEventosFormularioOrden();

  } catch (error) {
    console.error('Error al cargar la vista de añadir orden:', error);
    mostrarError('No se pudieron cargar los datos necesarios para crear la orden.');
  }
};

// Función auxiliar para manejar el submit y los botones de navegación interna
function configurarEventosFormularioOrden() {
  const form = document.getElementById('form-crear-orden');
  const btnVolver = document.getElementById('btn-volver-ordenes');
  const btnCancelar = document.getElementById('btn-cancelar');

  // Botones para volver a la tabla de órdenes
  const volverAlListado = async () => {
    // Acá llamás a tu función que renderiza de nuevo la tabla de órdenes
    await cargarVistaOrdenes();
  };

  if (btnVolver) btnVolver.addEventListener('click', volverAlListado);
  if (btnCancelar) btnCancelar.addEventListener('click', volverAlListado);

  // Envío del formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const idEquipo = document.getElementById('id_equipo').value;
    const idTecnico = document.getElementById('id_tecnico').value;
    const fechaProgramada = document.getElementById('fecha_programada').value;

    // Validación rápida en cliente para dar feedback inmediato y amigable
    if (!idEquipo) {
      mostrarError('Por favor, seleccione un equipo o activo.');
      return;
    }
    if (!idTecnico) {
      mostrarError('Por favor, asigne un técnico a la orden.');
      return;
    }
    if (!fechaProgramada) {
      mostrarError('Debe indicar la fecha programada.');
      return;
    }

    const nuevaOrden = {
      tipo_mantenimiento: document.getElementById('tipificacion').value,
      prioridad: document.getElementById('prioridad').value,
      id_equipo: parseInt(document.getElementById('id_equipo').value),
      id_tecnico: parseInt(document.getElementById('id_tecnico').value),
      fecha_programada: document.getElementById('fecha_programada').value,
      descripcion_tarea: document.getElementById('descripcion_tarea').value,
    };

    try {
      // Llamada a tu servicio para crear la orden en el backend
      await ordenService.asignarOrden(nuevaOrden);
      mostrarExito('Orden de trabajo creada con éxito.');
      volverAlListado();
    } catch (error) {
      console.error('Error al crear orden:', error);
      mostrarError(error.message || 'Error al registrar la orden de trabajo.');

    }
  });
}