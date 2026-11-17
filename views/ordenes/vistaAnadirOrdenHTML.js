

export const cabeceraAnadirOrdenHTML = () => {
    return `
      <div class="col-12 col-lg-8 mx-auto">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="fw-bold m-0"><i class="bi bi-plus-circle text-accent me-2"></i>Crear Nueva Orden de Trabajo</h5>
            <button class="btn btn-outline-secondary btn-sm" id="btn-volver-ordenes">
              <i class="bi bi-arrow-left me-1"></i>Volver
            </button>
          </div>

          <form id="form-crear-orden" class="needs-validation" novalidate>
            
            <!-- Fila: Tipo de Mantenimiento y Prioridad -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="tipificacion" class="form-label text-muted small fw-semibold">Tipificación</label>
                <select class="form-select bg-dark text-light border-secondary" id="tipificacion" required>
                  <option value="" selected disabled>Seleccione el tipo...</option>
                  <option value="AIRE_ACONDICIONADO">Aire Acondicionado</option>
                  <option value="INSTALACION_ELECTRICA">Instalación Eléctrica</option>
                </select>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="prioridad" class="form-label text-muted small fw-semibold">Prioridad</label>
                <select class="form-select bg-dark text-light border-secondary" id="prioridad" required>
                  <option value="" selected disabled>Seleccione prioridad...</option>
                  <option value="BAJA">Baja</option>
                  <option value="ALTA">Alta</option>
                </select>
              </div>
            </div>
    `;
}

export const footerAnadirVistaHTML = () => {
    return `
                  </select>
                </div>
              </div>
  
              <!-- Fila Opcional: Equipo / Activo (Ya no es obligatorio) -->
              <div class="mb-3">
                <label for="id_equipo" class="form-label text-muted small fw-semibold">Equipo / Activo Asociado (Opcional)</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_equipo">
                  <option value="" selected>Sin equipo específico (Trabajo general)</option>
                </select>
                <div class="form-text text-muted small">Al seleccionar un cliente, aquí se cargarán sus equipos asociados si los tuviera.</div>
              </div>
  
              <!-- Fila: Fecha Programada -->
              <div class="mb-3">
                <label for="fecha_programada" class="form-label text-muted small fw-semibold">Fecha Programada</label>
                <input type="datetime-local" class="form-control bg-dark text-light border-secondary" id="fecha_programada" required>
              </div>
  
              <!-- Descripción de la tarea -->
              <div class="mb-4">
                <label for="descripcion_tarea" class="form-label text-muted small fw-semibold">Descripción y Detalle de la Tarea</label>
                <textarea class="form-control bg-dark text-light border-secondary" id="descripcion_tarea" rows="4" placeholder="Indique los trabajos específicos a realizar, repuestos necesarios, etc." required></textarea>
              </div>
  
              <!-- Botones de Acción -->
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-secondary" id="btn-cancelar">Cancelar</button>
                <button type="submit" class="btn btn-accent px-4"><i class="bi bi-check-lg me-1"></i>Asignar Orden</button>
              </div>
  
            </form>
          </div>
        </div>
      `;
}