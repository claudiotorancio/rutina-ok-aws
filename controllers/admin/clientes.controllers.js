import prisma from "../../config/dbConnection.js";


// Listar todos los clientes con sus equipos asociados
export const listarClientes = async (req, res) => {
    try {
        const clientes = await prisma.cliente.findMany({
            include: {
                equipos: true
            },
            orderBy: {
                nombre_empresa: 'asc'
            }
        });

        return res.status(200).json({
            success: true,
            total: clientes.length,
            clientes
        });
    } catch (error) {
        console.error('Error al listar clientes:', error);
        return res.status(500).json({ error: 'Error interno al obtener los clientes.' });
    }
};

// Crear un nuevo cliente
export const crearCliente = async (req, res) => {

    const { nombre_empresa, contacto_nombre, telefono, email, direccion } = req.body;

    try {
        const nuevoCliente = await prisma.cliente.create({
            data: {
                nombre_empresa,
                contacto_nombre,
                telefono,
                email,
                direccion
            }
        });

        return res.status(201).json({
            success: true,
            mensaje: 'Cliente creado exitosamente.',
            cliente: nuevoCliente
        });
    } catch (error) {
        console.error('Error al crear cliente:', error);
        return res.status(500).json({ error: 'Error interno al registrar el cliente.' });
    }
};

// ACTUALIZAR CLIENTE
export const actualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_empresa, contacto_nombre, telefono, email, direccion } = req.body;

        // Verificar que el cliente exista
        const clienteExistente = await prisma.cliente.findUnique({
            where: { id_cliente: Number(id) }
        });

        if (!clienteExistente) {
            return res.status(404).json({ error: 'El cliente especificado no existe.' });
        }

        const clienteActualizado = await prisma.cliente.update({
            where: { id_cliente: Number(id) },
            data: {
                ...(nombre_empresa && { nombre_empresa }),
                ...(contacto_nombre !== undefined && { contacto_nombre }),
                ...(telefono !== undefined && { telefono }),
                ...(email !== undefined && { email }),
                ...(direccion && { direccion })
            }
        });

        return res.status(200).json({
            success: true,
            mensaje: 'Cliente actualizado exitosamente.',
            cliente: clienteActualizado
        });
    } catch (error) {
        console.error('Error al actualizar cliente:', error);
        return res.status(500).json({ error: 'Error interno al actualizar el cliente.' });
    }
};

// DESACTIVAR CLIENTE
export const desactivarCliente = async (req, res) => {
    try {
        const { id } = req.params;

        const clienteDesactivado = await prisma.cliente.update({
            where: { id_cliente: parseInt(id) },
            data: { activo: false } // Cambiamos el estado a falso
        });

        return res.status(200).json({
            success: true,
            message: 'Cliente desactivado correctamente',
            cliente: clienteDesactivado
        });
    } catch (error) {
        console.error("Error al desactivar cliente:", error);
        return res.status(500).json({ error: 'Error interno al desactivar el cliente.' });
    }
};

