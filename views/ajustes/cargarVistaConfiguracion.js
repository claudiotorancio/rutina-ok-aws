// import { mostrarLoader, mostrarError } from "../../config/helpersInterfaz.js";
// import { AdminService } from "../../services/adminService.js";

// const adminService = new AdminService();

const mainContainer = document.getElementById('main-container-content');

export const cargarVistaConfiguracion = () => {
    mainContainer.innerHTML = `
    <div class="col-12">
      <div class="custom-card">
        <h5 class="fw-bold mb-4"><i class="bi bi-gear text-accent me-2"></i>Configuración de RutinaOk CMMS</h5>
        
        <form id="form-configuracion" onsubmit="event.preventDefault(); alert('Ajustes guardados');">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label text-muted">Nombre de la Organización</label>
              <input type="text" class="form-control bg-dark border-secondary text-white" value="RutinaOk Mantenimiento">
            </div>
            <div class="col-md-6">
              <label class="form-label text-muted">Email de Notificaciones</label>
              <input type="email" class="form-control bg-dark border-secondary text-white" value="admin@rutinaok.com">
            </div>
            <div class="col-md-12">
              <label class="form-label text-muted">Modo de Operación</label>
              <select class="form-select bg-dark border-secondary text-white">
                <option value="activo" selected>Producción / Mantenimiento HVAC Activo</option>
                <option value="mantenimiento">Modo Solo Lectura</option>
              </select>
            </div>
          </div>

          <hr class="border-secondary my-4">

          <div class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-secondary">Cancelar</button>
            <button type="submit" class="btn btn-accent"><i class="bi bi-check-lg me-1"></i>Guardar Ajustes</button>
          </div>
        </form>
      </div>
    </div>
  `;
}