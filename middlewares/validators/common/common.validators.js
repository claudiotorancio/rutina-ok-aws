import { body, param } from "express-validator"

//funciones auxiliares

export const validar = {
    campo: (campo, mensaje, isNumeric = false) => {
        let validator =
            body(campo)
                .notEmpty().withMessage(mensaje)
                .bail()
                .trim()
                .escape();
        if (isNumeric) {
            validator = validator
                .isNumeric().withMessage(`El ${campo} debe ser numérico.`);
        }
        return validator;
    },

    nombre: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .isLength({ min: 3 }).withMessage(`El ${campo}, debe tener al menos 3 cartacteres`),

    matricula: (campo) =>
        body(campo)
            .optional({ checkFalsy: true })
            .trim()
            .escape()
            .isLength({ min: 4 }).withMessage("Si proporciona una matricula, debe contener al menos 4 caracteres"),

    email: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isEmail().withMessage("Debe proporcionar un correo electrónico válido")
            .bail()
            .trim()
            .normalizeEmail(),

    id: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isInt().withMessage(`El ${campo} debe ser un numero entero`)
            .trim(),

    id_param: (nombreParametro) =>
        param(nombreParametro)
            .isInt().withMessage("El id debe ser un número entero"),

    cantidad: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isInt({ gt: 0 }).withMessage("Debe ser mayor que 0"),

    password: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje),
            // .bail()
            // .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 carácteres")
            // .bail()
            // .matches(/\d/).withMessage("La contraseña debe contener al menos un número.")
            // .bail()
            // .matches(/[a-zA-Z]/).withMessage("La contraseña debe contener al menos una letra."),

    fecha: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isISO8601().withMessage(`El campo ${campo} debe ser una fecha valida (AAAA-MM-DD)`)
            .bail()
            .toDate(),

    booleano: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isBoolean().withMessage(`El campo ${campo} debe ser un valor booleano`)
            .bail()
            .toBoolean(),

    lista: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .bail()
            .isBoolean().withMessage(`El campo ${campo} debe ser un array de elemontos`),

    fecha_programada: (campo, mensaje) =>
        body(campo)
            .notEmpty().withMessage(mensaje)
            .isISO8601().withMessage("El formato de la fecha debe ser un formato valido")
            .custom((value) => {
                const fechaOrden = new Date(value);
                const fechaActual = new Date();
                fechaActual.setHours(0, 0, 0, 0); //Programacion desde la hora 0 del dia en curso

                if (fechaOrden < fechaActual) {
                    throw new Error("No se pueden programnar ordenes coon fechas pasadas");
                }
                return true
            }),

};