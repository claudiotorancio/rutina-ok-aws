import { handleValidator } from "./handleValidator.js";
import { validar } from "./common/common.validators.js";

export const validarOrdenTrabajo = [
    validar.id("id_equipo", "El id_equipo es requerido"),
    validar.id("id_tecnico", "El id_tecnico es requerido"),
    validar.campo("tipificacion", "El tipo de mantenimiento es requerido", false),
    validar.campo("prioridad", "La prioridad es requerida", false),
    validar.fecha_programada("fecha_programada", "Debe adjuntar una fecha de programación"),
    validar.campo("descripcion_tarea", "La descripcion de la tarea es requerida", false),
    handleValidator
]

export const validarActualizarOrden = [
    validar.id("id_orden", "El ID de la orden es requerido"),
    validar.campo("nuevo_estado", "El estado no puede estar vacio", false),
    handleValidator
]

