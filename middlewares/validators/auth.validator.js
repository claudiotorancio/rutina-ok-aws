import { validar } from "./common/common.validators.js";
import { handleValidator } from "./handleValidator.js";

export const validarSignin = [
    validar.email("email", "El correo electrónico es obligatorio"),
    validar.password("password", "Debe ingresar una contraseña para inciar sesión"),
    handleValidator,
];

export const validarResetPassword = [
    validar.id("id_usuario", "el id usuario no puede estar vacio"),
    validar.password("nuevaPassword", "El campo contraseña no puede estar vacio"),
    handleValidator
]