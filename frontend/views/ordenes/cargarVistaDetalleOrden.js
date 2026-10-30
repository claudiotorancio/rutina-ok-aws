import { mostrarLoader, mostrarError, getBadgeEstado } from "../../config/helpersInterfaz.js";
import { mostrarModalRespuesta, mostrarModalSeleccionTecnico } from "../mostrarModal.js";
import { OrdenService } from "../../services/ordenService.js";
import { TecnicoService } from "../../services/tecnicoService.js";
import { cargarVistaOrdenes } from "./cargarVistaOrdenes.js";

const ordenService = new OrdenService();
const tecnicoService = new TecnicoService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaDetalleOrden = async (idOrden) => {
    mostrarLoader();
    try {
        const orden = await ordenService.getOrdenById(idOrden);

        // Mapeo de datos con la nueva arquitectura (Cliente directo y Equipo opcional)
        const clienteNom = orden.cliente?.nombre_empresa || 'N/A';
        const clienteDir = orden.cliente?.direccion || 'S/C';
        const equipoInfo = orden.equipo ? `${orden.equipo.nombre_equipo} (S/N: ${orden.equipo.numero_serie || 'N/D'})` : 'Trabajo General / Sin Equipo';

        const tecnicoNom = orden.tecnico?.usuario ? `${orden.tecnico.usuario.nombre} ${orden.tecnico.usuario.apellido || ''}` : 'Sin Asignar';
        const fechaFormateada = new Date(orden.fecha_programada).toLocaleDateString();

        let html = `
    <div class="col-12">
        <div class="custom-card mb-4">
            <!-- Cabecera con Botones de Acción -->
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                    <button class="btn btn-outline-secondary btn-sm me-2" id="btn-volver">
                        <i class="bi bi-arrow-left me-1"></i>Volver
                    </button>
                    <h5 class="fw-bold m-0 d-inline-block">OT #${orden.id_orden}</h5>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <!-- Botón para relanzar -->
                    <button class="btn btn-outline-warning btn-sm" id="btn-reasignar-detalle" data-id="${orden.id_orden}">
                        <i class="bi bi-person-gear me-1"></i>Relanzar Orden
                    </button>
                    ${getBadgeEstado(orden.estado)}
                    <span class="badge bg-secondary">Prioridad: ${orden.prioridad}</span>
                </div>
            </div>

            <!-- Grilla de Información General -->
            <div class="row g-3 mb-4">
                <div class="col-md-3">
                    <div class="p-3 border border-secondary rounded bg-dark">
                        <small class="text-muted d-block mb-1"><i class="bi bi-building me-1"></i>Cliente / Dirección</small>
                        <span class="fw-bold d-block">${clienteNom}</span>
                        <small class="text-muted">${clienteDir}</small>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 border border-secondary rounded bg-dark">
                        <small class="text-muted d-block mb-1"><i class="bi bi-cpu me-1"></i>Equipo / Activo</small>
                        <span class="fw-bold">${equipoInfo}</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 border border-secondary rounded bg-dark">
                        <small class="text-muted d-block mb-1"><i class="bi bi-tags me-1"></i>Tipificación</small>
                        <span class="fw-bold">${orden.tipificacion}</span>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 border border-secondary rounded bg-dark">
                        <small class="text-muted d-block mb-1"><i class="bi bi-person me-1"></i>Técnico Asignado</small>
                        <span class="fw-bold">${tecnicoNom}</span>
                    </div>
                </div>
            </div>

            <!-- Descripción de la Tarea -->
            <div class="mb-4">
                <h6 class="text-accent fw-bold"><i class="bi bi-file-text me-2"></i>Descripción de la Tarea</h6>
                <p class="p-3 border border-secondary rounded bg-dark text-light m-0">
                    ${orden.descripcion_tarea || 'Sin descripción detallada.'}
                </p>
            </div>

            <!-- Sección de Intervenciones Históricas -->
            <div>
                <h6 class="text-accent fw-bold mb-3"><i class="bi bi-journal-text me-2"></i>Historial de Intervenciones</h6>
        `;

        if (!orden.intervenciones || orden.intervenciones.length === 0) {
            html += `
                <div class="alert alert-dark border-secondary text-muted text-center py-3 m-0">
                    No hay intervenciones registradas para esta orden todavía.
                </div>
            `;
        } else {
            html += `
                <div class="table-responsive">
                    <table class="table table-dark table-hover align-middle mb-0">
                        <thead>
                            <tr class="text-muted border-secondary">
                                <th># ID</th>
                                <th>Fecha / Observaciones</th>
                                <th>Técnico</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            orden.intervenciones.forEach(interv => {
                const observaciones = interv.detalles_json?.tecnico_comentario || 'Sin comentarios';
                html += `
                    <tr class="border-secondary">
                        <td class="fw-bold text-accent">#${interv.id_intervencion}</td>
                        <td>${fechaFormateada} / ${observaciones}</td>
                        <td>${tecnicoNom}</td>
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

        // Evento para el botón Volver
        document.getElementById('btn-volver').addEventListener('click', () => {
            cargarVistaOrdenes();
        });

        // Evento para Reasignar Orden
        document.getElementById('btn-reasignar-detalle').addEventListener('click', async () => {
            const idOrden = orden.id_orden;

            try {
                const tecnicosRes = await tecnicoService.getTecnicos();
                const tecnicos = tecnicosRes?.tecnicos || tecnicosRes || [];

                if (!tecnicos || tecnicos.length === 0) {
                    mostrarModalRespuesta("Atención", "No hay técnicos registrados en el sistema.", "error");
                    return;
                }

                const nuevoIdTecnico = await mostrarModalSeleccionTecnico(
                    `Reasignar Orden #${idOrden}`,
                    "Seleccione el nuevo técnico responsable:",
                    tecnicos
                );

                if (!nuevoIdTecnico) return;

                await ordenService.reasignarOrden(idOrden, nuevoIdTecnico);

                mostrarModalRespuesta("Éxito", `La orden #${idOrden} fue reasignada correctamente.`, "exito");

                cargarVistaDetalleOrden(idOrden);

            } catch (err) {
                console.error("Error al reasignar:", err);
                mostrarModalRespuesta("Error", err.message || "No se pudo reasignar la orden.", "error");
            }
        });

    } catch (error) {
        console.error('Error al cargar detalle de orden:', error);
        mostrarError('No se pudo cargar el detalle de la orden.');
    }
};