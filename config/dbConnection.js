import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/index.js';

const connectionString = process.env.DATABASE_URL;

// Usamos globalThis para reutilizar el pool y Prisma entre ejecuciones (warm starts) en AWS Lambda
const globalForPrisma = globalThis;

// 1. Crear o reutilizar el pool nativo limitando las conexiones por instancia (ej: máx 5)
const pool = globalForPrisma.pgPool || new pg.Pool({
    connectionString,
    max: 5, // Límite seguro por cada función Lambda para no agotar los 15 totales
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

if (!globalForPrisma.pgPool) {
    globalForPrisma.pgPool = pool;
}

// 2. Instanciar el adaptador de Prisma
const adapter = new PrismaPg(pool);

// 3. Crear o reutilizar la instancia de PrismaClient
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = prisma;
}

export default prisma;