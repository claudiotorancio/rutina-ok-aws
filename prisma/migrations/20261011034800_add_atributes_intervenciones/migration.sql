/*
  Warnings:

  - You are about to drop the column `checklist_completado` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_ejecucion` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `temperatura_salida` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `url_imagen_adjunta` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to alter the column `presion_alta` on the `intervenciones` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `DoublePrecision`.
  - You are about to alter the column `presion_baja` on the `intervenciones` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `DoublePrecision`.
  - You are about to alter the column `corriente_consumo` on the `intervenciones` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - A unique constraint covering the columns `[id_orden]` on the table `intervenciones` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tipo` to the `intervenciones` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoIntervencion" AS ENUM ('RECARGA_GAS', 'PREVENTIVO', 'CORRECTIVO', 'INSTALACION_ELECTRICA');

-- DropForeignKey
ALTER TABLE "intervenciones" DROP CONSTRAINT "intervenciones_id_orden_fkey";

-- AlterTable
ALTER TABLE "intervenciones" DROP COLUMN "checklist_completado",
DROP COLUMN "fecha_ejecucion",
DROP COLUMN "temperatura_salida",
DROP COLUMN "url_imagen_adjunta",
ADD COLUMN     "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "detalles_json" JSONB,
ADD COLUMN     "tipo" "TipoIntervencion" NOT NULL,
ALTER COLUMN "presion_alta" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "presion_baja" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "corriente_consumo" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "intervenciones_id_orden_key" ON "intervenciones"("id_orden");

-- AddForeignKey
ALTER TABLE "intervenciones" ADD CONSTRAINT "intervenciones_id_orden_fkey" FOREIGN KEY ("id_orden") REFERENCES "ordenes_trabajo"("id_orden") ON DELETE RESTRICT ON UPDATE CASCADE;
