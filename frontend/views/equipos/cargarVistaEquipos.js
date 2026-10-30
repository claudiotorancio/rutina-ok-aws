import { mostrarError, mostrarLoader } from "../../config/helpersInterfaz.js";
import { EquipoService } from "../../services/equipoService.js";
import { ClienteService } from "../../services/clienteService.js"; // <-- Importamos para traer los clientes del filtro
import { mostrarModalConfirmacion } from "../mostrarModal.js";
import { cargarVistaAnadirEquipo } from "./cargarVistaAnadirEquipo.js";

const equipoService = new EquipoService();
const clienteService = new ClienteService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaEquipos = async () => {
  mostrarLoader();
  try {
    // Consultamos equipos y clientes en paralelo
    const [equipos, clientesRes] = await Promise.all([
      equipoService.getEquipos(),
      clienteService.getClientes()
    ]);

    const clientes = clientesRes?.clientes || clientesRes || [];

    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h5 class="fw-bold m-0"><i class="bi bi-cpu text-accent me-2"></i>Equipos / HVAC e Instalaciones</h5>
            
            <div class="d-flex align-items-center gap-2">
              <!-- Select de Filtrado por Cliente -->
              <select class="form-select form-select-sm bg-dark text-light border-secondary" id="filtro-cliente" style="width: 220px;">
                <option value="todos">Todos los Clientes</option>
    `;

    clientes.forEach(cli => {
      html += `<option value="${cli.id_cliente}">${cli.nombre_empresa}</option>`;
    });

    html += `
              </select>

              <button class="btn btn-accent btn-sm" id="btn-registrar-equipo">
                <i class="bi bi-plus-lg me-1"></i>Registrar Equipo
              </button>
            </div>
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
              <tbody id="tabla-equipos-body">
    `;

    if (!equipos || equipos.length === 0) {
      html += `<tr><td colspan="5" class="text-center text-muted py-3">No hay equipos registrados.</td></tr>`;
    } else {
      equipos.forEach(eq => {
        const clienteId = eq.id_cliente || eq.cliente?.id_cliente || '';
        const clienteNom = eq.cliente?.nombre_empresa || 'Sin cliente asignado';

        html += `
          <tr class="border-secondary fila-equipo" data-cliente-id="${clienteId}">
            <td class="fw-semibold text-white">${eq.nombre_equipo}</td>
            <td><span class="badge bg-dark border border-secondary text-light">${eq.marca || 'N/A'} ${eq.modelo || ''}</span></td>
            <td class="text-muted font-monospace">${eq.numero_serie || '-'}</td>
            <td><i class="bi bi-building text-secondary me-1"></i>${clienteNom}</td>
            <td class="text-end">
              <button class="btn btn-outline-${eq.activo ? 'warning' : 'success'} btn-sm me-1 btn-toggle-estado" 
                      data-id="${eq.id_equipo}" 
                      title="${eq.activo ? 'Pausar Equipo' : 'Activar Equipo'}">
                <i class="bi ${eq.activo ? 'bi-pause-fill' : 'bi-play-fill'}"></i>
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

    // --- EVENTOS ---

    // 1. Filtrado dinámico por select
    const selectFiltro = document.getElementById('filtro-cliente');
    if (selectFiltro) {
      selectFiltro.addEventListener('change', (e) => {
        const clienteSeleccionado = e.target.value;
        const filas = document.querySelectorAll('.fila-equipo');

        filas.forEach(fila => {
          const clienteIdFila = fila.getAttribute('data-cliente-id');
          if (clienteSeleccionado === 'todos' || clienteIdFila === clienteSeleccionado) {
            fila.style.display = ''; // Mostrar
          } else {
            fila.style.display = 'none'; // Ocultar
          }
        });
      });
    }

    // 2. Botón Registrar Nuevo Equipo
    const btnRegistrarEquipo = document.getElementById('btn-registrar-equipo');
    if (btnRegistrarEquipo) {
      btnRegistrarEquipo.addEventListener('click', () => {
        cargarVistaAnadirEquipo();
      });
    }

    // 3. Botones de Toggle Estado
    const botonesToggleEstado = document.querySelectorAll('.btn-toggle-estado');
    botonesToggleEstado.forEach(btn => {
      btn.addEventListener('click', async () => {
        const idEquipo = btn.getAttribute('data-id');

        const confirmacion = await mostrarModalConfirmacion('Confirmación', '¿Desea actualizar el estado del equipo?');

        if (!confirmacion) return;

        try {
          mostrarLoader();
          await equipoService.toggleEstadoEquipo(idEquipo);
          await cargarVistaEquipos();
        } catch (error) {
          console.error('Error al cambiar el estado del equipo:', error);
          mostrarError('No se pudo actualizar el estado del equipo.');
        }
      });
    });

  } catch (error) {
    console.error('Error al cargar equipos:', error);
    mostrarError('Error al obtener la lista de equipos.', () => cargarVistaEquipos());
  }
};