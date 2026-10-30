import { mostrarError, mostrarExito, mostrarLoader } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { ClienteService } from "../../services/clienteService.js"; // <-- Cambiado de equipoService a clienteService
import { TecnicoService } from "../../services/tecnicoService.js";
import { cargarVistaOrdenes } from './cargarVistaOrdenes.js';

const ordenService = new OrdenService();
const clienteService = new ClienteService(); // <-- Instanciamos clienteService
const tecnicoService = new TecnicoService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaAnadirOrden = async () => {
  mostrarLoader();
  try {
    // Obtenemos en paralelo los clientes y técnicos para poblar los selectores
    const [clientesRes, tecnicosRes] = await Promise.all([
      clienteService.getClientes(),
      tecnicoService.getTecnicos()
    ]);

    const clientes = clientesRes?.clientes || clientesRes || [];
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
                <label for="tipificacion" class="form-label text-muted small fw-semibold">Tipificación</label>
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
                  <option value="ALTA">Alta</option>
                </select>
              </div>
            </div>

            <!-- Fila: Cliente Principal y Técnico Asignado -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="id_cliente" class="form-label text-muted small fw-semibold">Cliente *</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_cliente" required>
                  <option value="" selected disabled>Seleccione un cliente...</option>
    `;

    clientes.forEach(cli => {
      html += `<option value="${cli.id_cliente}">${cli.nombre_empresa} (${cli.direccion || 'S/C'})</option>`;
    });

    html += `
                </select>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="id_tecnico" class="form-label text-muted small fw-semibold">Técnico Responsable *</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_tecnico" required>
                  <option value="" selected disabled>Seleccione un técnico...</option>
    `;

    tecnicos.forEach(tec => {
      const nombreTec = tec.nombre ? `${tec.nombre} ${tec.apellido || ''}` : `Técnico #${tec.id_usuario}`;
      html += `<option value="${tec.id_usuario}">${nombreTec} (${tec.especialidad || 'General'})</option>`;
    });

    html += `
                </select>
              </div>
            </div>

            <!-- Fila Opcional: Equipo / Activo (Ya no es obligatorio) -->
            <div class="mb-3">
              <label for="id_equipo" class="form-label text-muted small fw-semibold">Equipo / Activo Asociado (Opcional)</label>
              <select class="form-select bg-dark text-light border-secondary" id="id_equipo">
                <option value="" selected>Sin equipo específico (Trabajo general)</option>
              </select>
              <div class="form-text text-muted small">Al seleccionar un cliente, aquí se cargarán sus equipos asociados si los tuviera.</div>
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

    // Configurar eventos adicionales (como el cambio de cliente para filtrar equipos si lo deseas)
    configurarEventosFormularioOrden(clientes);

  } catch (error) {
    console.error('Error al cargar la vista de añadir orden:', error);
    mostrarError('No se pudieron cargar los datos necesarios para crear la orden.');
  }
};

// Función auxiliar para manejar el submit y los eventos
function configurarEventosFormularioOrden(clientes) {
  const form = document.getElementById('form-crear-orden');
  const btnVolver = document.getElementById('btn-volver-ordenes');
  const btnCancelar = document.getElementById('btn-cancelar');
  const selectCliente = document.getElementById('id_cliente');
  const selectEquipo = document.getElementById('id_equipo');

  // Dinámica opcional: cuando cambia el cliente, cargamos sus equipos en el select de equipos
  selectCliente.addEventListener('change', (e) => {
    const clienteId = parseInt(e.target.value);
    const clienteSeleccionado = clientes.find(c => c.id_cliente === clienteId);

    selectEquipo.innerHTML = '<option value="" selected>Sin equipo específico (Trabajo general)</option>';

    if (clienteSeleccionado && clienteSeleccionado.equipos && clienteSeleccionado.equipos.length > 0) {
      clienteSeleccionado.equipos.forEach(eq => {
        selectEquipo.innerHTML += `<option value="${eq.id_equipo}">${eq.nombre_equipo} (S/N: ${eq.numero_serie || 'N/D'})</option>`;
      });
    }
  });

  const volverAlListado = async () => {
    await cargarVistaOrdenes();
  };

  if (btnVolver) btnVolver.addEventListener('click', volverAlListado);
  if (btnCancelar) btnCancelar.addEventListener('click', volverAlListado);

  // Envío del formulario
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const idCliente = document.getElementById('id_cliente').value;
    const idTecnico = document.getElementById('id_tecnico').value;
    const fechaProgramada = document.getElementById('fecha_programada').value;

    if (!idCliente) {
      mostrarError('Por favor, seleccione un cliente.');
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

    const equipoVal = document.getElementById('id_equipo').value;

    const nuevaOrden = {
      tipificacion: document.getElementById('tipificacion').value,
      prioridad: document.getElementById('prioridad').value,
      id_cliente: parseInt(idCliente),                                // <-- ¡Obligatorio!
      id_equipo: equipoVal ? parseInt(equipoVal) : null,              // <-- Opcional (null si no eligió)
      id_tecnico: parseInt(idTecnico),
      fecha_programada: document.getElementById('fecha_programada').value,
      descripcion_tarea: document.getElementById('descripcion_tarea').value,
    };

    console.log('Orden a enviar: ', nuevaOrden);

    try {
      await ordenService.asignarOrden(nuevaOrden);
      mostrarExito('Orden de trabajo creada con éxito.');
      volverAlListado();
    } catch (error) {
      console.error('Error al crear orden:', error);
      mostrarError(error.message || 'Error al registrar la orden de trabajo.');
    }
  });
}