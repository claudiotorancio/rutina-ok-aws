// controllers/admin/registrarTecnicos.controller.js

import prisma from "../../config/dbConnection.js";
import helpers from "../../config/lib/helpers/helpers.js";

const registrarTecnico = async (req, res) => {

    // 1. Verificación de seguridad 
    if (!req.isAuthenticated() || req.user.tipo_usuario !== 'ADMIN') {
        return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden dar de alta técnicos." });
    }

    const { nombre, apellido, email, password, telefono, especialidad, matricula } = req.body;

    // Validación de campos requeridos
    if (!nombre || !apellido || !email || !password) {
        return res.status(400).json({ error: "Los campos nombre, apellido, email y contraseña son obligatorios." });
    };


    //Validacion de existencia
    const usuarioExistente = await prisma.usuario.findUnique({
        where: { email: email.toLowerCase().trim() }
    });

    if (usuarioExistente) {
        return res.status(400).json({
            error: "El correo electronico ya se encuentra registrado en el CMMS"
        })
    };

    try {
        //transacción: o se crean ambos registros con éxito, o no se crea ninguno
        const nuevoTecnicoCMMS = await prisma.$transaction(async (tx) => {

            // Encriptamos la contraseña temporal que el Admin le asigna al técnico
            const hashedPassword = await helpers.encryptPassword(password, 10);

            // A. Crear el Usuario base (Supertipo) forzando el rol de TECNICO
            const usuario = await tx.usuario.create({
                data: {
                    nombre,
                    apellido,
                    email,
                    password: hashedPassword,
                    telefono,
                    tipo_usuario: 'TECNICO'
                }
            });

            // B. Crear la fila operativa en la tabla de técnicos (Subtipo) 
            const tecnicoDetalle = await tx.tecnico.create({
                data: {
                    id_usuario: usuario.id_usuario,
                    especialidad: especialidad || null,
                    matricula: matricula || null,
                    estado_disponibilidad: 'DISPONIBLE' // Valor por defecto de tu enum
                }
            });

            //Removemos la contraseña
            const { password: _, ...usuarioBase } = usuario

            return { usuarioBase, tecnicoDetalle };
        });

        // 3. Respuesta exitosa para el panel de administración
        res.status(201).json({
            message: "Técnico dado de alta en el sistema exitosamente.",
            data: {
                id: nuevoTecnicoCMMS.usuarioBase.id_usuario,
                nombre: `${nuevoTecnicoCMMS.usuarioBase.nombre} ${nuevoTecnicoCMMS.usuarioBase.apellido}`,
                email: nuevoTecnicoCMMS.usuarioBase.email,
                matricula: nuevoTecnicoCMMS.tecnicoDetalle.matricula
            }
        });

    } catch (error) {
        console.error("Error al registrar técnico:", error);
        // Captura si el email ya está en uso en Prisma
        if (error.code === 'P2002') {
            return res.status(400).json({ error: "El correo electrónico ingresado ya pertenece a un usuario del sistema." });
        }
        res.status(500).json({ error: "Error interno del servidor al procesar el alta." });
    }
};


export default registrarTecnico;
