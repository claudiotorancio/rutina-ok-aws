import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/index.js';

const connectionString = process.env.DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';

const globalForPrisma = globalThis;

// 1. Inicializamos el pool nativo de pg con límites seguros
const pool = globalForPrisma.pgPool || new pg.Pool({
    connectionString,
    max: isProduction ? 1 : 5,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
});

if (!globalForPrisma.pgPool) {
    globalForPrisma.pgPool = pool;
}

// 2. Creamos el adaptador requerido por Prisma 7
const adapter = new PrismaPg(pool);

// 3. Instanciamos Prisma pasándole obligatoriamente el adaptador
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (!isProduction) {
    globalForPrisma.prisma = prisma;
}

export default prisma;