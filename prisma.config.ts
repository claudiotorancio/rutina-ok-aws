import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        // Aquí es donde Prisma 7 busca la URL para las migraciones y CLI
        url: env("DATABASE_URL"),
    },
});