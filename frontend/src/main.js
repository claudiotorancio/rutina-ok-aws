import { AdminService } from '../services/adminService.js';
import { AuthService } from '../services/authService.js';

import "./assets/css/admin.css";


// Instanciamos el servicio del Administrador
const adminService = new AdminService();
const authService = new AuthService();


//Verificar session
const mainContainer = document.getElementById('main-container-content');
const navLinks = document.querySelectorAll('.sidebar .nav-link');



// Configurar el botón de Cerrar Sesión
function inicializarLogout() {
  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', async (e) => {
      e.preventDefault();

      // Opcional: feedback visual de carga en el botón
      btnLogout.disabled = true;
      btnLogout.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Saliendo...`;

      try {
        await authService.logout(); // Destruye la sesión en Express
      } catch (error) {
        console.error('Error al notificar logout al servidor:', error);
      } finally {
        // Independientemente de si el backend respondió o no, limpiamos y redirigimos
        window.location.href = '/index.html';
      }
    });
  }
}



// Helpers de interfaz
function mostrarLoader() {
  mainContainer.innerHTML = `
    <div class="col-12 text-center py-5">
      <div class="spinner-border text-info" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2 text-muted">Cargando datos desde el servidor...</p>
    </div>
  `;
}

function mostrarError(mensaje) {
  mainContainer.innerHTML = `
    <div class="col-12">
      <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
        <i class="bi bi-exclamation-triangle-fill fs-4"></i>
        <div>${mensaje}</div>
      </div>
    </div>
  `;
}

// Helper para insignias de estado en Órdenes de Trabajo
function getBadgeEstado(estado) {
  const est = (estado || '').toLowerCase();
  if (est.includes('pendiente')) return `<span class="badge bg-danger">Pendiente</span>`;
  if (est.includes('proceso') || est.includes('curso')) return `<span class="badge bg-warning text-dark">En Proceso</span>`;
  if (est.includes('completad') || est.includes('finaliz')) return `<span class="badge bg-success">Completada</span>`;
  return `<span class="badge bg-secondary">${estado || 'Sin estado'}</span>`;
}

// ==========================================
// VISTAS Y COMPONENTES
// ==========================================

// 1. Vista de Técnicos
async function cargarVistaTecnicos() {
  mostrarLoader();
  try {
    const tecnicos = await adminService.getTecnicos();
    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-person-badge text-accent me-2"></i>Gestión de Técnicos</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Técnico</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

    if (!tecnicos || tecnicos.length === 0) {
      html += `<tr><td colspan="4" class="text-center text-muted py-3">No hay técnicos registrados.</td></tr>`;
    } else {
      tecnicos.forEach(t => {
        html += `
          <tr class="border-secondary">
            <td class="fw-semibold">${t.nombre} ${t.apellido || ''}</td>
            <td><span class="badge bg-dark border border-secondary text-info">${t.especialidad || 'HVAC / Electromecánica'}</span></td>
            <td>
              <span class="badge ${t.activo !== false ? 'bg-success' : 'bg-secondary'}">
                ${t.activo !== false ? 'Activo' : 'Inactivo'}
              </span>
            </td>
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
    console.error('Error al cargar técnicos:', error);
    mostrarError('Error al cargar la lista de técnicos. Verifique sesión de admin.');
  }
}

// 2. Vista de Clientes
async function cargarVistaClientes() {
  mostrarLoader();
  try {
    const clientes = await adminService.getClientes();
    let html = `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-building text-accent me-2"></i>Gestión de Clientes</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Cliente</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Razón Social / Nombre</th>
                  <th>Contacto</th>
                  <th>Teléfono</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;

    if (!clientes || clientes.length === 0) {
      html += `<tr><td colspan="4" class="text-center text-muted py-3">No hay clientes registrados.</td></tr>`;
    } else {
      clientes.forEach(c => {
        html += `
          <tr class="border-secondary">
            <td class="fw-semibold">${c.nombre_empresa}</td>
            <td class="text-muted">${c.email || 'Sin correo'}</td>
            <td>${c.telefono || '-'}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
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
    console.error('Error al cargar clientes:', error);
    mostrarError('Error al obtener los clientes del sistema.');
  }
}

// 3. Vista de Órdenes de Trabajo
async function cargarVistaOrdenes() {
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

// 4. Vista de Equipos / HVAC
async function cargarVistaEquipos() {
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

// 5. Vista de Configuración del Sistema
function cargarVistaConfiguracion() {
  mainContainer.innerHTML = `
    <div class="col-12">
      <div class="custom-card">
        <h5 class="fw-bold mb-4"><i class="bi bi-gear text-accent me-2"></i>Configuración de RutinaOk CMMS</h5>
        
        <form id="form-configuracion" onsubmit="event.preventDefault(); alert('Ajustes guardados');">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label text-muted">Nombre de la Organización</label>
              <input type="text" class="form-control bg-dark border-secondary text-white" value="RutinaOk Mantenimiento">
            </div>
            <div class="col-md-6">
              <label class="form-label text-muted">Email de Notificaciones</label>
              <input type="email" class="form-control bg-dark border-secondary text-white" value="admin@rutinaok.com">
            </div>
            <div class="col-md-12">
              <label class="form-label text-muted">Modo de Operación</label>
              <select class="form-select bg-dark border-secondary text-white">
                <option value="activo" selected>Producción / Mantenimiento HVAC Activo</option>
                <option value="mantenimiento">Modo Solo Lectura</option>
              </select>
            </div>
          </div>

          <hr class="border-secondary my-4">

          <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-secondary">Cancelar</button>
            <button type="submit" class="btn btn-accent"><i class="bi bi-check-lg me-1"></i>Guardar Ajustes</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

// ==========================================
// CONTROLADOR DE NAVEGACIÓN
// ==========================================
function inicializarNavegacion() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Cambiar estado visual del link seleccionado
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const tab = link.getAttribute('data-tab');

      switch (tab) {
        case 'ordenes':
          cargarVistaOrdenes();
          break;
        case 'tecnicos':
          cargarVistaTecnicos();
          break;
        case 'clientes':
          cargarVistaClientes();
          break;
        case 'equipos':
          cargarVistaEquipos();
          break;
        case 'configuracion':
          cargarVistaConfiguracion();
          break;
        default:
          cargarVistaOrdenes();
          break;
      }
    });
  });
};

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {

  inicializarLogout();
  inicializarNavegacion();
});