import { mostrarLoader, mostrarError, getBadgeEstado } from "../../config/helpersInterfaz.js";
import { OrdenService } from "../../services/ordenService.js";
import { ClienteService } from "../../services/clienteService.js";
import { EquipoService } from "../../services/equipoService.js";
import { TecnicoService } from "../../services/tecnicoService.js";
import { IntervencionService } from "../../services/intervencionService.js";
import { navegarA } from "../../config/inicializarNavegacion.js";
import { actualizarNotificacionesIntervenciones } from "./notificacionIntervenciones.js";
import { vistaDashboardHTML } from "./vistaDashboardHTML.js";



const ordenService = new OrdenService();
const clienteService = new ClienteService();
const equipoService = new EquipoService();
const tecnicoService = new TecnicoService();
const intervencionService = new IntervencionService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaDashboard = async () => {
    mostrarLoader();
    try {
        // Consultamos métricas y listados en paralelo para que sea ultra rápido
        const [ordenes, clientes, equipos, tecnicos, intervenciones] = await Promise.all([
            ordenService.getOrdenes(),
            clienteService.getClientes(),
            equipoService.getEquipos(),
            tecnicoService.getTecnicos(),
            intervencionService.getContarIntervencionesNuevas()
        ]);


        const totalOrdenes = ordenes?.length || 0;
        const totalClientes = clientes?.length || 0;
        const totalEquipos = equipos?.length || 0;
        const totalTecnicos = tecnicos?.length || 0;
        const cantIntervenciones = intervenciones;

        //Actualizar notificacion
        actualizarNotificacionesIntervenciones(cantIntervenciones);

        // Filtrar órdenes pendientes o en curso para darles visibilidad rápida
        const ordenesPendientes = ordenes ? ordenes.filter(o => o.estado !== 'COMPLETADA') : [];

        //Renderizar html
        let html = vistaDashboardHTML(totalOrdenes, totalClientes, totalEquipos, totalTecnicos);

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