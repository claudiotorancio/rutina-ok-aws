

export const vistaDashboardHTML = (totalOrdenes, totalClientes, totalEquipos, totalTecnicos) => {
    return `
            <div class="col-12">
                <!-- Tarjeta de Bienvenida / Resumen -->
                <div class="custom-card mb-4">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div>
                            <h4 class="fw-bold text-light mb-1"><i class="bi bi-speedometer2 text-accent me-2"></i>Panel de Control CMMS</h4>
                            <p class="text-muted m-0 small">Resumen general del estado de operaciones, instalaciones y servicios.</p>
                        </div>
                        <div>
                            <span class="badge bg-dark border border-secondary text-light px-3 py-2">
                                <i class="bi bi-calendar-event text-accent me-1"></i>${new Date().toLocaleDateString('es-AR', { dateStyle: 'full' })}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Tarjetas de Estadísticas (KPIs) -->
                <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-info h-100 cursor-pointer card-kpi" id="kpi-ordenes" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Órdenes Totales</small>
                                    <h3 class="fw-bold text-white m-0">${totalOrdenes}</h3>
                                </div>
                                <div class="fs-1 text-info opacity-50"><i class="bi bi-clipboard-data"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-success h-100 cursor-pointer card-kpi" id="kpi-clientes" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Clientes Activos</small>
                                    <h3 class="fw-bold text-white m-0">${totalClientes}</h3>
                                </div>
                                <div class="fs-1 text-success opacity-50"><i class="bi bi-building"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-warning h-100 cursor-pointer card-kpi" id="kpi-equipos" role="button">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Equipos / HVAC</small>
                                    <h3 class="fw-bold text-white m-0">${totalEquipos}</h3>
                                </div>
                                <div class="fs-1 text-warning opacity-50"><i class="bi bi-cpu"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-xl-3">
                        <div class="custom-card p-3 border-start border-4 border-primary h-100">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <small class="text-muted d-block mb-1">Técnicos Registrados</small>
                                    <h3 class="fw-bold text-white m-0">${totalTecnicos}</h3>
                                </div>
                                <div class="fs-1 text-primary opacity-50"><i class="bi bi-people"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sección: Órdenes de Trabajo Activas / Recientes -->
                <div class="custom-card">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="fw-bold m-0"><i class="bi bi-exclamation-circle text-accent me-2"></i>Órdenes Pendientes o en Curso</h5>
                        <button class="btn btn-outline-secondary btn-sm" id="btn-ver-todas-ordenes">Ver todas</button>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-dark table-hover align-middle mb-0">
                            <thead>
                                <tr class="text-muted border-secondary">
                                    <th># ID</th>
                                    <th>Cliente</th>
                                    <th>Tipificación</th>
                                    <th>Prioridad</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
        `

}