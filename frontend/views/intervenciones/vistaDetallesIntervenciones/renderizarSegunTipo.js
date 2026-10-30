// --- FUNCIÓN PARA DISCRIMINAR EL CHECKLIST SEGÚN EL TIPO DE INTERVENCIÓN ---
export const renderizarChecklistSegunTipo = (tipoIntervencion, tipoTextoLegible, detalles) => {
    switch (tipoIntervencion) {
        case 'PREVENTIVO':
            return `
                        <h6 class="fw-bold text-light mb-3"><i class="bi bi-snow text-accent me-2"></i>Verificación Preventiva (Aire Acondicionado)</h6>
                        <div class="row g-3">
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Limpieza de Filtros</small>
                                    <span class="fw-bold text-light">${detalles.verificar_filtros || detalles.ajuste_termicas || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Temperatura en sitio</small>
                                    <span class="fw-bold text-light">${detalles.temp_en_sitio || 'N/A'} °</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Presiones circuito (Psi)</small>
                                    <span class="fw-bold text-light">${detalles.presiones_circuito || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Estado evaporador</small>
                                    <span class="fw-bold text-light">${detalles.estado_evaporador || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    `;
        case 'INSTALACION_ELECTRICA':
            return `
                        <h6 class="fw-bold text-light mb-3"><i class="bi bi-list-check text-accent me-2"></i>Verificaciones del Sistema (${tipoTextoLegible})</h6>
                        <div class="row g-3">
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Ajuste Térmicas</small>
                                    <span class="fw-bold text-light">${detalles.ajuste_termicas || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Estado Tomas</small>
                                    <span class="fw-bold text-light">${detalles.estado_tomas || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Medición Fases</small>
                                    <span class="fw-bold text-light">${detalles.medicion_fases || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Protecciones Tableros</small>
                                    <span class="fw-bold text-light">${detalles.protecciones_tableros || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    `;

        case 'RECARGA_GAS':
            return `
                        <h6 class="fw-bold text-light mb-3"><i class="bi bi-wind text-accent me-2"></i>Parámetros de Carga de Gas</h6>
                        <div class="row g-3">
                            <div class="col-6 col-md-4">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Tipo de Refrigerante</small>
                                    <span class="fw-bold text-light">${detalles.tipo_refrigerante || 'R410A / R22'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Sala Equipo</small>
                                    <span class="fw-bold text-light">${detalles.sala_equipo || 'N/A'}</span>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <small class="text-muted d-block mb-1">Cantidad Carga</small>
                                    <span class="fw-bold text-light">${detalles.cantidad_carga || 'N/A'} kg</span>
                                </div>
                            </div>
                        </div>
                    `;

        case 'CORRECTIVO':
            return `
                        <h6 class="fw-bold text-light mb-3"><i class="bi bi-tools text-accent me-2"></i>Detalle de Reparación Correctiva</h6>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="p-3 bg-dark border border-secondary rounded">
                                    <small class="text-muted d-block mb-1">Instalacion Afectada</small>
                                    <span class="fw-bold text-light">${detalles.tipo_interv || 'No especificado'}</span>
                                </div>
                            </div>
                            <div class="col-md-6"></div>
                        </div>
                    `;

        default:
            return `
                        <div class="p-3 bg-dark border border-secondary rounded text-center text-muted">
                            <small>No hay parámetros específicos configurados para este tipo de intervención.</small>
                        </div>
                    `;
    }
};