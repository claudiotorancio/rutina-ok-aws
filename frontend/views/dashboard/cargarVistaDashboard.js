import { mostrarLoader, mostrarError, getBadgeEstado } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { ClienteService } from "../../services/clienteService.js";
import { EquipoService } from "../../services/equipoService.js";
import { TecnicoService } from "../../services/tecnicoService.js";
import { navegarA } from "../../config/inicializarNavegacion.js";


const ordenService = new OrdenService();
const clienteService = new ClienteService();
const equipoService = new EquipoService();
const tecnicoService = new TecnicoService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaDashboard = async () => {
    mostrarLoader();
    try {
        // Consultamos métricas y listados en paralelo para que sea ultra rápido
        const [ordenes, clientes, equipos, tecnicos] = await Promise.all([
            ordenService.getOrdenes(),
            clienteService.getClientes(),
            equipoService.getEquipos(),
            tecnicoService.getTecnicos()
        ]);

        const totalOrdenes = ordenes?.length || 0;
        const totalClientes = clientes?.length || 0;
        const totalEquipos = equipos?.length || 0;
        const totalTecnicos = tecnicos?.length || 0;

        // Filtrar órdenes pendientes o en curso para darles visibilidad rápida
        const ordenesPendientes = ordenes ? ordenes.filter(o => o.estado !== 'FINALIZADA' && o.estado !== 'CANCELADA') : [];

        let html = `
            <div class="col-12">
                <!-- Tarjeta de Bienvenida / Resumen -->
                <div class="custom-card mb-4">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div>
                            <h4 class="fw-bold text-light mb-1"><i class="bi bi-speedometer2 text-accent me-2"></i>Panel de Control CMMS</h4>
                            <p class="text-muted m-0 small">Resumen general del estado de operaciones, instalaciones y servicios.</p>
                        </div>
                        <div>
                            <span class="badge bg-dark border border-secondary text-light px-3 py-2">
                                <i class="bi bi-calendar-event text-accent me-1"></i>${new Date().toLocaleDateString('es-AR', { dateStyle: 'full' })}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Tarjetas de Estadísticas (KPIs) -->
                <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-info h-100 cursor-pointer card-kpi" id="kpi-ordenes" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Órdenes Totales</small>
                                    <h3 class="fw-bold text-white m-0">${totalOrdenes}</h3>
                                </div>
                                <div class="fs-1 text-info opacity-50"><i class="bi bi-clipboard-data"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-success h-100 cursor-pointer card-kpi" id="kpi-clientes" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Clientes Activos</small>
                                    <h3 class="fw-bold text-white m-0">${totalClientes}</h3>
                                </div>
                                <div class="fs-1 text-success opacity-50"><i class="bi bi-building"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-warning h-100 cursor-pointer card-kpi" id="kpi-equipos" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Equipos / HVAC</small>
                                    <h3 class="fw-bold text-white m-0">${totalEquipos}</h3>
                                </div>
                                <div class="fs-1 text-warning opacity-50"><i class="bi bi-cpu"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-primary h-100">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Técnicos Registrados</small>
                                    <h3 class="fw-bold text-white m-0">${totalTecnicos}</h3>
                                </div>
                                <div class="fs-1 text-primary opacity-50"><i class="bi bi-people"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sección: Órdenes de Trabajo Activas / Recientes -->
                <div class="custom-card">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="fw-bold m-0"><i class="bi bi-exclamation-circle text-accent me-2"></i>Órdenes Pendientes o en Curso</h5>
                        <button class="btn btn-outline-secondary btn-sm" id="btn-ver-todas-ordenes">Ver todas</button>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-dark table-hover align-middle mb-0">
                            <thead>
                                <tr class="text-muted border-secondary">
                                    <th># ID</th>
                                    <th>Cliente</th>
                                    <th>Tipificación</th>
                                    <th>Prioridad</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
        `;

        if (ordenesPendientes.length === 0) {
            html += `<tr><td colspan="5" class="text-center text-muted py-3">No hay órdenes pendientes en este momento. ¡Excelente trabajo!</td></tr>`;
        } else {
            // Mostramos solo las primeras 5 más recientes para no saturar el dashboard
            ordenesPendientes.slice(0, 5).forEach(ot => {
                const clienteNombre = ot.cliente?.nombre_empresa || 'Sin cliente';
                html += `
                    <tr class="border-secondary">
                        <td class="fw-bold text-accent">#${ot.id_orden}</td>
                        <td class="fw-semibold text-white">${clienteNombre}</td>
                        <td class="text-capitalize">${ot.tipificacion ? ot.tipificacion.replace(/_/g, ' ').toLowerCase() : 'N/A'}</td>
                        <td><span class="badge bg-secondary">${ot.prioridad || 'NORMAL'}</span></td>
                        <td>${getBadgeEstado(ot.estado)}</td>
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

        // --- ENLAZAR EVENTOS DEL DASHBOARD ---

        // Botón ver todas las órdenes
        document.getElementById('btn-ver-todas-ordenes').addEventListener('click', () => {
            navegarA('ordenes');
        });

        // Clic en tarjeta KPI de Clientes
        document.getElementById('kpi-clientes').addEventListener('click', () => {
            navegarA('clientes');
        });

        // Clic en tarjeta KPI de Equipos
        document.getElementById('kpi-equipos').addEventListener('click', () => {
            navegarA('equipos');
        });

        // Clic en tarjeta KPI de Órdenes
        document.getElementById('kpi-ordenes').addEventListener('click', () => {
            navegarA('ordenes');
        });

    } catch (error) {
        console.error('Error al cargar el dashboard:', error);
        mostrarError('No se pudo cargar la información del panel principal.', () => cargarVistaDashboard());
    }
};