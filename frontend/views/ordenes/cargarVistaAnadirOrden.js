import { mostrarError, mostrarExito, mostrarLoader } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { ClienteService } from "../../services/clienteService.js"; // <-- Cambiado de equipoService a clienteService
import { TecnicoService } from "../../services/tecnicoService.js";
import { cargarVistaOrdenes } from './cargarVistaOrdenes.js';
import { cabeceraAnadirOrdenHTML, footerAnadirVistaHTML } from "./vistaAnadirOrdenHTML.js";

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

    let html = `${cabeceraAnadirOrdenHTML()}`

    clientes.forEach(cli => {
      html += `<option value="${cli.id_cliente}">${cli.nombre_empresa} (${cli.direccion || 'S/C'})</option>`;
    });

    const todosInactivos = tecnicos.length > 0 && tecnicos.every(tec => !tec.activo);

    html += `
            </select>
          </div>
          <div class="col-md-6 mt-3 mt-md-0">
            <label for="id_tecnico" class="form-label text-muted small fw-semibold">Técnico Responsable *</label>
            <select class="form-select bg-dark text-light border-secondary" id="id_tecnico" ${todosInactivos ? 'disabled' : ''} required>
              <option value="" selected disabled>Seleccione un técnico...</option>
`;

    tecnicos.forEach(tec => {
      const nombreTec = tec.nombre ? `${tec.nombre} ${tec.apellido || ''}` : `Técnico #${tec.id_usuario}`;

      // 2. Evaluamos de forma individual: si el técnico no está activo, añadimos 'disabled' a su opción
      const opcionDeshabilitada = tec.activo ? '' : 'disabled';

      html += `<option value="${tec.id_usuario}" ${opcionDeshabilitada}>${nombreTec} (${tec.especialidad})</option>`;
    });

    html += footerAnadirVistaHTML();

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