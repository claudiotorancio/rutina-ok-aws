import { mostrarLoader, mostrarError, getBadgeEstado, mostrarErrorServidor } from "../../config/helpersInterfaz.js";
import { ClienteService } from "../../services/clienteService.js";
import { cargarVistaClientes } from "./cargarVistaClientes.js";

const clienteService = new ClienteService();
const mainContainer = document.getElementById('main-container-content');

export const cargarVistaDetalleCliente = async (idCliente) => {
    mostrarLoader();
    try {
        // Suponemos que el backend devuelve al cliente incluyendo sus equipos y órdenes de trabajo asociadas
        const cliente = await clienteService.getClienteById(idCliente);

        if (!cliente) {
            mostrarError('El cliente no existe o fue eliminado.');
            cargarVistaClientes();
            return;
        }

        let html = `
            <div class="col-12">
                <div class="custom-card mb-4">
                    <!-- Cabecera con Botón Volver y Estado -->
                    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                        <div>
                            <button class="btn btn-outline-secondary btn-sm me-2" id="btn-volver-clientes">
                                <i class="bi bi-arrow-left me-1"></i>Volver
                            </button>
                            <h5 class="fw-bold m-0 d-inline-block"><i class="bi bi-building text-accent me-2"></i>${cliente.nombre_empresa}</h5>
                        </div>
                        <div>
                            <span class="badge bg-${cliente.activo ? 'success' : 'secondary'}">
                                ${cliente.activo ? 'ACTIVO' : 'INACTIVO'}
                            </span>
                        </div>
                    </div>

                    <!-- Grilla de Información de Contacto -->
                    <div class="row g-3 mb-4">
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-envelope me-1"></i>Correo Electrónico</small>
                                <span class="fw-bold text-break">${cliente.email || 'Sin correo registrado'}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-telephone me-1"></i>Teléfono</small>
                                <span class="fw-bold">${cliente.telefono || 'Sin teléfono registrado'}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-geo-alt me-1"></i>Dirección / Ubicación</small>
                                <span class="fw-bold">${cliente.direccion || 'Sin dirección especificada'}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Sección 1: Equipos Instalados Asociados -->
                    <div class="mb-4">
                        <h6 class="text-accent fw-bold mb-3"><i class="bi bi-cpu me-2"></i>Equipos / Activos Asociados</h6>
        `;

        const equipos = cliente.equipos || [];
        if (equipos.length === 0) {
            html += `
                <div class="alert alert-dark border-secondary text-muted text-center py-3 m-0">
                    Este cliente no tiene equipos registrados en el sistema.
                </div>
            `;
        } else {
            html += `
                <div class="table-responsive">
                    <table class="table table-dark table-hover align-middle mb-0">
                        <thead>
                            <tr class="text-muted border-secondary">
                                <th>Nombre / Tag</th>
                                <th>Marca / Modelo</th>
                                <th>Nº de Serie</th>
                                <th>Ubicación Interna</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            equipos.forEach(eq => {
                html += `
                    <tr class="border-secondary">
                        <td class="fw-semibold text-white">${eq.nombre_equipo}</td>
                        <td><span class="badge bg-dark border border-secondary text-light">${eq.marca || 'N/A'} ${eq.modelo || ''}</span></td>
                        <td class="text-muted font-monospace">${eq.numero_serie || '-'}</td>
                        <td class="text-muted">${eq.ubicacion_interna || 'S/D'}</td>
                    </tr>
                `;
            });
            html += `
                        </tbody>
                    </table>
                </div>
            `;
        }

        html += `
                    </div>

                    <!-- Sección 2: Órdenes de Trabajo del Cliente -->
                    <div>
                        <h6 class="text-accent fw-bold mb-3"><i class="bi bi-clipboard-check me-2"></i>Historial de Órdenes de Trabajo</h6>
        `;

        const ordenes = cliente.ordenesTrabajo || cliente.ordenes || [];
        if (ordenes.length === 0) {
            html += `
                <div class="alert alert-dark border-secondary text-muted text-center py-3 m-0">
                    No hay órdenes de trabajo registradas para este cliente.
                </div>
            `;
        } else {
            html += `
                <div class="table-responsive">
                    <table class="table table-dark table-hover align-middle mb-0">
                        <thead>
                            <tr class="text-muted border-secondary">
                                <th># ID</th>
                                <th>Tipificación</th>
                                <th>Prioridad</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            ordenes.forEach(ot => {
                html += `
                    <tr class="border-secondary">
                        <td class="fw-bold text-accent">#${ot.id_orden}</td>
                        <td class="text-capitalize">${ot.tipificacion ? ot.tipificacion.replace(/_/g, ' ').toLowerCase() : 'N/A'}</td>
                        <td><span class="badge bg-secondary">${ot.prioridad || 'NORMAL'}</span></td>
                        <td>${getBadgeEstado(ot.estado)}</td>
                    </tr>
                `;
            });
            html += `
                        </tbody>
                    </table>
                </div>
            `;
        }

        html += `
                    </div>
                </div>
            </div>
        `;

        mainContainer.innerHTML = html;

        // Botón Volver
        document.getElementById('btn-volver-clientes').addEventListener('click', () => {
            cargarVistaClientes();
        });

    } catch (error) {
        console.error('Error al cargar detalle del cliente:', error);
        mostrarErrorServidor('No se pudo obtener el detalle del cliente.', () => cargarVistaClientes());
    }
};