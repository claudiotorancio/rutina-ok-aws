import { body, param } from "express-validator"
import escape from "escape-html"

//funciones auxiliares

export const validarEmail = () =>
    body("email")
        .notEmpty().withMessage("El correo electrónico es obligatorio")
        .isEmail().withMessage("Debe proporcionar un correo electrónico válido")
        .trim()
        .customSanitizer(escape)

export const validarId = (campo = "id") =>
    body(campo)
        .notEmpty().withMessage(`El ${campo} es obligatoruio`)
        .isInt().withMessage(`El ${campo} debe ser un numero entero`)
