import { PrismaPg } from '@prisma/adapter-pg'
import path from 'path';

const clientPath = path.resolve(process.cwd(), 'generated/client.ts');
const { PrismaClient } = await import(clientPath);

const adapter = new PrismaPg();
const prisma = new PrismaClient({ adapter });

export const prueba = async (req, res) => {
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