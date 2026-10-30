import prisma from "../../config/dbConnection.js";

// Crear un nuevo equipo asociado a un cliente
export const crearEquipo = async (req, res) => {

    const {
        id_cliente,
        nombre_equipo,
        marca,
        modelo,
        numero_serie,
        ubicacion_interna,
        tipo_refrigerante
    } = req.body;


    try {
        // Verificar que el cliente exista
        const clienteExiste = await prisma.cliente.findUnique({
            where: { id_cliente: Number(id_cliente) }
        });

        if (!clienteExiste) {
            return res.status(404).json({ error: 'El cliente especificado no existe.' });
        }

        // Verificar que el número de serie no esté registrado previamente (es @unique)
        const serieDuplicada = await prisma.equipo.findUnique({
            where: { numero_serie }
        });

        if (serieDuplicada) {
            return res.status(400).json({ error: 'Ya existe un equipo registrado con ese número de serie.' });
        }

        const nuevoEquipo = await prisma.equipo.create({
            data: {
                id_cliente: Number(id_cliente),
                nombre_equipo,
                marca,
                modelo,
                numero_serie,
                ubicacion_interna,
                tipo_refrigerante
            },
            include: {
                cliente: true
            }
        });

        return res.status(201).json({
            success: true,
            mensaje: 'Equipo registrado exitosamente.',
            equipo: nuevoEquipo
        });
    } catch (error) {
        console.error('Error al crear equipo:', error);
        return res.status(500).json({ error: 'Error interno al registrar el equipo.' });
    }
};

// Listar todos los equipos (con info de su cliente)
export const listarEquipos = async (req, res) => {
    try {
        const equipos = await prisma.equipo.findMany({
            include: {
                cliente: {
                    select: {
                        id_cliente: true,
                        nombre_empresa: true,
                        direccion: true
                    }
                }
            },
            orderBy: {
                nombre_equipo: 'asc'
            }
        });

        return res.status(200).json({
            success: true,
            total: equipos.length,
            equipos
        });
    } catch (error) {
        console.error('Error al listar equipos:', error);
        return res.status(500).json({ error: 'Error interno al obtener los equipos.' });
    }
};

// ACTUALIZAR EQUIPO
export const actualizarEquipo = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            id_cliente,
            nombre_equipo,
            marca,
            modelo,
            numero_serie,
            ubicacion_interna,
            tipo_refrigerante
        } = req.body;

        // Verificar que el equipo exista
        const equipoExistente = await prisma.equipo.findUnique({
            where: { id_equipo: Number(id) }
        });

        if (!equipoExistente) {
            return res.status(404).json({ error: 'El equipo especificado no existe.' });
        }

        // Si se modifica el número de serie, verificar que no pertenezca a otro equipo
        if (numero_serie && numero_serie !== equipoExistente.numero_serie) {
            const serieDuplicada = await prisma.equipo.findUnique({
                where: { numero_serie }
            });
            if (serieDuplicada) {
                return res.status(400).json({ error: 'Ya existe otro equipo registrado con ese número de serie.' });
            }
        }

        // Si se cambia de cliente, verificar que el nuevo cliente exista
        if (id_cliente) {
            const clienteExiste = await prisma.cliente.findUnique({
                where: { id_cliente: Number(id_cliente) }
            });
            if (!clienteExiste) {
                return res.status(404).json({ error: 'El nuevo cliente especificado no existe.' });
            }
        }

        const equipoActualizado = await prisma.equipo.update({
            where: { id_equipo: Number(id) },
            data: {
                ...(id_cliente && { id_cliente: Number(id_cliente) }),
                ...(nombre_equipo && { nombre_equipo }),
                ...(marca && { marca }),
                ...(modelo && { modelo }),
                ...(numero_serie && { numero_serie }),
                ...(ubicacion_interna !== undefined && { ubicacion_interna }),
                ...(tipo_refrigerante !== undefined && { tipo_refrigerante })
            },
            include: { cliente: true }
        });

        return res.status(200).json({
            success: true,
            mensaje: 'Equipo actualizado exitosamente.',
            equipo: equipoActualizado
        });
    } catch (error) {
        console.error('Error al actualizar equipo:', error);
        return res.status(500).json({ error: 'Error interno al actualizar el equipo.' });
    }
};

//Actualizar estado cliente
export const alternarEstadoEquipo = async (req, res) => {
    try {
        const { id } = req.params;
        const idEquipo = parseInt(id);

        // 1. Buscar el estado actual del técnico
        const equipoActual = await prisma.equipo.findUnique({
            where: { id_equipo: idEquipo },
            select: { activo: true }
        });

        // Si el técnico no existe, lanzamos un error para que lo capture el catch
        if (!equipoActual) {
            return res.status(404).json({ success: false, error: 'No se encontró el equipo especificado.' });
        }

        // 2. Invertir el valor actual
        const nuevoEstado = !equipoActual.activo;

        // 3. Actualizar con el nuevo estado alternado
        const equipoActualizado = await prisma.equipo.update({
            where: { id_equipo: idEquipo },
            data: { activo: nuevoEstado }
        });

        // Mensaje dinámico dependiendo de si se activó o desactivó
        const accion = nuevoEstado ? 'activado' : 'desactivado';

        return res.status(200).json({
            success: true,
            message: `Cliente ${accion} correctamente`,
            cliente: equipoActualizado
        });

    } catch (error) {
        console.error("Error al alternar estado del equipo:", error);

        if (error.code === 'P2025') {
            return res.status(404).json({ success: false, error: 'No se encontró el equipo especificado.' });
        }

        return res.status(500).json({ success: false, error: 'Error interno al intentar cambiar el estado del equipo.' });
    }
};

