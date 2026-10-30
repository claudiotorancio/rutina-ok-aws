
export const vistaTecnicosHTML = () => {
    return `
      <div class="row g-3 justify-content-center">
        <div class="col-12 col-lg-8 col-lg-6">
          <div class="custom-card p-4">
            
            <!-- Encabezado -->
            <div class="d-flex align-items-center mb-4">
              <button class="btn btn-outline-secondary btn-sm me-3" id="btn-volver">
               <i class="bi bi-arrow-left me-1"></i>Volver
              </button>
              <h5 class="fw-bold m-0 text-light">
                <i class="bi bi-person-plus text-accent me-2"></i>Registrar Nuevo Técnico
              </h5>
            </div>

            <!-- Formulario de Alta -->
            <form id="form-anadir-tecnico">
              <div class="mb-3">
                <label class="form-label text-muted">Nombre</label>
                <input type="text" class="form-control bg-secondary text-light border-0" id="nombreTecnico" required placeholder="Ej: Juan">
              </div>

              <div class="mb-3">
                <label class="form-label text-muted">Apellido</label>
                <input type="text" class="form-control bg-secondary text-light border-0" id="apellidoTecnico" required placeholder="Ej: Pérez">
              </div>

              <div class="mb-3">
                <label class="form-label text-muted">Especialidad</label>
                <input type="text" class="form-control bg-secondary text-light border-0" id="especialidadTecnico" placeholder="Ej: HVAC / Electromecánica">
              </div>

              <div class="mb-3">
                <label class="form-label text-muted">Telefono</label>
                <input type="text" class="form-control bg-secondary text-light border-0" id="telefonoTecnico" placeholder="2954-XXXXXX">
              </div>


              <div class="mb-3">
                <label class="form-label text-muted">Correo Electrónico / Usuario</label>
                <input type="email" class="form-control bg-secondary text-light border-0" id="emailTecnico" required placeholder="tecnico@cmms.com">
              </div>

              <div class="mb-4">
                <label class="form-label text-muted">Contraseña Temporal</label>
                <input type="password" class="form-control bg-secondary text-light border-0" id="passwordTecnico" required placeholder="••••••••">
              </div>

              <!-- Botones de Acción -->
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-secondary btn-sm" id="btn-cancelar">Cancelar</button>
                <button type="submit" class="btn btn-accent btn-sm">Guardar Técnico</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    `;
};