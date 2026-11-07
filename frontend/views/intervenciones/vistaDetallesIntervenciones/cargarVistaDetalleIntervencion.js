import { mostrarError, mostrarErrorServidor, mostrarLoader } from "../../../config/helpersInterfaz.js";
import { IntervencionService } from "../../../services/intervencionService.js";
import { cargarVistaDetalleOrden } from "../../ordenes/cargarVistaDetalleOrden.js";
import { cargarVistaIntervenciones } from "../vistaIntervenciones/cargarVistaIntervenciones.js";
import { renderEvidenciaFotosHtml } from "./evidenciaFotograficaHtml.js";
import { renderizarChecklistSegunTipo } from "./renderizarSegunTipo.js";
import { extraerCoordenadas, seccionMapa } from "./seccionMapa.js";

const intervencionService = new IntervencionService();
const mainContainer = document.getElementById('main-container-content');

export const cargarVistaDetalleIntervencion = async (idIntervencion, callbackVolver = null) => {
    mostrarLoader();
    try {
        //Obtener respuesta del servicio
        const respuesta = await intervencionService.getIntervencionById(idIntervencion);
        const i = respuesta.data || respuesta.intervencion || respuesta;
        const detalles = i.detalles_json || {};

        //Determinar el tipo de intervencion para renderizar
        const tipoIntervencion = i.tipo ? i.tipo.toUpperCase() : 'OTRO';
        const tipoTextoLegible = tipoIntervencion.replace(/_/g, ' ');
        const idOrden = i.id_orden || 'N/A';

        // Mapeo general
        const clienteNombre = detalles.cliente_interv || 'Cliente no especificado';
        const tecnicoNombre = detalles.tecnico_interv || 'Técnico no especificado';
        const fechaIntervencionTexto = detalles.fecha_interv || 'Fecha N/A';
        const comentario = detalles.tecnico_comentario || 'Sin observaciones registradas.';

        // Fotos S3
        const fotoAntes = detalles.fotos_evidencia?.antes_url;
        const fotoDespues = detalles.fotos_evidencia?.despues_url;

        // --- PROCESAMIENTO DE MAPA DESDE LA UBICACIÓN ---
        const coordsStr = detalles.ubicacion_recarga || null;
        const coords = extraerCoordenadas(coordsStr);

        //Formato estandar para recibir los datos
        let html = `
            <div class="col-12 col-lg-10 mx-auto">
                <div class="custom-card p-4">
                    
                    <!-- Encabezado con Botón Volver y Badges -->
                    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-outline-secondary btn-sm me-3" id="btn-volver-intervencion">
                                <i class="bi bi-arrow-left"></i> Volver
                            </button>
                            <h5 class="fw-bold m-0 text-light">
                                <i class="bi bi-info-circle text-accent me-2"></i>Detalle de Intervención <span class="text-accent">#${i.id_intervencion}</span>
                            </h5>
                        </div>
                        <div class="d-flex gap-2 align-items-center">
                            <span class="badge bg-secondary fs-6 px-3 py-2">${tipoTextoLegible}</span>
                        </div>
                    </div>

                    <!-- Grilla de Información General -->
                    <div class="row g-4 mb-4">
                        <div class="col-md-6">
                            <div class="p-3 bg-dark border border-secondary rounded h-100">
                                <h6 class="fw-bold text-info mb-3"><i class="bi bi-clipboard-check me-2"></i>Información General</h6>
                                <p class="mb-2"><strong>Orden de Trabajo:</strong> <span class="badge bg-secondary">OT #${idOrden} </span>  
                                <!-- <button class="btn btn-outline-info btn-sm btn-ver-detalle" data-id="${idOrden}" title="Ver Detalle Completo">
                                <i class="bi bi-eye"></i>
                                </button> --></p>
                                <p class="mb-2"><strong>Cliente:</strong> ${clienteNombre}</p>
                                <p class="mb-0"><strong>Fecha Reporte:</strong> ${fechaIntervencionTexto}</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="p-3 bg-dark border border-secondary rounded h-100">
                                <h6 class="fw-bold text-info mb-3"><i class="bi bi-person-badge me-2"></i>Datos de Ejecución</h6>
                                <p class="mb-2"><strong>Técnico Responsable:</strong> ${tecnicoNombre}</p>
                                <p class="mb-0"><strong>ID Registro BD:</strong> #${i.id_intervencion}</p>
                            </div>
                        </div>
                    </div>

                    <!-- SECCIÓN DINÁMICA SEGÚN EL TIPO DE INTERVENCIÓN -->
                    <div class="mb-4">
                        ${renderizarChecklistSegunTipo(tipoIntervencion, tipoTextoLegible, detalles)}
                    </div>

                    <!-- MAPA DE UBICACIÓN (SI EXISTE) -->
                    ${seccionMapa(coords)}

                    <!-- Comentarios / Observaciones del Técnico -->
                    <div class="mb-4">
                        <h6 class="fw-bold text-light mb-2"><i class="bi bi-chat-text text-accent me-2"></i>Comentarios del Técnico</h6>
                        <div class="p-3 bg-dark border border-secondary rounded text-light" style="min-height: 80px; white-space: pre-line;">
                            ${comentario}
                        </div>
                    </div>

                    <!--  SECCIÓN DINÁMICA PARA FOTOS S3 -->
                    ${renderEvidenciaFotosHtml(fotoAntes, fotoDespues)}
        `;

        mainContainer.innerHTML = html;

        //Ver detalle de Orden
        // document.querySelectorAll('.btn-ver-detalle').forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         const id = btn.getAttribute('data-id');
        //         cargarVistaDetalleOrden(id, () => cargarVistaDetalleIntervencion(idIntervencion));
        //     });
        // });

        document.getElementById('btn-volver-intervencion').addEventListener('click', () => {
            if (callbackVolver && typeof callbackVolver === 'function') {
                callbackVolver(); // volver al detalle de la orden
            } else {
                cargarVistaIntervenciones(); // Por defecto, va al listado general
            }
        });

    } catch (error) {
        console.error('Error al cargar detalle de intervención:', error);
        mostrarErrorServidor('No se pudo cargar el detalle completo de la intervención.', () => cargarVistaIntervenciones());
    }
};