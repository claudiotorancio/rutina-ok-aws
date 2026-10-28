import prisma from "../../../config/dbConnection.js";
import { Tipificacion } from "../../../prisma/generated/index.js";

const obtenerOrdenes = async (req, res) => {
    try {

        //recuperar id del tecnico del token en el header
        const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

        //Buscar sus ordenes
        const misOrdenes = await prisma.ordenTrabajo.findMany({
            where: {
                id_tecnico: id_tecnico_autenticado,
                //filtro el estado operativo
                estado: {
                    notIn: ["COMPLETADA", "REPROGRAMAR"]
                }
            },
            include: {
                equipo: {
                    include: {
                        cliente: {
                            select: {
                                nombre_empresa: true,
                                direccion: true,
                                contacto_nombre: true,
                                telefono: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                fecha_programada: "asc"
            }
        });

        //Creo el Json para appInventor
        const ordenFormateada = misOrdenes.map(o => ({
            id_orden: o.id_orden,
            fecha: o.fecha_programada,
            Tipificacion: o.tipificacion,
            prioridad: o.prioridad,
            estado: o.estado,
            tipo: o.tipo_mantenimiento,
            descripcion: o.descripcion_tarea,
            equipo: o.equipo.nombre_equipo,
            marca: o.equipo.marca,
            modelo: o.equipo.modelo,
            serie: o.equipo.numero_serie,
            ubicacion_interna: o.equipo.ubicacion_interna,
            // Datos del Cliente 
            cliente_empresa: o.equipo.cliente.nombre_empresa,
            cliente_direccion: o.equipo.cliente.direccion,
            cliente_contacto: o.equipo.cliente.contacto_nombre,
            cliente_telefono: o.equipo.cliente.telefono
        }));

        return res.json({
            success: true,
            cantidad: ordenFormateada.length,
            ordenes: ordenFormateada
        });

    } catch (error) {
        console.error("Error al recuperar órdenes:", error);
        return res.status(500).json({ success: false, error: "Error interno al sincronizar tus órdenes de trabajo." });
    }
};

export default obtenerOrdenes;