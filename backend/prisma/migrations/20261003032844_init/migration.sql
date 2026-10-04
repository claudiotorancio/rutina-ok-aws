-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'TECNICO');

-- CreateEnum
CREATE TYPE "TipoMantenimiento" AS ENUM ('PREVENTIVO', 'CORRECTIVO');

-- CreateEnum
CREATE TYPE "EstadoOrden" AS ENUM ('PENDIENTE', 'ACEPTADA', 'RECHAZADA', 'EN_PROCESO', 'COMPLETADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "EstadoDisponibilidad" AS ENUM ('DISPONIBLE', 'EN_CAMPO', 'LICENCIA', 'INACTIVO');

-- CreateEnum
CREATE TYPE "Prioridad" AS ENUM ('BAJA', 'MEDIA', 'ALTA', 'URGENTE');

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "telefono" TEXT,
    "tipo_usuario" "TipoUsuario" NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "administradores" (
    "id_usuario" INTEGER NOT NULL,
    "nivel_acceso" TEXT NOT NULL DEFAULT 'OPERADOR',
    "departamento" TEXT,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "tecnicos" (
    "id_usuario" INTEGER NOT NULL,
    "especialidad" TEXT,
    "matricula" TEXT,
    "estado_disponibilidad" "EstadoDisponibilidad" NOT NULL DEFAULT 'DISPONIBLE',

    CONSTRAINT "tecnicos_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre_empresa" TEXT NOT NULL,
    "contacto_nombre" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "direccion" TEXT NOT NULL,
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "equipos" (
    "id_equipo" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "nombre_equipo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "numero_serie" TEXT NOT NULL,
    "ubicacion_interna" TEXT,
    "tipo_refrigerante" TEXT,

    CONSTRAINT "equipos_pkey" PRIMARY KEY ("id_equipo")
);

-- CreateTable
CREATE TABLE "ordenes_trabajo" (
    "id_orden" SERIAL NOT NULL,
    "id_equipo" INTEGER NOT NULL,
    "id_tecnico" INTEGER NOT NULL,
    "tipo_mantenimiento" "TipoMantenimiento" NOT NULL,
    "estado" "EstadoOrden" NOT NULL DEFAULT 'PENDIENTE',
    "prioridad" "Prioridad" NOT NULL DEFAULT 'MEDIA',
    "fecha_programada" TIMESTAMP(3) NOT NULL,
    "descripcion_tarea" TEXT NOT NULL,
    "comentario_respuesta" TEXT,
    "fecha_respuesta" TIMESTAMP(3),
    "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ordenes_trabajo_pkey" PRIMARY KEY ("id_orden")
);

-- CreateTable
CREATE TABLE "intervenciones" (
    "id_intervencion" SERIAL NOT NULL,
    "id_orden" INTEGER NOT NULL,
    "fecha_ejecucion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "presion_alta" DECIMAL(6,2),
    "presion_baja" DECIMAL(6,2),
    "temperatura_salida" DECIMAL(5,2),
    "corriente_consumo" DECIMAL(5,2),
    "checklist_completado" BOOLEAN NOT NULL DEFAULT false,
    "observaciones" TEXT,
    "url_imagen_adjunta" TEXT,

    CONSTRAINT "intervenciones_pkey" PRIMARY KEY ("id_intervencion")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "equipos_numero_serie_key" ON "equipos"("numero_serie");

-- AddForeignKey
ALTER TABLE "administradores" ADD CONSTRAINT "administradores_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnicos" ADD CONSTRAINT "tecnicos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipos" ADD CONSTRAINT "equipos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordenes_trabajo" ADD CONSTRAINT "ordenes_trabajo_id_equipo_fkey" FOREIGN KEY ("id_equipo") REFERENCES "equipos"("id_equipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordenes_trabajo" ADD CONSTRAINT "ordenes_trabajo_id_tecnico_fkey" FOREIGN KEY ("id_tecnico") REFERENCES "tecnicos"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "intervenciones" ADD CONSTRAINT "intervenciones_id_orden_fkey" FOREIGN KEY ("id_orden") REFERENCES "ordenes_trabajo"("id_orden") ON DELETE CASCADE ON UPDATE CASCADE;
