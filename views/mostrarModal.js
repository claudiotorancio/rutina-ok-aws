let modalRespuestaInstance = null;

// Instancia única del modal de Bootstrap
const getModalInstance = () => {
    const modalElement = document.getElementById('modalRespuesta');
    if (!modalRespuestaInstance && modalElement) {
        modalRespuestaInstance = new bootstrap.Modal(modalElement);
    }
    return modalRespuestaInstance;
};

/**
 * Muestra una alerta estándar (Éxito, Error, Info)
 */
export const mostrarModalRespuesta = (titulo, mensaje, tipo = 'exito') => {
    const tituloEl = document.getElementById('modal-titulo');
    const mensajeEl = document.getElementById('modal-mensaje');
    const iconoEl = document.getElementById('modal-icono');
    const footerEl = document.getElementById('modal-footer-botones');

    if (tituloEl) tituloEl.textContent = titulo;
    if (mensajeEl) mensajeEl.textContent = mensaje;

    if (tipo === 'exito') {
        iconoEl.className = 'bi bi-check-circle-fill text-success me-2';
    } else if (tipo === 'error') {
        iconoEl.className = 'bi bi-exclamation-triangle-fill text-danger me-2';
    } else {
        iconoEl.className = 'bi bi-info-circle-fill text-info me-2';
    }

    // Footer por defecto con un solo botón "Aceptar"
    if (footerEl) {
        footerEl.innerHTML = `<button type="button" class="btn btn-accent btn-sm px-4" data-bs-dismiss="modal">Aceptar</button>`;
    }

    const modal = getModalInstance();
    if (modal) modal.show();
};

/**
 * Muestra un modal de confirmación simple (Sí / Cancelar)
 */
export const mostrarModalConfirmacion = (titulo, mensaje) => {
    return new Promise((resolve) => {
        const tituloEl = document.getElementById('modal-titulo');
        const mensajeEl = document.getElementById('modal-mensaje');
        const iconoEl = document.getElementById('modal-icono');
        const footerEl = document.getElementById('modal-footer-botones');

        if (tituloEl) tituloEl.textContent = titulo;
        if (mensajeEl) mensajeEl.textContent = mensaje;
        if (iconoEl) iconoEl.className = 'bi bi-question-circle-fill text-warning me-2';

        if (footerEl) {
            footerEl.innerHTML = `
                <button type="button" class="btn btn-outline-secondary btn-sm px-3" id="btn-modal-cancelar" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger btn-sm px-3" id="btn-modal-aceptar">Sí, confirmar</button>
            `;
        }

        const modal = getModalInstance();

        const btnAceptar = document.getElementById('btn-modal-aceptar');
        const btnCancelar = document.getElementById('btn-modal-cancelar');

        const handleAceptar = () => {
            modal.hide();
            cleanup();
            resolve(true);
        };

        const handleCancelar = () => {
            modal.hide();
            cleanup();
            resolve(false);
        };

        const cleanup = () => {
            if (btnAceptar) btnAceptar.removeEventListener('click', handleAceptar);
            if (btnCancelar) btnCancelar.removeEventListener('click', handleCancelar);
        };

        if (btnAceptar) btnAceptar.addEventListener('click', handleAceptar, { once: true });
        if (btnCancelar) btnCancelar.addEventListener('click', handleCancelar, { once: true });

        if (modal) modal.show();
    });
};

/**
 * 🌟 NUEVO: Muestra un modal con un <select> para reasignar técnicos
 */
export const mostrarModalSeleccionTecnico = (titulo, mensaje, tecnicos) => {
    return new Promise((resolve) => {
        const tituloEl = document.getElementById('modal-titulo');
        const mensajeEl = document.getElementById('modal-mensaje');
        const iconoEl = document.getElementById('modal-icono');
        const footerEl = document.getElementById('modal-footer-botones');

        if (tituloEl) tituloEl.textContent = titulo;
        if (iconoEl) iconoEl.className = 'bi bi-person-gear text-warning me-2';

        let opcionesHtml = `<option value="">Seleccione un técnico...</option>`;
        tecnicos.forEach(t => {
            const nombreTecnico = t ? `${t.nombre} ${t.apellido || ''}` : `Técnico #${t.id_usuario}`;
            opcionesHtml += `<option value="${t.id_usuario}">${nombreTecnico} (${t.activo ? 'DISPONIBLE' : 'INACTIVO'})</option>`;
        });

        if (mensajeEl) {
            mensajeEl.innerHTML = `
                <p class="mb-2">${mensaje}</p>
                <select id="select-modal-tecnico" class="form-select bg-dark text-white border-secondary">
                    ${opcionesHtml}
                </select>
            `;
        }

        if (footerEl) {
            footerEl.innerHTML = `
                <button type="button" class="btn btn-outline-secondary btn-sm px-3" id="btn-modal-cancelar" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-accent btn-sm px-3" id="btn-modal-confirmar">Reasignar</button>
            `;
        }

        const modal = getModalInstance();
        const btnConfirmar = document.getElementById('btn-modal-confirmar');
        const btnCancelar = document.getElementById('btn-modal-cancelar');

        const handleConfirmar = () => {
            const select = document.getElementById('select-modal-tecnico');
            const idSeleccionado = select ? select.value : null;

            if (!idSeleccionado) {
                alert("Por favor, seleccione un técnico.");
                return;
            }

            modal.hide();
            cleanup();
            resolve(idSeleccionado); // Devuelve el ID del técnico elegido
        };

        const handleCancelar = () => {
            modal.hide();
            cleanup();
            resolve(null); // Devuelve null si canceló
        };

        const cleanup = () => {
            if (btnConfirmar) btnConfirmar.removeEventListener('click', handleConfirmar);
            if (btnCancelar) btnCancelar.removeEventListener('click', handleCancelar);
        };

        if (btnConfirmar) btnConfirmar.addEventListener('click', handleConfirmar, { once: true });
        if (btnCancelar) btnCancelar.addEventListener('click', handleCancelar, { once: true });

        if (modal) modal.show();
    });
};