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

export const mostrarError = (mensaje, callbackReintentar) => {
  // 1. Limpiar el contenedor principal por si tenía el loader activo
  const mainContainer = document.getElementById('main-container-content');
  if (mainContainer) {
    mainContainer.innerHTML = `
    <div class="col-12">
      <div class="custom-card text-center py-5">
        <div class="mb-3">
          <i class="bi bi-exclamation-triangle-fill text-warning display-4"></i>
        </div>
        <h5 class="fw-bold text-light mb-2">¡Atención!</h5>
        <p class="text-muted mb-4 px-3" style="max-width: 400px; margin: 0 auto;">
          ${mensaje || 'No se pudieron cargar los datos del servidor.'}
        </p>
        <button class="btn btn-outline-light btn-sm px-4 py-2" id="btn-reintentar-vista">
          <i class="bi bi-arrow-clockwise me-1"></i> Reintentar
        </button>
      </div>
    </div>
  `;

    // Asignar el evento al botón de recarga
    const btnReintentar = document.getElementById('btn-reintentar-vista');
    if (btnReintentar && typeof callbackReintentar === 'function') {
      btnReintentar.addEventListener('click', () => {
        mostrarLoader();
        callbackReintentar();
      });
    }
  }



  // 2. Mostrar el modal de error o el fallback
  // if (typeof mostrarModalRespuesta === 'function') {
  //   mostrarModalRespuesta("", mensaje, "error");
  // } else {
  //   alert('Error: ' + mensaje);
  // }
};

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