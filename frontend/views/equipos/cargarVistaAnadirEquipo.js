import { mostrarError, mostrarErrorServidor, mostrarExito, mostrarLoader } from "../../config/helpersInterfaz.js";
import { EquipoService } from "../../services/equipoService.js";
import { ClienteService } from "../../services/clienteService.js";
import { cargarVistaEquipos } from "./cargarVistaEquipos.js";

const equipoService = new EquipoService();
const clienteService = new ClienteService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaAnadirEquipo = async () => {
  mostrarLoader();
  try {
    // Obtenemos los clientes para llenar el selector del formulario
    const clientesRes = await clienteService.getClientes();
    const clientes = clientesRes?.clientes || clientesRes || [];

    let html = `
      <div class="col-12 col-lg-8 mx-auto">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="fw-bold m-0"><i class="bi bi-cpu text-accent me-2"></i>Registrar Nuevo Equipo / Activo</h5>
            <button class="btn btn-outline-secondary btn-sm" id="btn-volver-equipos">
              <i class="bi bi-arrow-left me-1"></i>Volver
            </button>
          </div>

          <form id="form-crear-equipo" class="needs-validation" novalidate>
            
            <!-- Fila: Cliente Perteneciente (Obligatorio) -->
            <div class="mb-3">
              <label for="id_cliente" class="form-label text-muted small fw-semibold">Cliente Propietario *</label>
              <select class="form-select bg-dark text-light border-secondary" id="id_cliente" required>
                <option value="" selected disabled>Seleccione un cliente...</option>
    `;

    clientes.forEach(cli => {
      html += `<option value="${cli.id_cliente}">${cli.nombre_empresa} (${cli.direccion || 'S/C'})</option>`;
    });

    html += `
              </select>
              <div class="invalid-feedback">Debe seleccionar un cliente propietario.</div>
            </div>

            <!-- Fila: Nombre / Tag y Marca -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="nombre_equipo" class="form-label text-muted small fw-semibold">Nombre / Tag del Equipo *</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="nombre_equipo" placeholder="Ej: Aire Central Planta Alta / Chiller 01" required>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="marca" class="form-label text-muted small fw-semibold">Marca</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="marca" placeholder="Ej: Carrier, York, Trane">
              </div>
            </div>

            <!-- Fila: Modelo y Nº de Serie -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="modelo" class="form-label text-muted small fw-semibold">Modelo</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="modelo" placeholder="Ej: 30RB-200">
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="numero_serie" class="form-label text-muted small fw-semibold">Número de Serie</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="numero_serie" placeholder="Ej: SN-998234-A">
              </div>
            </div>

            <!-- Fila: Ubicación Interna y Tipo de Refrigerante -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="ubicacion_interna" class="form-label text-muted small fw-semibold">Ubicación Interna</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="ubicacion_interna" placeholder="Ej: Sala de Máquinas / Techo Sector B">
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="tipo_refrigerante" class="form-label text-muted small fw-semibold">Tipo de Refrigerante</label>
                <input type="text" class="form-control bg-dark text-light border-secondary" id="tipo_refrigerante" placeholder="Ej: R-410A, R-22, R-134a">
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="d-flex justify-content-end gap-2 mt-4">
              <button type="button" class="btn btn-outline-secondary" id="btn-cancelar">Cancelar</button>
              <button type="submit" class="btn btn-accent px-4"><i class="bi bi-check-lg me-1"></i>Guardar Equipo</button>
            </div>

          </form>
        </div>
      </div>
    `;

    mainContainer.innerHTML = html;

    // Configurar manejadores de eventos posteriores al render
    configurarEventosFormularioEquipo();

  } catch (error) {
    console.error('Error al cargar la vista de añadir equipo:', error);
    mostrarErrorServoidor('No se pudieron cargar los datos necesarios para registrar el equipo.', () => cargarVistaEquipos());
  }
};

// Función auxiliar para enlazar eventos de botones y envío de formulario
function configurarEventosFormularioEquipo() {
  const form = document.getElementById('form-crear-equipo');
  const btnVolver = document.getElementById('btn-volver-equipos');
  const btnCancelar = document.getElementById('btn-cancelar');

  const volverAlListado = async () => {
    await cargarVistaEquipos();
  };

  if (btnVolver) btnVolver.addEventListener('click', volverAlListado);
  if (btnCancelar) btnCancelar.addEventListener('click', volverAlListado);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const idCliente = document.getElementById('id_cliente').value;
    const nombreEquipo = document.getElementById('nombre_equipo').value.trim();

    if (!idCliente) {
      mostrarError('Debe seleccionar un cliente propietario.');
      return;
    }
    if (!nombreEquipo) {
      mostrarError('El nombre o tag del equipo es obligatorio.');
      return;
    }

    const nuevoEquipo = {
      id_cliente: parseInt(idCliente),
      nombre_equipo: nombreEquipo,
      marca: document.getElementById('marca').value.trim(),
      modelo: document.getElementById('modelo').value.trim(),
      numero_serie: document.getElementById('numero_serie').value.trim(),
      ubicacion_interna: document.getElementById('ubicacion_interna').value.trim(),
      tipo_refrigerante: document.getElementById('tipo_refrigerante').value.trim()
    };

    try {
      await equipoService.crearEquipo(nuevoEquipo);
      mostrarExito('Equipo registrado con éxito.');
      await volverAlListado();
    } catch (error) {
      console.error('Error al registrar equipo:', error);
      mostrarErrorServidor(error.message || 'Error al guardar el equipo en el servidor.', () => cargarVistaEquipos());
    }
  });
}