// Variable global para manejar la instancia del modal
let modalRespuestaInstance = null;

// Función para mostrar el modal dinámicamente con cualquier mensaje del backend
export const mostrarModalRespuesta = (titulo, mensaje, tipo = 'exito') => {
    const modalElement = document.getElementById('modalRespuesta');
    const tituloEl = document.getElementById('modal-titulo');
    const mensajeEl = document.getElementById('modal-mensaje');
    const iconoEl = document.getElementById('modal-icono');

    // Textos
    tituloEl.textContent = titulo;
    mensajeEl.textContent = mensaje;

    // Estilos según el tipo de respuesta
    if (tipo === 'exito') {
        iconoEl.className = 'bi bi-check-circle-fill text-success me-2';
    } else if (tipo === 'error') {
        iconoEl.className = 'bi bi-exclamation-triangle-fill text-danger me-2';
    } else {
        iconoEl.className = 'bi bi-info-circle-fill text-info me-2';
    }

    // Inicializar y mostrar el modal de Bootstrap
    if (!modalRespuestaInstance) {
        modalRespuestaInstance = new bootstrap.Modal(modalElement);
    }
    modalRespuestaInstance.show();
}