import { mostrarModalRespuesta } from "../views/mostrarModal.js";
const mainContainer = document.getElementById('main-container-content');


export const mostrarLoader = () => {
  mainContainer.innerHTML = `
    <div class="col-12 text-center py-5">
      <div class="spinner-border text-info" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2 text-muted">Cargando datos desde el servidor...</p>
    </div>
  `;
}

export const mostrarError = (mensaje) => {
  if (typeof mostrarModalRespuesta === 'function') {
    // Opcional: Podés pasarle un parámetro extra o configurar el modal para que tenga borde verde o título "Éxito"
    mostrarModalRespuesta("", mensaje, "error");
  } else {
    // Fallback nativo por si el modal no estuviera disponible
    alert('Error: ' + mensaje);
  }
}

// Helper para insignias de estado en Órdenes de Trabajo
export const getBadgeEstado = (estado) => {
  const est = (estado || '').toLowerCase();
  if (est.includes('pendiente')) return `<span class="badge bg-danger">Pendiente</span>`;
  if (est.includes('reprogramar') || est.includes('curso')) return `<span class="badge bg-warning text-dark">Reprogramar</span>`;
  if (est.includes('completada') || est.includes('finaliz')) return `<span class="badge bg-success">Completada</span>`;
  return `<span class="badge bg-secondary">${estado || 'Sin estado'}</span>`;
}

// Helper exito
export const mostrarExito = (mensaje) => {
  if (typeof mostrarModalRespuesta === 'function') {
    // Opcional: Podés pasarle un parámetro extra o configurar el modal para que tenga borde verde o título "Éxito"
    mostrarModalRespuesta("", mensaje, 'exito');
  } else {
    // Fallback nativo por si el modal no estuviera disponible
    alert('ÉXITO: ' + mensaje);
  }
};