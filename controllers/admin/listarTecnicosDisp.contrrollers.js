import prisma from "../../config/dbConnection.js";


// ==========================================
// LISTAR TÉCNICOS (DATOS Y ESTADO)
// ==========================================

export const listarTecnicosDisponibilidad = async (req, res) => {
    try {
        //Buscar los tecnicos
        const tecnicos = await prisma.tecnico.findMany({
            include: {
                usuario: {
                    select: {
                        nombre: true,
                        apellido: true,
                        email: true,
                        telefono: true,
                        creado_en: true
                    }
                },
                ordenes: {
                    where: {
                        estado: {
                            in: ["PENDIENTE"],
                        },
                    },
                    select: {
                        id_orden: true,
                        estado: true,
                        prioridad: true,
                        fecha_programada: true,
                        descripcion_tarea: true,
                        // Relación con el equipo y su respectivo cliente
                        equipo: {
                            select: {
                                nombre_equipo: true,
                                marca: true,
                                modelo: true,
                                ubicacion_interna: true,
                                cliente: {
                                    select: {
                                        nombre_empresa: true,
                                        contacto_nombre: true,
                                        telefono: true,
                                        direccion: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        // Mapear en tiempo real
        const plantillaTecnicos = tecnicos.map(tecnico => {
            let estadoActual = tecnico.estado_disponibilidad; // DISPONIBLE, EN_CAMPO, LICENCIA, INACTIVO

            // Si tiene órdenes en proceso, lo marcamos como TRABAJANDO
            const tieneEnProceso = tecnico.ordenes.some(ot => ot.estado === 'EN_PROCESO');
            if (tieneEnProceso) {
                estadoActual = 'TRABAJANDO';
            } else if (tecnico.ordenes.length > 0 && estadoActual === 'DISPONIBLE') {
                // Opcional: Si tiene pendientes/aceptadas pero no arrancó, podés dejarlo disponible o en campo
                estadoActual = 'EN_CAMPO';
            }

            return {
                id_usuario: tecnico.id_usuario,
                nombre: tecnico.usuario.nombre,
                apellido: tecnico.usuario.apellido,
                email: tecnico.usuario.email,
                telefono: tecnico.usuario.telefono,
                especialidad: tecnico.especialidad || 'No especificada',
                matricula: tecnico.matricula || 'Sin matrícula',
                estado_disponibilidad: estadoActual,
                total_ots_activas: tecnico.ordenes.length,
                ordenes_trabajo: tecnico.ordenes // Acá viaja toda la info del equipo y cliente
            };
        });

        return res.status(200).json({
            success: true,
            total: plantillaTecnicos.length,
            tecnicos: plantillaTecnicos
        });

    } catch (error) {
        console.error('Error al listar técnicos para el admin:', error);
        return res.status(500).json({
            error: 'Error interno al obtener la plantilla de personal técnico.'
        });
    }
};

// ==========================================
// ACTUALIZAR TÉCNICO (DATOS Y ESTADO)
// ==========================================
export const actualizarTecnico = async (req, res) => {
    try {
        const { id } = req.params; // id corresponde al id_usuario del técnico
        const {
            nombre,
            apellido,
            telefono,
            especialidad,
            matricula,
            estado_disponibilidad
        } = req.body;

        // Verificar que el técnico exista y tenga el rol correcto
        const tecnicoExistente = await prisma.tecnico.findUnique({
            where: { id_usuario: parseInt(id) },
            include: { usuario: true }
        });

        if (!tecnicoExistente) {
            return res.status(404).json({ error: 'El técnico especificado no existe.' });
        }

        // Ejecutamos una transacción de Prisma para actualizar ambas tablas atómicamente
        const resultadoTransaccion = await prisma.$transaction(async (tx) => {
            // 1. Actualizamos los datos básicos en la tabla usuarios
            const usuarioActualizado = await tx.usuario.update({
                where: { id_usuario: parseInt(id) },
                data: {
                    ...(nombre && { nombre }),
                    ...(apellido && { apellido }),
                    ...(telefono !== undefined && { telefono })
                }
            });

            // 2. Actualizamos los datos profesionales y de disponibilidad en la tabla tecnicos
            const tecnicoActualizado = await tx.tecnico.update({
                where: { id_usuario: parseInt(id) },
                data: {
                    ...(especialidad !== undefined && { especialidad }),
                    ...(matricula !== undefined && { matricula }),
                    ...(estado_disponibilidad && { estado_disponibilidad })
                },
                include: {
                    usuario: {
                        select: {
                            nombre: true,
                            apellido: true,
                            email: true,
                            telefono: true
                        }
                    }
                }
            });

            return tecnicoActualizado;
        });

        return res.status(200).json({
            success: true,
            mensaje: 'Información del técnico actualizada exitosamente.',
            tecnico: resultadoTransaccion
        });

    } catch (error) {
        console.error('Error al actualizar técnico:', error);
        return res.status(500).json({ error: 'Error interno al actualizar el técnico.' });
    }
};
