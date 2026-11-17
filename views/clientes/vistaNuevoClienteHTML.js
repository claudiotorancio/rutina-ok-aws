export const vistaNuevoClienteHTML = () => {

    return `
        <div class="col-12 col-lg-8 mx-auto">
          <div class="custom-card p-4">
            
            <!-- Encabezado con Botón Volver -->
            <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
              <div class="d-flex align-items-center">
                <button class="btn btn-outline-secondary btn-sm me-3" id="btn-volver-clientes">
                  <i class="bi bi-arrow-left"></i> Volver
                </button>
                <h5 class="fw-bold m-0 text-light">
                  <i class="bi bi-building-add text-accent me-2"></i>Registrar Nuevo Cliente
                </h5>
              </div>
            </div>
    
            <!-- Formulario de Creación -->
            <form id="form-crear-cliente">
              <div class="row g-3">
                
                <!-- Razón Social / Nombre -->
                <div class="col-md-12">
                  <label for="nombre_empresa" class="form-label text-muted small fw-bold">Razón Social / Nombre de Empresa *</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary text-muted"><i class="bi bi-building"></i></span>
                    <input type="text" class="form-control bg-dark border-secondary text-light" id="nombre_empresa" required placeholder="Ej: Supermercados Alfa S.A.">
                  </div>
                </div>
    
                <!-- Email de Contacto -->
                <div class="col-md-6">
                  <label for="email" class="form-label text-muted small fw-bold">Correo Electrónico</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary text-muted"><i class="bi bi-envelope"></i></span>
                    <input type="email" class="form-control bg-dark border-secondary text-light" id="email" placeholder="contacto@empresa.com">
                  </div>
                </div>
    
                <!-- Teléfono -->
                <div class="col-md-6">
                  <label for="telefono" class="form-label text-muted small fw-bold">Teléfono / Celular</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary text-muted"><i class="bi bi-telephone"></i></span>
                    <input type="text" class="form-control bg-dark border-secondary text-light" id="telefono" placeholder="Ej: 2954-123456">
                  </div>
                </div>
    
                <!-- Dirección / Ubicación (Opcional pero muy útil para HVAC) -->
                <div class="col-md-12">
                  <label for="direccion" class="form-label text-muted small fw-bold">Dirección / Ubicación</label>
                  <div class="input-group">
                    <span class="input-group-text bg-dark border-secondary text-muted"><i class="bi bi-geo-alt"></i></span>
                    <input type="text" class="form-control bg-dark border-secondary text-light" id="direccion" placeholder="Ej: Av. Spinetto 1234, Santa Rosa">
                  </div>
                </div>
    
              </div>
    
              <!-- Botones de Acción -->
              <div class="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary">
                <button type="button" class="btn btn-outline-secondary" id="btn-cancelar">Cancelar</button>
                <button type="submit" class="btn btn-accent">
                  <i class="bi bi-check-lg me-1"></i> Guardar Cliente
                </button>
              </div>
            </form>
    
          </div>
        </div>
      `;

}