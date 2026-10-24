import{i as e,n as t,r as n,t as r}from"./mostrarModal-BhixhtJD.js";var i=new e,a=()=>{let e=document.getElementById(`btn-logout`);e&&e.addEventListener(`click`,async t=>{t.preventDefault(),e.disabled=!0,e.innerHTML=`<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Saliendo...`;try{await i.logout()}catch(e){console.error(`Error al notificar logout al servidor:`,e)}finally{window.location.href=`/`}})},o=document.getElementById(`main-container-content`),s=()=>{o.innerHTML=`
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
  `},c=document.getElementById(`main-container-content`),l=()=>{c.innerHTML=`
    <div class="col-12 text-center py-5">
      <div class="spinner-border text-info" role="status" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2 text-muted">Cargando datos desde el servidor...</p>
    </div>
  `},u=e=>{typeof t==`function`?t(``,e,`error`):alert(`Error: `+e)},d=e=>{let t=(e||``).toLowerCase();return t.includes(`pendiente`)?`<span class="badge bg-danger">Pendiente</span>`:t.includes(`proceso`)||t.includes(`curso`)?`<span class="badge bg-warning text-dark">En Proceso</span>`:t.includes(`completad`)||t.includes(`finaliz`)?`<span class="badge bg-success">Completada</span>`:`<span class="badge bg-secondary">${e||`Sin estado`}</span>`},f=e=>{typeof t==`function`?t(``,e,`exito`):alert(`ÉXITO: `+e)},p=new class{constructor(){this.baseUrl=`/`,this.fetchOptions={credentials:`include`,headers:{"Content-Type":`application/json`}}}async getClientes(){try{let e=await fetch(`${this.baseUrl}api/admin/clientes`,this.fetchOptions),t=await e.json();if(!e.ok)throw Error(t.error||`Error al obtener clientes`);return t.clientes}catch(e){throw console.error(`AdminService.getClientes:`,e),e}}async crearCliente(e){try{let t=await fetch(`${this.baseUrl}api/admin/clientes`,{...this.fetchOptions,method:`POST`,body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw Error(n.error||`Error al crear cliente`);return n.cliente}catch(e){throw console.error(`AdminService.crearCliente:`,e),e}}},m=document.getElementById(`main-container-content`),h=async()=>{l();try{let e=await p.getClientes(),t=`
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-building text-accent me-2"></i>Gestión de Clientes</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Cliente</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Razón Social / Nombre</th>
                  <th>Contacto</th>
                  <th>Teléfono</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;!e||e.length===0?t+=`<tr><td colspan="4" class="text-center text-muted py-3">No hay clientes registrados.</td></tr>`:e.forEach(e=>{t+=`
          <tr class="border-secondary">
            <td class="fw-semibold">${e.nombre_empresa}</td>
            <td class="text-muted">${e.email||`Sin correo`}</td>
            <td>${e.telefono||`-`}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
            </td>
          </tr>
        `}),t+=`
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,m.innerHTML=t}catch(e){console.error(`Error al cargar clientes:`,e),u(`Error al obtener los clientes del sistema.`)}},g=class{constructor(){this.baseUrl=`/`,this.fetchOptions={credentials:`include`,headers:{"Content-Type":`application/json`}}}async getEquipos(){try{let e=await fetch(`${this.baseUrl}api/admin/equipos`,this.fetchOptions),t=await e.json();if(!e.ok)throw Error(t.error||`Error al obtener equipos`);return t.equipos}catch(e){throw console.error(`AdminService.getEquipos:`,e),e}}async crearEquipo(e){try{let t=await fetch(`${this.baseUrl}api/admin//equipos`,{...this.fetchOptions,method:`POST`,body:JSON.stringify(e)}),n=await t.json();if(!t.ok)throw Error(n.error||`Error al crear equipo`);return n.equipo}catch(e){throw console.error(`AdminService.crearEquipo:`,e),e}}},_=new g,v=document.getElementById(`main-container-content`),y=async()=>{l();try{let e=await _.getEquipos(),t=`
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-cpu text-accent me-2"></i>Equipos / HVAC e Instalaciones</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Registrar Equipo</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Nombre / Tag</th>
                  <th>Marca / Modelo</th>
                  <th>Nº de Serie</th>
                  <th>Cliente Perteneciente</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;!e||e.length===0?t+=`<tr><td colspan="5" class="text-center text-muted py-3">No hay equipos registrados.</td></tr>`:e.forEach(e=>{let n=e.cliente?.nombre_empresa||`Sin cliente asignado`;t+=`
          <tr class="border-secondary">
            <td class="fw-semibold text-white">${e.nombre_equipo}</td>
            <td><span class="badge bg-dark border border-secondary text-light">${e.marca||`N/A`} ${e.modelo||``}</span></td>
            <td class="text-muted font-monospace">${e.numero_serie||`-`}</td>
            <td><i class="bi bi-building text-secondary me-1"></i>${n}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        `}),t+=`
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,v.innerHTML=t}catch(e){console.error(`Error al cargar equipos:`,e),u(`Error al obtener la lista de equipos.`)}},b=class{constructor(){this.baseUrl=`/`,this.fetchOptions={credentials:`include`,headers:{"Content-Type":`application/json`}}}async getOrdenById(e){let t=await fetch(`${this.baseUrl}api/orden/obtener-orden/${e}`,this.fetchOptions),n=await t.json();if(!t.ok)throw Error(n.message||`No se pudo cargar el detalle de la orden.`);return n.data}async getOrdenes(){try{let e=await fetch(`${this.baseUrl}api/admin/listar-ordenes`,this.fetchOptions),t=await e.json();if(!e.ok)throw Error(t.error||`Error al obtener órdenes`);return t.ordenes}catch(e){throw console.error(`AdminService.getOrdenes:`,e),e}}async asignarOrden(e){try{let t=await fetch(`${this.baseUrl}api/admin/asignar-orden`,{...this.fetchOptions,method:`POST`,body:JSON.stringify(e)});if(t.ok)return(await t.json()).orden;let n={};try{n=await t.json()}catch{n={}}let r=n?.errores?.[0]?.msg||n?.message||n?.error||`Ocurrio un error inesperado`;throw Error(r)}catch(e){throw console.error(`AuthService.orden:`,e),e}}async reasignarOrden(e,t){try{let n=await fetch(`${this.baseUrl}api/orden/reasignar-orden/${e}`,{...this.fetchOptions,method:`PUT`,body:JSON.stringify({id_tecnico:t})});if(n.ok)return(await n.json()).message;let r={};try{r=await n.json()}catch{r={}}let i=r?.errores?.[0]?.msg||r?.message||r?.error||`Ocurrio un error inesperado`;throw Error(i)}catch(e){throw console.error(`OrdenService.reasignarOrden:`,e),e}}async eliminarOrden(e){try{let t=await fetch(`${this.baseUrl}api/orden/eliminar-orden/${e}`,{...this.fetchOptions,method:`DELETE`});if(t.ok)return(await t.json()).message;let n={};try{n=await t.json()}catch{n={}}let r=n?.errores?.[0]?.msg||n?.message||n?.error||`Ocurrio un error inesperado`;throw Error(r)}catch(e){throw console.error(`AdminService.eliminarOrden:`,e),e}}},x=class{constructor(){this.baseUrl=`/`,this.fetchOptions={credentials:`include`,headers:{"Content-Type":`application/json`}}}async getTecnicos(){try{let e=await fetch(`${this.baseUrl}api/admin/tecnicos`,this.fetchOptions),t=await e.json();if(!e.ok)throw Error(t.error||`Error al obtener técnicos`);return t.tecnicos}catch(e){throw console.error(`AdminService.getTecnicos:`,e),e}}async actualizarTecnico(e,t){try{let n=await fetch(`${this.baseUrl}api/admin/tecnicos/${e}`,{...this.fetchOptions,method:`PUT`,body:JSON.stringify(t)}),r=await n.json();if(!n.ok)throw Error(r.error||`Error al actualizar técnico`);return r.tecnico}catch(e){throw console.error(`AdminService.actualizarTecnico:`,e),e}}},S=new b,C=new g,w=new x,T=document.getElementById(`main-container-content`),E=async()=>{l();try{let[e,t]=await Promise.all([C.getEquipos(),w.getTecnicos()]),n=e?.equipos||e||[],r=t?.tecnicos||t||[],i=`
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
                <label for="tipo_mantenimiento" class="form-label text-muted small fw-semibold">Tipificación</label>
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
                  <option value="MEDIA">Media</option>
                  <option value="ALTA">Alta</option>
                  <option value="URGENTE">Urgente</option>
                </select>
              </div>
            </div>

            <!-- Fila: Equipo y Técnico Asignado -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="id_equipo" class="form-label text-muted small fw-semibold">Equipo / Activo</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_equipo" required>
                  <option value="" selected disabled>Seleccione un equipo...</option>
        `;n.forEach(e=>{i+=`<option value="${e.id_equipo}">${e.nombre_equipo} (${e.cliente?.nombre_empresa||`S/C`})</option>`}),i+=`
                </select>
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <label for="id_tecnico" class="form-label text-muted small fw-semibold">Técnico Responsable</label>
                <select class="form-select bg-dark text-light border-secondary" id="id_tecnico" required>
                  <option value="" selected disabled>Seleccione un técnico...</option>
        `,console.log(r.usuario),r.forEach(e=>{let t=e.nombre?`${e.nombre} ${e.apellido||``}`:`Técnico #${e.id_usuario}`;i+=`<option value="${e.id_usuario}">${t} - ${e.especialidad||`General`}</option>`}),i+=`
                </select>
              </div>
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
    `,T.innerHTML=i,D()}catch(e){console.error(`Error al cargar la vista de añadir orden:`,e),u(`No se pudieron cargar los datos necesarios para crear la orden.`)}};function D(){let e=document.getElementById(`form-crear-orden`),t=document.getElementById(`btn-volver-ordenes`),n=document.getElementById(`btn-cancelar`),r=async()=>{await P()};t&&t.addEventListener(`click`,r),n&&n.addEventListener(`click`,r),e.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`id_equipo`).value,n=document.getElementById(`id_tecnico`).value,i=document.getElementById(`fecha_programada`).value;if(!t){u(`Por favor, seleccione un equipo o activo.`);return}if(!n){u(`Por favor, asigne un técnico a la orden.`);return}if(!i){u(`Debe indicar la fecha programada.`);return}let a={tipo_mantenimiento:document.getElementById(`tipificacion`).value,prioridad:document.getElementById(`prioridad`).value,id_equipo:parseInt(document.getElementById(`id_equipo`).value),id_tecnico:parseInt(document.getElementById(`id_tecnico`).value),fecha_programada:document.getElementById(`fecha_programada`).value,descripcion_tarea:document.getElementById(`descripcion_tarea`).value};try{await S.asignarOrden(a),f(`Orden de trabajo creada con éxito.`),r()}catch(e){console.error(`Error al crear orden:`,e),u(e.message||`Error al registrar la orden de trabajo.`)}})}var O=new b,k=new x,A=document.getElementById(`main-container-content`),j=async e=>{l();try{let r=await O.getOrdenById(e),i=r.equipo?.cliente?.nombre_empresa||`N/A`,a=r.equipo?.nombre_equipo||`General`,o=r.tecnico?`${r.tecnico.usuario.nombre} ${r.tecnico.usuario.apellido||``}`:`Sin Asignar`,s=new Date(r.fecha_programada).toLocaleDateString(),c=`
    <div class="col-12">
        <div class="custom-card mb-4">
            <!-- Cabecera con Botones de Acción -->
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                    <button class="btn btn-outline-secondary btn-sm me-2" id="btn-volver">
                        <i class="bi bi-arrow-left me-1"></i>Volver
                    </button>
                    <h5 class="fw-bold m-0 d-inline-block">Orden de Trabajo #${r.id_orden}</h5>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <!-- Botón para Reasignar desde el detalle -->
                    <button class="btn btn-outline-warning btn-sm" id="btn-reasignar-detalle" data-id="${r.id_orden}">
                        <i class="bi bi-person-gear me-1"></i>Reasignar Técnico
                    </button>
                    ${d(r.estado)}
                    <span class="badge bg-secondary">Prioridad: ${r.prioridad}</span>
                </div>
            </div>

                    <!-- Grilla de Información General -->
                    <div class="row g-3 mb-4">
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-building me-1"></i>Cliente</small>
                                <span class="fw-bold">${i}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-cpu me-1"></i>Equipo / Ubicación</small>
                                <span class="fw-bold">${a}</span>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark">
                                <small class="text-muted d-block mb-1"><i class="bi bi-person me-1"></i>Técnico Asignado</small>
                                <span class="fw-bold">${o}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Descripción de la Tarea -->
                    <div class="mb-4">
                        <h6 class="text-accent fw-bold"><i class="bi bi-file-text me-2"></i>Descripción de la Tarea</h6>
                        <p class="p-3 border border-secondary rounded bg-dark text-muted m-0">
                            ${r.descripcion_tarea||`Sin descripción detallada.`}
                        </p>
                    </div>

                    <!-- Sección de Intervenciones Históricas -->
                    <div>
                        <h6 class="text-accent fw-bold mb-3"><i class="bi bi-journal-text me-2"></i>Historial de Intervenciones</h6>
        `;!r.intervenciones||r.intervenciones.length===0?c+=`
                <div class="alert alert-dark border-secondary text-muted text-center py-3 m-0">
                    No hay intervenciones registradas para esta orden todavía.
                </div>
            `:(c+=`
                <div class="table-responsive">
                    <table class="table table-dark table-hover align-middle mb-0">
                        <thead>
                            <tr class="text-muted border-secondary">
                                <th># ID</th>
                                <th>Fecha / Comentarios</th>
                                <th>Estado Resultante</th>
                            </tr>
                        </thead>
                        <tbody>
            `,r.intervenciones.forEach(e=>{c+=`
                    <tr class="border-secondary">
                        <td class="fw-bold text-accent">#${e.id_intervencion}</td>
                        <td>${s} / ${e.detalles_json.observaciones||`Sin comentarios`}</td>
                        <td>${e.realizada?`Realizada`:`Sin Intervención`}</td>
                    </tr>
                `}),c+=`
                        </tbody>
                    </table>
                </div>
            `),c+=`
                    </div>
                </div>
            </div>
        `,A.innerHTML=c,document.getElementById(`btn-volver`).addEventListener(`click`,()=>{P()}),document.getElementById(`btn-reasignar-detalle`).addEventListener(`click`,async()=>{let e=r.id_orden;try{let r=await k.getTecnicos();if(!r||r.length===0){t(`Atención`,`No hay técnicos registrados en el sistema.`,`error`);return}let i=await n(`Reasignar Orden #${e}`,`Basado en el historial, seleccione el nuevo técnico responsable:`,r);if(!i)return;await O.reasignarOrden(e,i),t(`Éxito`,`La orden #${e} fue reasignada correctamente.`,`exito`),j(e)}catch(e){console.error(`Error al reasignar:`,e),t(`Error`,e.message||`No se pudo reasignar la orden.`,`error`)}})}catch(e){console.error(`Error al cargar detalle de orden:`,e),u(`No se pudo cargar el detalle de la orden.`)}},M=new b,N=document.getElementById(`main-container-content`),P=async()=>{l();try{let e=await M.getOrdenes(),t=`
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-clipboard-check text-accent me-2"></i>Órdenes de Trabajo</h5>
            <button class="btn btn-accent btn-sm" id="btn-nueva-orden"><i class="bi bi-plus-lg me-1"></i>Nueva Orden</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Cliente</th>
                  <th>Equipo / Ubicación</th>
                  <th>Técnico Asignado</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody id="tabla-ordenes-body">
    `;!e||e.length===0?t+=`<tr><td colspan="6" class="text-center text-muted py-3">No hay órdenes de trabajo registradas.</td></tr>`:e.forEach(e=>{let n=e.equipo.cliente?.nombre_empresa||e.clienteNombre||`N/A`,r=e.equipo?.nombre_equipo||e.equipoNombre||`General`,i=e.tecnico?`${e.tecnico.usuario.nombre} ${e.tecnico.usuario.apellido||``}`:`Sin Asignar`;t+=`
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${e.id_orden}</td>
            <td>${n}</td>
            <td class="text-muted"><i class="bi bi-cpu me-1"></i>${r}</td>
            <td><i class="bi bi-person me-1"></i>${i}</td>
            <td>${d(e.estado)}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm mb-1 btn-ver-detalle" title="Ver Detalle" data-id="${e.id_orden}"><i class="bi bi-eye"></i></button>
              <button  class="btn btn-outline-danger btn-sm btn-eliminar-orden" title="Eliminar" data-id="${e.id_orden}"><i class="bi bi-trash"></i></i></button>
            </td>
          </tr>
        `}),t+=`
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,N.innerHTML=t;let n=document.getElementById(`btn-nueva-orden`);n&&n.addEventListener(`click`,()=>{E()}),document.getElementById(`tabla-ordenes-body`).addEventListener(`click`,async e=>{let t=e.target.closest(`.btn-eliminar-orden`),n=e.target.closest(`.btn-ver-detalle`);if(n){let e=n.dataset.id;console.log(e),j(e)}if(t){let e=t.dataset.id;if(!await r(`Confirmar eliminación`,`¿Estás seguro de que deseas eliminar la orden #${e}?`))return;try{await M.eliminarOrden(e);let n=t.closest(`tr`);n&&n.remove(),f(`La orden #${e} fue eliminada con éxito.`)}catch(e){console.error(`Error al eliminar orden de trabajo:`,e),u(e.message||`Error al registrar la orden de trabajo.`)}}})}catch(e){console.error(`Error al cargar órdenes de trabajo:`,e),u(`Error al cargar las órdenes de trabajo del servidor.`)}},F=new x,I=document.getElementById(`main-container-content`),L=async()=>{l();try{let e=await F.getTecnicos(),t=`
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-person-badge text-accent me-2"></i>Gestión de Técnicos</h5>
            <button class="btn btn-accent btn-sm"><i class="bi bi-plus-lg me-1"></i>Nuevo Técnico</button>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th>Nombre</th>
                  <th>Especialidad</th>
                  <th>Estado</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;!e||e.length===0?t+=`<tr><td colspan="4" class="text-center text-muted py-3">No hay técnicos registrados.</td></tr>`:e.forEach(e=>{t+=`
          <tr class="border-secondary">
            <td class="fw-semibold">${e.nombre} ${e.apellido||``}</td>
            <td><span class="badge bg-dark border border-secondary text-info">${e.especialidad||`HVAC / Electromecánica`}</span></td>
            <td>
              <span class="badge ${e.activo===!1?`bg-secondary`:`bg-success`}">
                ${e.activo===!1?`Inactivo`:`Activo`}
              </span>
            </td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm me-1"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-outline-danger btn-sm"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
        `}),t+=`
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,I.innerHTML=t}catch(e){console.error(`Error al cargar técnicos:`,e),u(`Error al cargar la lista de técnicos. Verifique sesión de admin.`)}},R=new class{constructor(){this.baseUrl=`/`,this.fetchOptions={credentials:`include`,headers:{"Content-Type":`application/json`}}}async getIntervenciones(){try{let e=await fetch(`${this.baseUrl}api/admin/intervenciones`,this.fetchOptions),t=await e.json();if(!e.ok)throw Error(t.error||`Error al obtener las intervenciones`);return t}catch(e){throw console.error(`AdminService.getIntervenciones:`,e),e}}},z=document.getElementById(`main-container-content`),B=async()=>{l();try{let e=(await R.getIntervenciones()).intervenciones||[],t=`
      <div class="col-12">
        <div class="custom-card">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold m-0"><i class="bi bi-tools text-accent me-2"></i>Intervenciones Técnicas Realizadas</h5>
          </div>
          <div class="table-responsive">
            <table class="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr class="text-muted border-secondary">
                  <th># ID</th>
                  <th>Orden / Tipo</th>
                  <th>Cliente y Equipo</th>
                  <th>Técnico</th>
                  <th>Detalles / Observaciones</th>
                  <th>Evidencia Fotos</th>
                  <th class="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
    `;!e||e.length===0?t+=`<tr><td colspan="7" class="text-center text-muted py-3">No hay intervenciones registradas.</td></tr>`:e.forEach(e=>{let n=e.id_intervencion,r=e.id_orden,i=e.tipo.replace(/_/g,` `),a=e.orden?.equipo?.cliente?.nombre_empresa||`Cliente N/A`,o=e.orden?.equipo?.nombre_equipo||`Equipo N/A`,s=e.orden?.tecnico?`Técnico #${e.orden.tecnico.id_usuario} (${e.orden.tecnico.usuario.nombre} ${e.orden.tecnico.usuario.apellido||``})`:`Sin Asignar`,c=e.detalles_json?.observaciones||`Sin observaciones`,l=e.detalles_json?.sala_equipo?`<br><small class="text-muted"><i class="bi bi-geo-alt"></i> ${e.detalles_json.sala_equipo}</small>`:``,u=e.detalles_json?.fotos_evidencia?.antes_url,d=e.detalles_json?.fotos_evidencia?.despues_url,f=`<span class="text-muted small">Sin fotos</span>`;(u||d)&&(f=`<div class="d-flex gap-1">`,u&&(f+=`<a href="${u}" target="_blank" class="btn btn-sm btn-outline-secondary py-0 px-1" title="Ver foto Antes"><i class="bi bi-image"></i> Antes</a>`),d&&(f+=`<a href="${d}" target="_blank" class="btn btn-sm btn-outline-secondary py-0 px-1" title="Ver foto Después"><i class="bi bi-image-fill"></i> Después</a>`),f+=`</div>`);let p=new Date(e.creado_en).toLocaleDateString(`es-AR`,{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`2-digit`,minute:`2-digit`});t+=`
          <tr class="border-secondary">
            <td class="fw-bold text-accent">#${n}</td>
            <td>
              <span class="badge bg-secondary mb-1">OT #${r}</span>
              <div class="fw-semibold text-info small">${i}</div>
            </td>
            <td>
              <div class="fw-semibold">${a}</div>
              <small class="text-muted"><i class="bi bi-cpu me-1"></i>${o}</small>
            </td>
            <td><small><i class="bi bi-person-badge me-1"></i>${s}</small></td>
            <td>
              <span>${c}</span>
              ${l}
              <div class="text-muted" style="font-size: 0.75rem;"><i class="bi bi-clock"></i> ${p}</div>
            </td>
            <td>${f}</td>
            <td class="text-end">
              <button class="btn btn-outline-info btn-sm" title="Ver Detalle Completo" onclick="verDetalleIntervencion(${n})">
                <i class="bi bi-eye"></i>
              </button>
            </td>
          </tr>
        `}),t+=`
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,z.innerHTML=t}catch(e){console.error(`Error al cargar intervenciones:`,e),u(`Error al cargar las intervenciones técnicas del servidor.`)}},V=document.querySelectorAll(`.sidebar .nav-link`),H=()=>{V.forEach(e=>{e.addEventListener(`click`,async t=>{switch(t.preventDefault(),V.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.getAttribute(`data-tab`)){case`dashboard`:break;case`ordenes`:await P();break;case`tecnicos`:await L();break;case`intervenciones`:await B();break;case`clientes`:await h();break;case`equipos`:await y();break;case`configuracion`:await s();break;default:await P()}})})};document.addEventListener(`DOMContentLoaded`,()=>{H(),a()});
//# sourceMappingURL=panelAdmin-DNJ0eSA4.js.map