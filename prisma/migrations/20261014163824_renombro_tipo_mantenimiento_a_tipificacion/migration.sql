/*
  Warnings:

  - You are about to drop the column `tipo_mantenimiento` on the `ordenes_trabajo` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Tipificacion" AS ENUM ('AIRE_ACONDICIONADO', 'INSTALACION_ELECTRICA');

-- AlterTable
ALTER TABLE "ordenes_trabajo" DROP COLUMN "tipo_mantenimiento",
ADD COLUMN     "tipificacion" "Tipificacion" NOT NULL DEFAULT 'AIRE_ACONDICIONADO';

-- DropEnum
DROP TYPE "TipoMantenimiento";
