import { validar } from "./common/common.validators.js";
import { handleValidator } from "./handleValidator.js";

export const validarResetTecnico = [
    validar.id("id_usuario", "el id usuario no puede estar vacio"),
    validar.password("nuevaPasswordTemporal", "El campo contraseña no puede estar vacio"),
    handleValidator
]

export const validarRegistroTecnico = [
    validar.nombre("nombre", "El nombre no puede estar vacio"),
    validar.nombre("apellido", "El apellido n puede estar vacio"),
    validar.email("email", "El campo email no puede estar vacio"),
    validar.password("password", "Debe proporcionar una contraseña"),
    validar.campo("telefono", "El telefono es requerido", true),
    validar.campo("especialidad", "La especialdiad es requerida", false),
    validar.matricula("matricula"),
    handleValidator

]

export const valdiarAsignarOT = [
    validar.id("id_equipo", "El ID del equipo no puede estar vacio"),
    validar.id("id_tecnico", "El ID del tecnico no puee estar vacio"),
    validar.fecha("fecha_programada", "El campo fecha_programada no puede estar vacio"),
    validar.campo("descripcion_tarea", "La orden debe llevar una descripcion de la tarea", false),
    handleValidator
];

export const validarCrearCliente = [
    validar.nombre("nombre_empresa", "El campo no Nombre empresa no puede estar vacio"),
    validar.campo("direccion", "el campo dirección no puede estar vacio", false),
    handleValidator
];

export const validarCrearEquipo = [
    validar.id("id_cliente", "El campo ID no puede estar vacio"),
    validar.nombre("nombre_equipo", "el campo nombre_equipo no puede estar vacio"),
    validar.campo("marca", "El campo Marca no puede estar vacio", false),
    validar.campo("modelo", "el campo modelo no puede estar vacio", false),
    validar.campo("numero_serie", "el campo numero de serie no puede estar vacio", false),
    handleValidator
]
