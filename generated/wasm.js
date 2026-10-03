
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nombre: 'nombre',
  apellido: 'apellido',
  email: 'email',
  password_hash: 'password_hash',
  telefono: 'telefono',
  tipo_usuario: 'tipo_usuario',
  creado_en: 'creado_en'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.AdministradorScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nivel_acceso: 'nivel_acceso',
  departamento: 'departamento'
};

exports.Prisma.TecnicoScalarFieldEnum = {
  id_usuario: 'id_usuario',
  especialidad: 'especialidad',
  matricula: 'matricula',
  estado_disponibilidad: 'estado_disponibilidad'
};

exports.Prisma.ClienteScalarFieldEnum = {
  id_cliente: 'id_cliente',
  nombre_empresa: 'nombre_empresa',
  contacto_nombre: 'contacto_nombre',
  telefono: 'telefono',
  email: 'email',
  direccion: 'direccion',
  creado_en: 'creado_en'
};

exports.Prisma.EquipoScalarFieldEnum = {
  id_equipo: 'id_equipo',
  id_cliente: 'id_cliente',
  nombre_equipo: 'nombre_equipo',
  marca: 'marca',
  modelo: 'modelo',
  numero_serie: 'numero_serie',
  ubicacion_interna: 'ubicacion_interna',
  tipo_refrigerante: 'tipo_refrigerante'
};

exports.Prisma.OrdenTrabajoScalarFieldEnum = {
  id_orden: 'id_orden',
  id_equipo: 'id_equipo',
  id_tecnico: 'id_tecnico',
  tipo_mantenimiento: 'tipo_mantenimiento',
  estado: 'estado',
  prioridad: 'prioridad',
  fecha_programada: 'fecha_programada',
  descripcion_tarea: 'descripcion_tarea',
  comentario_respuesta: 'comentario_respuesta',
  fecha_respuesta: 'fecha_respuesta',
  creado_en: 'creado_en'
};

exports.Prisma.IntervencionScalarFieldEnum = {
  id_intervencion: 'id_intervencion',
  id_orden: 'id_orden',
  fecha_ejecucion: 'fecha_ejecucion',
  presion_alta: 'presion_alta',
  presion_baja: 'presion_baja',
  temperatura_salida: 'temperatura_salida',
  corriente_consumo: 'corriente_consumo',
  checklist_completado: 'checklist_completado',
  observaciones: 'observaciones',
  url_imagen_adjunta: 'url_imagen_adjunta'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoUsuario = exports.$Enums.TipoUsuario = {
  ADMIN: 'ADMIN',
  TECNICO: 'TECNICO'
};

exports.TipoMantenimiento = exports.$Enums.TipoMantenimiento = {
  PREVENTIVO: 'PREVENTIVO',
  CORRECTIVO: 'CORRECTIVO'
};

exports.EstadoOrden = exports.$Enums.EstadoOrden = {
  PENDIENTE: 'PENDIENTE',
  ACEPTADA: 'ACEPTADA',
  RECHAZADA: 'RECHAZADA',
  EN_PROCESO: 'EN_PROCESO',
  COMPLETADA: 'COMPLETADA',
  CANCELADA: 'CANCELADA'
};

exports.EstadoDisponibilidad = exports.$Enums.EstadoDisponibilidad = {
  DISPONIBLE: 'DISPONIBLE',
  EN_CAMPO: 'EN_CAMPO',
  LICENCIA: 'LICENCIA',
  INACTIVO: 'INACTIVO'
};

exports.Prioridad = exports.$Enums.Prioridad = {
  BAJA: 'BAJA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Administrador: 'Administrador',
  Tecnico: 'Tecnico',
  Cliente: 'Cliente',
  Equipo: 'Equipo',
  OrdenTrabajo: 'OrdenTrabajo',
  Intervencion: 'Intervencion'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/clau_/rutina-ok-app/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "relationJoins"
    ],
    "sourceFilePath": "/home/clau_/rutina-ok-app/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../.env"
  },
  "relativePath": "../prisma",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated\"\n  previewFeatures = [\"driverAdapters\", \"relationJoins\"]\n  binaryTargets   = [\"native\", \"rhel-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Usuario {\n  id_usuario    Int            @id @default(autoincrement())\n  nombre        String\n  apellido      String\n  email         String         @unique\n  password_hash String\n  telefono      String?\n  tipo_usuario  TipoUsuario\n  creado_en     DateTime       @default(now())\n  administrador Administrador?\n  tecnico       Tecnico?\n\n  @@map(\"usuarios\")\n}\n\nmodel Administrador {\n  id_usuario   Int     @id\n  nivel_acceso String  @default(\"OPERADOR\")\n  departamento String?\n  usuario      Usuario @relation(fields: [id_usuario], references: [id_usuario], onDelete: Cascade)\n\n  @@map(\"administradores\")\n}\n\nmodel Tecnico {\n  id_usuario            Int                  @id\n  especialidad          String?\n  matricula             String?\n  estado_disponibilidad EstadoDisponibilidad @default(DISPONIBLE)\n  ordenes               OrdenTrabajo[]\n  usuario               Usuario              @relation(fields: [id_usuario], references: [id_usuario], onDelete: Cascade)\n\n  @@map(\"tecnicos\")\n}\n\nmodel Cliente {\n  id_cliente      Int      @id @default(autoincrement())\n  nombre_empresa  String\n  contacto_nombre String?\n  telefono        String?\n  email           String?\n  direccion       String\n  creado_en       DateTime @default(now())\n  equipos         Equipo[]\n\n  @@map(\"clientes\")\n}\n\nmodel Equipo {\n  id_equipo         Int            @id @default(autoincrement())\n  id_cliente        Int\n  nombre_equipo     String\n  marca             String\n  modelo            String\n  numero_serie      String         @unique\n  ubicacion_interna String?\n  tipo_refrigerante String?\n  cliente           Cliente        @relation(fields: [id_cliente], references: [id_cliente])\n  ordenes           OrdenTrabajo[]\n\n  @@map(\"equipos\")\n}\n\nmodel OrdenTrabajo {\n  id_orden             Int               @id @default(autoincrement())\n  id_equipo            Int\n  id_tecnico           Int\n  tipo_mantenimiento   TipoMantenimiento\n  estado               EstadoOrden       @default(PENDIENTE)\n  prioridad            Prioridad         @default(MEDIA)\n  fecha_programada     DateTime\n  descripcion_tarea    String\n  comentario_respuesta String?\n  fecha_respuesta      DateTime?\n  creado_en            DateTime          @default(now())\n  intervenciones       Intervencion[]\n  equipo               Equipo            @relation(fields: [id_equipo], references: [id_equipo])\n  tecnico              Tecnico           @relation(fields: [id_tecnico], references: [id_usuario])\n\n  @@map(\"ordenes_trabajo\")\n}\n\nmodel Intervencion {\n  id_intervencion      Int          @id @default(autoincrement())\n  id_orden             Int\n  fecha_ejecucion      DateTime     @default(now())\n  presion_alta         Decimal?     @db.Decimal(6, 2)\n  presion_baja         Decimal?     @db.Decimal(6, 2)\n  temperatura_salida   Decimal?     @db.Decimal(5, 2)\n  corriente_consumo    Decimal?     @db.Decimal(5, 2)\n  checklist_completado Boolean      @default(false)\n  observaciones        String?\n  url_imagen_adjunta   String?\n  orden                OrdenTrabajo @relation(fields: [id_orden], references: [id_orden], onDelete: Cascade)\n\n  @@map(\"intervenciones\")\n}\n\nenum TipoUsuario {\n  ADMIN\n  TECNICO\n}\n\nenum TipoMantenimiento {\n  PREVENTIVO\n  CORRECTIVO\n}\n\nenum EstadoOrden {\n  PENDIENTE\n  ACEPTADA\n  RECHAZADA\n  EN_PROCESO\n  COMPLETADA\n  CANCELADA\n}\n\nenum EstadoDisponibilidad {\n  DISPONIBLE\n  EN_CAMPO\n  LICENCIA\n  INACTIVO\n}\n\nenum Prioridad {\n  BAJA\n  MEDIA\n  ALTA\n  URGENTE\n}\n",
  "inlineSchemaHash": "9f78aca14f66e84b3a2f16e907a69247bda0a27f76d3025a43567a3fedd2bb49",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apellido\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password_hash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"telefono\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tipo_usuario\",\"kind\":\"enum\",\"type\":\"TipoUsuario\"},{\"name\":\"creado_en\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"administrador\",\"kind\":\"object\",\"type\":\"Administrador\",\"relationName\":\"AdministradorToUsuario\"},{\"name\":\"tecnico\",\"kind\":\"object\",\"type\":\"Tecnico\",\"relationName\":\"TecnicoToUsuario\"}],\"dbName\":\"usuarios\"},\"Administrador\":{\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nivel_acceso\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"departamento\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"usuario\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"AdministradorToUsuario\"}],\"dbName\":\"administradores\"},\"Tecnico\":{\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"especialidad\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"matricula\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"estado_disponibilidad\",\"kind\":\"enum\",\"type\":\"EstadoDisponibilidad\"},{\"name\":\"ordenes\",\"kind\":\"object\",\"type\":\"OrdenTrabajo\",\"relationName\":\"OrdenTrabajoToTecnico\"},{\"name\":\"usuario\",\"kind\":\"object\",\"type\":\"Usuario\",\"relationName\":\"TecnicoToUsuario\"}],\"dbName\":\"tecnicos\"},\"Cliente\":{\"fields\":[{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre_empresa\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contacto_nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"telefono\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"direccion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creado_en\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"equipos\",\"kind\":\"object\",\"type\":\"Equipo\",\"relationName\":\"ClienteToEquipo\"}],\"dbName\":\"clientes\"},\"Equipo\":{\"fields\":[{\"name\":\"id_equipo\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre_equipo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"marca\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modelo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"numero_serie\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ubicacion_interna\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tipo_refrigerante\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cliente\",\"kind\":\"object\",\"type\":\"Cliente\",\"relationName\":\"ClienteToEquipo\"},{\"name\":\"ordenes\",\"kind\":\"object\",\"type\":\"OrdenTrabajo\",\"relationName\":\"EquipoToOrdenTrabajo\"}],\"dbName\":\"equipos\"},\"OrdenTrabajo\":{\"fields\":[{\"name\":\"id_orden\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_equipo\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_tecnico\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tipo_mantenimiento\",\"kind\":\"enum\",\"type\":\"TipoMantenimiento\"},{\"name\":\"estado\",\"kind\":\"enum\",\"type\":\"EstadoOrden\"},{\"name\":\"prioridad\",\"kind\":\"enum\",\"type\":\"Prioridad\"},{\"name\":\"fecha_programada\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"descripcion_tarea\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"comentario_respuesta\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fecha_respuesta\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"creado_en\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"intervenciones\",\"kind\":\"object\",\"type\":\"Intervencion\",\"relationName\":\"IntervencionToOrdenTrabajo\"},{\"name\":\"equipo\",\"kind\":\"object\",\"type\":\"Equipo\",\"relationName\":\"EquipoToOrdenTrabajo\"},{\"name\":\"tecnico\",\"kind\":\"object\",\"type\":\"Tecnico\",\"relationName\":\"OrdenTrabajoToTecnico\"}],\"dbName\":\"ordenes_trabajo\"},\"Intervencion\":{\"fields\":[{\"name\":\"id_intervencion\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_orden\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fecha_ejecucion\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"presion_alta\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"presion_baja\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"temperatura_salida\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"corriente_consumo\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"checklist_completado\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"observaciones\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"url_imagen_adjunta\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orden\",\"kind\":\"object\",\"type\":\"OrdenTrabajo\",\"relationName\":\"IntervencionToOrdenTrabajo\"}],\"dbName\":\"intervenciones\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

