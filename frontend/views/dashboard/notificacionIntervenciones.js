

export const actualizarNotificacionesIntervenciones = (cantidad) => {
    const badge = document.getElementById('badge-intervenciones');
    if (!badge) return;

    if (cantidad > 0) {
        badge.textContent = cantidad;
        badge.classList.remove('d-none'); // Muestra la burbuja roja
    } else {
        badge.textContent = '0';
        badge.classList.add('d-none');    // La vuelve a ocultar si no hay nada
    }
};
