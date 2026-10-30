// controllers/admin/registrarTecnicos.controller.js

import prisma from "../../config/dbConnection.js";
import helpers from "../../config/lib/helpers/helpers.js";

export const registrarTecnico = async (req, res) => {


    const { nombre, apellido, email, password, telefono, especialidad } = req.body;


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
                    estado_disponibilidad: 'DISPONIBLE' 
                }
            });

            //Removemos la contraseña
            const { password: _, ...usuarioBase } = usuario

            return { usuarioBase, tecnicoDetalle };
        });

        // 3. Respuesta exitosa para el panel de administración
        res.status(201).json({
            message: "Técnico dado de alta en el sistema exitosamente.",
            data: nuevoTecnicoCMMS
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

//Actualizar estado tecnico
export const alternarEstadoTecnico = async (req, res) => {
    try {
        const { id } = req.params;
        const idUsuario = parseInt(id);

        // 1. Buscar el estado actual del técnico
        const tecnicoActual = await prisma.tecnico.findUnique({
            where: { id_usuario: idUsuario },
            select: { activo: true }
        });

        // Si el técnico no existe, lanzamos un error para que lo capture el catch
        if (!tecnicoActual) {
            return res.status(404).json({ success: false, error: 'No se encontró el técnico especificado.' });
        }

        // 2. Invertir el valor actual
        const nuevoEstado = !tecnicoActual.activo;

        // 3. Actualizar con el nuevo estado alternado
        const tecnicoActualizado = await prisma.tecnico.update({
            where: { id_usuario: idUsuario },
            data: { activo: nuevoEstado }
        });

        // Mensaje dinámico dependiendo de si se activó o desactivó
        const accion = nuevoEstado ? 'activado' : 'desactivado';

        return res.status(200).json({
            success: true,
            message: `Técnico ${accion} correctamente`,
            tecnico: tecnicoActualizado
        });

    } catch (error) {
        console.error("Error al alternar estado del técnico:", error);

        if (error.code === 'P2025') {
            return res.status(404).json({ success: false, error: 'No se encontró el técnico especificado.' });
        }

        return res.status(500).json({ success: false, error: 'Error interno al intentar cambiar el estado del técnico.' });
    }
};
