
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
export const getBadgeEstado = (estado) => {
  const est = (estado || '').toLowerCase();
  if (est.includes('pendiente')) return `<span class="badge bg-danger">Pendiente</span>`;
  if (est.includes('proceso') || est.includes('curso')) return `<span class="badge bg-warning text-dark">En Proceso</span>`;
  if (est.includes('completad') || est.includes('finaliz')) return `<span class="badge bg-success">Completada</span>`;
  return `<span class="badge bg-secondary">${estado || 'Sin estado'}</span>`;
}