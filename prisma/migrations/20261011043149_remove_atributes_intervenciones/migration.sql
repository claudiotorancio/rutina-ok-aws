/*
  Warnings:

  - You are about to drop the column `corriente_consumo` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `observaciones` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `presion_alta` on the `intervenciones` table. All the data in the column will be lost.
  - You are about to drop the column `presion_baja` on the `intervenciones` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "intervenciones" DROP COLUMN "corriente_consumo",
DROP COLUMN "observaciones",
DROP COLUMN "presion_alta",
DROP COLUMN "presion_baja";
