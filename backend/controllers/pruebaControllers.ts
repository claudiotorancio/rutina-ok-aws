
import { Request, Response } from 'express';

// 💡 Importación limpia y directa de TypeScript nativo:
import { PrismaClient } from '../../generated/index.js';

const prisma = new PrismaClient();

export const prueba = async (req: Request, res: Response) => {
    try {
        const clientesConEquipos = await prisma.cliente.findMany({
            include: {
                equipos: true,
            },
        });
        console.log("Clientes con equipos:", clientesConEquipos);
        res.status(200).json({ ok: true, data: clientesConEquipos });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
}