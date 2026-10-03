
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Tecnico
 * 
 */
export type Tecnico = $Result.DefaultSelection<Prisma.$TecnicoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Equipo
 * 
 */
export type Equipo = $Result.DefaultSelection<Prisma.$EquipoPayload>
/**
 * Model OrdenTrabajo
 * 
 */
export type OrdenTrabajo = $Result.DefaultSelection<Prisma.$OrdenTrabajoPayload>
/**
 * Model Intervencion
 * 
 */
export type Intervencion = $Result.DefaultSelection<Prisma.$IntervencionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  ADMIN: 'ADMIN',
  TECNICO: 'TECNICO'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const TipoMantenimiento: {
  PREVENTIVO: 'PREVENTIVO',
  CORRECTIVO: 'CORRECTIVO'
};

export type TipoMantenimiento = (typeof TipoMantenimiento)[keyof typeof TipoMantenimiento]


export const EstadoOrden: {
  PENDIENTE: 'PENDIENTE',
  ACEPTADA: 'ACEPTADA',
  RECHAZADA: 'RECHAZADA',
  EN_PROCESO: 'EN_PROCESO',
  COMPLETADA: 'COMPLETADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoOrden = (typeof EstadoOrden)[keyof typeof EstadoOrden]


export const EstadoDisponibilidad: {
  DISPONIBLE: 'DISPONIBLE',
  EN_CAMPO: 'EN_CAMPO',
  LICENCIA: 'LICENCIA',
  INACTIVO: 'INACTIVO'
};

export type EstadoDisponibilidad = (typeof EstadoDisponibilidad)[keyof typeof EstadoDisponibilidad]


export const Prioridad: {
  BAJA: 'BAJA',
  MEDIA: 'MEDIA',
  ALTA: 'ALTA',
  URGENTE: 'URGENTE'
};

export type Prioridad = (typeof Prioridad)[keyof typeof Prioridad]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type TipoMantenimiento = $Enums.TipoMantenimiento

export const TipoMantenimiento: typeof $Enums.TipoMantenimiento

export type EstadoOrden = $Enums.EstadoOrden

export const EstadoOrden: typeof $Enums.EstadoOrden

export type EstadoDisponibilidad = $Enums.EstadoDisponibilidad

export const EstadoDisponibilidad: typeof $Enums.EstadoDisponibilidad

export type Prioridad = $Enums.Prioridad

export const Prioridad: typeof $Enums.Prioridad

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tecnico`: Exposes CRUD operations for the **Tecnico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnicos
    * const tecnicos = await prisma.tecnico.findMany()
    * ```
    */
  get tecnico(): Prisma.TecnicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipo`: Exposes CRUD operations for the **Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.EquipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenTrabajo`: Exposes CRUD operations for the **OrdenTrabajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenTrabajos
    * const ordenTrabajos = await prisma.ordenTrabajo.findMany()
    * ```
    */
  get ordenTrabajo(): Prisma.OrdenTrabajoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intervencion`: Exposes CRUD operations for the **Intervencion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intervencions
    * const intervencions = await prisma.intervencion.findMany()
    * ```
    */
  get intervencion(): Prisma.IntervencionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Administrador: 'Administrador',
    Tecnico: 'Tecnico',
    Cliente: 'Cliente',
    Equipo: 'Equipo',
    OrdenTrabajo: 'OrdenTrabajo',
    Intervencion: 'Intervencion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "administrador" | "tecnico" | "cliente" | "equipo" | "ordenTrabajo" | "intervencion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Tecnico: {
        payload: Prisma.$TecnicoPayload<ExtArgs>
        fields: Prisma.TecnicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TecnicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TecnicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findFirst: {
            args: Prisma.TecnicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TecnicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          findMany: {
            args: Prisma.TecnicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          create: {
            args: Prisma.TecnicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          createMany: {
            args: Prisma.TecnicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TecnicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          delete: {
            args: Prisma.TecnicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          update: {
            args: Prisma.TecnicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          deleteMany: {
            args: Prisma.TecnicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TecnicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TecnicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>[]
          }
          upsert: {
            args: Prisma.TecnicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnicoPayload>
          }
          aggregate: {
            args: Prisma.TecnicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnico>
          }
          groupBy: {
            args: Prisma.TecnicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TecnicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TecnicoCountArgs<ExtArgs>
            result: $Utils.Optional<TecnicoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Equipo: {
        payload: Prisma.$EquipoPayload<ExtArgs>
        fields: Prisma.EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findFirst: {
            args: Prisma.EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findMany: {
            args: Prisma.EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          create: {
            args: Prisma.EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          createMany: {
            args: Prisma.EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          delete: {
            args: Prisma.EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          update: {
            args: Prisma.EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          deleteMany: {
            args: Prisma.EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          upsert: {
            args: Prisma.EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
          }
        }
      }
      OrdenTrabajo: {
        payload: Prisma.$OrdenTrabajoPayload<ExtArgs>
        fields: Prisma.OrdenTrabajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenTrabajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenTrabajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          findFirst: {
            args: Prisma.OrdenTrabajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenTrabajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          findMany: {
            args: Prisma.OrdenTrabajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>[]
          }
          create: {
            args: Prisma.OrdenTrabajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          createMany: {
            args: Prisma.OrdenTrabajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenTrabajoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>[]
          }
          delete: {
            args: Prisma.OrdenTrabajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          update: {
            args: Prisma.OrdenTrabajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          deleteMany: {
            args: Prisma.OrdenTrabajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenTrabajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenTrabajoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>[]
          }
          upsert: {
            args: Prisma.OrdenTrabajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenTrabajoPayload>
          }
          aggregate: {
            args: Prisma.OrdenTrabajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenTrabajo>
          }
          groupBy: {
            args: Prisma.OrdenTrabajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenTrabajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenTrabajoCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenTrabajoCountAggregateOutputType> | number
          }
        }
      }
      Intervencion: {
        payload: Prisma.$IntervencionPayload<ExtArgs>
        fields: Prisma.IntervencionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntervencionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntervencionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          findFirst: {
            args: Prisma.IntervencionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntervencionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          findMany: {
            args: Prisma.IntervencionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>[]
          }
          create: {
            args: Prisma.IntervencionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          createMany: {
            args: Prisma.IntervencionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntervencionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>[]
          }
          delete: {
            args: Prisma.IntervencionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          update: {
            args: Prisma.IntervencionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          deleteMany: {
            args: Prisma.IntervencionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntervencionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntervencionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>[]
          }
          upsert: {
            args: Prisma.IntervencionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntervencionPayload>
          }
          aggregate: {
            args: Prisma.IntervencionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntervencion>
          }
          groupBy: {
            args: Prisma.IntervencionGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntervencionGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntervencionCountArgs<ExtArgs>
            result: $Utils.Optional<IntervencionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    administrador?: AdministradorOmit
    tecnico?: TecnicoOmit
    cliente?: ClienteOmit
    equipo?: EquipoOmit
    ordenTrabajo?: OrdenTrabajoOmit
    intervencion?: IntervencionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TecnicoCountOutputType
   */

  export type TecnicoCountOutputType = {
    ordenes: number
  }

  export type TecnicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | TecnicoCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TecnicoCountOutputType
     */
    select?: TecnicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TecnicoCountOutputType without action
   */
  export type TecnicoCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenTrabajoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    equipos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | ClienteCountOutputTypeCountEquiposArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
  }


  /**
   * Count Type EquipoCountOutputType
   */

  export type EquipoCountOutputType = {
    ordenes: number
  }

  export type EquipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | EquipoCountOutputTypeCountOrdenesArgs
  }

  // Custom InputTypes
  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipoCountOutputType
     */
    select?: EquipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipoCountOutputType without action
   */
  export type EquipoCountOutputTypeCountOrdenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenTrabajoWhereInput
  }


  /**
   * Count Type OrdenTrabajoCountOutputType
   */

  export type OrdenTrabajoCountOutputType = {
    intervenciones: number
  }

  export type OrdenTrabajoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intervenciones?: boolean | OrdenTrabajoCountOutputTypeCountIntervencionesArgs
  }

  // Custom InputTypes
  /**
   * OrdenTrabajoCountOutputType without action
   */
  export type OrdenTrabajoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajoCountOutputType
     */
    select?: OrdenTrabajoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenTrabajoCountOutputType without action
   */
  export type OrdenTrabajoCountOutputTypeCountIntervencionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntervencionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password_hash: string | null
    telefono: string | null
    tipo_usuario: $Enums.TipoUsuario | null
    creado_en: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password_hash: string | null
    telefono: string | null
    tipo_usuario: $Enums.TipoUsuario | null
    creado_en: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    email: number
    password_hash: number
    telefono: number
    tipo_usuario: number
    creado_en: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    password_hash?: true
    telefono?: true
    tipo_usuario?: true
    creado_en?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    password_hash?: true
    telefono?: true
    tipo_usuario?: true
    creado_en?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    password_hash?: true
    telefono?: true
    tipo_usuario?: true
    creado_en?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password_hash?: boolean
    telefono?: boolean
    tipo_usuario?: boolean
    creado_en?: boolean
    administrador?: boolean | Usuario$administradorArgs<ExtArgs>
    tecnico?: boolean | Usuario$tecnicoArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password_hash?: boolean
    telefono?: boolean
    tipo_usuario?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password_hash?: boolean
    telefono?: boolean
    tipo_usuario?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password_hash?: boolean
    telefono?: boolean
    tipo_usuario?: boolean
    creado_en?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "email" | "password_hash" | "telefono" | "tipo_usuario" | "creado_en", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | Usuario$administradorArgs<ExtArgs>
    tecnico?: boolean | Usuario$tecnicoArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      administrador: Prisma.$AdministradorPayload<ExtArgs> | null
      tecnico: Prisma.$TecnicoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      email: string
      password_hash: string
      telefono: string | null
      tipo_usuario: $Enums.TipoUsuario
      creado_en: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends Usuario$administradorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$administradorArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends Usuario$tecnicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tecnicoArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password_hash: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly tipo_usuario: FieldRef<"Usuario", 'TipoUsuario'>
    readonly creado_en: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.administrador
   */
  export type Usuario$administradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    where?: AdministradorWhereInput
  }

  /**
   * Usuario.tecnico
   */
  export type Usuario$tecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    where?: TecnicoWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id_usuario: number | null
    nivel_acceso: string | null
    departamento: string | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id_usuario: number | null
    nivel_acceso: string | null
    departamento: string | null
  }

  export type AdministradorCountAggregateOutputType = {
    id_usuario: number
    nivel_acceso: number
    departamento: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id_usuario?: true
  }

  export type AdministradorSumAggregateInputType = {
    id_usuario?: true
  }

  export type AdministradorMinAggregateInputType = {
    id_usuario?: true
    nivel_acceso?: true
    departamento?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id_usuario?: true
    nivel_acceso?: true
    departamento?: true
  }

  export type AdministradorCountAggregateInputType = {
    id_usuario?: true
    nivel_acceso?: true
    departamento?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id_usuario: number
    nivel_acceso: string
    departamento: string | null
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nivel_acceso?: boolean
    departamento?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nivel_acceso?: boolean
    departamento?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nivel_acceso?: boolean
    departamento?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id_usuario?: boolean
    nivel_acceso?: boolean
    departamento?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nivel_acceso" | "departamento", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nivel_acceso: string
      departamento: string | null
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const administradorWithId_usuarioOnly = await prisma.administrador.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id_usuario`
     * const administradorWithId_usuarioOnly = await prisma.administrador.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `id_usuario`
     * const administradorWithId_usuarioOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id_usuario: FieldRef<"Administrador", 'Int'>
    readonly nivel_acceso: FieldRef<"Administrador", 'String'>
    readonly departamento: FieldRef<"Administrador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Tecnico
   */

  export type AggregateTecnico = {
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  export type TecnicoAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type TecnicoSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type TecnicoMinAggregateOutputType = {
    id_usuario: number | null
    especialidad: string | null
    matricula: string | null
    estado_disponibilidad: $Enums.EstadoDisponibilidad | null
  }

  export type TecnicoMaxAggregateOutputType = {
    id_usuario: number | null
    especialidad: string | null
    matricula: string | null
    estado_disponibilidad: $Enums.EstadoDisponibilidad | null
  }

  export type TecnicoCountAggregateOutputType = {
    id_usuario: number
    especialidad: number
    matricula: number
    estado_disponibilidad: number
    _all: number
  }


  export type TecnicoAvgAggregateInputType = {
    id_usuario?: true
  }

  export type TecnicoSumAggregateInputType = {
    id_usuario?: true
  }

  export type TecnicoMinAggregateInputType = {
    id_usuario?: true
    especialidad?: true
    matricula?: true
    estado_disponibilidad?: true
  }

  export type TecnicoMaxAggregateInputType = {
    id_usuario?: true
    especialidad?: true
    matricula?: true
    estado_disponibilidad?: true
  }

  export type TecnicoCountAggregateInputType = {
    id_usuario?: true
    especialidad?: true
    matricula?: true
    estado_disponibilidad?: true
    _all?: true
  }

  export type TecnicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnico to aggregate.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tecnicos
    **/
    _count?: true | TecnicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TecnicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TecnicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnicoMaxAggregateInputType
  }

  export type GetTecnicoAggregateType<T extends TecnicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnico[P]>
      : GetScalarType<T[P], AggregateTecnico[P]>
  }




  export type TecnicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnicoWhereInput
    orderBy?: TecnicoOrderByWithAggregationInput | TecnicoOrderByWithAggregationInput[]
    by: TecnicoScalarFieldEnum[] | TecnicoScalarFieldEnum
    having?: TecnicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnicoCountAggregateInputType | true
    _avg?: TecnicoAvgAggregateInputType
    _sum?: TecnicoSumAggregateInputType
    _min?: TecnicoMinAggregateInputType
    _max?: TecnicoMaxAggregateInputType
  }

  export type TecnicoGroupByOutputType = {
    id_usuario: number
    especialidad: string | null
    matricula: string | null
    estado_disponibilidad: $Enums.EstadoDisponibilidad
    _count: TecnicoCountAggregateOutputType | null
    _avg: TecnicoAvgAggregateOutputType | null
    _sum: TecnicoSumAggregateOutputType | null
    _min: TecnicoMinAggregateOutputType | null
    _max: TecnicoMaxAggregateOutputType | null
  }

  type GetTecnicoGroupByPayload<T extends TecnicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TecnicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
            : GetScalarType<T[P], TecnicoGroupByOutputType[P]>
        }
      >
    >


  export type TecnicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    especialidad?: boolean
    matricula?: boolean
    estado_disponibilidad?: boolean
    ordenes?: boolean | Tecnico$ordenesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    especialidad?: boolean
    matricula?: boolean
    estado_disponibilidad?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    especialidad?: boolean
    matricula?: boolean
    estado_disponibilidad?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnico"]>

  export type TecnicoSelectScalar = {
    id_usuario?: boolean
    especialidad?: boolean
    matricula?: boolean
    estado_disponibilidad?: boolean
  }

  export type TecnicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "especialidad" | "matricula" | "estado_disponibilidad", ExtArgs["result"]["tecnico"]>
  export type TecnicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordenes?: boolean | Tecnico$ordenesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | TecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TecnicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TecnicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TecnicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tecnico"
    objects: {
      ordenes: Prisma.$OrdenTrabajoPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      especialidad: string | null
      matricula: string | null
      estado_disponibilidad: $Enums.EstadoDisponibilidad
    }, ExtArgs["result"]["tecnico"]>
    composites: {}
  }

  type TecnicoGetPayload<S extends boolean | null | undefined | TecnicoDefaultArgs> = $Result.GetResult<Prisma.$TecnicoPayload, S>

  type TecnicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TecnicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TecnicoCountAggregateInputType | true
    }

  export interface TecnicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tecnico'], meta: { name: 'Tecnico' } }
    /**
     * Find zero or one Tecnico that matches the filter.
     * @param {TecnicoFindUniqueArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TecnicoFindUniqueArgs>(args: SelectSubset<T, TecnicoFindUniqueArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TecnicoFindUniqueOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TecnicoFindUniqueOrThrowArgs>(args: SelectSubset<T, TecnicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TecnicoFindFirstArgs>(args?: SelectSubset<T, TecnicoFindFirstArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindFirstOrThrowArgs} args - Arguments to find a Tecnico
     * @example
     * // Get one Tecnico
     * const tecnico = await prisma.tecnico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TecnicoFindFirstOrThrowArgs>(args?: SelectSubset<T, TecnicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnicos
     * const tecnicos = await prisma.tecnico.findMany()
     * 
     * // Get first 10 Tecnicos
     * const tecnicos = await prisma.tecnico.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const tecnicoWithId_usuarioOnly = await prisma.tecnico.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends TecnicoFindManyArgs>(args?: SelectSubset<T, TecnicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnico.
     * @param {TecnicoCreateArgs} args - Arguments to create a Tecnico.
     * @example
     * // Create one Tecnico
     * const Tecnico = await prisma.tecnico.create({
     *   data: {
     *     // ... data to create a Tecnico
     *   }
     * })
     * 
     */
    create<T extends TecnicoCreateArgs>(args: SelectSubset<T, TecnicoCreateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnicos.
     * @param {TecnicoCreateManyArgs} args - Arguments to create many Tecnicos.
     * @example
     * // Create many Tecnicos
     * const tecnico = await prisma.tecnico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TecnicoCreateManyArgs>(args?: SelectSubset<T, TecnicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tecnicos and returns the data saved in the database.
     * @param {TecnicoCreateManyAndReturnArgs} args - Arguments to create many Tecnicos.
     * @example
     * // Create many Tecnicos
     * const tecnico = await prisma.tecnico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tecnicos and only return the `id_usuario`
     * const tecnicoWithId_usuarioOnly = await prisma.tecnico.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TecnicoCreateManyAndReturnArgs>(args?: SelectSubset<T, TecnicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tecnico.
     * @param {TecnicoDeleteArgs} args - Arguments to delete one Tecnico.
     * @example
     * // Delete one Tecnico
     * const Tecnico = await prisma.tecnico.delete({
     *   where: {
     *     // ... filter to delete one Tecnico
     *   }
     * })
     * 
     */
    delete<T extends TecnicoDeleteArgs>(args: SelectSubset<T, TecnicoDeleteArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnico.
     * @param {TecnicoUpdateArgs} args - Arguments to update one Tecnico.
     * @example
     * // Update one Tecnico
     * const tecnico = await prisma.tecnico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TecnicoUpdateArgs>(args: SelectSubset<T, TecnicoUpdateArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnicos.
     * @param {TecnicoDeleteManyArgs} args - Arguments to filter Tecnicos to delete.
     * @example
     * // Delete a few Tecnicos
     * const { count } = await prisma.tecnico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TecnicoDeleteManyArgs>(args?: SelectSubset<T, TecnicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnicos
     * const tecnico = await prisma.tecnico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TecnicoUpdateManyArgs>(args: SelectSubset<T, TecnicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnicos and returns the data updated in the database.
     * @param {TecnicoUpdateManyAndReturnArgs} args - Arguments to update many Tecnicos.
     * @example
     * // Update many Tecnicos
     * const tecnico = await prisma.tecnico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tecnicos and only return the `id_usuario`
     * const tecnicoWithId_usuarioOnly = await prisma.tecnico.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TecnicoUpdateManyAndReturnArgs>(args: SelectSubset<T, TecnicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tecnico.
     * @param {TecnicoUpsertArgs} args - Arguments to update or create a Tecnico.
     * @example
     * // Update or create a Tecnico
     * const tecnico = await prisma.tecnico.upsert({
     *   create: {
     *     // ... data to create a Tecnico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnico we want to update
     *   }
     * })
     */
    upsert<T extends TecnicoUpsertArgs>(args: SelectSubset<T, TecnicoUpsertArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoCountArgs} args - Arguments to filter Tecnicos to count.
     * @example
     * // Count the number of Tecnicos
     * const count = await prisma.tecnico.count({
     *   where: {
     *     // ... the filter for the Tecnicos we want to count
     *   }
     * })
    **/
    count<T extends TecnicoCountArgs>(
      args?: Subset<T, TecnicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TecnicoAggregateArgs>(args: Subset<T, TecnicoAggregateArgs>): Prisma.PrismaPromise<GetTecnicoAggregateType<T>>

    /**
     * Group by Tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TecnicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TecnicoGroupByArgs['orderBy'] }
        : { orderBy?: TecnicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TecnicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tecnico model
   */
  readonly fields: TecnicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tecnico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TecnicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordenes<T extends Tecnico$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Tecnico$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tecnico model
   */
  interface TecnicoFieldRefs {
    readonly id_usuario: FieldRef<"Tecnico", 'Int'>
    readonly especialidad: FieldRef<"Tecnico", 'String'>
    readonly matricula: FieldRef<"Tecnico", 'String'>
    readonly estado_disponibilidad: FieldRef<"Tecnico", 'EstadoDisponibilidad'>
  }
    

  // Custom InputTypes
  /**
   * Tecnico findUnique
   */
  export type TecnicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findUniqueOrThrow
   */
  export type TecnicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico findFirst
   */
  export type TecnicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findFirstOrThrow
   */
  export type TecnicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnico to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico findMany
   */
  export type TecnicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter, which Tecnicos to fetch.
     */
    where?: TecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnicos to fetch.
     */
    orderBy?: TecnicoOrderByWithRelationInput | TecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tecnicos.
     */
    cursor?: TecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnicos.
     */
    distinct?: TecnicoScalarFieldEnum | TecnicoScalarFieldEnum[]
  }

  /**
   * Tecnico create
   */
  export type TecnicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tecnico.
     */
    data: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
  }

  /**
   * Tecnico createMany
   */
  export type TecnicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tecnicos.
     */
    data: TecnicoCreateManyInput | TecnicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tecnico createManyAndReturn
   */
  export type TecnicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * The data used to create many Tecnicos.
     */
    data: TecnicoCreateManyInput | TecnicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tecnico update
   */
  export type TecnicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tecnico.
     */
    data: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
    /**
     * Choose, which Tecnico to update.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico updateMany
   */
  export type TecnicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tecnicos.
     */
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyInput>
    /**
     * Filter which Tecnicos to update
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to update.
     */
    limit?: number
  }

  /**
   * Tecnico updateManyAndReturn
   */
  export type TecnicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * The data used to update Tecnicos.
     */
    data: XOR<TecnicoUpdateManyMutationInput, TecnicoUncheckedUpdateManyInput>
    /**
     * Filter which Tecnicos to update
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tecnico upsert
   */
  export type TecnicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tecnico to update in case it exists.
     */
    where: TecnicoWhereUniqueInput
    /**
     * In case the Tecnico found by the `where` argument doesn't exist, create a new Tecnico with this data.
     */
    create: XOR<TecnicoCreateInput, TecnicoUncheckedCreateInput>
    /**
     * In case the Tecnico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TecnicoUpdateInput, TecnicoUncheckedUpdateInput>
  }

  /**
   * Tecnico delete
   */
  export type TecnicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
    /**
     * Filter which Tecnico to delete.
     */
    where: TecnicoWhereUniqueInput
  }

  /**
   * Tecnico deleteMany
   */
  export type TecnicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnicos to delete
     */
    where?: TecnicoWhereInput
    /**
     * Limit how many Tecnicos to delete.
     */
    limit?: number
  }

  /**
   * Tecnico.ordenes
   */
  export type Tecnico$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    where?: OrdenTrabajoWhereInput
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    cursor?: OrdenTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenTrabajoScalarFieldEnum | OrdenTrabajoScalarFieldEnum[]
  }

  /**
   * Tecnico without action
   */
  export type TecnicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnico
     */
    select?: TecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnico
     */
    omit?: TecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnicoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    nombre_empresa: string | null
    contacto_nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    creado_en: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    nombre_empresa: string | null
    contacto_nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    creado_en: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    nombre_empresa: number
    contacto_nombre: number
    telefono: number
    email: number
    direccion: number
    creado_en: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    nombre_empresa?: true
    contacto_nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    creado_en?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    nombre_empresa?: true
    contacto_nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    creado_en?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    nombre_empresa?: true
    contacto_nombre?: true
    telefono?: true
    email?: true
    direccion?: true
    creado_en?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    nombre_empresa: string
    contacto_nombre: string | null
    telefono: string | null
    email: string | null
    direccion: string
    creado_en: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre_empresa?: boolean
    contacto_nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    creado_en?: boolean
    equipos?: boolean | Cliente$equiposArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre_empresa?: boolean
    contacto_nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre_empresa?: boolean
    contacto_nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id_cliente?: boolean
    nombre_empresa?: boolean
    contacto_nombre?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    creado_en?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre_empresa" | "contacto_nombre" | "telefono" | "email" | "direccion" | "creado_en", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | Cliente$equiposArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      equipos: Prisma.$EquipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre_empresa: string
      contacto_nombre: string | null
      telefono: string | null
      email: string | null
      direccion: string
      creado_en: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipos<T extends Cliente$equiposArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly nombre_empresa: FieldRef<"Cliente", 'String'>
    readonly contacto_nombre: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly creado_en: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.equipos
   */
  export type Cliente$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    cursor?: EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    id_equipo: number | null
    id_cliente: number | null
  }

  export type EquipoSumAggregateOutputType = {
    id_equipo: number | null
    id_cliente: number | null
  }

  export type EquipoMinAggregateOutputType = {
    id_equipo: number | null
    id_cliente: number | null
    nombre_equipo: string | null
    marca: string | null
    modelo: string | null
    numero_serie: string | null
    ubicacion_interna: string | null
    tipo_refrigerante: string | null
  }

  export type EquipoMaxAggregateOutputType = {
    id_equipo: number | null
    id_cliente: number | null
    nombre_equipo: string | null
    marca: string | null
    modelo: string | null
    numero_serie: string | null
    ubicacion_interna: string | null
    tipo_refrigerante: string | null
  }

  export type EquipoCountAggregateOutputType = {
    id_equipo: number
    id_cliente: number
    nombre_equipo: number
    marca: number
    modelo: number
    numero_serie: number
    ubicacion_interna: number
    tipo_refrigerante: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    id_equipo?: true
    id_cliente?: true
  }

  export type EquipoSumAggregateInputType = {
    id_equipo?: true
    id_cliente?: true
  }

  export type EquipoMinAggregateInputType = {
    id_equipo?: true
    id_cliente?: true
    nombre_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    ubicacion_interna?: true
    tipo_refrigerante?: true
  }

  export type EquipoMaxAggregateInputType = {
    id_equipo?: true
    id_cliente?: true
    nombre_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    ubicacion_interna?: true
    tipo_refrigerante?: true
  }

  export type EquipoCountAggregateInputType = {
    id_equipo?: true
    id_cliente?: true
    nombre_equipo?: true
    marca?: true
    modelo?: true
    numero_serie?: true
    ubicacion_interna?: true
    tipo_refrigerante?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipo to aggregate.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithAggregationInput | EquipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    id_equipo: number
    id_cliente: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna: string | null
    tipo_refrigerante: string | null
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    id_cliente?: boolean
    nombre_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    ubicacion_interna?: boolean
    tipo_refrigerante?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    ordenes?: boolean | Equipo$ordenesArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    id_cliente?: boolean
    nombre_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    ubicacion_interna?: boolean
    tipo_refrigerante?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_equipo?: boolean
    id_cliente?: boolean
    nombre_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    ubicacion_interna?: boolean
    tipo_refrigerante?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectScalar = {
    id_equipo?: boolean
    id_cliente?: boolean
    nombre_equipo?: boolean
    marca?: boolean
    modelo?: boolean
    numero_serie?: boolean
    ubicacion_interna?: boolean
    tipo_refrigerante?: boolean
  }

  export type EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_equipo" | "id_cliente" | "nombre_equipo" | "marca" | "modelo" | "numero_serie" | "ubicacion_interna" | "tipo_refrigerante", ExtArgs["result"]["equipo"]>
  export type EquipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    ordenes?: boolean | Equipo$ordenesArgs<ExtArgs>
    _count?: boolean | EquipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipo"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      ordenes: Prisma.$OrdenTrabajoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_equipo: number
      id_cliente: number
      nombre_equipo: string
      marca: string
      modelo: string
      numero_serie: string
      ubicacion_interna: string | null
      tipo_refrigerante: string | null
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type EquipoGetPayload<S extends boolean | null | undefined | EquipoDefaultArgs> = $Result.GetResult<Prisma.$EquipoPayload, S>

  type EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipo'], meta: { name: 'Equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {EquipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipoFindUniqueArgs>(args: SelectSubset<T, EquipoFindUniqueArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipoFindFirstArgs>(args?: SelectSubset<T, EquipoFindFirstArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.findMany({ select: { id_equipo: true } })
     * 
     */
    findMany<T extends EquipoFindManyArgs>(args?: SelectSubset<T, EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {EquipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends EquipoCreateArgs>(args: SelectSubset<T, EquipoCreateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {EquipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipoCreateManyArgs>(args?: SelectSubset<T, EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {EquipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.createManyAndReturn({
     *   select: { id_equipo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {EquipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends EquipoDeleteArgs>(args: SelectSubset<T, EquipoDeleteArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {EquipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipoUpdateArgs>(args: SelectSubset<T, EquipoUpdateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {EquipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipoDeleteManyArgs>(args?: SelectSubset<T, EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipoUpdateManyArgs>(args: SelectSubset<T, EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {EquipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `id_equipo`
     * const equipoWithId_equipoOnly = await prisma.equipo.updateManyAndReturn({
     *   select: { id_equipo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {EquipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends EquipoUpsertArgs>(args: SelectSubset<T, EquipoUpsertArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends EquipoCountArgs>(
      args?: Subset<T, EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipoGroupByArgs['orderBy'] }
        : { orderBy?: EquipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipo model
   */
  readonly fields: EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ordenes<T extends Equipo$ordenesArgs<ExtArgs> = {}>(args?: Subset<T, Equipo$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipo model
   */
  interface EquipoFieldRefs {
    readonly id_equipo: FieldRef<"Equipo", 'Int'>
    readonly id_cliente: FieldRef<"Equipo", 'Int'>
    readonly nombre_equipo: FieldRef<"Equipo", 'String'>
    readonly marca: FieldRef<"Equipo", 'String'>
    readonly modelo: FieldRef<"Equipo", 'String'>
    readonly numero_serie: FieldRef<"Equipo", 'String'>
    readonly ubicacion_interna: FieldRef<"Equipo", 'String'>
    readonly tipo_refrigerante: FieldRef<"Equipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipo findUnique
   */
  export type EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findUniqueOrThrow
   */
  export type EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findFirst
   */
  export type EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findFirstOrThrow
   */
  export type EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findMany
   */
  export type EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipos to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo create
   */
  export type EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipo.
     */
    data: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
  }

  /**
   * Equipo createMany
   */
  export type EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipo createManyAndReturn
   */
  export type EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo update
   */
  export type EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipo.
     */
    data: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
    /**
     * Choose, which Equipo to update.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo updateMany
   */
  export type EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo updateManyAndReturn
   */
  export type EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo upsert
   */
  export type EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipo to update in case it exists.
     */
    where: EquipoWhereUniqueInput
    /**
     * In case the Equipo found by the `where` argument doesn't exist, create a new Equipo with this data.
     */
    create: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
    /**
     * In case the Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
  }

  /**
   * Equipo delete
   */
  export type EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter which Equipo to delete.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo deleteMany
   */
  export type EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipos to delete
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to delete.
     */
    limit?: number
  }

  /**
   * Equipo.ordenes
   */
  export type Equipo$ordenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    where?: OrdenTrabajoWhereInput
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    cursor?: OrdenTrabajoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenTrabajoScalarFieldEnum | OrdenTrabajoScalarFieldEnum[]
  }

  /**
   * Equipo without action
   */
  export type EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
  }


  /**
   * Model OrdenTrabajo
   */

  export type AggregateOrdenTrabajo = {
    _count: OrdenTrabajoCountAggregateOutputType | null
    _avg: OrdenTrabajoAvgAggregateOutputType | null
    _sum: OrdenTrabajoSumAggregateOutputType | null
    _min: OrdenTrabajoMinAggregateOutputType | null
    _max: OrdenTrabajoMaxAggregateOutputType | null
  }

  export type OrdenTrabajoAvgAggregateOutputType = {
    id_orden: number | null
    id_equipo: number | null
    id_tecnico: number | null
  }

  export type OrdenTrabajoSumAggregateOutputType = {
    id_orden: number | null
    id_equipo: number | null
    id_tecnico: number | null
  }

  export type OrdenTrabajoMinAggregateOutputType = {
    id_orden: number | null
    id_equipo: number | null
    id_tecnico: number | null
    tipo_mantenimiento: $Enums.TipoMantenimiento | null
    estado: $Enums.EstadoOrden | null
    prioridad: $Enums.Prioridad | null
    fecha_programada: Date | null
    descripcion_tarea: string | null
    comentario_respuesta: string | null
    fecha_respuesta: Date | null
    creado_en: Date | null
  }

  export type OrdenTrabajoMaxAggregateOutputType = {
    id_orden: number | null
    id_equipo: number | null
    id_tecnico: number | null
    tipo_mantenimiento: $Enums.TipoMantenimiento | null
    estado: $Enums.EstadoOrden | null
    prioridad: $Enums.Prioridad | null
    fecha_programada: Date | null
    descripcion_tarea: string | null
    comentario_respuesta: string | null
    fecha_respuesta: Date | null
    creado_en: Date | null
  }

  export type OrdenTrabajoCountAggregateOutputType = {
    id_orden: number
    id_equipo: number
    id_tecnico: number
    tipo_mantenimiento: number
    estado: number
    prioridad: number
    fecha_programada: number
    descripcion_tarea: number
    comentario_respuesta: number
    fecha_respuesta: number
    creado_en: number
    _all: number
  }


  export type OrdenTrabajoAvgAggregateInputType = {
    id_orden?: true
    id_equipo?: true
    id_tecnico?: true
  }

  export type OrdenTrabajoSumAggregateInputType = {
    id_orden?: true
    id_equipo?: true
    id_tecnico?: true
  }

  export type OrdenTrabajoMinAggregateInputType = {
    id_orden?: true
    id_equipo?: true
    id_tecnico?: true
    tipo_mantenimiento?: true
    estado?: true
    prioridad?: true
    fecha_programada?: true
    descripcion_tarea?: true
    comentario_respuesta?: true
    fecha_respuesta?: true
    creado_en?: true
  }

  export type OrdenTrabajoMaxAggregateInputType = {
    id_orden?: true
    id_equipo?: true
    id_tecnico?: true
    tipo_mantenimiento?: true
    estado?: true
    prioridad?: true
    fecha_programada?: true
    descripcion_tarea?: true
    comentario_respuesta?: true
    fecha_respuesta?: true
    creado_en?: true
  }

  export type OrdenTrabajoCountAggregateInputType = {
    id_orden?: true
    id_equipo?: true
    id_tecnico?: true
    tipo_mantenimiento?: true
    estado?: true
    prioridad?: true
    fecha_programada?: true
    descripcion_tarea?: true
    comentario_respuesta?: true
    fecha_respuesta?: true
    creado_en?: true
    _all?: true
  }

  export type OrdenTrabajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenTrabajo to aggregate.
     */
    where?: OrdenTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenTrabajos to fetch.
     */
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenTrabajos
    **/
    _count?: true | OrdenTrabajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenTrabajoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenTrabajoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenTrabajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenTrabajoMaxAggregateInputType
  }

  export type GetOrdenTrabajoAggregateType<T extends OrdenTrabajoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenTrabajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenTrabajo[P]>
      : GetScalarType<T[P], AggregateOrdenTrabajo[P]>
  }




  export type OrdenTrabajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenTrabajoWhereInput
    orderBy?: OrdenTrabajoOrderByWithAggregationInput | OrdenTrabajoOrderByWithAggregationInput[]
    by: OrdenTrabajoScalarFieldEnum[] | OrdenTrabajoScalarFieldEnum
    having?: OrdenTrabajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenTrabajoCountAggregateInputType | true
    _avg?: OrdenTrabajoAvgAggregateInputType
    _sum?: OrdenTrabajoSumAggregateInputType
    _min?: OrdenTrabajoMinAggregateInputType
    _max?: OrdenTrabajoMaxAggregateInputType
  }

  export type OrdenTrabajoGroupByOutputType = {
    id_orden: number
    id_equipo: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado: $Enums.EstadoOrden
    prioridad: $Enums.Prioridad
    fecha_programada: Date
    descripcion_tarea: string
    comentario_respuesta: string | null
    fecha_respuesta: Date | null
    creado_en: Date
    _count: OrdenTrabajoCountAggregateOutputType | null
    _avg: OrdenTrabajoAvgAggregateOutputType | null
    _sum: OrdenTrabajoSumAggregateOutputType | null
    _min: OrdenTrabajoMinAggregateOutputType | null
    _max: OrdenTrabajoMaxAggregateOutputType | null
  }

  type GetOrdenTrabajoGroupByPayload<T extends OrdenTrabajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenTrabajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenTrabajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenTrabajoGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenTrabajoGroupByOutputType[P]>
        }
      >
    >


  export type OrdenTrabajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_equipo?: boolean
    id_tecnico?: boolean
    tipo_mantenimiento?: boolean
    estado?: boolean
    prioridad?: boolean
    fecha_programada?: boolean
    descripcion_tarea?: boolean
    comentario_respuesta?: boolean
    fecha_respuesta?: boolean
    creado_en?: boolean
    intervenciones?: boolean | OrdenTrabajo$intervencionesArgs<ExtArgs>
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
    _count?: boolean | OrdenTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenTrabajo"]>

  export type OrdenTrabajoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_equipo?: boolean
    id_tecnico?: boolean
    tipo_mantenimiento?: boolean
    estado?: boolean
    prioridad?: boolean
    fecha_programada?: boolean
    descripcion_tarea?: boolean
    comentario_respuesta?: boolean
    fecha_respuesta?: boolean
    creado_en?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenTrabajo"]>

  export type OrdenTrabajoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_orden?: boolean
    id_equipo?: boolean
    id_tecnico?: boolean
    tipo_mantenimiento?: boolean
    estado?: boolean
    prioridad?: boolean
    fecha_programada?: boolean
    descripcion_tarea?: boolean
    comentario_respuesta?: boolean
    fecha_respuesta?: boolean
    creado_en?: boolean
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenTrabajo"]>

  export type OrdenTrabajoSelectScalar = {
    id_orden?: boolean
    id_equipo?: boolean
    id_tecnico?: boolean
    tipo_mantenimiento?: boolean
    estado?: boolean
    prioridad?: boolean
    fecha_programada?: boolean
    descripcion_tarea?: boolean
    comentario_respuesta?: boolean
    fecha_respuesta?: boolean
    creado_en?: boolean
  }

  export type OrdenTrabajoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_orden" | "id_equipo" | "id_tecnico" | "tipo_mantenimiento" | "estado" | "prioridad" | "fecha_programada" | "descripcion_tarea" | "comentario_respuesta" | "fecha_respuesta" | "creado_en", ExtArgs["result"]["ordenTrabajo"]>
  export type OrdenTrabajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intervenciones?: boolean | OrdenTrabajo$intervencionesArgs<ExtArgs>
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
    _count?: boolean | OrdenTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdenTrabajoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }
  export type OrdenTrabajoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipo?: boolean | EquipoDefaultArgs<ExtArgs>
    tecnico?: boolean | TecnicoDefaultArgs<ExtArgs>
  }

  export type $OrdenTrabajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenTrabajo"
    objects: {
      intervenciones: Prisma.$IntervencionPayload<ExtArgs>[]
      equipo: Prisma.$EquipoPayload<ExtArgs>
      tecnico: Prisma.$TecnicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_orden: number
      id_equipo: number
      id_tecnico: number
      tipo_mantenimiento: $Enums.TipoMantenimiento
      estado: $Enums.EstadoOrden
      prioridad: $Enums.Prioridad
      fecha_programada: Date
      descripcion_tarea: string
      comentario_respuesta: string | null
      fecha_respuesta: Date | null
      creado_en: Date
    }, ExtArgs["result"]["ordenTrabajo"]>
    composites: {}
  }

  type OrdenTrabajoGetPayload<S extends boolean | null | undefined | OrdenTrabajoDefaultArgs> = $Result.GetResult<Prisma.$OrdenTrabajoPayload, S>

  type OrdenTrabajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenTrabajoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenTrabajoCountAggregateInputType | true
    }

  export interface OrdenTrabajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenTrabajo'], meta: { name: 'OrdenTrabajo' } }
    /**
     * Find zero or one OrdenTrabajo that matches the filter.
     * @param {OrdenTrabajoFindUniqueArgs} args - Arguments to find a OrdenTrabajo
     * @example
     * // Get one OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenTrabajoFindUniqueArgs>(args: SelectSubset<T, OrdenTrabajoFindUniqueArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenTrabajo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenTrabajoFindUniqueOrThrowArgs} args - Arguments to find a OrdenTrabajo
     * @example
     * // Get one OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenTrabajoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenTrabajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenTrabajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoFindFirstArgs} args - Arguments to find a OrdenTrabajo
     * @example
     * // Get one OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenTrabajoFindFirstArgs>(args?: SelectSubset<T, OrdenTrabajoFindFirstArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenTrabajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoFindFirstOrThrowArgs} args - Arguments to find a OrdenTrabajo
     * @example
     * // Get one OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenTrabajoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenTrabajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenTrabajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenTrabajos
     * const ordenTrabajos = await prisma.ordenTrabajo.findMany()
     * 
     * // Get first 10 OrdenTrabajos
     * const ordenTrabajos = await prisma.ordenTrabajo.findMany({ take: 10 })
     * 
     * // Only select the `id_orden`
     * const ordenTrabajoWithId_ordenOnly = await prisma.ordenTrabajo.findMany({ select: { id_orden: true } })
     * 
     */
    findMany<T extends OrdenTrabajoFindManyArgs>(args?: SelectSubset<T, OrdenTrabajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenTrabajo.
     * @param {OrdenTrabajoCreateArgs} args - Arguments to create a OrdenTrabajo.
     * @example
     * // Create one OrdenTrabajo
     * const OrdenTrabajo = await prisma.ordenTrabajo.create({
     *   data: {
     *     // ... data to create a OrdenTrabajo
     *   }
     * })
     * 
     */
    create<T extends OrdenTrabajoCreateArgs>(args: SelectSubset<T, OrdenTrabajoCreateArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenTrabajos.
     * @param {OrdenTrabajoCreateManyArgs} args - Arguments to create many OrdenTrabajos.
     * @example
     * // Create many OrdenTrabajos
     * const ordenTrabajo = await prisma.ordenTrabajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenTrabajoCreateManyArgs>(args?: SelectSubset<T, OrdenTrabajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenTrabajos and returns the data saved in the database.
     * @param {OrdenTrabajoCreateManyAndReturnArgs} args - Arguments to create many OrdenTrabajos.
     * @example
     * // Create many OrdenTrabajos
     * const ordenTrabajo = await prisma.ordenTrabajo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenTrabajos and only return the `id_orden`
     * const ordenTrabajoWithId_ordenOnly = await prisma.ordenTrabajo.createManyAndReturn({
     *   select: { id_orden: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenTrabajoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenTrabajoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenTrabajo.
     * @param {OrdenTrabajoDeleteArgs} args - Arguments to delete one OrdenTrabajo.
     * @example
     * // Delete one OrdenTrabajo
     * const OrdenTrabajo = await prisma.ordenTrabajo.delete({
     *   where: {
     *     // ... filter to delete one OrdenTrabajo
     *   }
     * })
     * 
     */
    delete<T extends OrdenTrabajoDeleteArgs>(args: SelectSubset<T, OrdenTrabajoDeleteArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenTrabajo.
     * @param {OrdenTrabajoUpdateArgs} args - Arguments to update one OrdenTrabajo.
     * @example
     * // Update one OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenTrabajoUpdateArgs>(args: SelectSubset<T, OrdenTrabajoUpdateArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenTrabajos.
     * @param {OrdenTrabajoDeleteManyArgs} args - Arguments to filter OrdenTrabajos to delete.
     * @example
     * // Delete a few OrdenTrabajos
     * const { count } = await prisma.ordenTrabajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenTrabajoDeleteManyArgs>(args?: SelectSubset<T, OrdenTrabajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenTrabajos
     * const ordenTrabajo = await prisma.ordenTrabajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenTrabajoUpdateManyArgs>(args: SelectSubset<T, OrdenTrabajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenTrabajos and returns the data updated in the database.
     * @param {OrdenTrabajoUpdateManyAndReturnArgs} args - Arguments to update many OrdenTrabajos.
     * @example
     * // Update many OrdenTrabajos
     * const ordenTrabajo = await prisma.ordenTrabajo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenTrabajos and only return the `id_orden`
     * const ordenTrabajoWithId_ordenOnly = await prisma.ordenTrabajo.updateManyAndReturn({
     *   select: { id_orden: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdenTrabajoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenTrabajoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenTrabajo.
     * @param {OrdenTrabajoUpsertArgs} args - Arguments to update or create a OrdenTrabajo.
     * @example
     * // Update or create a OrdenTrabajo
     * const ordenTrabajo = await prisma.ordenTrabajo.upsert({
     *   create: {
     *     // ... data to create a OrdenTrabajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenTrabajo we want to update
     *   }
     * })
     */
    upsert<T extends OrdenTrabajoUpsertArgs>(args: SelectSubset<T, OrdenTrabajoUpsertArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoCountArgs} args - Arguments to filter OrdenTrabajos to count.
     * @example
     * // Count the number of OrdenTrabajos
     * const count = await prisma.ordenTrabajo.count({
     *   where: {
     *     // ... the filter for the OrdenTrabajos we want to count
     *   }
     * })
    **/
    count<T extends OrdenTrabajoCountArgs>(
      args?: Subset<T, OrdenTrabajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenTrabajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdenTrabajoAggregateArgs>(args: Subset<T, OrdenTrabajoAggregateArgs>): Prisma.PrismaPromise<GetOrdenTrabajoAggregateType<T>>

    /**
     * Group by OrdenTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenTrabajoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdenTrabajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenTrabajoGroupByArgs['orderBy'] }
        : { orderBy?: OrdenTrabajoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdenTrabajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenTrabajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenTrabajo model
   */
  readonly fields: OrdenTrabajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenTrabajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenTrabajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intervenciones<T extends OrdenTrabajo$intervencionesArgs<ExtArgs> = {}>(args?: Subset<T, OrdenTrabajo$intervencionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipo<T extends EquipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipoDefaultArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends TecnicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TecnicoDefaultArgs<ExtArgs>>): Prisma__TecnicoClient<$Result.GetResult<Prisma.$TecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrdenTrabajo model
   */
  interface OrdenTrabajoFieldRefs {
    readonly id_orden: FieldRef<"OrdenTrabajo", 'Int'>
    readonly id_equipo: FieldRef<"OrdenTrabajo", 'Int'>
    readonly id_tecnico: FieldRef<"OrdenTrabajo", 'Int'>
    readonly tipo_mantenimiento: FieldRef<"OrdenTrabajo", 'TipoMantenimiento'>
    readonly estado: FieldRef<"OrdenTrabajo", 'EstadoOrden'>
    readonly prioridad: FieldRef<"OrdenTrabajo", 'Prioridad'>
    readonly fecha_programada: FieldRef<"OrdenTrabajo", 'DateTime'>
    readonly descripcion_tarea: FieldRef<"OrdenTrabajo", 'String'>
    readonly comentario_respuesta: FieldRef<"OrdenTrabajo", 'String'>
    readonly fecha_respuesta: FieldRef<"OrdenTrabajo", 'DateTime'>
    readonly creado_en: FieldRef<"OrdenTrabajo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdenTrabajo findUnique
   */
  export type OrdenTrabajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenTrabajo to fetch.
     */
    where: OrdenTrabajoWhereUniqueInput
  }

  /**
   * OrdenTrabajo findUniqueOrThrow
   */
  export type OrdenTrabajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenTrabajo to fetch.
     */
    where: OrdenTrabajoWhereUniqueInput
  }

  /**
   * OrdenTrabajo findFirst
   */
  export type OrdenTrabajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenTrabajo to fetch.
     */
    where?: OrdenTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenTrabajos to fetch.
     */
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenTrabajos.
     */
    cursor?: OrdenTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenTrabajos.
     */
    distinct?: OrdenTrabajoScalarFieldEnum | OrdenTrabajoScalarFieldEnum[]
  }

  /**
   * OrdenTrabajo findFirstOrThrow
   */
  export type OrdenTrabajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenTrabajo to fetch.
     */
    where?: OrdenTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenTrabajos to fetch.
     */
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenTrabajos.
     */
    cursor?: OrdenTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenTrabajos.
     */
    distinct?: OrdenTrabajoScalarFieldEnum | OrdenTrabajoScalarFieldEnum[]
  }

  /**
   * OrdenTrabajo findMany
   */
  export type OrdenTrabajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which OrdenTrabajos to fetch.
     */
    where?: OrdenTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenTrabajos to fetch.
     */
    orderBy?: OrdenTrabajoOrderByWithRelationInput | OrdenTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenTrabajos.
     */
    cursor?: OrdenTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenTrabajos.
     */
    distinct?: OrdenTrabajoScalarFieldEnum | OrdenTrabajoScalarFieldEnum[]
  }

  /**
   * OrdenTrabajo create
   */
  export type OrdenTrabajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenTrabajo.
     */
    data: XOR<OrdenTrabajoCreateInput, OrdenTrabajoUncheckedCreateInput>
  }

  /**
   * OrdenTrabajo createMany
   */
  export type OrdenTrabajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenTrabajos.
     */
    data: OrdenTrabajoCreateManyInput | OrdenTrabajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenTrabajo createManyAndReturn
   */
  export type OrdenTrabajoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenTrabajos.
     */
    data: OrdenTrabajoCreateManyInput | OrdenTrabajoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenTrabajo update
   */
  export type OrdenTrabajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenTrabajo.
     */
    data: XOR<OrdenTrabajoUpdateInput, OrdenTrabajoUncheckedUpdateInput>
    /**
     * Choose, which OrdenTrabajo to update.
     */
    where: OrdenTrabajoWhereUniqueInput
  }

  /**
   * OrdenTrabajo updateMany
   */
  export type OrdenTrabajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenTrabajos.
     */
    data: XOR<OrdenTrabajoUpdateManyMutationInput, OrdenTrabajoUncheckedUpdateManyInput>
    /**
     * Filter which OrdenTrabajos to update
     */
    where?: OrdenTrabajoWhereInput
    /**
     * Limit how many OrdenTrabajos to update.
     */
    limit?: number
  }

  /**
   * OrdenTrabajo updateManyAndReturn
   */
  export type OrdenTrabajoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * The data used to update OrdenTrabajos.
     */
    data: XOR<OrdenTrabajoUpdateManyMutationInput, OrdenTrabajoUncheckedUpdateManyInput>
    /**
     * Filter which OrdenTrabajos to update
     */
    where?: OrdenTrabajoWhereInput
    /**
     * Limit how many OrdenTrabajos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenTrabajo upsert
   */
  export type OrdenTrabajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenTrabajo to update in case it exists.
     */
    where: OrdenTrabajoWhereUniqueInput
    /**
     * In case the OrdenTrabajo found by the `where` argument doesn't exist, create a new OrdenTrabajo with this data.
     */
    create: XOR<OrdenTrabajoCreateInput, OrdenTrabajoUncheckedCreateInput>
    /**
     * In case the OrdenTrabajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenTrabajoUpdateInput, OrdenTrabajoUncheckedUpdateInput>
  }

  /**
   * OrdenTrabajo delete
   */
  export type OrdenTrabajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
    /**
     * Filter which OrdenTrabajo to delete.
     */
    where: OrdenTrabajoWhereUniqueInput
  }

  /**
   * OrdenTrabajo deleteMany
   */
  export type OrdenTrabajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenTrabajos to delete
     */
    where?: OrdenTrabajoWhereInput
    /**
     * Limit how many OrdenTrabajos to delete.
     */
    limit?: number
  }

  /**
   * OrdenTrabajo.intervenciones
   */
  export type OrdenTrabajo$intervencionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    where?: IntervencionWhereInput
    orderBy?: IntervencionOrderByWithRelationInput | IntervencionOrderByWithRelationInput[]
    cursor?: IntervencionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntervencionScalarFieldEnum | IntervencionScalarFieldEnum[]
  }

  /**
   * OrdenTrabajo without action
   */
  export type OrdenTrabajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenTrabajo
     */
    select?: OrdenTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenTrabajo
     */
    omit?: OrdenTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenTrabajoInclude<ExtArgs> | null
  }


  /**
   * Model Intervencion
   */

  export type AggregateIntervencion = {
    _count: IntervencionCountAggregateOutputType | null
    _avg: IntervencionAvgAggregateOutputType | null
    _sum: IntervencionSumAggregateOutputType | null
    _min: IntervencionMinAggregateOutputType | null
    _max: IntervencionMaxAggregateOutputType | null
  }

  export type IntervencionAvgAggregateOutputType = {
    id_intervencion: number | null
    id_orden: number | null
    presion_alta: Decimal | null
    presion_baja: Decimal | null
    temperatura_salida: Decimal | null
    corriente_consumo: Decimal | null
  }

  export type IntervencionSumAggregateOutputType = {
    id_intervencion: number | null
    id_orden: number | null
    presion_alta: Decimal | null
    presion_baja: Decimal | null
    temperatura_salida: Decimal | null
    corriente_consumo: Decimal | null
  }

  export type IntervencionMinAggregateOutputType = {
    id_intervencion: number | null
    id_orden: number | null
    fecha_ejecucion: Date | null
    presion_alta: Decimal | null
    presion_baja: Decimal | null
    temperatura_salida: Decimal | null
    corriente_consumo: Decimal | null
    checklist_completado: boolean | null
    observaciones: string | null
    url_imagen_adjunta: string | null
  }

  export type IntervencionMaxAggregateOutputType = {
    id_intervencion: number | null
    id_orden: number | null
    fecha_ejecucion: Date | null
    presion_alta: Decimal | null
    presion_baja: Decimal | null
    temperatura_salida: Decimal | null
    corriente_consumo: Decimal | null
    checklist_completado: boolean | null
    observaciones: string | null
    url_imagen_adjunta: string | null
  }

  export type IntervencionCountAggregateOutputType = {
    id_intervencion: number
    id_orden: number
    fecha_ejecucion: number
    presion_alta: number
    presion_baja: number
    temperatura_salida: number
    corriente_consumo: number
    checklist_completado: number
    observaciones: number
    url_imagen_adjunta: number
    _all: number
  }


  export type IntervencionAvgAggregateInputType = {
    id_intervencion?: true
    id_orden?: true
    presion_alta?: true
    presion_baja?: true
    temperatura_salida?: true
    corriente_consumo?: true
  }

  export type IntervencionSumAggregateInputType = {
    id_intervencion?: true
    id_orden?: true
    presion_alta?: true
    presion_baja?: true
    temperatura_salida?: true
    corriente_consumo?: true
  }

  export type IntervencionMinAggregateInputType = {
    id_intervencion?: true
    id_orden?: true
    fecha_ejecucion?: true
    presion_alta?: true
    presion_baja?: true
    temperatura_salida?: true
    corriente_consumo?: true
    checklist_completado?: true
    observaciones?: true
    url_imagen_adjunta?: true
  }

  export type IntervencionMaxAggregateInputType = {
    id_intervencion?: true
    id_orden?: true
    fecha_ejecucion?: true
    presion_alta?: true
    presion_baja?: true
    temperatura_salida?: true
    corriente_consumo?: true
    checklist_completado?: true
    observaciones?: true
    url_imagen_adjunta?: true
  }

  export type IntervencionCountAggregateInputType = {
    id_intervencion?: true
    id_orden?: true
    fecha_ejecucion?: true
    presion_alta?: true
    presion_baja?: true
    temperatura_salida?: true
    corriente_consumo?: true
    checklist_completado?: true
    observaciones?: true
    url_imagen_adjunta?: true
    _all?: true
  }

  export type IntervencionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intervencion to aggregate.
     */
    where?: IntervencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervencions to fetch.
     */
    orderBy?: IntervencionOrderByWithRelationInput | IntervencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntervencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Intervencions
    **/
    _count?: true | IntervencionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntervencionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntervencionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntervencionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntervencionMaxAggregateInputType
  }

  export type GetIntervencionAggregateType<T extends IntervencionAggregateArgs> = {
        [P in keyof T & keyof AggregateIntervencion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntervencion[P]>
      : GetScalarType<T[P], AggregateIntervencion[P]>
  }




  export type IntervencionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntervencionWhereInput
    orderBy?: IntervencionOrderByWithAggregationInput | IntervencionOrderByWithAggregationInput[]
    by: IntervencionScalarFieldEnum[] | IntervencionScalarFieldEnum
    having?: IntervencionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntervencionCountAggregateInputType | true
    _avg?: IntervencionAvgAggregateInputType
    _sum?: IntervencionSumAggregateInputType
    _min?: IntervencionMinAggregateInputType
    _max?: IntervencionMaxAggregateInputType
  }

  export type IntervencionGroupByOutputType = {
    id_intervencion: number
    id_orden: number
    fecha_ejecucion: Date
    presion_alta: Decimal | null
    presion_baja: Decimal | null
    temperatura_salida: Decimal | null
    corriente_consumo: Decimal | null
    checklist_completado: boolean
    observaciones: string | null
    url_imagen_adjunta: string | null
    _count: IntervencionCountAggregateOutputType | null
    _avg: IntervencionAvgAggregateOutputType | null
    _sum: IntervencionSumAggregateOutputType | null
    _min: IntervencionMinAggregateOutputType | null
    _max: IntervencionMaxAggregateOutputType | null
  }

  type GetIntervencionGroupByPayload<T extends IntervencionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntervencionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntervencionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntervencionGroupByOutputType[P]>
            : GetScalarType<T[P], IntervencionGroupByOutputType[P]>
        }
      >
    >


  export type IntervencionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_intervencion?: boolean
    id_orden?: boolean
    fecha_ejecucion?: boolean
    presion_alta?: boolean
    presion_baja?: boolean
    temperatura_salida?: boolean
    corriente_consumo?: boolean
    checklist_completado?: boolean
    observaciones?: boolean
    url_imagen_adjunta?: boolean
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intervencion"]>

  export type IntervencionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_intervencion?: boolean
    id_orden?: boolean
    fecha_ejecucion?: boolean
    presion_alta?: boolean
    presion_baja?: boolean
    temperatura_salida?: boolean
    corriente_consumo?: boolean
    checklist_completado?: boolean
    observaciones?: boolean
    url_imagen_adjunta?: boolean
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intervencion"]>

  export type IntervencionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_intervencion?: boolean
    id_orden?: boolean
    fecha_ejecucion?: boolean
    presion_alta?: boolean
    presion_baja?: boolean
    temperatura_salida?: boolean
    corriente_consumo?: boolean
    checklist_completado?: boolean
    observaciones?: boolean
    url_imagen_adjunta?: boolean
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intervencion"]>

  export type IntervencionSelectScalar = {
    id_intervencion?: boolean
    id_orden?: boolean
    fecha_ejecucion?: boolean
    presion_alta?: boolean
    presion_baja?: boolean
    temperatura_salida?: boolean
    corriente_consumo?: boolean
    checklist_completado?: boolean
    observaciones?: boolean
    url_imagen_adjunta?: boolean
  }

  export type IntervencionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_intervencion" | "id_orden" | "fecha_ejecucion" | "presion_alta" | "presion_baja" | "temperatura_salida" | "corriente_consumo" | "checklist_completado" | "observaciones" | "url_imagen_adjunta", ExtArgs["result"]["intervencion"]>
  export type IntervencionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }
  export type IntervencionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }
  export type IntervencionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenTrabajoDefaultArgs<ExtArgs>
  }

  export type $IntervencionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Intervencion"
    objects: {
      orden: Prisma.$OrdenTrabajoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_intervencion: number
      id_orden: number
      fecha_ejecucion: Date
      presion_alta: Prisma.Decimal | null
      presion_baja: Prisma.Decimal | null
      temperatura_salida: Prisma.Decimal | null
      corriente_consumo: Prisma.Decimal | null
      checklist_completado: boolean
      observaciones: string | null
      url_imagen_adjunta: string | null
    }, ExtArgs["result"]["intervencion"]>
    composites: {}
  }

  type IntervencionGetPayload<S extends boolean | null | undefined | IntervencionDefaultArgs> = $Result.GetResult<Prisma.$IntervencionPayload, S>

  type IntervencionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntervencionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntervencionCountAggregateInputType | true
    }

  export interface IntervencionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Intervencion'], meta: { name: 'Intervencion' } }
    /**
     * Find zero or one Intervencion that matches the filter.
     * @param {IntervencionFindUniqueArgs} args - Arguments to find a Intervencion
     * @example
     * // Get one Intervencion
     * const intervencion = await prisma.intervencion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntervencionFindUniqueArgs>(args: SelectSubset<T, IntervencionFindUniqueArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intervencion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntervencionFindUniqueOrThrowArgs} args - Arguments to find a Intervencion
     * @example
     * // Get one Intervencion
     * const intervencion = await prisma.intervencion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntervencionFindUniqueOrThrowArgs>(args: SelectSubset<T, IntervencionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intervencion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionFindFirstArgs} args - Arguments to find a Intervencion
     * @example
     * // Get one Intervencion
     * const intervencion = await prisma.intervencion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntervencionFindFirstArgs>(args?: SelectSubset<T, IntervencionFindFirstArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intervencion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionFindFirstOrThrowArgs} args - Arguments to find a Intervencion
     * @example
     * // Get one Intervencion
     * const intervencion = await prisma.intervencion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntervencionFindFirstOrThrowArgs>(args?: SelectSubset<T, IntervencionFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intervencions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intervencions
     * const intervencions = await prisma.intervencion.findMany()
     * 
     * // Get first 10 Intervencions
     * const intervencions = await prisma.intervencion.findMany({ take: 10 })
     * 
     * // Only select the `id_intervencion`
     * const intervencionWithId_intervencionOnly = await prisma.intervencion.findMany({ select: { id_intervencion: true } })
     * 
     */
    findMany<T extends IntervencionFindManyArgs>(args?: SelectSubset<T, IntervencionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intervencion.
     * @param {IntervencionCreateArgs} args - Arguments to create a Intervencion.
     * @example
     * // Create one Intervencion
     * const Intervencion = await prisma.intervencion.create({
     *   data: {
     *     // ... data to create a Intervencion
     *   }
     * })
     * 
     */
    create<T extends IntervencionCreateArgs>(args: SelectSubset<T, IntervencionCreateArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intervencions.
     * @param {IntervencionCreateManyArgs} args - Arguments to create many Intervencions.
     * @example
     * // Create many Intervencions
     * const intervencion = await prisma.intervencion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntervencionCreateManyArgs>(args?: SelectSubset<T, IntervencionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Intervencions and returns the data saved in the database.
     * @param {IntervencionCreateManyAndReturnArgs} args - Arguments to create many Intervencions.
     * @example
     * // Create many Intervencions
     * const intervencion = await prisma.intervencion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Intervencions and only return the `id_intervencion`
     * const intervencionWithId_intervencionOnly = await prisma.intervencion.createManyAndReturn({
     *   select: { id_intervencion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntervencionCreateManyAndReturnArgs>(args?: SelectSubset<T, IntervencionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Intervencion.
     * @param {IntervencionDeleteArgs} args - Arguments to delete one Intervencion.
     * @example
     * // Delete one Intervencion
     * const Intervencion = await prisma.intervencion.delete({
     *   where: {
     *     // ... filter to delete one Intervencion
     *   }
     * })
     * 
     */
    delete<T extends IntervencionDeleteArgs>(args: SelectSubset<T, IntervencionDeleteArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intervencion.
     * @param {IntervencionUpdateArgs} args - Arguments to update one Intervencion.
     * @example
     * // Update one Intervencion
     * const intervencion = await prisma.intervencion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntervencionUpdateArgs>(args: SelectSubset<T, IntervencionUpdateArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intervencions.
     * @param {IntervencionDeleteManyArgs} args - Arguments to filter Intervencions to delete.
     * @example
     * // Delete a few Intervencions
     * const { count } = await prisma.intervencion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntervencionDeleteManyArgs>(args?: SelectSubset<T, IntervencionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intervencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intervencions
     * const intervencion = await prisma.intervencion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntervencionUpdateManyArgs>(args: SelectSubset<T, IntervencionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intervencions and returns the data updated in the database.
     * @param {IntervencionUpdateManyAndReturnArgs} args - Arguments to update many Intervencions.
     * @example
     * // Update many Intervencions
     * const intervencion = await prisma.intervencion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Intervencions and only return the `id_intervencion`
     * const intervencionWithId_intervencionOnly = await prisma.intervencion.updateManyAndReturn({
     *   select: { id_intervencion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntervencionUpdateManyAndReturnArgs>(args: SelectSubset<T, IntervencionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Intervencion.
     * @param {IntervencionUpsertArgs} args - Arguments to update or create a Intervencion.
     * @example
     * // Update or create a Intervencion
     * const intervencion = await prisma.intervencion.upsert({
     *   create: {
     *     // ... data to create a Intervencion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intervencion we want to update
     *   }
     * })
     */
    upsert<T extends IntervencionUpsertArgs>(args: SelectSubset<T, IntervencionUpsertArgs<ExtArgs>>): Prisma__IntervencionClient<$Result.GetResult<Prisma.$IntervencionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intervencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionCountArgs} args - Arguments to filter Intervencions to count.
     * @example
     * // Count the number of Intervencions
     * const count = await prisma.intervencion.count({
     *   where: {
     *     // ... the filter for the Intervencions we want to count
     *   }
     * })
    **/
    count<T extends IntervencionCountArgs>(
      args?: Subset<T, IntervencionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntervencionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intervencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntervencionAggregateArgs>(args: Subset<T, IntervencionAggregateArgs>): Prisma.PrismaPromise<GetIntervencionAggregateType<T>>

    /**
     * Group by Intervencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntervencionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntervencionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntervencionGroupByArgs['orderBy'] }
        : { orderBy?: IntervencionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntervencionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntervencionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Intervencion model
   */
  readonly fields: IntervencionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intervencion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntervencionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenTrabajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenTrabajoDefaultArgs<ExtArgs>>): Prisma__OrdenTrabajoClient<$Result.GetResult<Prisma.$OrdenTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Intervencion model
   */
  interface IntervencionFieldRefs {
    readonly id_intervencion: FieldRef<"Intervencion", 'Int'>
    readonly id_orden: FieldRef<"Intervencion", 'Int'>
    readonly fecha_ejecucion: FieldRef<"Intervencion", 'DateTime'>
    readonly presion_alta: FieldRef<"Intervencion", 'Decimal'>
    readonly presion_baja: FieldRef<"Intervencion", 'Decimal'>
    readonly temperatura_salida: FieldRef<"Intervencion", 'Decimal'>
    readonly corriente_consumo: FieldRef<"Intervencion", 'Decimal'>
    readonly checklist_completado: FieldRef<"Intervencion", 'Boolean'>
    readonly observaciones: FieldRef<"Intervencion", 'String'>
    readonly url_imagen_adjunta: FieldRef<"Intervencion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Intervencion findUnique
   */
  export type IntervencionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter, which Intervencion to fetch.
     */
    where: IntervencionWhereUniqueInput
  }

  /**
   * Intervencion findUniqueOrThrow
   */
  export type IntervencionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter, which Intervencion to fetch.
     */
    where: IntervencionWhereUniqueInput
  }

  /**
   * Intervencion findFirst
   */
  export type IntervencionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter, which Intervencion to fetch.
     */
    where?: IntervencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervencions to fetch.
     */
    orderBy?: IntervencionOrderByWithRelationInput | IntervencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intervencions.
     */
    cursor?: IntervencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intervencions.
     */
    distinct?: IntervencionScalarFieldEnum | IntervencionScalarFieldEnum[]
  }

  /**
   * Intervencion findFirstOrThrow
   */
  export type IntervencionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter, which Intervencion to fetch.
     */
    where?: IntervencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervencions to fetch.
     */
    orderBy?: IntervencionOrderByWithRelationInput | IntervencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intervencions.
     */
    cursor?: IntervencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intervencions.
     */
    distinct?: IntervencionScalarFieldEnum | IntervencionScalarFieldEnum[]
  }

  /**
   * Intervencion findMany
   */
  export type IntervencionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter, which Intervencions to fetch.
     */
    where?: IntervencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intervencions to fetch.
     */
    orderBy?: IntervencionOrderByWithRelationInput | IntervencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Intervencions.
     */
    cursor?: IntervencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intervencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intervencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intervencions.
     */
    distinct?: IntervencionScalarFieldEnum | IntervencionScalarFieldEnum[]
  }

  /**
   * Intervencion create
   */
  export type IntervencionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * The data needed to create a Intervencion.
     */
    data: XOR<IntervencionCreateInput, IntervencionUncheckedCreateInput>
  }

  /**
   * Intervencion createMany
   */
  export type IntervencionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Intervencions.
     */
    data: IntervencionCreateManyInput | IntervencionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Intervencion createManyAndReturn
   */
  export type IntervencionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * The data used to create many Intervencions.
     */
    data: IntervencionCreateManyInput | IntervencionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intervencion update
   */
  export type IntervencionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * The data needed to update a Intervencion.
     */
    data: XOR<IntervencionUpdateInput, IntervencionUncheckedUpdateInput>
    /**
     * Choose, which Intervencion to update.
     */
    where: IntervencionWhereUniqueInput
  }

  /**
   * Intervencion updateMany
   */
  export type IntervencionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Intervencions.
     */
    data: XOR<IntervencionUpdateManyMutationInput, IntervencionUncheckedUpdateManyInput>
    /**
     * Filter which Intervencions to update
     */
    where?: IntervencionWhereInput
    /**
     * Limit how many Intervencions to update.
     */
    limit?: number
  }

  /**
   * Intervencion updateManyAndReturn
   */
  export type IntervencionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * The data used to update Intervencions.
     */
    data: XOR<IntervencionUpdateManyMutationInput, IntervencionUncheckedUpdateManyInput>
    /**
     * Filter which Intervencions to update
     */
    where?: IntervencionWhereInput
    /**
     * Limit how many Intervencions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Intervencion upsert
   */
  export type IntervencionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * The filter to search for the Intervencion to update in case it exists.
     */
    where: IntervencionWhereUniqueInput
    /**
     * In case the Intervencion found by the `where` argument doesn't exist, create a new Intervencion with this data.
     */
    create: XOR<IntervencionCreateInput, IntervencionUncheckedCreateInput>
    /**
     * In case the Intervencion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntervencionUpdateInput, IntervencionUncheckedUpdateInput>
  }

  /**
   * Intervencion delete
   */
  export type IntervencionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
    /**
     * Filter which Intervencion to delete.
     */
    where: IntervencionWhereUniqueInput
  }

  /**
   * Intervencion deleteMany
   */
  export type IntervencionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intervencions to delete
     */
    where?: IntervencionWhereInput
    /**
     * Limit how many Intervencions to delete.
     */
    limit?: number
  }

  /**
   * Intervencion without action
   */
  export type IntervencionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervencion
     */
    select?: IntervencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intervencion
     */
    omit?: IntervencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntervencionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password_hash: 'password_hash',
    telefono: 'telefono',
    tipo_usuario: 'tipo_usuario',
    creado_en: 'creado_en'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nivel_acceso: 'nivel_acceso',
    departamento: 'departamento'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const TecnicoScalarFieldEnum: {
    id_usuario: 'id_usuario',
    especialidad: 'especialidad',
    matricula: 'matricula',
    estado_disponibilidad: 'estado_disponibilidad'
  };

  export type TecnicoScalarFieldEnum = (typeof TecnicoScalarFieldEnum)[keyof typeof TecnicoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre_empresa: 'nombre_empresa',
    contacto_nombre: 'contacto_nombre',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion',
    creado_en: 'creado_en'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EquipoScalarFieldEnum: {
    id_equipo: 'id_equipo',
    id_cliente: 'id_cliente',
    nombre_equipo: 'nombre_equipo',
    marca: 'marca',
    modelo: 'modelo',
    numero_serie: 'numero_serie',
    ubicacion_interna: 'ubicacion_interna',
    tipo_refrigerante: 'tipo_refrigerante'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


  export const OrdenTrabajoScalarFieldEnum: {
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

  export type OrdenTrabajoScalarFieldEnum = (typeof OrdenTrabajoScalarFieldEnum)[keyof typeof OrdenTrabajoScalarFieldEnum]


  export const IntervencionScalarFieldEnum: {
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

  export type IntervencionScalarFieldEnum = (typeof IntervencionScalarFieldEnum)[keyof typeof IntervencionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoDisponibilidad'
   */
  export type EnumEstadoDisponibilidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoDisponibilidad'>
    


  /**
   * Reference to a field of type 'EstadoDisponibilidad[]'
   */
  export type ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoDisponibilidad[]'>
    


  /**
   * Reference to a field of type 'TipoMantenimiento'
   */
  export type EnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento'>
    


  /**
   * Reference to a field of type 'TipoMantenimiento[]'
   */
  export type ListEnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento[]'>
    


  /**
   * Reference to a field of type 'EstadoOrden'
   */
  export type EnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden'>
    


  /**
   * Reference to a field of type 'EstadoOrden[]'
   */
  export type ListEnumEstadoOrdenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoOrden[]'>
    


  /**
   * Reference to a field of type 'Prioridad'
   */
  export type EnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad'>
    


  /**
   * Reference to a field of type 'Prioridad[]'
   */
  export type ListEnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password_hash?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    tipo_usuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    creado_en?: DateTimeFilter<"Usuario"> | Date | string
    administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
    tecnico?: XOR<TecnicoNullableScalarRelationFilter, TecnicoWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrder
    creado_en?: SortOrder
    administrador?: AdministradorOrderByWithRelationInput
    tecnico?: TecnicoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password_hash?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    tipo_usuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    creado_en?: DateTimeFilter<"Usuario"> | Date | string
    administrador?: XOR<AdministradorNullableScalarRelationFilter, AdministradorWhereInput> | null
    tecnico?: XOR<TecnicoNullableScalarRelationFilter, TecnicoWhereInput> | null
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    tipo_usuario?: SortOrder
    creado_en?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password_hash?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    tipo_usuario?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    creado_en?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id_usuario?: IntFilter<"Administrador"> | number
    nivel_acceso?: StringFilter<"Administrador"> | string
    departamento?: StringNullableFilter<"Administrador"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AdministradorOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nivel_acceso?: SortOrder
    departamento?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nivel_acceso?: StringFilter<"Administrador"> | string
    departamento?: StringNullableFilter<"Administrador"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_usuario">

  export type AdministradorOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nivel_acceso?: SortOrder
    departamento?: SortOrderInput | SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Administrador"> | number
    nivel_acceso?: StringWithAggregatesFilter<"Administrador"> | string
    departamento?: StringNullableWithAggregatesFilter<"Administrador"> | string | null
  }

  export type TecnicoWhereInput = {
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    id_usuario?: IntFilter<"Tecnico"> | number
    especialidad?: StringNullableFilter<"Tecnico"> | string | null
    matricula?: StringNullableFilter<"Tecnico"> | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFilter<"Tecnico"> | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TecnicoOrderByWithRelationInput = {
    id_usuario?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    matricula?: SortOrderInput | SortOrder
    estado_disponibilidad?: SortOrder
    ordenes?: OrdenTrabajoOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type TecnicoWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: TecnicoWhereInput | TecnicoWhereInput[]
    OR?: TecnicoWhereInput[]
    NOT?: TecnicoWhereInput | TecnicoWhereInput[]
    especialidad?: StringNullableFilter<"Tecnico"> | string | null
    matricula?: StringNullableFilter<"Tecnico"> | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFilter<"Tecnico"> | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_usuario">

  export type TecnicoOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    matricula?: SortOrderInput | SortOrder
    estado_disponibilidad?: SortOrder
    _count?: TecnicoCountOrderByAggregateInput
    _avg?: TecnicoAvgOrderByAggregateInput
    _max?: TecnicoMaxOrderByAggregateInput
    _min?: TecnicoMinOrderByAggregateInput
    _sum?: TecnicoSumOrderByAggregateInput
  }

  export type TecnicoScalarWhereWithAggregatesInput = {
    AND?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    OR?: TecnicoScalarWhereWithAggregatesInput[]
    NOT?: TecnicoScalarWhereWithAggregatesInput | TecnicoScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Tecnico"> | number
    especialidad?: StringNullableWithAggregatesFilter<"Tecnico"> | string | null
    matricula?: StringNullableWithAggregatesFilter<"Tecnico"> | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadWithAggregatesFilter<"Tecnico"> | $Enums.EstadoDisponibilidad
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    nombre_empresa?: StringFilter<"Cliente"> | string
    contacto_nombre?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringFilter<"Cliente"> | string
    creado_en?: DateTimeFilter<"Cliente"> | Date | string
    equipos?: EquipoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre_empresa?: SortOrder
    contacto_nombre?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrder
    creado_en?: SortOrder
    equipos?: EquipoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre_empresa?: StringFilter<"Cliente"> | string
    contacto_nombre?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    direccion?: StringFilter<"Cliente"> | string
    creado_en?: DateTimeFilter<"Cliente"> | Date | string
    equipos?: EquipoListRelationFilter
  }, "id_cliente">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre_empresa?: SortOrder
    contacto_nombre?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrder
    creado_en?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    nombre_empresa?: StringWithAggregatesFilter<"Cliente"> | string
    contacto_nombre?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    creado_en?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type EquipoWhereInput = {
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    id_equipo?: IntFilter<"Equipo"> | number
    id_cliente?: IntFilter<"Equipo"> | number
    nombre_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    numero_serie?: StringFilter<"Equipo"> | string
    ubicacion_interna?: StringNullableFilter<"Equipo"> | string | null
    tipo_refrigerante?: StringNullableFilter<"Equipo"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    ordenes?: OrdenTrabajoListRelationFilter
  }

  export type EquipoOrderByWithRelationInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
    nombre_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    ubicacion_interna?: SortOrderInput | SortOrder
    tipo_refrigerante?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    ordenes?: OrdenTrabajoOrderByRelationAggregateInput
  }

  export type EquipoWhereUniqueInput = Prisma.AtLeast<{
    id_equipo?: number
    numero_serie?: string
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    id_cliente?: IntFilter<"Equipo"> | number
    nombre_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    ubicacion_interna?: StringNullableFilter<"Equipo"> | string | null
    tipo_refrigerante?: StringNullableFilter<"Equipo"> | string | null
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    ordenes?: OrdenTrabajoListRelationFilter
  }, "id_equipo" | "numero_serie">

  export type EquipoOrderByWithAggregationInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
    nombre_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    ubicacion_interna?: SortOrderInput | SortOrder
    tipo_refrigerante?: SortOrderInput | SortOrder
    _count?: EquipoCountOrderByAggregateInput
    _avg?: EquipoAvgOrderByAggregateInput
    _max?: EquipoMaxOrderByAggregateInput
    _min?: EquipoMinOrderByAggregateInput
    _sum?: EquipoSumOrderByAggregateInput
  }

  export type EquipoScalarWhereWithAggregatesInput = {
    AND?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    OR?: EquipoScalarWhereWithAggregatesInput[]
    NOT?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    id_equipo?: IntWithAggregatesFilter<"Equipo"> | number
    id_cliente?: IntWithAggregatesFilter<"Equipo"> | number
    nombre_equipo?: StringWithAggregatesFilter<"Equipo"> | string
    marca?: StringWithAggregatesFilter<"Equipo"> | string
    modelo?: StringWithAggregatesFilter<"Equipo"> | string
    numero_serie?: StringWithAggregatesFilter<"Equipo"> | string
    ubicacion_interna?: StringNullableWithAggregatesFilter<"Equipo"> | string | null
    tipo_refrigerante?: StringNullableWithAggregatesFilter<"Equipo"> | string | null
  }

  export type OrdenTrabajoWhereInput = {
    AND?: OrdenTrabajoWhereInput | OrdenTrabajoWhereInput[]
    OR?: OrdenTrabajoWhereInput[]
    NOT?: OrdenTrabajoWhereInput | OrdenTrabajoWhereInput[]
    id_orden?: IntFilter<"OrdenTrabajo"> | number
    id_equipo?: IntFilter<"OrdenTrabajo"> | number
    id_tecnico?: IntFilter<"OrdenTrabajo"> | number
    tipo_mantenimiento?: EnumTipoMantenimientoFilter<"OrdenTrabajo"> | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFilter<"OrdenTrabajo"> | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFilter<"OrdenTrabajo"> | $Enums.Prioridad
    fecha_programada?: DateTimeFilter<"OrdenTrabajo"> | Date | string
    descripcion_tarea?: StringFilter<"OrdenTrabajo"> | string
    comentario_respuesta?: StringNullableFilter<"OrdenTrabajo"> | string | null
    fecha_respuesta?: DateTimeNullableFilter<"OrdenTrabajo"> | Date | string | null
    creado_en?: DateTimeFilter<"OrdenTrabajo"> | Date | string
    intervenciones?: IntervencionListRelationFilter
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
  }

  export type OrdenTrabajoOrderByWithRelationInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
    tipo_mantenimiento?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fecha_programada?: SortOrder
    descripcion_tarea?: SortOrder
    comentario_respuesta?: SortOrderInput | SortOrder
    fecha_respuesta?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    intervenciones?: IntervencionOrderByRelationAggregateInput
    equipo?: EquipoOrderByWithRelationInput
    tecnico?: TecnicoOrderByWithRelationInput
  }

  export type OrdenTrabajoWhereUniqueInput = Prisma.AtLeast<{
    id_orden?: number
    AND?: OrdenTrabajoWhereInput | OrdenTrabajoWhereInput[]
    OR?: OrdenTrabajoWhereInput[]
    NOT?: OrdenTrabajoWhereInput | OrdenTrabajoWhereInput[]
    id_equipo?: IntFilter<"OrdenTrabajo"> | number
    id_tecnico?: IntFilter<"OrdenTrabajo"> | number
    tipo_mantenimiento?: EnumTipoMantenimientoFilter<"OrdenTrabajo"> | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFilter<"OrdenTrabajo"> | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFilter<"OrdenTrabajo"> | $Enums.Prioridad
    fecha_programada?: DateTimeFilter<"OrdenTrabajo"> | Date | string
    descripcion_tarea?: StringFilter<"OrdenTrabajo"> | string
    comentario_respuesta?: StringNullableFilter<"OrdenTrabajo"> | string | null
    fecha_respuesta?: DateTimeNullableFilter<"OrdenTrabajo"> | Date | string | null
    creado_en?: DateTimeFilter<"OrdenTrabajo"> | Date | string
    intervenciones?: IntervencionListRelationFilter
    equipo?: XOR<EquipoScalarRelationFilter, EquipoWhereInput>
    tecnico?: XOR<TecnicoScalarRelationFilter, TecnicoWhereInput>
  }, "id_orden">

  export type OrdenTrabajoOrderByWithAggregationInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
    tipo_mantenimiento?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fecha_programada?: SortOrder
    descripcion_tarea?: SortOrder
    comentario_respuesta?: SortOrderInput | SortOrder
    fecha_respuesta?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    _count?: OrdenTrabajoCountOrderByAggregateInput
    _avg?: OrdenTrabajoAvgOrderByAggregateInput
    _max?: OrdenTrabajoMaxOrderByAggregateInput
    _min?: OrdenTrabajoMinOrderByAggregateInput
    _sum?: OrdenTrabajoSumOrderByAggregateInput
  }

  export type OrdenTrabajoScalarWhereWithAggregatesInput = {
    AND?: OrdenTrabajoScalarWhereWithAggregatesInput | OrdenTrabajoScalarWhereWithAggregatesInput[]
    OR?: OrdenTrabajoScalarWhereWithAggregatesInput[]
    NOT?: OrdenTrabajoScalarWhereWithAggregatesInput | OrdenTrabajoScalarWhereWithAggregatesInput[]
    id_orden?: IntWithAggregatesFilter<"OrdenTrabajo"> | number
    id_equipo?: IntWithAggregatesFilter<"OrdenTrabajo"> | number
    id_tecnico?: IntWithAggregatesFilter<"OrdenTrabajo"> | number
    tipo_mantenimiento?: EnumTipoMantenimientoWithAggregatesFilter<"OrdenTrabajo"> | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenWithAggregatesFilter<"OrdenTrabajo"> | $Enums.EstadoOrden
    prioridad?: EnumPrioridadWithAggregatesFilter<"OrdenTrabajo"> | $Enums.Prioridad
    fecha_programada?: DateTimeWithAggregatesFilter<"OrdenTrabajo"> | Date | string
    descripcion_tarea?: StringWithAggregatesFilter<"OrdenTrabajo"> | string
    comentario_respuesta?: StringNullableWithAggregatesFilter<"OrdenTrabajo"> | string | null
    fecha_respuesta?: DateTimeNullableWithAggregatesFilter<"OrdenTrabajo"> | Date | string | null
    creado_en?: DateTimeWithAggregatesFilter<"OrdenTrabajo"> | Date | string
  }

  export type IntervencionWhereInput = {
    AND?: IntervencionWhereInput | IntervencionWhereInput[]
    OR?: IntervencionWhereInput[]
    NOT?: IntervencionWhereInput | IntervencionWhereInput[]
    id_intervencion?: IntFilter<"Intervencion"> | number
    id_orden?: IntFilter<"Intervencion"> | number
    fecha_ejecucion?: DateTimeFilter<"Intervencion"> | Date | string
    presion_alta?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    presion_baja?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFilter<"Intervencion"> | boolean
    observaciones?: StringNullableFilter<"Intervencion"> | string | null
    url_imagen_adjunta?: StringNullableFilter<"Intervencion"> | string | null
    orden?: XOR<OrdenTrabajoScalarRelationFilter, OrdenTrabajoWhereInput>
  }

  export type IntervencionOrderByWithRelationInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    fecha_ejecucion?: SortOrder
    presion_alta?: SortOrderInput | SortOrder
    presion_baja?: SortOrderInput | SortOrder
    temperatura_salida?: SortOrderInput | SortOrder
    corriente_consumo?: SortOrderInput | SortOrder
    checklist_completado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    url_imagen_adjunta?: SortOrderInput | SortOrder
    orden?: OrdenTrabajoOrderByWithRelationInput
  }

  export type IntervencionWhereUniqueInput = Prisma.AtLeast<{
    id_intervencion?: number
    AND?: IntervencionWhereInput | IntervencionWhereInput[]
    OR?: IntervencionWhereInput[]
    NOT?: IntervencionWhereInput | IntervencionWhereInput[]
    id_orden?: IntFilter<"Intervencion"> | number
    fecha_ejecucion?: DateTimeFilter<"Intervencion"> | Date | string
    presion_alta?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    presion_baja?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFilter<"Intervencion"> | boolean
    observaciones?: StringNullableFilter<"Intervencion"> | string | null
    url_imagen_adjunta?: StringNullableFilter<"Intervencion"> | string | null
    orden?: XOR<OrdenTrabajoScalarRelationFilter, OrdenTrabajoWhereInput>
  }, "id_intervencion">

  export type IntervencionOrderByWithAggregationInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    fecha_ejecucion?: SortOrder
    presion_alta?: SortOrderInput | SortOrder
    presion_baja?: SortOrderInput | SortOrder
    temperatura_salida?: SortOrderInput | SortOrder
    corriente_consumo?: SortOrderInput | SortOrder
    checklist_completado?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    url_imagen_adjunta?: SortOrderInput | SortOrder
    _count?: IntervencionCountOrderByAggregateInput
    _avg?: IntervencionAvgOrderByAggregateInput
    _max?: IntervencionMaxOrderByAggregateInput
    _min?: IntervencionMinOrderByAggregateInput
    _sum?: IntervencionSumOrderByAggregateInput
  }

  export type IntervencionScalarWhereWithAggregatesInput = {
    AND?: IntervencionScalarWhereWithAggregatesInput | IntervencionScalarWhereWithAggregatesInput[]
    OR?: IntervencionScalarWhereWithAggregatesInput[]
    NOT?: IntervencionScalarWhereWithAggregatesInput | IntervencionScalarWhereWithAggregatesInput[]
    id_intervencion?: IntWithAggregatesFilter<"Intervencion"> | number
    id_orden?: IntWithAggregatesFilter<"Intervencion"> | number
    fecha_ejecucion?: DateTimeWithAggregatesFilter<"Intervencion"> | Date | string
    presion_alta?: DecimalNullableWithAggregatesFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    presion_baja?: DecimalNullableWithAggregatesFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: DecimalNullableWithAggregatesFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: DecimalNullableWithAggregatesFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolWithAggregatesFilter<"Intervencion"> | boolean
    observaciones?: StringNullableWithAggregatesFilter<"Intervencion"> | string | null
    url_imagen_adjunta?: StringNullableWithAggregatesFilter<"Intervencion"> | string | null
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
    tecnico?: TecnicoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
    tecnico?: TecnicoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
    tecnico?: TecnicoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
    tecnico?: TecnicoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    nivel_acceso?: string
    departamento?: string | null
    usuario: UsuarioCreateNestedOneWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    id_usuario: number
    nivel_acceso?: string
    departamento?: string | null
  }

  export type AdministradorUpdateInput = {
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdministradorCreateManyInput = {
    id_usuario: number
    nivel_acceso?: string
    departamento?: string | null
  }

  export type AdministradorUpdateManyMutationInput = {
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TecnicoCreateInput = {
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoCreateNestedManyWithoutTecnicoInput
    usuario: UsuarioCreateNestedOneWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateInput = {
    id_usuario: number
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUpdateInput = {
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUpdateManyWithoutTecnicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoCreateManyInput = {
    id_usuario: number
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
  }

  export type TecnicoUpdateManyMutationInput = {
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
  }

  export type TecnicoUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
  }

  export type ClienteCreateInput = {
    nombre_empresa: string
    contacto_nombre?: string | null
    telefono?: string | null
    email?: string | null
    direccion: string
    creado_en?: Date | string
    equipos?: EquipoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    nombre_empresa: string
    contacto_nombre?: string | null
    telefono?: string | null
    email?: string | null
    direccion: string
    creado_en?: Date | string
    equipos?: EquipoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    nombre_empresa: string
    contacto_nombre?: string | null
    telefono?: string | null
    email?: string | null
    direccion: string
    creado_en?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipoCreateInput = {
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
    cliente: ClienteCreateNestedOneWithoutEquiposInput
    ordenes?: OrdenTrabajoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateInput = {
    id_equipo?: number
    id_cliente: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
    ordenes?: OrdenTrabajoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUpdateInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutEquiposNestedInput
    ordenes?: OrdenTrabajoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
    ordenes?: OrdenTrabajoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoCreateManyInput = {
    id_equipo?: number
    id_cliente: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
  }

  export type EquipoUpdateManyMutationInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipoUncheckedUpdateManyInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdenTrabajoCreateInput = {
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionCreateNestedManyWithoutOrdenInput
    equipo: EquipoCreateNestedOneWithoutOrdenesInput
    tecnico: TecnicoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenTrabajoUncheckedCreateInput = {
    id_orden?: number
    id_equipo: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenTrabajoUpdateInput = {
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUpdateManyWithoutOrdenNestedInput
    equipo?: EquipoUpdateOneRequiredWithoutOrdenesNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_tecnico?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenTrabajoCreateManyInput = {
    id_orden?: number
    id_equipo: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
  }

  export type OrdenTrabajoUpdateManyMutationInput = {
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenTrabajoUncheckedUpdateManyInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_tecnico?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntervencionCreateInput = {
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
    orden: OrdenTrabajoCreateNestedOneWithoutIntervencionesInput
  }

  export type IntervencionUncheckedCreateInput = {
    id_intervencion?: number
    id_orden: number
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
  }

  export type IntervencionUpdateInput = {
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
    orden?: OrdenTrabajoUpdateOneRequiredWithoutIntervencionesNestedInput
  }

  export type IntervencionUncheckedUpdateInput = {
    id_intervencion?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntervencionCreateManyInput = {
    id_intervencion?: number
    id_orden: number
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
  }

  export type IntervencionUpdateManyMutationInput = {
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntervencionUncheckedUpdateManyInput = {
    id_intervencion?: IntFieldUpdateOperationsInput | number
    id_orden?: IntFieldUpdateOperationsInput | number
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministradorNullableScalarRelationFilter = {
    is?: AdministradorWhereInput | null
    isNot?: AdministradorWhereInput | null
  }

  export type TecnicoNullableScalarRelationFilter = {
    is?: TecnicoWhereInput | null
    isNot?: TecnicoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    telefono?: SortOrder
    tipo_usuario?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    telefono?: SortOrder
    tipo_usuario?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    telefono?: SortOrder
    tipo_usuario?: SortOrder
    creado_en?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type AdministradorCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nivel_acceso?: SortOrder
    departamento?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nivel_acceso?: SortOrder
    departamento?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nivel_acceso?: SortOrder
    departamento?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type EnumEstadoDisponibilidadFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoDisponibilidad | EnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel> | $Enums.EstadoDisponibilidad
  }

  export type OrdenTrabajoListRelationFilter = {
    every?: OrdenTrabajoWhereInput
    some?: OrdenTrabajoWhereInput
    none?: OrdenTrabajoWhereInput
  }

  export type OrdenTrabajoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TecnicoCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    especialidad?: SortOrder
    matricula?: SortOrder
    estado_disponibilidad?: SortOrder
  }

  export type TecnicoAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type TecnicoMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    especialidad?: SortOrder
    matricula?: SortOrder
    estado_disponibilidad?: SortOrder
  }

  export type TecnicoMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    especialidad?: SortOrder
    matricula?: SortOrder
    estado_disponibilidad?: SortOrder
  }

  export type TecnicoSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type EnumEstadoDisponibilidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoDisponibilidad | EnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoDisponibilidadWithAggregatesFilter<$PrismaModel> | $Enums.EstadoDisponibilidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel>
    _max?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel>
  }

  export type EquipoListRelationFilter = {
    every?: EquipoWhereInput
    some?: EquipoWhereInput
    none?: EquipoWhereInput
  }

  export type EquipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre_empresa?: SortOrder
    contacto_nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    creado_en?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre_empresa?: SortOrder
    contacto_nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    creado_en?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre_empresa?: SortOrder
    contacto_nombre?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    creado_en?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EquipoCountOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
    nombre_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    ubicacion_interna?: SortOrder
    tipo_refrigerante?: SortOrder
  }

  export type EquipoAvgOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
  }

  export type EquipoMaxOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
    nombre_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    ubicacion_interna?: SortOrder
    tipo_refrigerante?: SortOrder
  }

  export type EquipoMinOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
    nombre_equipo?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    numero_serie?: SortOrder
    ubicacion_interna?: SortOrder
    tipo_refrigerante?: SortOrder
  }

  export type EquipoSumOrderByAggregateInput = {
    id_equipo?: SortOrder
    id_cliente?: SortOrder
  }

  export type EnumTipoMantenimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoFilter<$PrismaModel> | $Enums.TipoMantenimiento
  }

  export type EnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
  }

  export type EnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntervencionListRelationFilter = {
    every?: IntervencionWhereInput
    some?: IntervencionWhereInput
    none?: IntervencionWhereInput
  }

  export type EquipoScalarRelationFilter = {
    is?: EquipoWhereInput
    isNot?: EquipoWhereInput
  }

  export type TecnicoScalarRelationFilter = {
    is?: TecnicoWhereInput
    isNot?: TecnicoWhereInput
  }

  export type IntervencionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenTrabajoCountOrderByAggregateInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
    tipo_mantenimiento?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fecha_programada?: SortOrder
    descripcion_tarea?: SortOrder
    comentario_respuesta?: SortOrder
    fecha_respuesta?: SortOrder
    creado_en?: SortOrder
  }

  export type OrdenTrabajoAvgOrderByAggregateInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
  }

  export type OrdenTrabajoMaxOrderByAggregateInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
    tipo_mantenimiento?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fecha_programada?: SortOrder
    descripcion_tarea?: SortOrder
    comentario_respuesta?: SortOrder
    fecha_respuesta?: SortOrder
    creado_en?: SortOrder
  }

  export type OrdenTrabajoMinOrderByAggregateInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
    tipo_mantenimiento?: SortOrder
    estado?: SortOrder
    prioridad?: SortOrder
    fecha_programada?: SortOrder
    descripcion_tarea?: SortOrder
    comentario_respuesta?: SortOrder
    fecha_respuesta?: SortOrder
    creado_en?: SortOrder
  }

  export type OrdenTrabajoSumOrderByAggregateInput = {
    id_orden?: SortOrder
    id_equipo?: SortOrder
    id_tecnico?: SortOrder
  }

  export type EnumTipoMantenimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMantenimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
  }

  export type EnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
  }

  export type EnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrdenTrabajoScalarRelationFilter = {
    is?: OrdenTrabajoWhereInput
    isNot?: OrdenTrabajoWhereInput
  }

  export type IntervencionCountOrderByAggregateInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    fecha_ejecucion?: SortOrder
    presion_alta?: SortOrder
    presion_baja?: SortOrder
    temperatura_salida?: SortOrder
    corriente_consumo?: SortOrder
    checklist_completado?: SortOrder
    observaciones?: SortOrder
    url_imagen_adjunta?: SortOrder
  }

  export type IntervencionAvgOrderByAggregateInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    presion_alta?: SortOrder
    presion_baja?: SortOrder
    temperatura_salida?: SortOrder
    corriente_consumo?: SortOrder
  }

  export type IntervencionMaxOrderByAggregateInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    fecha_ejecucion?: SortOrder
    presion_alta?: SortOrder
    presion_baja?: SortOrder
    temperatura_salida?: SortOrder
    corriente_consumo?: SortOrder
    checklist_completado?: SortOrder
    observaciones?: SortOrder
    url_imagen_adjunta?: SortOrder
  }

  export type IntervencionMinOrderByAggregateInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    fecha_ejecucion?: SortOrder
    presion_alta?: SortOrder
    presion_baja?: SortOrder
    temperatura_salida?: SortOrder
    corriente_consumo?: SortOrder
    checklist_completado?: SortOrder
    observaciones?: SortOrder
    url_imagen_adjunta?: SortOrder
  }

  export type IntervencionSumOrderByAggregateInput = {
    id_intervencion?: SortOrder
    id_orden?: SortOrder
    presion_alta?: SortOrder
    presion_baja?: SortOrder
    temperatura_salida?: SortOrder
    corriente_consumo?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdministradorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
  }

  export type TecnicoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput
    connect?: TecnicoWhereUniqueInput
  }

  export type AdministradorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    connect?: AdministradorWhereUniqueInput
  }

  export type TecnicoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput
    connect?: TecnicoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdministradorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type TecnicoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput
    upsert?: TecnicoUpsertWithoutUsuarioInput
    disconnect?: TecnicoWhereInput | boolean
    delete?: TecnicoWhereInput | boolean
    connect?: TecnicoWhereUniqueInput
    update?: XOR<XOR<TecnicoUpdateToOneWithWhereWithoutUsuarioInput, TecnicoUpdateWithoutUsuarioInput>, TecnicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutUsuarioInput
    upsert?: AdministradorUpsertWithoutUsuarioInput
    disconnect?: AdministradorWhereInput | boolean
    delete?: AdministradorWhereInput | boolean
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutUsuarioInput, AdministradorUpdateWithoutUsuarioInput>, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type TecnicoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutUsuarioInput
    upsert?: TecnicoUpsertWithoutUsuarioInput
    disconnect?: TecnicoWhereInput | boolean
    delete?: TecnicoWhereInput | boolean
    connect?: TecnicoWhereUniqueInput
    update?: XOR<XOR<TecnicoUpdateToOneWithWhereWithoutUsuarioInput, TecnicoUpdateWithoutUsuarioInput>, TecnicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedOneWithoutAdministradorInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAdministradorNestedInput = {
    create?: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdministradorInput
    upsert?: UsuarioUpsertWithoutAdministradorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAdministradorInput, UsuarioUpdateWithoutAdministradorInput>, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type OrdenTrabajoCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput> | OrdenTrabajoCreateWithoutTecnicoInput[] | OrdenTrabajoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutTecnicoInput | OrdenTrabajoCreateOrConnectWithoutTecnicoInput[]
    createMany?: OrdenTrabajoCreateManyTecnicoInputEnvelope
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTecnicoInput = {
    create?: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTecnicoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrdenTrabajoUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput> | OrdenTrabajoCreateWithoutTecnicoInput[] | OrdenTrabajoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutTecnicoInput | OrdenTrabajoCreateOrConnectWithoutTecnicoInput[]
    createMany?: OrdenTrabajoCreateManyTecnicoInputEnvelope
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
  }

  export type EnumEstadoDisponibilidadFieldUpdateOperationsInput = {
    set?: $Enums.EstadoDisponibilidad
  }

  export type OrdenTrabajoUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput> | OrdenTrabajoCreateWithoutTecnicoInput[] | OrdenTrabajoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutTecnicoInput | OrdenTrabajoCreateOrConnectWithoutTecnicoInput[]
    upsert?: OrdenTrabajoUpsertWithWhereUniqueWithoutTecnicoInput | OrdenTrabajoUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: OrdenTrabajoCreateManyTecnicoInputEnvelope
    set?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    disconnect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    delete?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    update?: OrdenTrabajoUpdateWithWhereUniqueWithoutTecnicoInput | OrdenTrabajoUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: OrdenTrabajoUpdateManyWithWhereWithoutTecnicoInput | OrdenTrabajoUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTecnicoNestedInput = {
    create?: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTecnicoInput
    upsert?: UsuarioUpsertWithoutTecnicoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTecnicoInput, UsuarioUpdateWithoutTecnicoInput>, UsuarioUncheckedUpdateWithoutTecnicoInput>
  }

  export type OrdenTrabajoUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput> | OrdenTrabajoCreateWithoutTecnicoInput[] | OrdenTrabajoUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutTecnicoInput | OrdenTrabajoCreateOrConnectWithoutTecnicoInput[]
    upsert?: OrdenTrabajoUpsertWithWhereUniqueWithoutTecnicoInput | OrdenTrabajoUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: OrdenTrabajoCreateManyTecnicoInputEnvelope
    set?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    disconnect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    delete?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    update?: OrdenTrabajoUpdateWithWhereUniqueWithoutTecnicoInput | OrdenTrabajoUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: OrdenTrabajoUpdateManyWithWhereWithoutTecnicoInput | OrdenTrabajoUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
  }

  export type EquipoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput> | EquipoCreateWithoutClienteInput[] | EquipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutClienteInput | EquipoCreateOrConnectWithoutClienteInput[]
    createMany?: EquipoCreateManyClienteInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type EquipoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput> | EquipoCreateWithoutClienteInput[] | EquipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutClienteInput | EquipoCreateOrConnectWithoutClienteInput[]
    createMany?: EquipoCreateManyClienteInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type EquipoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput> | EquipoCreateWithoutClienteInput[] | EquipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutClienteInput | EquipoCreateOrConnectWithoutClienteInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutClienteInput | EquipoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EquipoCreateManyClienteInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutClienteInput | EquipoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutClienteInput | EquipoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type EquipoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput> | EquipoCreateWithoutClienteInput[] | EquipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutClienteInput | EquipoCreateOrConnectWithoutClienteInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutClienteInput | EquipoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EquipoCreateManyClienteInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutClienteInput | EquipoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutClienteInput | EquipoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutEquiposInput = {
    create?: XOR<ClienteCreateWithoutEquiposInput, ClienteUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEquiposInput
    connect?: ClienteWhereUniqueInput
  }

  export type OrdenTrabajoCreateNestedManyWithoutEquipoInput = {
    create?: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput> | OrdenTrabajoCreateWithoutEquipoInput[] | OrdenTrabajoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutEquipoInput | OrdenTrabajoCreateOrConnectWithoutEquipoInput[]
    createMany?: OrdenTrabajoCreateManyEquipoInputEnvelope
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
  }

  export type OrdenTrabajoUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput> | OrdenTrabajoCreateWithoutEquipoInput[] | OrdenTrabajoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutEquipoInput | OrdenTrabajoCreateOrConnectWithoutEquipoInput[]
    createMany?: OrdenTrabajoCreateManyEquipoInputEnvelope
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<ClienteCreateWithoutEquiposInput, ClienteUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEquiposInput
    upsert?: ClienteUpsertWithoutEquiposInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEquiposInput, ClienteUpdateWithoutEquiposInput>, ClienteUncheckedUpdateWithoutEquiposInput>
  }

  export type OrdenTrabajoUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput> | OrdenTrabajoCreateWithoutEquipoInput[] | OrdenTrabajoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutEquipoInput | OrdenTrabajoCreateOrConnectWithoutEquipoInput[]
    upsert?: OrdenTrabajoUpsertWithWhereUniqueWithoutEquipoInput | OrdenTrabajoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: OrdenTrabajoCreateManyEquipoInputEnvelope
    set?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    disconnect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    delete?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    update?: OrdenTrabajoUpdateWithWhereUniqueWithoutEquipoInput | OrdenTrabajoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: OrdenTrabajoUpdateManyWithWhereWithoutEquipoInput | OrdenTrabajoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
  }

  export type OrdenTrabajoUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput> | OrdenTrabajoCreateWithoutEquipoInput[] | OrdenTrabajoUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutEquipoInput | OrdenTrabajoCreateOrConnectWithoutEquipoInput[]
    upsert?: OrdenTrabajoUpsertWithWhereUniqueWithoutEquipoInput | OrdenTrabajoUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: OrdenTrabajoCreateManyEquipoInputEnvelope
    set?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    disconnect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    delete?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    connect?: OrdenTrabajoWhereUniqueInput | OrdenTrabajoWhereUniqueInput[]
    update?: OrdenTrabajoUpdateWithWhereUniqueWithoutEquipoInput | OrdenTrabajoUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: OrdenTrabajoUpdateManyWithWhereWithoutEquipoInput | OrdenTrabajoUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
  }

  export type IntervencionCreateNestedManyWithoutOrdenInput = {
    create?: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput> | IntervencionCreateWithoutOrdenInput[] | IntervencionUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: IntervencionCreateOrConnectWithoutOrdenInput | IntervencionCreateOrConnectWithoutOrdenInput[]
    createMany?: IntervencionCreateManyOrdenInputEnvelope
    connect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
  }

  export type EquipoCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<EquipoCreateWithoutOrdenesInput, EquipoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutOrdenesInput
    connect?: EquipoWhereUniqueInput
  }

  export type TecnicoCreateNestedOneWithoutOrdenesInput = {
    create?: XOR<TecnicoCreateWithoutOrdenesInput, TecnicoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutOrdenesInput
    connect?: TecnicoWhereUniqueInput
  }

  export type IntervencionUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput> | IntervencionCreateWithoutOrdenInput[] | IntervencionUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: IntervencionCreateOrConnectWithoutOrdenInput | IntervencionCreateOrConnectWithoutOrdenInput[]
    createMany?: IntervencionCreateManyOrdenInputEnvelope
    connect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
  }

  export type EnumTipoMantenimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMantenimiento
  }

  export type EnumEstadoOrdenFieldUpdateOperationsInput = {
    set?: $Enums.EstadoOrden
  }

  export type EnumPrioridadFieldUpdateOperationsInput = {
    set?: $Enums.Prioridad
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntervencionUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput> | IntervencionCreateWithoutOrdenInput[] | IntervencionUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: IntervencionCreateOrConnectWithoutOrdenInput | IntervencionCreateOrConnectWithoutOrdenInput[]
    upsert?: IntervencionUpsertWithWhereUniqueWithoutOrdenInput | IntervencionUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: IntervencionCreateManyOrdenInputEnvelope
    set?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    disconnect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    delete?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    connect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    update?: IntervencionUpdateWithWhereUniqueWithoutOrdenInput | IntervencionUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: IntervencionUpdateManyWithWhereWithoutOrdenInput | IntervencionUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: IntervencionScalarWhereInput | IntervencionScalarWhereInput[]
  }

  export type EquipoUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<EquipoCreateWithoutOrdenesInput, EquipoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: EquipoCreateOrConnectWithoutOrdenesInput
    upsert?: EquipoUpsertWithoutOrdenesInput
    connect?: EquipoWhereUniqueInput
    update?: XOR<XOR<EquipoUpdateToOneWithWhereWithoutOrdenesInput, EquipoUpdateWithoutOrdenesInput>, EquipoUncheckedUpdateWithoutOrdenesInput>
  }

  export type TecnicoUpdateOneRequiredWithoutOrdenesNestedInput = {
    create?: XOR<TecnicoCreateWithoutOrdenesInput, TecnicoUncheckedCreateWithoutOrdenesInput>
    connectOrCreate?: TecnicoCreateOrConnectWithoutOrdenesInput
    upsert?: TecnicoUpsertWithoutOrdenesInput
    connect?: TecnicoWhereUniqueInput
    update?: XOR<XOR<TecnicoUpdateToOneWithWhereWithoutOrdenesInput, TecnicoUpdateWithoutOrdenesInput>, TecnicoUncheckedUpdateWithoutOrdenesInput>
  }

  export type IntervencionUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput> | IntervencionCreateWithoutOrdenInput[] | IntervencionUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: IntervencionCreateOrConnectWithoutOrdenInput | IntervencionCreateOrConnectWithoutOrdenInput[]
    upsert?: IntervencionUpsertWithWhereUniqueWithoutOrdenInput | IntervencionUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: IntervencionCreateManyOrdenInputEnvelope
    set?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    disconnect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    delete?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    connect?: IntervencionWhereUniqueInput | IntervencionWhereUniqueInput[]
    update?: IntervencionUpdateWithWhereUniqueWithoutOrdenInput | IntervencionUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: IntervencionUpdateManyWithWhereWithoutOrdenInput | IntervencionUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: IntervencionScalarWhereInput | IntervencionScalarWhereInput[]
  }

  export type OrdenTrabajoCreateNestedOneWithoutIntervencionesInput = {
    create?: XOR<OrdenTrabajoCreateWithoutIntervencionesInput, OrdenTrabajoUncheckedCreateWithoutIntervencionesInput>
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutIntervencionesInput
    connect?: OrdenTrabajoWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrdenTrabajoUpdateOneRequiredWithoutIntervencionesNestedInput = {
    create?: XOR<OrdenTrabajoCreateWithoutIntervencionesInput, OrdenTrabajoUncheckedCreateWithoutIntervencionesInput>
    connectOrCreate?: OrdenTrabajoCreateOrConnectWithoutIntervencionesInput
    upsert?: OrdenTrabajoUpsertWithoutIntervencionesInput
    connect?: OrdenTrabajoWhereUniqueInput
    update?: XOR<XOR<OrdenTrabajoUpdateToOneWithWhereWithoutIntervencionesInput, OrdenTrabajoUpdateWithoutIntervencionesInput>, OrdenTrabajoUncheckedUpdateWithoutIntervencionesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEstadoDisponibilidadFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoDisponibilidad | EnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel> | $Enums.EstadoDisponibilidad
  }

  export type NestedEnumEstadoDisponibilidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoDisponibilidad | EnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoDisponibilidad[] | ListEnumEstadoDisponibilidadFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoDisponibilidadWithAggregatesFilter<$PrismaModel> | $Enums.EstadoDisponibilidad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel>
    _max?: NestedEnumEstadoDisponibilidadFilter<$PrismaModel>
  }

  export type NestedEnumTipoMantenimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoFilter<$PrismaModel> | $Enums.TipoMantenimiento
  }

  export type NestedEnumEstadoOrdenFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenFilter<$PrismaModel> | $Enums.EstadoOrden
  }

  export type NestedEnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMantenimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoOrden | EnumEstadoOrdenFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoOrden[] | ListEnumEstadoOrdenFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoOrdenWithAggregatesFilter<$PrismaModel> | $Enums.EstadoOrden
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoOrdenFilter<$PrismaModel>
    _max?: NestedEnumEstadoOrdenFilter<$PrismaModel>
  }

  export type NestedEnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdministradorCreateWithoutUsuarioInput = {
    nivel_acceso?: string
    departamento?: string | null
  }

  export type AdministradorUncheckedCreateWithoutUsuarioInput = {
    nivel_acceso?: string
    departamento?: string | null
  }

  export type AdministradorCreateOrConnectWithoutUsuarioInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
  }

  export type TecnicoCreateWithoutUsuarioInput = {
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateWithoutUsuarioInput = {
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type TecnicoCreateOrConnectWithoutUsuarioInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
  }

  export type AdministradorUpsertWithoutUsuarioInput = {
    update: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AdministradorCreateWithoutUsuarioInput, AdministradorUncheckedCreateWithoutUsuarioInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutUsuarioInput, AdministradorUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdministradorUpdateWithoutUsuarioInput = {
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdministradorUncheckedUpdateWithoutUsuarioInput = {
    nivel_acceso?: StringFieldUpdateOperationsInput | string
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TecnicoUpsertWithoutUsuarioInput = {
    update: XOR<TecnicoUpdateWithoutUsuarioInput, TecnicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TecnicoCreateWithoutUsuarioInput, TecnicoUncheckedCreateWithoutUsuarioInput>
    where?: TecnicoWhereInput
  }

  export type TecnicoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: TecnicoWhereInput
    data: XOR<TecnicoUpdateWithoutUsuarioInput, TecnicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type TecnicoUpdateWithoutUsuarioInput = {
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUpdateManyWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutUsuarioInput = {
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
    ordenes?: OrdenTrabajoUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type UsuarioCreateWithoutAdministradorInput = {
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    tecnico?: TecnicoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAdministradorInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    tecnico?: TecnicoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAdministradorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
  }

  export type UsuarioUpsertWithoutAdministradorInput = {
    update: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
    create: XOR<UsuarioCreateWithoutAdministradorInput, UsuarioUncheckedCreateWithoutAdministradorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAdministradorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAdministradorInput, UsuarioUncheckedUpdateWithoutAdministradorInput>
  }

  export type UsuarioUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: TecnicoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAdministradorInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    tecnico?: TecnicoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type OrdenTrabajoCreateWithoutTecnicoInput = {
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionCreateNestedManyWithoutOrdenInput
    equipo: EquipoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenTrabajoUncheckedCreateWithoutTecnicoInput = {
    id_orden?: number
    id_equipo: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenTrabajoCreateOrConnectWithoutTecnicoInput = {
    where: OrdenTrabajoWhereUniqueInput
    create: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput>
  }

  export type OrdenTrabajoCreateManyTecnicoInputEnvelope = {
    data: OrdenTrabajoCreateManyTecnicoInput | OrdenTrabajoCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutTecnicoInput = {
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    administrador?: AdministradorCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTecnicoInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    password_hash: string
    telefono?: string | null
    tipo_usuario: $Enums.TipoUsuario
    creado_en?: Date | string
    administrador?: AdministradorUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTecnicoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
  }

  export type OrdenTrabajoUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: OrdenTrabajoWhereUniqueInput
    update: XOR<OrdenTrabajoUpdateWithoutTecnicoInput, OrdenTrabajoUncheckedUpdateWithoutTecnicoInput>
    create: XOR<OrdenTrabajoCreateWithoutTecnicoInput, OrdenTrabajoUncheckedCreateWithoutTecnicoInput>
  }

  export type OrdenTrabajoUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: OrdenTrabajoWhereUniqueInput
    data: XOR<OrdenTrabajoUpdateWithoutTecnicoInput, OrdenTrabajoUncheckedUpdateWithoutTecnicoInput>
  }

  export type OrdenTrabajoUpdateManyWithWhereWithoutTecnicoInput = {
    where: OrdenTrabajoScalarWhereInput
    data: XOR<OrdenTrabajoUpdateManyMutationInput, OrdenTrabajoUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type OrdenTrabajoScalarWhereInput = {
    AND?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
    OR?: OrdenTrabajoScalarWhereInput[]
    NOT?: OrdenTrabajoScalarWhereInput | OrdenTrabajoScalarWhereInput[]
    id_orden?: IntFilter<"OrdenTrabajo"> | number
    id_equipo?: IntFilter<"OrdenTrabajo"> | number
    id_tecnico?: IntFilter<"OrdenTrabajo"> | number
    tipo_mantenimiento?: EnumTipoMantenimientoFilter<"OrdenTrabajo"> | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFilter<"OrdenTrabajo"> | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFilter<"OrdenTrabajo"> | $Enums.Prioridad
    fecha_programada?: DateTimeFilter<"OrdenTrabajo"> | Date | string
    descripcion_tarea?: StringFilter<"OrdenTrabajo"> | string
    comentario_respuesta?: StringNullableFilter<"OrdenTrabajo"> | string | null
    fecha_respuesta?: DateTimeNullableFilter<"OrdenTrabajo"> | Date | string | null
    creado_en?: DateTimeFilter<"OrdenTrabajo"> | Date | string
  }

  export type UsuarioUpsertWithoutTecnicoInput = {
    update: XOR<UsuarioUpdateWithoutTecnicoInput, UsuarioUncheckedUpdateWithoutTecnicoInput>
    create: XOR<UsuarioCreateWithoutTecnicoInput, UsuarioUncheckedCreateWithoutTecnicoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTecnicoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTecnicoInput, UsuarioUncheckedUpdateWithoutTecnicoInput>
  }

  export type UsuarioUpdateWithoutTecnicoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: AdministradorUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTecnicoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    administrador?: AdministradorUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type EquipoCreateWithoutClienteInput = {
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
    ordenes?: OrdenTrabajoCreateNestedManyWithoutEquipoInput
  }

  export type EquipoUncheckedCreateWithoutClienteInput = {
    id_equipo?: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
    ordenes?: OrdenTrabajoUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type EquipoCreateOrConnectWithoutClienteInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput>
  }

  export type EquipoCreateManyClienteInputEnvelope = {
    data: EquipoCreateManyClienteInput | EquipoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EquipoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EquipoWhereUniqueInput
    update: XOR<EquipoUpdateWithoutClienteInput, EquipoUncheckedUpdateWithoutClienteInput>
    create: XOR<EquipoCreateWithoutClienteInput, EquipoUncheckedCreateWithoutClienteInput>
  }

  export type EquipoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EquipoWhereUniqueInput
    data: XOR<EquipoUpdateWithoutClienteInput, EquipoUncheckedUpdateWithoutClienteInput>
  }

  export type EquipoUpdateManyWithWhereWithoutClienteInput = {
    where: EquipoScalarWhereInput
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyWithoutClienteInput>
  }

  export type EquipoScalarWhereInput = {
    AND?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    OR?: EquipoScalarWhereInput[]
    NOT?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    id_equipo?: IntFilter<"Equipo"> | number
    id_cliente?: IntFilter<"Equipo"> | number
    nombre_equipo?: StringFilter<"Equipo"> | string
    marca?: StringFilter<"Equipo"> | string
    modelo?: StringFilter<"Equipo"> | string
    numero_serie?: StringFilter<"Equipo"> | string
    ubicacion_interna?: StringNullableFilter<"Equipo"> | string | null
    tipo_refrigerante?: StringNullableFilter<"Equipo"> | string | null
  }

  export type ClienteCreateWithoutEquiposInput = {
    nombre_empresa: string
    contacto_nombre?: string | null
    telefono?: string | null
    email?: string | null
    direccion: string
    creado_en?: Date | string
  }

  export type ClienteUncheckedCreateWithoutEquiposInput = {
    id_cliente?: number
    nombre_empresa: string
    contacto_nombre?: string | null
    telefono?: string | null
    email?: string | null
    direccion: string
    creado_en?: Date | string
  }

  export type ClienteCreateOrConnectWithoutEquiposInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEquiposInput, ClienteUncheckedCreateWithoutEquiposInput>
  }

  export type OrdenTrabajoCreateWithoutEquipoInput = {
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionCreateNestedManyWithoutOrdenInput
    tecnico: TecnicoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenTrabajoUncheckedCreateWithoutEquipoInput = {
    id_orden?: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    intervenciones?: IntervencionUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenTrabajoCreateOrConnectWithoutEquipoInput = {
    where: OrdenTrabajoWhereUniqueInput
    create: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput>
  }

  export type OrdenTrabajoCreateManyEquipoInputEnvelope = {
    data: OrdenTrabajoCreateManyEquipoInput | OrdenTrabajoCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutEquiposInput = {
    update: XOR<ClienteUpdateWithoutEquiposInput, ClienteUncheckedUpdateWithoutEquiposInput>
    create: XOR<ClienteCreateWithoutEquiposInput, ClienteUncheckedCreateWithoutEquiposInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEquiposInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEquiposInput, ClienteUncheckedUpdateWithoutEquiposInput>
  }

  export type ClienteUpdateWithoutEquiposInput = {
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutEquiposInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_empresa?: StringFieldUpdateOperationsInput | string
    contacto_nombre?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenTrabajoUpsertWithWhereUniqueWithoutEquipoInput = {
    where: OrdenTrabajoWhereUniqueInput
    update: XOR<OrdenTrabajoUpdateWithoutEquipoInput, OrdenTrabajoUncheckedUpdateWithoutEquipoInput>
    create: XOR<OrdenTrabajoCreateWithoutEquipoInput, OrdenTrabajoUncheckedCreateWithoutEquipoInput>
  }

  export type OrdenTrabajoUpdateWithWhereUniqueWithoutEquipoInput = {
    where: OrdenTrabajoWhereUniqueInput
    data: XOR<OrdenTrabajoUpdateWithoutEquipoInput, OrdenTrabajoUncheckedUpdateWithoutEquipoInput>
  }

  export type OrdenTrabajoUpdateManyWithWhereWithoutEquipoInput = {
    where: OrdenTrabajoScalarWhereInput
    data: XOR<OrdenTrabajoUpdateManyMutationInput, OrdenTrabajoUncheckedUpdateManyWithoutEquipoInput>
  }

  export type IntervencionCreateWithoutOrdenInput = {
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
  }

  export type IntervencionUncheckedCreateWithoutOrdenInput = {
    id_intervencion?: number
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
  }

  export type IntervencionCreateOrConnectWithoutOrdenInput = {
    where: IntervencionWhereUniqueInput
    create: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput>
  }

  export type IntervencionCreateManyOrdenInputEnvelope = {
    data: IntervencionCreateManyOrdenInput | IntervencionCreateManyOrdenInput[]
    skipDuplicates?: boolean
  }

  export type EquipoCreateWithoutOrdenesInput = {
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
    cliente: ClienteCreateNestedOneWithoutEquiposInput
  }

  export type EquipoUncheckedCreateWithoutOrdenesInput = {
    id_equipo?: number
    id_cliente: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
  }

  export type EquipoCreateOrConnectWithoutOrdenesInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutOrdenesInput, EquipoUncheckedCreateWithoutOrdenesInput>
  }

  export type TecnicoCreateWithoutOrdenesInput = {
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
    usuario: UsuarioCreateNestedOneWithoutTecnicoInput
  }

  export type TecnicoUncheckedCreateWithoutOrdenesInput = {
    id_usuario: number
    especialidad?: string | null
    matricula?: string | null
    estado_disponibilidad?: $Enums.EstadoDisponibilidad
  }

  export type TecnicoCreateOrConnectWithoutOrdenesInput = {
    where: TecnicoWhereUniqueInput
    create: XOR<TecnicoCreateWithoutOrdenesInput, TecnicoUncheckedCreateWithoutOrdenesInput>
  }

  export type IntervencionUpsertWithWhereUniqueWithoutOrdenInput = {
    where: IntervencionWhereUniqueInput
    update: XOR<IntervencionUpdateWithoutOrdenInput, IntervencionUncheckedUpdateWithoutOrdenInput>
    create: XOR<IntervencionCreateWithoutOrdenInput, IntervencionUncheckedCreateWithoutOrdenInput>
  }

  export type IntervencionUpdateWithWhereUniqueWithoutOrdenInput = {
    where: IntervencionWhereUniqueInput
    data: XOR<IntervencionUpdateWithoutOrdenInput, IntervencionUncheckedUpdateWithoutOrdenInput>
  }

  export type IntervencionUpdateManyWithWhereWithoutOrdenInput = {
    where: IntervencionScalarWhereInput
    data: XOR<IntervencionUpdateManyMutationInput, IntervencionUncheckedUpdateManyWithoutOrdenInput>
  }

  export type IntervencionScalarWhereInput = {
    AND?: IntervencionScalarWhereInput | IntervencionScalarWhereInput[]
    OR?: IntervencionScalarWhereInput[]
    NOT?: IntervencionScalarWhereInput | IntervencionScalarWhereInput[]
    id_intervencion?: IntFilter<"Intervencion"> | number
    id_orden?: IntFilter<"Intervencion"> | number
    fecha_ejecucion?: DateTimeFilter<"Intervencion"> | Date | string
    presion_alta?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    presion_baja?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: DecimalNullableFilter<"Intervencion"> | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFilter<"Intervencion"> | boolean
    observaciones?: StringNullableFilter<"Intervencion"> | string | null
    url_imagen_adjunta?: StringNullableFilter<"Intervencion"> | string | null
  }

  export type EquipoUpsertWithoutOrdenesInput = {
    update: XOR<EquipoUpdateWithoutOrdenesInput, EquipoUncheckedUpdateWithoutOrdenesInput>
    create: XOR<EquipoCreateWithoutOrdenesInput, EquipoUncheckedCreateWithoutOrdenesInput>
    where?: EquipoWhereInput
  }

  export type EquipoUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: EquipoWhereInput
    data: XOR<EquipoUpdateWithoutOrdenesInput, EquipoUncheckedUpdateWithoutOrdenesInput>
  }

  export type EquipoUpdateWithoutOrdenesInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutEquiposNestedInput
  }

  export type EquipoUncheckedUpdateWithoutOrdenesInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TecnicoUpsertWithoutOrdenesInput = {
    update: XOR<TecnicoUpdateWithoutOrdenesInput, TecnicoUncheckedUpdateWithoutOrdenesInput>
    create: XOR<TecnicoCreateWithoutOrdenesInput, TecnicoUncheckedCreateWithoutOrdenesInput>
    where?: TecnicoWhereInput
  }

  export type TecnicoUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: TecnicoWhereInput
    data: XOR<TecnicoUpdateWithoutOrdenesInput, TecnicoUncheckedUpdateWithoutOrdenesInput>
  }

  export type TecnicoUpdateWithoutOrdenesInput = {
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
    usuario?: UsuarioUpdateOneRequiredWithoutTecnicoNestedInput
  }

  export type TecnicoUncheckedUpdateWithoutOrdenesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    estado_disponibilidad?: EnumEstadoDisponibilidadFieldUpdateOperationsInput | $Enums.EstadoDisponibilidad
  }

  export type OrdenTrabajoCreateWithoutIntervencionesInput = {
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
    equipo: EquipoCreateNestedOneWithoutOrdenesInput
    tecnico: TecnicoCreateNestedOneWithoutOrdenesInput
  }

  export type OrdenTrabajoUncheckedCreateWithoutIntervencionesInput = {
    id_orden?: number
    id_equipo: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
  }

  export type OrdenTrabajoCreateOrConnectWithoutIntervencionesInput = {
    where: OrdenTrabajoWhereUniqueInput
    create: XOR<OrdenTrabajoCreateWithoutIntervencionesInput, OrdenTrabajoUncheckedCreateWithoutIntervencionesInput>
  }

  export type OrdenTrabajoUpsertWithoutIntervencionesInput = {
    update: XOR<OrdenTrabajoUpdateWithoutIntervencionesInput, OrdenTrabajoUncheckedUpdateWithoutIntervencionesInput>
    create: XOR<OrdenTrabajoCreateWithoutIntervencionesInput, OrdenTrabajoUncheckedCreateWithoutIntervencionesInput>
    where?: OrdenTrabajoWhereInput
  }

  export type OrdenTrabajoUpdateToOneWithWhereWithoutIntervencionesInput = {
    where?: OrdenTrabajoWhereInput
    data: XOR<OrdenTrabajoUpdateWithoutIntervencionesInput, OrdenTrabajoUncheckedUpdateWithoutIntervencionesInput>
  }

  export type OrdenTrabajoUpdateWithoutIntervencionesInput = {
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    equipo?: EquipoUpdateOneRequiredWithoutOrdenesNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateWithoutIntervencionesInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    id_tecnico?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenTrabajoCreateManyTecnicoInput = {
    id_orden?: number
    id_equipo: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
  }

  export type OrdenTrabajoUpdateWithoutTecnicoInput = {
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUpdateManyWithoutOrdenNestedInput
    equipo?: EquipoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateWithoutTecnicoInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateManyWithoutTecnicoInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_equipo?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipoCreateManyClienteInput = {
    id_equipo?: number
    nombre_equipo: string
    marca: string
    modelo: string
    numero_serie: string
    ubicacion_interna?: string | null
    tipo_refrigerante?: string | null
  }

  export type EquipoUpdateWithoutClienteInput = {
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
    ordenes?: OrdenTrabajoUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateWithoutClienteInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
    ordenes?: OrdenTrabajoUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type EquipoUncheckedUpdateManyWithoutClienteInput = {
    id_equipo?: IntFieldUpdateOperationsInput | number
    nombre_equipo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    numero_serie?: StringFieldUpdateOperationsInput | string
    ubicacion_interna?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_refrigerante?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdenTrabajoCreateManyEquipoInput = {
    id_orden?: number
    id_tecnico: number
    tipo_mantenimiento: $Enums.TipoMantenimiento
    estado?: $Enums.EstadoOrden
    prioridad?: $Enums.Prioridad
    fecha_programada: Date | string
    descripcion_tarea: string
    comentario_respuesta?: string | null
    fecha_respuesta?: Date | string | null
    creado_en?: Date | string
  }

  export type OrdenTrabajoUpdateWithoutEquipoInput = {
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUpdateManyWithoutOrdenNestedInput
    tecnico?: TecnicoUpdateOneRequiredWithoutOrdenesNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateWithoutEquipoInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_tecnico?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    intervenciones?: IntervencionUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenTrabajoUncheckedUpdateManyWithoutEquipoInput = {
    id_orden?: IntFieldUpdateOperationsInput | number
    id_tecnico?: IntFieldUpdateOperationsInput | number
    tipo_mantenimiento?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    estado?: EnumEstadoOrdenFieldUpdateOperationsInput | $Enums.EstadoOrden
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    fecha_programada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion_tarea?: StringFieldUpdateOperationsInput | string
    comentario_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_respuesta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntervencionCreateManyOrdenInput = {
    id_intervencion?: number
    fecha_ejecucion?: Date | string
    presion_alta?: Decimal | DecimalJsLike | number | string | null
    presion_baja?: Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: Decimal | DecimalJsLike | number | string | null
    checklist_completado?: boolean
    observaciones?: string | null
    url_imagen_adjunta?: string | null
  }

  export type IntervencionUpdateWithoutOrdenInput = {
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntervencionUncheckedUpdateWithoutOrdenInput = {
    id_intervencion?: IntFieldUpdateOperationsInput | number
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntervencionUncheckedUpdateManyWithoutOrdenInput = {
    id_intervencion?: IntFieldUpdateOperationsInput | number
    fecha_ejecucion?: DateTimeFieldUpdateOperationsInput | Date | string
    presion_alta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presion_baja?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    temperatura_salida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corriente_consumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    checklist_completado?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    url_imagen_adjunta?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}