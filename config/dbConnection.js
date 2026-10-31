import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/index.js';

const connectionString = process.env.DATABASE_URL;

const globalForPrisma = globalThis;

// 1. Configurar el pool con SSL obligatorio para Supabase y tiempos de espera controlados
const pool = globalForPrisma.pgPool || new pg.Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Vital para conexiones externas a Supabase desde Vercel
    },
    max: 5, // Límite seguro por instancia serverless
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000, // Evita que se quede colgado eternamente si falla la red
});

if (!globalForPrisma.pgPool) {
    globalForPrisma.pgPool = pool;
}

// 2. Instanciar el adaptador de Prisma
const adapter = new PrismaPg(pool);

// 3. Patrón Singleton para Vercel
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prisma;
}

export default prisma;