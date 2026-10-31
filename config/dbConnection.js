
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/index.js';

const connectionString = process.env.DATABASE_URL;

const globalForPrisma = globalThis;

// 1. Creamos primero el pool nativo de pg con sus opciones de rendimiento
const pool = globalForPrisma.pgPool || new pg.Pool({
    connectionString,
    max: 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    // Si estás en producción con el puerto 6543, podés agregar ssl si lo requiere:
    // ssl: { rejectUnauthorized: false }
});

if (!globalForPrisma.pgPool) {
    globalForPrisma.pgPool = pool;
}

// 2. Pasamos el pool correctamente al adaptador de Prisma
const adapter = new PrismaPg(pool);

// 3. Patrón Singleton para evitar saturar conexiones en Serverless
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
