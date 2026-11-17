
export const renderEvidenciaFotosHtml = (fotoAntes, fotoDespues) => {
    return `
        <div class="mb-3">
            <h6 class="fw-bold text-light mb-3"><i class="bi bi-images text-accent me-2"></i>Evidencia Fotográfica (AWS S3)</h6>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="p-3 bg-dark border border-secondary rounded text-center">
                        <span class="d-block text-muted mb-2 fw-semibold">Estado Inicial (Antes)</span>
                        ${fotoAntes ? `
                                        <div class="mb-2 overflow-hidden rounded border border-secondary" style="max-height: 250px;">
                                            <img src="${fotoAntes}" class="img-fluid object-fit-contain w-100" alt="Evidencia Antes">
                                        </div>
                                        <a href="${fotoAntes}" target="_blank" class="btn btn-outline-info btn-sm">
                                            <i class="bi bi-box-arrow-up-right me-1"></i> Ver en alta resolución
                                        </a>
                                    ` : `<span class="text-muted small fst-italic py-3 d-block">Sin foto registrada</span>`}
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="p-3 bg-dark border border-secondary rounded text-center">
                        <span class="d-block text-muted mb-2 fw-semibold">Estado Final (Después)</span>
                        ${fotoDespues ? `
                                        <div class="mb-2 overflow-hidden rounded border border-secondary" style="max-height: 250px;">
                                            <img src="${fotoDespues}" class="img-fluid object-fit-contain w-100" alt="Evidencia Después">
                                        </div>
                                        <a href="${fotoDespues}" target="_blank" class="btn btn-outline-info btn-sm">
                                            <i class="bi bi-box-arrow-up-right me-1"></i> Ver en alta resolución
                                        </a>
                                    ` : `<span class="text-muted small fst-italic py-3 d-block">Sin foto registrada</span>`}
                    </div>
                </div>
            </div>
        </div>

                </div >
            </div >`
}