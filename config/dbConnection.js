
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/generated/index.js';

// 1. Crear el pool de conexión nativo de PostgreSQL
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 2. Instanciar el adaptador de Prisma para PostgreSQL
const adapter = new PrismaPg(pool);

// 3. Pasar el adaptador a la instancia de PrismaClient
const prisma = new PrismaClient({ adapter });

export default prisma;
