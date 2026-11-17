export const vistaIntervencionesHTML = () => {
    return `
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-tools text-accent me-2"></i>Intervenciones Técnicas Realizadas</h5>
          </div>

          <!-- PESTAÑAS DE FILTRADO (Actualizadas con el Enum de Prisma) -->
          <ul class="nav nav-tabs border-secondary mb-3 " id="intervencionesTabs" role="tablist" style="white-space: nowrap;">
            <li class="nav-item" role="presentation">
              <button class="nav-link active text-light bg-transparent border-0 border-bottom border-2 border-accent" data-tipo="todos" type="button">
                Todas <span class="badge bg-secondary ms-1" id="badge-todos">0</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-muted bg-transparent border-0" data-tipo="PREVENTIVO" type="button">
                Preventivo <span class="badge bg-secondary ms-1" id="badge-preventivo">0</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-muted bg-transparent border-0" data-tipo="CORRECTIVO" type="button">
                Correctivo <span class="badge bg-secondary ms-1" id="badge-correctivo">0</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-muted bg-transparent border-0" data-tipo="RECARGA_GAS" type="button">
                Recarga de Gas <span class="badge bg-secondary ms-1" id="badge-recarga_gas">0</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-muted bg-transparent border-0" data-tipo="INSTALACION_ELECTRICA" type="button">
                Instalación Eléctrica <span class="badge bg-secondary ms-1" id="badge-instalacion_electrica">0</span>
              </button>
            </li>
          </ul>

          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Orden / Tipo</th>
                  <th>Cliente</th>
                  <th>Técnico</th>
                  <th>Fecha</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody id="tabla-intervenciones-body">
                <!-- Se renderiza dinámicamente según el filtro -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
}