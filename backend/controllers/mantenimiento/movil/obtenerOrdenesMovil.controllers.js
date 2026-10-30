import prisma from "../../../config/dbConnection.js";

const obtenerOrdenes = async (req, res) => {
    try {
        // Recuperar id del técnico del token en el header
        const id_tecnico_autenticado = req.usuarioMovil.id_usuario;

        // Buscar sus órdenes con la nueva arquitectura (Cliente directo y Equipo opcional)
        const misOrdenes = await prisma.ordenTrabajo.findMany({
            where: {
                id_tecnico: id_tecnico_autenticado,
                // Filtro el estado operativo
                estado: {
                    notIn: ["COMPLETADA", "REPROGRAMAR"]
                }
            },
            include: {
                cliente: true, // <-- Relación directa obligatoria
                equipo: true   // <-- Relación opcional (puede venir null)
            },
            orderBy: {
                fecha_programada: "asc"
            }
        });

        // Creo el JSON plano para App Inventor manejando de forma segura si no hay equipo
        const ordenFormateada = misOrdenes.map(o => ({
            id_orden: o.id_orden,
            fecha: o.fecha_programada,
            tipificacion: o.tipificacion,
            prioridad: o.prioridad,
            estado: o.estado,
            descripcion: o.descripcion_tarea,

            // Datos del Equipo (Si es null, mandamos valores por defecto para que App Inventor no falle)
            equipo: o.equipo ? o.equipo.nombre_equipo : "Trabajo General / Sin Equipo",
            marca: o.equipo ? o.equipo.marca : "-",
            modelo: o.equipo ? o.equipo.modelo : "-",
            serie: o.equipo ? o.equipo.numero_serie : "-",
            ubicacion_interna: o.equipo ? o.equipo.ubicacion_interna : o.cliente.direccion,

            // Datos del Cliente (Ahora directos desde o.cliente)
            cliente_empresa: o.cliente.nombre_empresa,
            cliente_direccion: o.cliente.direccion,
            cliente_contacto: o.cliente.contacto_nombre || "Sin contacto",
            cliente_telefono: o.cliente.telefono || "Sin teléfono"
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