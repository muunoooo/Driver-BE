
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Drivers
 * 
 */
export type Drivers = $Result.DefaultSelection<Prisma.$DriversPayload>
/**
 * Model Drivers_Attendances
 * 
 */
export type Drivers_Attendances = $Result.DefaultSelection<Prisma.$Drivers_AttendancesPayload>
/**
 * Model Shipment_Costs
 * 
 */
export type Shipment_Costs = $Result.DefaultSelection<Prisma.$Shipment_CostsPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model Variable_Config
 * 
 */
export type Variable_Config = $Result.DefaultSelection<Prisma.$Variable_ConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CostStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PAID: 'PAID'
};

export type CostStatus = (typeof CostStatus)[keyof typeof CostStatus]


export const ShipmentStatus: {
  RUNNING: 'RUNNING',
  DONE: 'DONE',
  CANCELED: 'CANCELED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]

}

export type CostStatus = $Enums.CostStatus

export const CostStatus: typeof $Enums.CostStatus

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drivers
 * const drivers = await prisma.drivers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Drivers
   * const drivers = await prisma.drivers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.drivers`: Exposes CRUD operations for the **Drivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.drivers.findMany()
    * ```
    */
  get drivers(): Prisma.DriversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drivers_Attendances`: Exposes CRUD operations for the **Drivers_Attendances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers_Attendances
    * const drivers_Attendances = await prisma.drivers_Attendances.findMany()
    * ```
    */
  get drivers_Attendances(): Prisma.Drivers_AttendancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment_Costs`: Exposes CRUD operations for the **Shipment_Costs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipment_Costs
    * const shipment_Costs = await prisma.shipment_Costs.findMany()
    * ```
    */
  get shipment_Costs(): Prisma.Shipment_CostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variable_Config`: Exposes CRUD operations for the **Variable_Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variable_Configs
    * const variable_Configs = await prisma.variable_Config.findMany()
    * ```
    */
  get variable_Config(): Prisma.Variable_ConfigDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    Drivers: 'Drivers',
    Drivers_Attendances: 'Drivers_Attendances',
    Shipment_Costs: 'Shipment_Costs',
    Shipment: 'Shipment',
    Variable_Config: 'Variable_Config'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "drivers" | "drivers_Attendances" | "shipment_Costs" | "shipment" | "variable_Config"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Drivers: {
        payload: Prisma.$DriversPayload<ExtArgs>
        fields: Prisma.DriversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          findFirst: {
            args: Prisma.DriversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          findMany: {
            args: Prisma.DriversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>[]
          }
          create: {
            args: Prisma.DriversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          createMany: {
            args: Prisma.DriversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriversCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>[]
          }
          delete: {
            args: Prisma.DriversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          update: {
            args: Prisma.DriversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          deleteMany: {
            args: Prisma.DriversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriversUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>[]
          }
          upsert: {
            args: Prisma.DriversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriversPayload>
          }
          aggregate: {
            args: Prisma.DriversAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivers>
          }
          groupBy: {
            args: Prisma.DriversGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriversGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriversCountArgs<ExtArgs>
            result: $Utils.Optional<DriversCountAggregateOutputType> | number
          }
        }
      }
      Drivers_Attendances: {
        payload: Prisma.$Drivers_AttendancesPayload<ExtArgs>
        fields: Prisma.Drivers_AttendancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Drivers_AttendancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Drivers_AttendancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          findFirst: {
            args: Prisma.Drivers_AttendancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Drivers_AttendancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          findMany: {
            args: Prisma.Drivers_AttendancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>[]
          }
          create: {
            args: Prisma.Drivers_AttendancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          createMany: {
            args: Prisma.Drivers_AttendancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Drivers_AttendancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>[]
          }
          delete: {
            args: Prisma.Drivers_AttendancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          update: {
            args: Prisma.Drivers_AttendancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          deleteMany: {
            args: Prisma.Drivers_AttendancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Drivers_AttendancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Drivers_AttendancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>[]
          }
          upsert: {
            args: Prisma.Drivers_AttendancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Drivers_AttendancesPayload>
          }
          aggregate: {
            args: Prisma.Drivers_AttendancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivers_Attendances>
          }
          groupBy: {
            args: Prisma.Drivers_AttendancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Drivers_AttendancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Drivers_AttendancesCountArgs<ExtArgs>
            result: $Utils.Optional<Drivers_AttendancesCountAggregateOutputType> | number
          }
        }
      }
      Shipment_Costs: {
        payload: Prisma.$Shipment_CostsPayload<ExtArgs>
        fields: Prisma.Shipment_CostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shipment_CostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shipment_CostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          findFirst: {
            args: Prisma.Shipment_CostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shipment_CostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          findMany: {
            args: Prisma.Shipment_CostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>[]
          }
          create: {
            args: Prisma.Shipment_CostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          createMany: {
            args: Prisma.Shipment_CostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Shipment_CostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>[]
          }
          delete: {
            args: Prisma.Shipment_CostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          update: {
            args: Prisma.Shipment_CostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          deleteMany: {
            args: Prisma.Shipment_CostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shipment_CostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Shipment_CostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>[]
          }
          upsert: {
            args: Prisma.Shipment_CostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shipment_CostsPayload>
          }
          aggregate: {
            args: Prisma.Shipment_CostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment_Costs>
          }
          groupBy: {
            args: Prisma.Shipment_CostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shipment_CostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Shipment_CostsCountArgs<ExtArgs>
            result: $Utils.Optional<Shipment_CostsCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      Variable_Config: {
        payload: Prisma.$Variable_ConfigPayload<ExtArgs>
        fields: Prisma.Variable_ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Variable_ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Variable_ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          findFirst: {
            args: Prisma.Variable_ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Variable_ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          findMany: {
            args: Prisma.Variable_ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>[]
          }
          create: {
            args: Prisma.Variable_ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          createMany: {
            args: Prisma.Variable_ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Variable_ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>[]
          }
          delete: {
            args: Prisma.Variable_ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          update: {
            args: Prisma.Variable_ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          deleteMany: {
            args: Prisma.Variable_ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Variable_ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Variable_ConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>[]
          }
          upsert: {
            args: Prisma.Variable_ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Variable_ConfigPayload>
          }
          aggregate: {
            args: Prisma.Variable_ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariable_Config>
          }
          groupBy: {
            args: Prisma.Variable_ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<Variable_ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.Variable_ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<Variable_ConfigCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    drivers?: DriversOmit
    drivers_Attendances?: Drivers_AttendancesOmit
    shipment_Costs?: Shipment_CostsOmit
    shipment?: ShipmentOmit
    variable_Config?: Variable_ConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type DriversCountOutputType
   */

  export type DriversCountOutputType = {
    attendances: number
    shipmentCosts: number
  }

  export type DriversCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | DriversCountOutputTypeCountAttendancesArgs
    shipmentCosts?: boolean | DriversCountOutputTypeCountShipmentCostsArgs
  }

  // Custom InputTypes
  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriversCountOutputType
     */
    select?: DriversCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Drivers_AttendancesWhereInput
  }

  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeCountShipmentCostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shipment_CostsWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    shipmentCosts: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipmentCosts?: boolean | ShipmentCountOutputTypeCountShipmentCostsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountShipmentCostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shipment_CostsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Drivers
   */

  export type AggregateDrivers = {
    _count: DriversCountAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  export type DriversMinAggregateOutputType = {
    id: string | null
    driver_code: string | null
    name: string | null
  }

  export type DriversMaxAggregateOutputType = {
    id: string | null
    driver_code: string | null
    name: string | null
  }

  export type DriversCountAggregateOutputType = {
    id: number
    driver_code: number
    name: number
    _all: number
  }


  export type DriversMinAggregateInputType = {
    id?: true
    driver_code?: true
    name?: true
  }

  export type DriversMaxAggregateInputType = {
    id?: true
    driver_code?: true
    name?: true
  }

  export type DriversCountAggregateInputType = {
    id?: true
    driver_code?: true
    name?: true
    _all?: true
  }

  export type DriversAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to aggregate.
     */
    where?: DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriversOrderByWithRelationInput | DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriversMaxAggregateInputType
  }

  export type GetDriversAggregateType<T extends DriversAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivers[P]>
      : GetScalarType<T[P], AggregateDrivers[P]>
  }




  export type DriversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriversWhereInput
    orderBy?: DriversOrderByWithAggregationInput | DriversOrderByWithAggregationInput[]
    by: DriversScalarFieldEnum[] | DriversScalarFieldEnum
    having?: DriversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriversCountAggregateInputType | true
    _min?: DriversMinAggregateInputType
    _max?: DriversMaxAggregateInputType
  }

  export type DriversGroupByOutputType = {
    id: string
    driver_code: string
    name: string
    _count: DriversCountAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  type GetDriversGroupByPayload<T extends DriversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriversGroupByOutputType[P]>
            : GetScalarType<T[P], DriversGroupByOutputType[P]>
        }
      >
    >


  export type DriversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    name?: boolean
    attendances?: boolean | Drivers$attendancesArgs<ExtArgs>
    shipmentCosts?: boolean | Drivers$shipmentCostsArgs<ExtArgs>
    _count?: boolean | DriversCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers"]>

  export type DriversSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    name?: boolean
  }, ExtArgs["result"]["drivers"]>

  export type DriversSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    name?: boolean
  }, ExtArgs["result"]["drivers"]>

  export type DriversSelectScalar = {
    id?: boolean
    driver_code?: boolean
    name?: boolean
  }

  export type DriversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driver_code" | "name", ExtArgs["result"]["drivers"]>
  export type DriversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Drivers$attendancesArgs<ExtArgs>
    shipmentCosts?: boolean | Drivers$shipmentCostsArgs<ExtArgs>
    _count?: boolean | DriversCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriversIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DriversIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drivers"
    objects: {
      attendances: Prisma.$Drivers_AttendancesPayload<ExtArgs>[]
      shipmentCosts: Prisma.$Shipment_CostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driver_code: string
      name: string
    }, ExtArgs["result"]["drivers"]>
    composites: {}
  }

  type DriversGetPayload<S extends boolean | null | undefined | DriversDefaultArgs> = $Result.GetResult<Prisma.$DriversPayload, S>

  type DriversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriversCountAggregateInputType | true
    }

  export interface DriversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drivers'], meta: { name: 'Drivers' } }
    /**
     * Find zero or one Drivers that matches the filter.
     * @param {DriversFindUniqueArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriversFindUniqueArgs>(args: SelectSubset<T, DriversFindUniqueArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drivers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriversFindUniqueOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriversFindUniqueOrThrowArgs>(args: SelectSubset<T, DriversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversFindFirstArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriversFindFirstArgs>(args?: SelectSubset<T, DriversFindFirstArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversFindFirstOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriversFindFirstOrThrowArgs>(args?: SelectSubset<T, DriversFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.drivers.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.drivers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driversWithIdOnly = await prisma.drivers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriversFindManyArgs>(args?: SelectSubset<T, DriversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drivers.
     * @param {DriversCreateArgs} args - Arguments to create a Drivers.
     * @example
     * // Create one Drivers
     * const Drivers = await prisma.drivers.create({
     *   data: {
     *     // ... data to create a Drivers
     *   }
     * })
     * 
     */
    create<T extends DriversCreateArgs>(args: SelectSubset<T, DriversCreateArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriversCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriversCreateManyArgs>(args?: SelectSubset<T, DriversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriversCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriversCreateManyAndReturnArgs>(args?: SelectSubset<T, DriversCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drivers.
     * @param {DriversDeleteArgs} args - Arguments to delete one Drivers.
     * @example
     * // Delete one Drivers
     * const Drivers = await prisma.drivers.delete({
     *   where: {
     *     // ... filter to delete one Drivers
     *   }
     * })
     * 
     */
    delete<T extends DriversDeleteArgs>(args: SelectSubset<T, DriversDeleteArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drivers.
     * @param {DriversUpdateArgs} args - Arguments to update one Drivers.
     * @example
     * // Update one Drivers
     * const drivers = await prisma.drivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriversUpdateArgs>(args: SelectSubset<T, DriversUpdateArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriversDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.drivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriversDeleteManyArgs>(args?: SelectSubset<T, DriversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriversUpdateManyArgs>(args: SelectSubset<T, DriversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriversUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DriversUpdateManyAndReturnArgs>(args: SelectSubset<T, DriversUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drivers.
     * @param {DriversUpsertArgs} args - Arguments to update or create a Drivers.
     * @example
     * // Update or create a Drivers
     * const drivers = await prisma.drivers.upsert({
     *   create: {
     *     // ... data to create a Drivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drivers we want to update
     *   }
     * })
     */
    upsert<T extends DriversUpsertArgs>(args: SelectSubset<T, DriversUpsertArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.drivers.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriversCountArgs>(
      args?: Subset<T, DriversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriversAggregateArgs>(args: Subset<T, DriversAggregateArgs>): Prisma.PrismaPromise<GetDriversAggregateType<T>>

    /**
     * Group by Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversGroupByArgs} args - Group by arguments.
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
      T extends DriversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriversGroupByArgs['orderBy'] }
        : { orderBy?: DriversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drivers model
   */
  readonly fields: DriversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Drivers$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Drivers$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentCosts<T extends Drivers$shipmentCostsArgs<ExtArgs> = {}>(args?: Subset<T, Drivers$shipmentCostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drivers model
   */
  interface DriversFieldRefs {
    readonly id: FieldRef<"Drivers", 'String'>
    readonly driver_code: FieldRef<"Drivers", 'String'>
    readonly name: FieldRef<"Drivers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Drivers findUnique
   */
  export type DriversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where: DriversWhereUniqueInput
  }

  /**
   * Drivers findUniqueOrThrow
   */
  export type DriversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where: DriversWhereUniqueInput
  }

  /**
   * Drivers findFirst
   */
  export type DriversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriversOrderByWithRelationInput | DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * Drivers findFirstOrThrow
   */
  export type DriversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriversOrderByWithRelationInput | DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * Drivers findMany
   */
  export type DriversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriversOrderByWithRelationInput | DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * Drivers create
   */
  export type DriversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * The data needed to create a Drivers.
     */
    data: XOR<DriversCreateInput, DriversUncheckedCreateInput>
  }

  /**
   * Drivers createMany
   */
  export type DriversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriversCreateManyInput | DriversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drivers createManyAndReturn
   */
  export type DriversCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriversCreateManyInput | DriversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drivers update
   */
  export type DriversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * The data needed to update a Drivers.
     */
    data: XOR<DriversUpdateInput, DriversUncheckedUpdateInput>
    /**
     * Choose, which Drivers to update.
     */
    where: DriversWhereUniqueInput
  }

  /**
   * Drivers updateMany
   */
  export type DriversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriversUpdateManyMutationInput, DriversUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriversWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Drivers updateManyAndReturn
   */
  export type DriversUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriversUpdateManyMutationInput, DriversUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriversWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Drivers upsert
   */
  export type DriversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * The filter to search for the Drivers to update in case it exists.
     */
    where: DriversWhereUniqueInput
    /**
     * In case the Drivers found by the `where` argument doesn't exist, create a new Drivers with this data.
     */
    create: XOR<DriversCreateInput, DriversUncheckedCreateInput>
    /**
     * In case the Drivers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriversUpdateInput, DriversUncheckedUpdateInput>
  }

  /**
   * Drivers delete
   */
  export type DriversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
    /**
     * Filter which Drivers to delete.
     */
    where: DriversWhereUniqueInput
  }

  /**
   * Drivers deleteMany
   */
  export type DriversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriversWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Drivers.attendances
   */
  export type Drivers$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    where?: Drivers_AttendancesWhereInput
    orderBy?: Drivers_AttendancesOrderByWithRelationInput | Drivers_AttendancesOrderByWithRelationInput[]
    cursor?: Drivers_AttendancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Drivers_AttendancesScalarFieldEnum | Drivers_AttendancesScalarFieldEnum[]
  }

  /**
   * Drivers.shipmentCosts
   */
  export type Drivers$shipmentCostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    where?: Shipment_CostsWhereInput
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    cursor?: Shipment_CostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shipment_CostsScalarFieldEnum | Shipment_CostsScalarFieldEnum[]
  }

  /**
   * Drivers without action
   */
  export type DriversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers
     */
    select?: DriversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers
     */
    omit?: DriversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriversInclude<ExtArgs> | null
  }


  /**
   * Model Drivers_Attendances
   */

  export type AggregateDrivers_Attendances = {
    _count: Drivers_AttendancesCountAggregateOutputType | null
    _min: Drivers_AttendancesMinAggregateOutputType | null
    _max: Drivers_AttendancesMaxAggregateOutputType | null
  }

  export type Drivers_AttendancesMinAggregateOutputType = {
    id: string | null
    driver_code: string | null
    attendance_date: Date | null
    attendance_status: boolean | null
  }

  export type Drivers_AttendancesMaxAggregateOutputType = {
    id: string | null
    driver_code: string | null
    attendance_date: Date | null
    attendance_status: boolean | null
  }

  export type Drivers_AttendancesCountAggregateOutputType = {
    id: number
    driver_code: number
    attendance_date: number
    attendance_status: number
    _all: number
  }


  export type Drivers_AttendancesMinAggregateInputType = {
    id?: true
    driver_code?: true
    attendance_date?: true
    attendance_status?: true
  }

  export type Drivers_AttendancesMaxAggregateInputType = {
    id?: true
    driver_code?: true
    attendance_date?: true
    attendance_status?: true
  }

  export type Drivers_AttendancesCountAggregateInputType = {
    id?: true
    driver_code?: true
    attendance_date?: true
    attendance_status?: true
    _all?: true
  }

  export type Drivers_AttendancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers_Attendances to aggregate.
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers_Attendances to fetch.
     */
    orderBy?: Drivers_AttendancesOrderByWithRelationInput | Drivers_AttendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Drivers_AttendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers_Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers_Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers_Attendances
    **/
    _count?: true | Drivers_AttendancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Drivers_AttendancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Drivers_AttendancesMaxAggregateInputType
  }

  export type GetDrivers_AttendancesAggregateType<T extends Drivers_AttendancesAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivers_Attendances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivers_Attendances[P]>
      : GetScalarType<T[P], AggregateDrivers_Attendances[P]>
  }




  export type Drivers_AttendancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Drivers_AttendancesWhereInput
    orderBy?: Drivers_AttendancesOrderByWithAggregationInput | Drivers_AttendancesOrderByWithAggregationInput[]
    by: Drivers_AttendancesScalarFieldEnum[] | Drivers_AttendancesScalarFieldEnum
    having?: Drivers_AttendancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Drivers_AttendancesCountAggregateInputType | true
    _min?: Drivers_AttendancesMinAggregateInputType
    _max?: Drivers_AttendancesMaxAggregateInputType
  }

  export type Drivers_AttendancesGroupByOutputType = {
    id: string
    driver_code: string
    attendance_date: Date
    attendance_status: boolean
    _count: Drivers_AttendancesCountAggregateOutputType | null
    _min: Drivers_AttendancesMinAggregateOutputType | null
    _max: Drivers_AttendancesMaxAggregateOutputType | null
  }

  type GetDrivers_AttendancesGroupByPayload<T extends Drivers_AttendancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Drivers_AttendancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Drivers_AttendancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Drivers_AttendancesGroupByOutputType[P]>
            : GetScalarType<T[P], Drivers_AttendancesGroupByOutputType[P]>
        }
      >
    >


  export type Drivers_AttendancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    attendance_date?: boolean
    attendance_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers_Attendances"]>

  export type Drivers_AttendancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    attendance_date?: boolean
    attendance_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers_Attendances"]>

  export type Drivers_AttendancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    attendance_date?: boolean
    attendance_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers_Attendances"]>

  export type Drivers_AttendancesSelectScalar = {
    id?: boolean
    driver_code?: boolean
    attendance_date?: boolean
    attendance_status?: boolean
  }

  export type Drivers_AttendancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driver_code" | "attendance_date" | "attendance_status", ExtArgs["result"]["drivers_Attendances"]>
  export type Drivers_AttendancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }
  export type Drivers_AttendancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }
  export type Drivers_AttendancesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
  }

  export type $Drivers_AttendancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drivers_Attendances"
    objects: {
      driver: Prisma.$DriversPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driver_code: string
      attendance_date: Date
      attendance_status: boolean
    }, ExtArgs["result"]["drivers_Attendances"]>
    composites: {}
  }

  type Drivers_AttendancesGetPayload<S extends boolean | null | undefined | Drivers_AttendancesDefaultArgs> = $Result.GetResult<Prisma.$Drivers_AttendancesPayload, S>

  type Drivers_AttendancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Drivers_AttendancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Drivers_AttendancesCountAggregateInputType | true
    }

  export interface Drivers_AttendancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drivers_Attendances'], meta: { name: 'Drivers_Attendances' } }
    /**
     * Find zero or one Drivers_Attendances that matches the filter.
     * @param {Drivers_AttendancesFindUniqueArgs} args - Arguments to find a Drivers_Attendances
     * @example
     * // Get one Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Drivers_AttendancesFindUniqueArgs>(args: SelectSubset<T, Drivers_AttendancesFindUniqueArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drivers_Attendances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Drivers_AttendancesFindUniqueOrThrowArgs} args - Arguments to find a Drivers_Attendances
     * @example
     * // Get one Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Drivers_AttendancesFindUniqueOrThrowArgs>(args: SelectSubset<T, Drivers_AttendancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers_Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesFindFirstArgs} args - Arguments to find a Drivers_Attendances
     * @example
     * // Get one Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Drivers_AttendancesFindFirstArgs>(args?: SelectSubset<T, Drivers_AttendancesFindFirstArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers_Attendances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesFindFirstOrThrowArgs} args - Arguments to find a Drivers_Attendances
     * @example
     * // Get one Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Drivers_AttendancesFindFirstOrThrowArgs>(args?: SelectSubset<T, Drivers_AttendancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers_Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findMany()
     * 
     * // Get first 10 Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drivers_AttendancesWithIdOnly = await prisma.drivers_Attendances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Drivers_AttendancesFindManyArgs>(args?: SelectSubset<T, Drivers_AttendancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drivers_Attendances.
     * @param {Drivers_AttendancesCreateArgs} args - Arguments to create a Drivers_Attendances.
     * @example
     * // Create one Drivers_Attendances
     * const Drivers_Attendances = await prisma.drivers_Attendances.create({
     *   data: {
     *     // ... data to create a Drivers_Attendances
     *   }
     * })
     * 
     */
    create<T extends Drivers_AttendancesCreateArgs>(args: SelectSubset<T, Drivers_AttendancesCreateArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers_Attendances.
     * @param {Drivers_AttendancesCreateManyArgs} args - Arguments to create many Drivers_Attendances.
     * @example
     * // Create many Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Drivers_AttendancesCreateManyArgs>(args?: SelectSubset<T, Drivers_AttendancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers_Attendances and returns the data saved in the database.
     * @param {Drivers_AttendancesCreateManyAndReturnArgs} args - Arguments to create many Drivers_Attendances.
     * @example
     * // Create many Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers_Attendances and only return the `id`
     * const drivers_AttendancesWithIdOnly = await prisma.drivers_Attendances.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Drivers_AttendancesCreateManyAndReturnArgs>(args?: SelectSubset<T, Drivers_AttendancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drivers_Attendances.
     * @param {Drivers_AttendancesDeleteArgs} args - Arguments to delete one Drivers_Attendances.
     * @example
     * // Delete one Drivers_Attendances
     * const Drivers_Attendances = await prisma.drivers_Attendances.delete({
     *   where: {
     *     // ... filter to delete one Drivers_Attendances
     *   }
     * })
     * 
     */
    delete<T extends Drivers_AttendancesDeleteArgs>(args: SelectSubset<T, Drivers_AttendancesDeleteArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drivers_Attendances.
     * @param {Drivers_AttendancesUpdateArgs} args - Arguments to update one Drivers_Attendances.
     * @example
     * // Update one Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Drivers_AttendancesUpdateArgs>(args: SelectSubset<T, Drivers_AttendancesUpdateArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers_Attendances.
     * @param {Drivers_AttendancesDeleteManyArgs} args - Arguments to filter Drivers_Attendances to delete.
     * @example
     * // Delete a few Drivers_Attendances
     * const { count } = await prisma.drivers_Attendances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Drivers_AttendancesDeleteManyArgs>(args?: SelectSubset<T, Drivers_AttendancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers_Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Drivers_AttendancesUpdateManyArgs>(args: SelectSubset<T, Drivers_AttendancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers_Attendances and returns the data updated in the database.
     * @param {Drivers_AttendancesUpdateManyAndReturnArgs} args - Arguments to update many Drivers_Attendances.
     * @example
     * // Update many Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers_Attendances and only return the `id`
     * const drivers_AttendancesWithIdOnly = await prisma.drivers_Attendances.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Drivers_AttendancesUpdateManyAndReturnArgs>(args: SelectSubset<T, Drivers_AttendancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drivers_Attendances.
     * @param {Drivers_AttendancesUpsertArgs} args - Arguments to update or create a Drivers_Attendances.
     * @example
     * // Update or create a Drivers_Attendances
     * const drivers_Attendances = await prisma.drivers_Attendances.upsert({
     *   create: {
     *     // ... data to create a Drivers_Attendances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drivers_Attendances we want to update
     *   }
     * })
     */
    upsert<T extends Drivers_AttendancesUpsertArgs>(args: SelectSubset<T, Drivers_AttendancesUpsertArgs<ExtArgs>>): Prisma__Drivers_AttendancesClient<$Result.GetResult<Prisma.$Drivers_AttendancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers_Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesCountArgs} args - Arguments to filter Drivers_Attendances to count.
     * @example
     * // Count the number of Drivers_Attendances
     * const count = await prisma.drivers_Attendances.count({
     *   where: {
     *     // ... the filter for the Drivers_Attendances we want to count
     *   }
     * })
    **/
    count<T extends Drivers_AttendancesCountArgs>(
      args?: Subset<T, Drivers_AttendancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Drivers_AttendancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drivers_Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Drivers_AttendancesAggregateArgs>(args: Subset<T, Drivers_AttendancesAggregateArgs>): Prisma.PrismaPromise<GetDrivers_AttendancesAggregateType<T>>

    /**
     * Group by Drivers_Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Drivers_AttendancesGroupByArgs} args - Group by arguments.
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
      T extends Drivers_AttendancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Drivers_AttendancesGroupByArgs['orderBy'] }
        : { orderBy?: Drivers_AttendancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Drivers_AttendancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrivers_AttendancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drivers_Attendances model
   */
  readonly fields: Drivers_AttendancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drivers_Attendances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Drivers_AttendancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriversDefaultArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Drivers_Attendances model
   */
  interface Drivers_AttendancesFieldRefs {
    readonly id: FieldRef<"Drivers_Attendances", 'String'>
    readonly driver_code: FieldRef<"Drivers_Attendances", 'String'>
    readonly attendance_date: FieldRef<"Drivers_Attendances", 'DateTime'>
    readonly attendance_status: FieldRef<"Drivers_Attendances", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Drivers_Attendances findUnique
   */
  export type Drivers_AttendancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter, which Drivers_Attendances to fetch.
     */
    where: Drivers_AttendancesWhereUniqueInput
  }

  /**
   * Drivers_Attendances findUniqueOrThrow
   */
  export type Drivers_AttendancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter, which Drivers_Attendances to fetch.
     */
    where: Drivers_AttendancesWhereUniqueInput
  }

  /**
   * Drivers_Attendances findFirst
   */
  export type Drivers_AttendancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter, which Drivers_Attendances to fetch.
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers_Attendances to fetch.
     */
    orderBy?: Drivers_AttendancesOrderByWithRelationInput | Drivers_AttendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers_Attendances.
     */
    cursor?: Drivers_AttendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers_Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers_Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers_Attendances.
     */
    distinct?: Drivers_AttendancesScalarFieldEnum | Drivers_AttendancesScalarFieldEnum[]
  }

  /**
   * Drivers_Attendances findFirstOrThrow
   */
  export type Drivers_AttendancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter, which Drivers_Attendances to fetch.
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers_Attendances to fetch.
     */
    orderBy?: Drivers_AttendancesOrderByWithRelationInput | Drivers_AttendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers_Attendances.
     */
    cursor?: Drivers_AttendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers_Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers_Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers_Attendances.
     */
    distinct?: Drivers_AttendancesScalarFieldEnum | Drivers_AttendancesScalarFieldEnum[]
  }

  /**
   * Drivers_Attendances findMany
   */
  export type Drivers_AttendancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter, which Drivers_Attendances to fetch.
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers_Attendances to fetch.
     */
    orderBy?: Drivers_AttendancesOrderByWithRelationInput | Drivers_AttendancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers_Attendances.
     */
    cursor?: Drivers_AttendancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers_Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers_Attendances.
     */
    skip?: number
    distinct?: Drivers_AttendancesScalarFieldEnum | Drivers_AttendancesScalarFieldEnum[]
  }

  /**
   * Drivers_Attendances create
   */
  export type Drivers_AttendancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * The data needed to create a Drivers_Attendances.
     */
    data: XOR<Drivers_AttendancesCreateInput, Drivers_AttendancesUncheckedCreateInput>
  }

  /**
   * Drivers_Attendances createMany
   */
  export type Drivers_AttendancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers_Attendances.
     */
    data: Drivers_AttendancesCreateManyInput | Drivers_AttendancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drivers_Attendances createManyAndReturn
   */
  export type Drivers_AttendancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers_Attendances.
     */
    data: Drivers_AttendancesCreateManyInput | Drivers_AttendancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drivers_Attendances update
   */
  export type Drivers_AttendancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * The data needed to update a Drivers_Attendances.
     */
    data: XOR<Drivers_AttendancesUpdateInput, Drivers_AttendancesUncheckedUpdateInput>
    /**
     * Choose, which Drivers_Attendances to update.
     */
    where: Drivers_AttendancesWhereUniqueInput
  }

  /**
   * Drivers_Attendances updateMany
   */
  export type Drivers_AttendancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers_Attendances.
     */
    data: XOR<Drivers_AttendancesUpdateManyMutationInput, Drivers_AttendancesUncheckedUpdateManyInput>
    /**
     * Filter which Drivers_Attendances to update
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * Limit how many Drivers_Attendances to update.
     */
    limit?: number
  }

  /**
   * Drivers_Attendances updateManyAndReturn
   */
  export type Drivers_AttendancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * The data used to update Drivers_Attendances.
     */
    data: XOR<Drivers_AttendancesUpdateManyMutationInput, Drivers_AttendancesUncheckedUpdateManyInput>
    /**
     * Filter which Drivers_Attendances to update
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * Limit how many Drivers_Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Drivers_Attendances upsert
   */
  export type Drivers_AttendancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * The filter to search for the Drivers_Attendances to update in case it exists.
     */
    where: Drivers_AttendancesWhereUniqueInput
    /**
     * In case the Drivers_Attendances found by the `where` argument doesn't exist, create a new Drivers_Attendances with this data.
     */
    create: XOR<Drivers_AttendancesCreateInput, Drivers_AttendancesUncheckedCreateInput>
    /**
     * In case the Drivers_Attendances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Drivers_AttendancesUpdateInput, Drivers_AttendancesUncheckedUpdateInput>
  }

  /**
   * Drivers_Attendances delete
   */
  export type Drivers_AttendancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
    /**
     * Filter which Drivers_Attendances to delete.
     */
    where: Drivers_AttendancesWhereUniqueInput
  }

  /**
   * Drivers_Attendances deleteMany
   */
  export type Drivers_AttendancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers_Attendances to delete
     */
    where?: Drivers_AttendancesWhereInput
    /**
     * Limit how many Drivers_Attendances to delete.
     */
    limit?: number
  }

  /**
   * Drivers_Attendances without action
   */
  export type Drivers_AttendancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drivers_Attendances
     */
    select?: Drivers_AttendancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drivers_Attendances
     */
    omit?: Drivers_AttendancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Drivers_AttendancesInclude<ExtArgs> | null
  }


  /**
   * Model Shipment_Costs
   */

  export type AggregateShipment_Costs = {
    _count: Shipment_CostsCountAggregateOutputType | null
    _avg: Shipment_CostsAvgAggregateOutputType | null
    _sum: Shipment_CostsSumAggregateOutputType | null
    _min: Shipment_CostsMinAggregateOutputType | null
    _max: Shipment_CostsMaxAggregateOutputType | null
  }

  export type Shipment_CostsAvgAggregateOutputType = {
    total_costs: number | null
  }

  export type Shipment_CostsSumAggregateOutputType = {
    total_costs: number | null
  }

  export type Shipment_CostsMinAggregateOutputType = {
    id: string | null
    driver_code: string | null
    shipment_no: string | null
    total_costs: number | null
    cost_status: $Enums.CostStatus | null
  }

  export type Shipment_CostsMaxAggregateOutputType = {
    id: string | null
    driver_code: string | null
    shipment_no: string | null
    total_costs: number | null
    cost_status: $Enums.CostStatus | null
  }

  export type Shipment_CostsCountAggregateOutputType = {
    id: number
    driver_code: number
    shipment_no: number
    total_costs: number
    cost_status: number
    _all: number
  }


  export type Shipment_CostsAvgAggregateInputType = {
    total_costs?: true
  }

  export type Shipment_CostsSumAggregateInputType = {
    total_costs?: true
  }

  export type Shipment_CostsMinAggregateInputType = {
    id?: true
    driver_code?: true
    shipment_no?: true
    total_costs?: true
    cost_status?: true
  }

  export type Shipment_CostsMaxAggregateInputType = {
    id?: true
    driver_code?: true
    shipment_no?: true
    total_costs?: true
    cost_status?: true
  }

  export type Shipment_CostsCountAggregateInputType = {
    id?: true
    driver_code?: true
    shipment_no?: true
    total_costs?: true
    cost_status?: true
    _all?: true
  }

  export type Shipment_CostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment_Costs to aggregate.
     */
    where?: Shipment_CostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipment_Costs to fetch.
     */
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shipment_CostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipment_Costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipment_Costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipment_Costs
    **/
    _count?: true | Shipment_CostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shipment_CostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shipment_CostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shipment_CostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shipment_CostsMaxAggregateInputType
  }

  export type GetShipment_CostsAggregateType<T extends Shipment_CostsAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment_Costs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment_Costs[P]>
      : GetScalarType<T[P], AggregateShipment_Costs[P]>
  }




  export type Shipment_CostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shipment_CostsWhereInput
    orderBy?: Shipment_CostsOrderByWithAggregationInput | Shipment_CostsOrderByWithAggregationInput[]
    by: Shipment_CostsScalarFieldEnum[] | Shipment_CostsScalarFieldEnum
    having?: Shipment_CostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shipment_CostsCountAggregateInputType | true
    _avg?: Shipment_CostsAvgAggregateInputType
    _sum?: Shipment_CostsSumAggregateInputType
    _min?: Shipment_CostsMinAggregateInputType
    _max?: Shipment_CostsMaxAggregateInputType
  }

  export type Shipment_CostsGroupByOutputType = {
    id: string
    driver_code: string
    shipment_no: string
    total_costs: number
    cost_status: $Enums.CostStatus
    _count: Shipment_CostsCountAggregateOutputType | null
    _avg: Shipment_CostsAvgAggregateOutputType | null
    _sum: Shipment_CostsSumAggregateOutputType | null
    _min: Shipment_CostsMinAggregateOutputType | null
    _max: Shipment_CostsMaxAggregateOutputType | null
  }

  type GetShipment_CostsGroupByPayload<T extends Shipment_CostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shipment_CostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shipment_CostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shipment_CostsGroupByOutputType[P]>
            : GetScalarType<T[P], Shipment_CostsGroupByOutputType[P]>
        }
      >
    >


  export type Shipment_CostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    shipment_no?: boolean
    total_costs?: boolean
    cost_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment_Costs"]>

  export type Shipment_CostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    shipment_no?: boolean
    total_costs?: boolean
    cost_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment_Costs"]>

  export type Shipment_CostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_code?: boolean
    shipment_no?: boolean
    total_costs?: boolean
    cost_status?: boolean
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment_Costs"]>

  export type Shipment_CostsSelectScalar = {
    id?: boolean
    driver_code?: boolean
    shipment_no?: boolean
    total_costs?: boolean
    cost_status?: boolean
  }

  export type Shipment_CostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driver_code" | "shipment_no" | "total_costs" | "cost_status", ExtArgs["result"]["shipment_Costs"]>
  export type Shipment_CostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type Shipment_CostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type Shipment_CostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriversDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $Shipment_CostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment_Costs"
    objects: {
      driver: Prisma.$DriversPayload<ExtArgs>
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driver_code: string
      shipment_no: string
      total_costs: number
      cost_status: $Enums.CostStatus
    }, ExtArgs["result"]["shipment_Costs"]>
    composites: {}
  }

  type Shipment_CostsGetPayload<S extends boolean | null | undefined | Shipment_CostsDefaultArgs> = $Result.GetResult<Prisma.$Shipment_CostsPayload, S>

  type Shipment_CostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shipment_CostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shipment_CostsCountAggregateInputType | true
    }

  export interface Shipment_CostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment_Costs'], meta: { name: 'Shipment_Costs' } }
    /**
     * Find zero or one Shipment_Costs that matches the filter.
     * @param {Shipment_CostsFindUniqueArgs} args - Arguments to find a Shipment_Costs
     * @example
     * // Get one Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shipment_CostsFindUniqueArgs>(args: SelectSubset<T, Shipment_CostsFindUniqueArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment_Costs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shipment_CostsFindUniqueOrThrowArgs} args - Arguments to find a Shipment_Costs
     * @example
     * // Get one Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shipment_CostsFindUniqueOrThrowArgs>(args: SelectSubset<T, Shipment_CostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment_Costs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsFindFirstArgs} args - Arguments to find a Shipment_Costs
     * @example
     * // Get one Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shipment_CostsFindFirstArgs>(args?: SelectSubset<T, Shipment_CostsFindFirstArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment_Costs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsFindFirstOrThrowArgs} args - Arguments to find a Shipment_Costs
     * @example
     * // Get one Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shipment_CostsFindFirstOrThrowArgs>(args?: SelectSubset<T, Shipment_CostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipment_Costs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findMany()
     * 
     * // Get first 10 Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipment_CostsWithIdOnly = await prisma.shipment_Costs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Shipment_CostsFindManyArgs>(args?: SelectSubset<T, Shipment_CostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment_Costs.
     * @param {Shipment_CostsCreateArgs} args - Arguments to create a Shipment_Costs.
     * @example
     * // Create one Shipment_Costs
     * const Shipment_Costs = await prisma.shipment_Costs.create({
     *   data: {
     *     // ... data to create a Shipment_Costs
     *   }
     * })
     * 
     */
    create<T extends Shipment_CostsCreateArgs>(args: SelectSubset<T, Shipment_CostsCreateArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipment_Costs.
     * @param {Shipment_CostsCreateManyArgs} args - Arguments to create many Shipment_Costs.
     * @example
     * // Create many Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shipment_CostsCreateManyArgs>(args?: SelectSubset<T, Shipment_CostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipment_Costs and returns the data saved in the database.
     * @param {Shipment_CostsCreateManyAndReturnArgs} args - Arguments to create many Shipment_Costs.
     * @example
     * // Create many Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipment_Costs and only return the `id`
     * const shipment_CostsWithIdOnly = await prisma.shipment_Costs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Shipment_CostsCreateManyAndReturnArgs>(args?: SelectSubset<T, Shipment_CostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment_Costs.
     * @param {Shipment_CostsDeleteArgs} args - Arguments to delete one Shipment_Costs.
     * @example
     * // Delete one Shipment_Costs
     * const Shipment_Costs = await prisma.shipment_Costs.delete({
     *   where: {
     *     // ... filter to delete one Shipment_Costs
     *   }
     * })
     * 
     */
    delete<T extends Shipment_CostsDeleteArgs>(args: SelectSubset<T, Shipment_CostsDeleteArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment_Costs.
     * @param {Shipment_CostsUpdateArgs} args - Arguments to update one Shipment_Costs.
     * @example
     * // Update one Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shipment_CostsUpdateArgs>(args: SelectSubset<T, Shipment_CostsUpdateArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipment_Costs.
     * @param {Shipment_CostsDeleteManyArgs} args - Arguments to filter Shipment_Costs to delete.
     * @example
     * // Delete a few Shipment_Costs
     * const { count } = await prisma.shipment_Costs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shipment_CostsDeleteManyArgs>(args?: SelectSubset<T, Shipment_CostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipment_Costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shipment_CostsUpdateManyArgs>(args: SelectSubset<T, Shipment_CostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipment_Costs and returns the data updated in the database.
     * @param {Shipment_CostsUpdateManyAndReturnArgs} args - Arguments to update many Shipment_Costs.
     * @example
     * // Update many Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipment_Costs and only return the `id`
     * const shipment_CostsWithIdOnly = await prisma.shipment_Costs.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Shipment_CostsUpdateManyAndReturnArgs>(args: SelectSubset<T, Shipment_CostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment_Costs.
     * @param {Shipment_CostsUpsertArgs} args - Arguments to update or create a Shipment_Costs.
     * @example
     * // Update or create a Shipment_Costs
     * const shipment_Costs = await prisma.shipment_Costs.upsert({
     *   create: {
     *     // ... data to create a Shipment_Costs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment_Costs we want to update
     *   }
     * })
     */
    upsert<T extends Shipment_CostsUpsertArgs>(args: SelectSubset<T, Shipment_CostsUpsertArgs<ExtArgs>>): Prisma__Shipment_CostsClient<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipment_Costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsCountArgs} args - Arguments to filter Shipment_Costs to count.
     * @example
     * // Count the number of Shipment_Costs
     * const count = await prisma.shipment_Costs.count({
     *   where: {
     *     // ... the filter for the Shipment_Costs we want to count
     *   }
     * })
    **/
    count<T extends Shipment_CostsCountArgs>(
      args?: Subset<T, Shipment_CostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shipment_CostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment_Costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Shipment_CostsAggregateArgs>(args: Subset<T, Shipment_CostsAggregateArgs>): Prisma.PrismaPromise<GetShipment_CostsAggregateType<T>>

    /**
     * Group by Shipment_Costs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shipment_CostsGroupByArgs} args - Group by arguments.
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
      T extends Shipment_CostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shipment_CostsGroupByArgs['orderBy'] }
        : { orderBy?: Shipment_CostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Shipment_CostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipment_CostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment_Costs model
   */
  readonly fields: Shipment_CostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment_Costs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shipment_CostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriversDefaultArgs<ExtArgs>>): Prisma__DriversClient<$Result.GetResult<Prisma.$DriversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Shipment_Costs model
   */
  interface Shipment_CostsFieldRefs {
    readonly id: FieldRef<"Shipment_Costs", 'String'>
    readonly driver_code: FieldRef<"Shipment_Costs", 'String'>
    readonly shipment_no: FieldRef<"Shipment_Costs", 'String'>
    readonly total_costs: FieldRef<"Shipment_Costs", 'Int'>
    readonly cost_status: FieldRef<"Shipment_Costs", 'CostStatus'>
  }
    

  // Custom InputTypes
  /**
   * Shipment_Costs findUnique
   */
  export type Shipment_CostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter, which Shipment_Costs to fetch.
     */
    where: Shipment_CostsWhereUniqueInput
  }

  /**
   * Shipment_Costs findUniqueOrThrow
   */
  export type Shipment_CostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter, which Shipment_Costs to fetch.
     */
    where: Shipment_CostsWhereUniqueInput
  }

  /**
   * Shipment_Costs findFirst
   */
  export type Shipment_CostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter, which Shipment_Costs to fetch.
     */
    where?: Shipment_CostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipment_Costs to fetch.
     */
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipment_Costs.
     */
    cursor?: Shipment_CostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipment_Costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipment_Costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipment_Costs.
     */
    distinct?: Shipment_CostsScalarFieldEnum | Shipment_CostsScalarFieldEnum[]
  }

  /**
   * Shipment_Costs findFirstOrThrow
   */
  export type Shipment_CostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter, which Shipment_Costs to fetch.
     */
    where?: Shipment_CostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipment_Costs to fetch.
     */
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipment_Costs.
     */
    cursor?: Shipment_CostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipment_Costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipment_Costs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipment_Costs.
     */
    distinct?: Shipment_CostsScalarFieldEnum | Shipment_CostsScalarFieldEnum[]
  }

  /**
   * Shipment_Costs findMany
   */
  export type Shipment_CostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter, which Shipment_Costs to fetch.
     */
    where?: Shipment_CostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipment_Costs to fetch.
     */
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipment_Costs.
     */
    cursor?: Shipment_CostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipment_Costs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipment_Costs.
     */
    skip?: number
    distinct?: Shipment_CostsScalarFieldEnum | Shipment_CostsScalarFieldEnum[]
  }

  /**
   * Shipment_Costs create
   */
  export type Shipment_CostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment_Costs.
     */
    data: XOR<Shipment_CostsCreateInput, Shipment_CostsUncheckedCreateInput>
  }

  /**
   * Shipment_Costs createMany
   */
  export type Shipment_CostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipment_Costs.
     */
    data: Shipment_CostsCreateManyInput | Shipment_CostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment_Costs createManyAndReturn
   */
  export type Shipment_CostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * The data used to create many Shipment_Costs.
     */
    data: Shipment_CostsCreateManyInput | Shipment_CostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment_Costs update
   */
  export type Shipment_CostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment_Costs.
     */
    data: XOR<Shipment_CostsUpdateInput, Shipment_CostsUncheckedUpdateInput>
    /**
     * Choose, which Shipment_Costs to update.
     */
    where: Shipment_CostsWhereUniqueInput
  }

  /**
   * Shipment_Costs updateMany
   */
  export type Shipment_CostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipment_Costs.
     */
    data: XOR<Shipment_CostsUpdateManyMutationInput, Shipment_CostsUncheckedUpdateManyInput>
    /**
     * Filter which Shipment_Costs to update
     */
    where?: Shipment_CostsWhereInput
    /**
     * Limit how many Shipment_Costs to update.
     */
    limit?: number
  }

  /**
   * Shipment_Costs updateManyAndReturn
   */
  export type Shipment_CostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * The data used to update Shipment_Costs.
     */
    data: XOR<Shipment_CostsUpdateManyMutationInput, Shipment_CostsUncheckedUpdateManyInput>
    /**
     * Filter which Shipment_Costs to update
     */
    where?: Shipment_CostsWhereInput
    /**
     * Limit how many Shipment_Costs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment_Costs upsert
   */
  export type Shipment_CostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment_Costs to update in case it exists.
     */
    where: Shipment_CostsWhereUniqueInput
    /**
     * In case the Shipment_Costs found by the `where` argument doesn't exist, create a new Shipment_Costs with this data.
     */
    create: XOR<Shipment_CostsCreateInput, Shipment_CostsUncheckedCreateInput>
    /**
     * In case the Shipment_Costs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shipment_CostsUpdateInput, Shipment_CostsUncheckedUpdateInput>
  }

  /**
   * Shipment_Costs delete
   */
  export type Shipment_CostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    /**
     * Filter which Shipment_Costs to delete.
     */
    where: Shipment_CostsWhereUniqueInput
  }

  /**
   * Shipment_Costs deleteMany
   */
  export type Shipment_CostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment_Costs to delete
     */
    where?: Shipment_CostsWhereInput
    /**
     * Limit how many Shipment_Costs to delete.
     */
    limit?: number
  }

  /**
   * Shipment_Costs without action
   */
  export type Shipment_CostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentMinAggregateOutputType = {
    shipment_no: string | null
    shipment_date: Date | null
    shipment_status: $Enums.ShipmentStatus | null
  }

  export type ShipmentMaxAggregateOutputType = {
    shipment_no: string | null
    shipment_date: Date | null
    shipment_status: $Enums.ShipmentStatus | null
  }

  export type ShipmentCountAggregateOutputType = {
    shipment_no: number
    shipment_date: number
    shipment_status: number
    _all: number
  }


  export type ShipmentMinAggregateInputType = {
    shipment_no?: true
    shipment_date?: true
    shipment_status?: true
  }

  export type ShipmentMaxAggregateInputType = {
    shipment_no?: true
    shipment_date?: true
    shipment_status?: true
  }

  export type ShipmentCountAggregateInputType = {
    shipment_no?: true
    shipment_date?: true
    shipment_status?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    shipment_no: string
    shipment_date: Date
    shipment_status: $Enums.ShipmentStatus
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_no?: boolean
    shipment_date?: boolean
    shipment_status?: boolean
    shipmentCosts?: boolean | Shipment$shipmentCostsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_no?: boolean
    shipment_date?: boolean
    shipment_status?: boolean
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shipment_no?: boolean
    shipment_date?: boolean
    shipment_status?: boolean
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    shipment_no?: boolean
    shipment_date?: boolean
    shipment_status?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"shipment_no" | "shipment_date" | "shipment_status", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipmentCosts?: boolean | Shipment$shipmentCostsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      shipmentCosts: Prisma.$Shipment_CostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      shipment_no: string
      shipment_date: Date
      shipment_status: $Enums.ShipmentStatus
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `shipment_no`
     * const shipmentWithShipment_noOnly = await prisma.shipment.findMany({ select: { shipment_no: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `shipment_no`
     * const shipmentWithShipment_noOnly = await prisma.shipment.createManyAndReturn({
     *   select: { shipment_no: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `shipment_no`
     * const shipmentWithShipment_noOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { shipment_no: true },
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
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
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
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipmentCosts<T extends Shipment$shipmentCostsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$shipmentCostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shipment_CostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly shipment_no: FieldRef<"Shipment", 'String'>
    readonly shipment_date: FieldRef<"Shipment", 'DateTime'>
    readonly shipment_status: FieldRef<"Shipment", 'ShipmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.shipmentCosts
   */
  export type Shipment$shipmentCostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment_Costs
     */
    select?: Shipment_CostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment_Costs
     */
    omit?: Shipment_CostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shipment_CostsInclude<ExtArgs> | null
    where?: Shipment_CostsWhereInput
    orderBy?: Shipment_CostsOrderByWithRelationInput | Shipment_CostsOrderByWithRelationInput[]
    cursor?: Shipment_CostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shipment_CostsScalarFieldEnum | Shipment_CostsScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model Variable_Config
   */

  export type AggregateVariable_Config = {
    _count: Variable_ConfigCountAggregateOutputType | null
    _avg: Variable_ConfigAvgAggregateOutputType | null
    _sum: Variable_ConfigSumAggregateOutputType | null
    _min: Variable_ConfigMinAggregateOutputType | null
    _max: Variable_ConfigMaxAggregateOutputType | null
  }

  export type Variable_ConfigAvgAggregateOutputType = {
    value: number | null
  }

  export type Variable_ConfigSumAggregateOutputType = {
    value: number | null
  }

  export type Variable_ConfigMinAggregateOutputType = {
    key: string | null
    value: number | null
  }

  export type Variable_ConfigMaxAggregateOutputType = {
    key: string | null
    value: number | null
  }

  export type Variable_ConfigCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type Variable_ConfigAvgAggregateInputType = {
    value?: true
  }

  export type Variable_ConfigSumAggregateInputType = {
    value?: true
  }

  export type Variable_ConfigMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type Variable_ConfigMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type Variable_ConfigCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type Variable_ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variable_Config to aggregate.
     */
    where?: Variable_ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variable_Configs to fetch.
     */
    orderBy?: Variable_ConfigOrderByWithRelationInput | Variable_ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Variable_ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variable_Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variable_Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variable_Configs
    **/
    _count?: true | Variable_ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Variable_ConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Variable_ConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Variable_ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Variable_ConfigMaxAggregateInputType
  }

  export type GetVariable_ConfigAggregateType<T extends Variable_ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateVariable_Config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariable_Config[P]>
      : GetScalarType<T[P], AggregateVariable_Config[P]>
  }




  export type Variable_ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Variable_ConfigWhereInput
    orderBy?: Variable_ConfigOrderByWithAggregationInput | Variable_ConfigOrderByWithAggregationInput[]
    by: Variable_ConfigScalarFieldEnum[] | Variable_ConfigScalarFieldEnum
    having?: Variable_ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Variable_ConfigCountAggregateInputType | true
    _avg?: Variable_ConfigAvgAggregateInputType
    _sum?: Variable_ConfigSumAggregateInputType
    _min?: Variable_ConfigMinAggregateInputType
    _max?: Variable_ConfigMaxAggregateInputType
  }

  export type Variable_ConfigGroupByOutputType = {
    key: string
    value: number
    _count: Variable_ConfigCountAggregateOutputType | null
    _avg: Variable_ConfigAvgAggregateOutputType | null
    _sum: Variable_ConfigSumAggregateOutputType | null
    _min: Variable_ConfigMinAggregateOutputType | null
    _max: Variable_ConfigMaxAggregateOutputType | null
  }

  type GetVariable_ConfigGroupByPayload<T extends Variable_ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Variable_ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Variable_ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Variable_ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], Variable_ConfigGroupByOutputType[P]>
        }
      >
    >


  export type Variable_ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["variable_Config"]>

  export type Variable_ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["variable_Config"]>

  export type Variable_ConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["variable_Config"]>

  export type Variable_ConfigSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type Variable_ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["variable_Config"]>

  export type $Variable_ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variable_Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: number
    }, ExtArgs["result"]["variable_Config"]>
    composites: {}
  }

  type Variable_ConfigGetPayload<S extends boolean | null | undefined | Variable_ConfigDefaultArgs> = $Result.GetResult<Prisma.$Variable_ConfigPayload, S>

  type Variable_ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Variable_ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Variable_ConfigCountAggregateInputType | true
    }

  export interface Variable_ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variable_Config'], meta: { name: 'Variable_Config' } }
    /**
     * Find zero or one Variable_Config that matches the filter.
     * @param {Variable_ConfigFindUniqueArgs} args - Arguments to find a Variable_Config
     * @example
     * // Get one Variable_Config
     * const variable_Config = await prisma.variable_Config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Variable_ConfigFindUniqueArgs>(args: SelectSubset<T, Variable_ConfigFindUniqueArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variable_Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Variable_ConfigFindUniqueOrThrowArgs} args - Arguments to find a Variable_Config
     * @example
     * // Get one Variable_Config
     * const variable_Config = await prisma.variable_Config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Variable_ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, Variable_ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable_Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigFindFirstArgs} args - Arguments to find a Variable_Config
     * @example
     * // Get one Variable_Config
     * const variable_Config = await prisma.variable_Config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Variable_ConfigFindFirstArgs>(args?: SelectSubset<T, Variable_ConfigFindFirstArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable_Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigFindFirstOrThrowArgs} args - Arguments to find a Variable_Config
     * @example
     * // Get one Variable_Config
     * const variable_Config = await prisma.variable_Config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Variable_ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, Variable_ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variable_Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variable_Configs
     * const variable_Configs = await prisma.variable_Config.findMany()
     * 
     * // Get first 10 Variable_Configs
     * const variable_Configs = await prisma.variable_Config.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const variable_ConfigWithKeyOnly = await prisma.variable_Config.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends Variable_ConfigFindManyArgs>(args?: SelectSubset<T, Variable_ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variable_Config.
     * @param {Variable_ConfigCreateArgs} args - Arguments to create a Variable_Config.
     * @example
     * // Create one Variable_Config
     * const Variable_Config = await prisma.variable_Config.create({
     *   data: {
     *     // ... data to create a Variable_Config
     *   }
     * })
     * 
     */
    create<T extends Variable_ConfigCreateArgs>(args: SelectSubset<T, Variable_ConfigCreateArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variable_Configs.
     * @param {Variable_ConfigCreateManyArgs} args - Arguments to create many Variable_Configs.
     * @example
     * // Create many Variable_Configs
     * const variable_Config = await prisma.variable_Config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Variable_ConfigCreateManyArgs>(args?: SelectSubset<T, Variable_ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variable_Configs and returns the data saved in the database.
     * @param {Variable_ConfigCreateManyAndReturnArgs} args - Arguments to create many Variable_Configs.
     * @example
     * // Create many Variable_Configs
     * const variable_Config = await prisma.variable_Config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variable_Configs and only return the `key`
     * const variable_ConfigWithKeyOnly = await prisma.variable_Config.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Variable_ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, Variable_ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variable_Config.
     * @param {Variable_ConfigDeleteArgs} args - Arguments to delete one Variable_Config.
     * @example
     * // Delete one Variable_Config
     * const Variable_Config = await prisma.variable_Config.delete({
     *   where: {
     *     // ... filter to delete one Variable_Config
     *   }
     * })
     * 
     */
    delete<T extends Variable_ConfigDeleteArgs>(args: SelectSubset<T, Variable_ConfigDeleteArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variable_Config.
     * @param {Variable_ConfigUpdateArgs} args - Arguments to update one Variable_Config.
     * @example
     * // Update one Variable_Config
     * const variable_Config = await prisma.variable_Config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Variable_ConfigUpdateArgs>(args: SelectSubset<T, Variable_ConfigUpdateArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variable_Configs.
     * @param {Variable_ConfigDeleteManyArgs} args - Arguments to filter Variable_Configs to delete.
     * @example
     * // Delete a few Variable_Configs
     * const { count } = await prisma.variable_Config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Variable_ConfigDeleteManyArgs>(args?: SelectSubset<T, Variable_ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variable_Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variable_Configs
     * const variable_Config = await prisma.variable_Config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Variable_ConfigUpdateManyArgs>(args: SelectSubset<T, Variable_ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variable_Configs and returns the data updated in the database.
     * @param {Variable_ConfigUpdateManyAndReturnArgs} args - Arguments to update many Variable_Configs.
     * @example
     * // Update many Variable_Configs
     * const variable_Config = await prisma.variable_Config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variable_Configs and only return the `key`
     * const variable_ConfigWithKeyOnly = await prisma.variable_Config.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends Variable_ConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, Variable_ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variable_Config.
     * @param {Variable_ConfigUpsertArgs} args - Arguments to update or create a Variable_Config.
     * @example
     * // Update or create a Variable_Config
     * const variable_Config = await prisma.variable_Config.upsert({
     *   create: {
     *     // ... data to create a Variable_Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variable_Config we want to update
     *   }
     * })
     */
    upsert<T extends Variable_ConfigUpsertArgs>(args: SelectSubset<T, Variable_ConfigUpsertArgs<ExtArgs>>): Prisma__Variable_ConfigClient<$Result.GetResult<Prisma.$Variable_ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variable_Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigCountArgs} args - Arguments to filter Variable_Configs to count.
     * @example
     * // Count the number of Variable_Configs
     * const count = await prisma.variable_Config.count({
     *   where: {
     *     // ... the filter for the Variable_Configs we want to count
     *   }
     * })
    **/
    count<T extends Variable_ConfigCountArgs>(
      args?: Subset<T, Variable_ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Variable_ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variable_Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Variable_ConfigAggregateArgs>(args: Subset<T, Variable_ConfigAggregateArgs>): Prisma.PrismaPromise<GetVariable_ConfigAggregateType<T>>

    /**
     * Group by Variable_Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Variable_ConfigGroupByArgs} args - Group by arguments.
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
      T extends Variable_ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Variable_ConfigGroupByArgs['orderBy'] }
        : { orderBy?: Variable_ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Variable_ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariable_ConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variable_Config model
   */
  readonly fields: Variable_ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variable_Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Variable_ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Variable_Config model
   */
  interface Variable_ConfigFieldRefs {
    readonly key: FieldRef<"Variable_Config", 'String'>
    readonly value: FieldRef<"Variable_Config", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Variable_Config findUnique
   */
  export type Variable_ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Variable_Config to fetch.
     */
    where: Variable_ConfigWhereUniqueInput
  }

  /**
   * Variable_Config findUniqueOrThrow
   */
  export type Variable_ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Variable_Config to fetch.
     */
    where: Variable_ConfigWhereUniqueInput
  }

  /**
   * Variable_Config findFirst
   */
  export type Variable_ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Variable_Config to fetch.
     */
    where?: Variable_ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variable_Configs to fetch.
     */
    orderBy?: Variable_ConfigOrderByWithRelationInput | Variable_ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variable_Configs.
     */
    cursor?: Variable_ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variable_Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variable_Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variable_Configs.
     */
    distinct?: Variable_ConfigScalarFieldEnum | Variable_ConfigScalarFieldEnum[]
  }

  /**
   * Variable_Config findFirstOrThrow
   */
  export type Variable_ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Variable_Config to fetch.
     */
    where?: Variable_ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variable_Configs to fetch.
     */
    orderBy?: Variable_ConfigOrderByWithRelationInput | Variable_ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variable_Configs.
     */
    cursor?: Variable_ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variable_Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variable_Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variable_Configs.
     */
    distinct?: Variable_ConfigScalarFieldEnum | Variable_ConfigScalarFieldEnum[]
  }

  /**
   * Variable_Config findMany
   */
  export type Variable_ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Variable_Configs to fetch.
     */
    where?: Variable_ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variable_Configs to fetch.
     */
    orderBy?: Variable_ConfigOrderByWithRelationInput | Variable_ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variable_Configs.
     */
    cursor?: Variable_ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variable_Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variable_Configs.
     */
    skip?: number
    distinct?: Variable_ConfigScalarFieldEnum | Variable_ConfigScalarFieldEnum[]
  }

  /**
   * Variable_Config create
   */
  export type Variable_ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Variable_Config.
     */
    data: XOR<Variable_ConfigCreateInput, Variable_ConfigUncheckedCreateInput>
  }

  /**
   * Variable_Config createMany
   */
  export type Variable_ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variable_Configs.
     */
    data: Variable_ConfigCreateManyInput | Variable_ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variable_Config createManyAndReturn
   */
  export type Variable_ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * The data used to create many Variable_Configs.
     */
    data: Variable_ConfigCreateManyInput | Variable_ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variable_Config update
   */
  export type Variable_ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Variable_Config.
     */
    data: XOR<Variable_ConfigUpdateInput, Variable_ConfigUncheckedUpdateInput>
    /**
     * Choose, which Variable_Config to update.
     */
    where: Variable_ConfigWhereUniqueInput
  }

  /**
   * Variable_Config updateMany
   */
  export type Variable_ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variable_Configs.
     */
    data: XOR<Variable_ConfigUpdateManyMutationInput, Variable_ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Variable_Configs to update
     */
    where?: Variable_ConfigWhereInput
    /**
     * Limit how many Variable_Configs to update.
     */
    limit?: number
  }

  /**
   * Variable_Config updateManyAndReturn
   */
  export type Variable_ConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * The data used to update Variable_Configs.
     */
    data: XOR<Variable_ConfigUpdateManyMutationInput, Variable_ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Variable_Configs to update
     */
    where?: Variable_ConfigWhereInput
    /**
     * Limit how many Variable_Configs to update.
     */
    limit?: number
  }

  /**
   * Variable_Config upsert
   */
  export type Variable_ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Variable_Config to update in case it exists.
     */
    where: Variable_ConfigWhereUniqueInput
    /**
     * In case the Variable_Config found by the `where` argument doesn't exist, create a new Variable_Config with this data.
     */
    create: XOR<Variable_ConfigCreateInput, Variable_ConfigUncheckedCreateInput>
    /**
     * In case the Variable_Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Variable_ConfigUpdateInput, Variable_ConfigUncheckedUpdateInput>
  }

  /**
   * Variable_Config delete
   */
  export type Variable_ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
    /**
     * Filter which Variable_Config to delete.
     */
    where: Variable_ConfigWhereUniqueInput
  }

  /**
   * Variable_Config deleteMany
   */
  export type Variable_ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variable_Configs to delete
     */
    where?: Variable_ConfigWhereInput
    /**
     * Limit how many Variable_Configs to delete.
     */
    limit?: number
  }

  /**
   * Variable_Config without action
   */
  export type Variable_ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable_Config
     */
    select?: Variable_ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable_Config
     */
    omit?: Variable_ConfigOmit<ExtArgs> | null
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


  export const DriversScalarFieldEnum: {
    id: 'id',
    driver_code: 'driver_code',
    name: 'name'
  };

  export type DriversScalarFieldEnum = (typeof DriversScalarFieldEnum)[keyof typeof DriversScalarFieldEnum]


  export const Drivers_AttendancesScalarFieldEnum: {
    id: 'id',
    driver_code: 'driver_code',
    attendance_date: 'attendance_date',
    attendance_status: 'attendance_status'
  };

  export type Drivers_AttendancesScalarFieldEnum = (typeof Drivers_AttendancesScalarFieldEnum)[keyof typeof Drivers_AttendancesScalarFieldEnum]


  export const Shipment_CostsScalarFieldEnum: {
    id: 'id',
    driver_code: 'driver_code',
    shipment_no: 'shipment_no',
    total_costs: 'total_costs',
    cost_status: 'cost_status'
  };

  export type Shipment_CostsScalarFieldEnum = (typeof Shipment_CostsScalarFieldEnum)[keyof typeof Shipment_CostsScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    shipment_no: 'shipment_no',
    shipment_date: 'shipment_date',
    shipment_status: 'shipment_status'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const Variable_ConfigScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type Variable_ConfigScalarFieldEnum = (typeof Variable_ConfigScalarFieldEnum)[keyof typeof Variable_ConfigScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CostStatus'
   */
  export type EnumCostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostStatus'>
    


  /**
   * Reference to a field of type 'CostStatus[]'
   */
  export type ListEnumCostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostStatus[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


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


  export type DriversWhereInput = {
    AND?: DriversWhereInput | DriversWhereInput[]
    OR?: DriversWhereInput[]
    NOT?: DriversWhereInput | DriversWhereInput[]
    id?: StringFilter<"Drivers"> | string
    driver_code?: StringFilter<"Drivers"> | string
    name?: StringFilter<"Drivers"> | string
    attendances?: Drivers_AttendancesListRelationFilter
    shipmentCosts?: Shipment_CostsListRelationFilter
  }

  export type DriversOrderByWithRelationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    name?: SortOrder
    attendances?: Drivers_AttendancesOrderByRelationAggregateInput
    shipmentCosts?: Shipment_CostsOrderByRelationAggregateInput
  }

  export type DriversWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driver_code?: string
    AND?: DriversWhereInput | DriversWhereInput[]
    OR?: DriversWhereInput[]
    NOT?: DriversWhereInput | DriversWhereInput[]
    name?: StringFilter<"Drivers"> | string
    attendances?: Drivers_AttendancesListRelationFilter
    shipmentCosts?: Shipment_CostsListRelationFilter
  }, "id" | "driver_code">

  export type DriversOrderByWithAggregationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    name?: SortOrder
    _count?: DriversCountOrderByAggregateInput
    _max?: DriversMaxOrderByAggregateInput
    _min?: DriversMinOrderByAggregateInput
  }

  export type DriversScalarWhereWithAggregatesInput = {
    AND?: DriversScalarWhereWithAggregatesInput | DriversScalarWhereWithAggregatesInput[]
    OR?: DriversScalarWhereWithAggregatesInput[]
    NOT?: DriversScalarWhereWithAggregatesInput | DriversScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drivers"> | string
    driver_code?: StringWithAggregatesFilter<"Drivers"> | string
    name?: StringWithAggregatesFilter<"Drivers"> | string
  }

  export type Drivers_AttendancesWhereInput = {
    AND?: Drivers_AttendancesWhereInput | Drivers_AttendancesWhereInput[]
    OR?: Drivers_AttendancesWhereInput[]
    NOT?: Drivers_AttendancesWhereInput | Drivers_AttendancesWhereInput[]
    id?: StringFilter<"Drivers_Attendances"> | string
    driver_code?: StringFilter<"Drivers_Attendances"> | string
    attendance_date?: DateTimeFilter<"Drivers_Attendances"> | Date | string
    attendance_status?: BoolFilter<"Drivers_Attendances"> | boolean
    driver?: XOR<DriversScalarRelationFilter, DriversWhereInput>
  }

  export type Drivers_AttendancesOrderByWithRelationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    attendance_date?: SortOrder
    attendance_status?: SortOrder
    driver?: DriversOrderByWithRelationInput
  }

  export type Drivers_AttendancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Drivers_AttendancesWhereInput | Drivers_AttendancesWhereInput[]
    OR?: Drivers_AttendancesWhereInput[]
    NOT?: Drivers_AttendancesWhereInput | Drivers_AttendancesWhereInput[]
    driver_code?: StringFilter<"Drivers_Attendances"> | string
    attendance_date?: DateTimeFilter<"Drivers_Attendances"> | Date | string
    attendance_status?: BoolFilter<"Drivers_Attendances"> | boolean
    driver?: XOR<DriversScalarRelationFilter, DriversWhereInput>
  }, "id">

  export type Drivers_AttendancesOrderByWithAggregationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    attendance_date?: SortOrder
    attendance_status?: SortOrder
    _count?: Drivers_AttendancesCountOrderByAggregateInput
    _max?: Drivers_AttendancesMaxOrderByAggregateInput
    _min?: Drivers_AttendancesMinOrderByAggregateInput
  }

  export type Drivers_AttendancesScalarWhereWithAggregatesInput = {
    AND?: Drivers_AttendancesScalarWhereWithAggregatesInput | Drivers_AttendancesScalarWhereWithAggregatesInput[]
    OR?: Drivers_AttendancesScalarWhereWithAggregatesInput[]
    NOT?: Drivers_AttendancesScalarWhereWithAggregatesInput | Drivers_AttendancesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drivers_Attendances"> | string
    driver_code?: StringWithAggregatesFilter<"Drivers_Attendances"> | string
    attendance_date?: DateTimeWithAggregatesFilter<"Drivers_Attendances"> | Date | string
    attendance_status?: BoolWithAggregatesFilter<"Drivers_Attendances"> | boolean
  }

  export type Shipment_CostsWhereInput = {
    AND?: Shipment_CostsWhereInput | Shipment_CostsWhereInput[]
    OR?: Shipment_CostsWhereInput[]
    NOT?: Shipment_CostsWhereInput | Shipment_CostsWhereInput[]
    id?: StringFilter<"Shipment_Costs"> | string
    driver_code?: StringFilter<"Shipment_Costs"> | string
    shipment_no?: StringFilter<"Shipment_Costs"> | string
    total_costs?: IntFilter<"Shipment_Costs"> | number
    cost_status?: EnumCostStatusFilter<"Shipment_Costs"> | $Enums.CostStatus
    driver?: XOR<DriversScalarRelationFilter, DriversWhereInput>
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type Shipment_CostsOrderByWithRelationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    shipment_no?: SortOrder
    total_costs?: SortOrder
    cost_status?: SortOrder
    driver?: DriversOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type Shipment_CostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Shipment_CostsWhereInput | Shipment_CostsWhereInput[]
    OR?: Shipment_CostsWhereInput[]
    NOT?: Shipment_CostsWhereInput | Shipment_CostsWhereInput[]
    driver_code?: StringFilter<"Shipment_Costs"> | string
    shipment_no?: StringFilter<"Shipment_Costs"> | string
    total_costs?: IntFilter<"Shipment_Costs"> | number
    cost_status?: EnumCostStatusFilter<"Shipment_Costs"> | $Enums.CostStatus
    driver?: XOR<DriversScalarRelationFilter, DriversWhereInput>
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type Shipment_CostsOrderByWithAggregationInput = {
    id?: SortOrder
    driver_code?: SortOrder
    shipment_no?: SortOrder
    total_costs?: SortOrder
    cost_status?: SortOrder
    _count?: Shipment_CostsCountOrderByAggregateInput
    _avg?: Shipment_CostsAvgOrderByAggregateInput
    _max?: Shipment_CostsMaxOrderByAggregateInput
    _min?: Shipment_CostsMinOrderByAggregateInput
    _sum?: Shipment_CostsSumOrderByAggregateInput
  }

  export type Shipment_CostsScalarWhereWithAggregatesInput = {
    AND?: Shipment_CostsScalarWhereWithAggregatesInput | Shipment_CostsScalarWhereWithAggregatesInput[]
    OR?: Shipment_CostsScalarWhereWithAggregatesInput[]
    NOT?: Shipment_CostsScalarWhereWithAggregatesInput | Shipment_CostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment_Costs"> | string
    driver_code?: StringWithAggregatesFilter<"Shipment_Costs"> | string
    shipment_no?: StringWithAggregatesFilter<"Shipment_Costs"> | string
    total_costs?: IntWithAggregatesFilter<"Shipment_Costs"> | number
    cost_status?: EnumCostStatusWithAggregatesFilter<"Shipment_Costs"> | $Enums.CostStatus
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    shipment_no?: StringFilter<"Shipment"> | string
    shipment_date?: DateTimeFilter<"Shipment"> | Date | string
    shipment_status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    shipment_no?: SortOrder
    shipment_date?: SortOrder
    shipment_status?: SortOrder
    shipmentCosts?: Shipment_CostsOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    shipment_no?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    shipment_date?: DateTimeFilter<"Shipment"> | Date | string
    shipment_status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsListRelationFilter
  }, "shipment_no">

  export type ShipmentOrderByWithAggregationInput = {
    shipment_no?: SortOrder
    shipment_date?: SortOrder
    shipment_status?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    shipment_no?: StringWithAggregatesFilter<"Shipment"> | string
    shipment_date?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    shipment_status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
  }

  export type Variable_ConfigWhereInput = {
    AND?: Variable_ConfigWhereInput | Variable_ConfigWhereInput[]
    OR?: Variable_ConfigWhereInput[]
    NOT?: Variable_ConfigWhereInput | Variable_ConfigWhereInput[]
    key?: StringFilter<"Variable_Config"> | string
    value?: IntFilter<"Variable_Config"> | number
  }

  export type Variable_ConfigOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type Variable_ConfigWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: Variable_ConfigWhereInput | Variable_ConfigWhereInput[]
    OR?: Variable_ConfigWhereInput[]
    NOT?: Variable_ConfigWhereInput | Variable_ConfigWhereInput[]
    value?: IntFilter<"Variable_Config"> | number
  }, "key">

  export type Variable_ConfigOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: Variable_ConfigCountOrderByAggregateInput
    _avg?: Variable_ConfigAvgOrderByAggregateInput
    _max?: Variable_ConfigMaxOrderByAggregateInput
    _min?: Variable_ConfigMinOrderByAggregateInput
    _sum?: Variable_ConfigSumOrderByAggregateInput
  }

  export type Variable_ConfigScalarWhereWithAggregatesInput = {
    AND?: Variable_ConfigScalarWhereWithAggregatesInput | Variable_ConfigScalarWhereWithAggregatesInput[]
    OR?: Variable_ConfigScalarWhereWithAggregatesInput[]
    NOT?: Variable_ConfigScalarWhereWithAggregatesInput | Variable_ConfigScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Variable_Config"> | string
    value?: IntWithAggregatesFilter<"Variable_Config"> | number
  }

  export type DriversCreateInput = {
    id?: string
    driver_code: string
    name: string
    attendances?: Drivers_AttendancesCreateNestedManyWithoutDriverInput
    shipmentCosts?: Shipment_CostsCreateNestedManyWithoutDriverInput
  }

  export type DriversUncheckedCreateInput = {
    id?: string
    driver_code: string
    name: string
    attendances?: Drivers_AttendancesUncheckedCreateNestedManyWithoutDriverInput
    shipmentCosts?: Shipment_CostsUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriversUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    attendances?: Drivers_AttendancesUpdateManyWithoutDriverNestedInput
    shipmentCosts?: Shipment_CostsUpdateManyWithoutDriverNestedInput
  }

  export type DriversUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    attendances?: Drivers_AttendancesUncheckedUpdateManyWithoutDriverNestedInput
    shipmentCosts?: Shipment_CostsUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriversCreateManyInput = {
    id?: string
    driver_code: string
    name: string
  }

  export type DriversUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DriversUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Drivers_AttendancesCreateInput = {
    id?: string
    attendance_date: Date | string
    attendance_status: boolean
    driver: DriversCreateNestedOneWithoutAttendancesInput
  }

  export type Drivers_AttendancesUncheckedCreateInput = {
    id?: string
    driver_code: string
    attendance_date: Date | string
    attendance_status: boolean
  }

  export type Drivers_AttendancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
    driver?: DriversUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type Drivers_AttendancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Drivers_AttendancesCreateManyInput = {
    id?: string
    driver_code: string
    attendance_date: Date | string
    attendance_status: boolean
  }

  export type Drivers_AttendancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Drivers_AttendancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shipment_CostsCreateInput = {
    id?: string
    total_costs: number
    cost_status: $Enums.CostStatus
    driver: DriversCreateNestedOneWithoutShipmentCostsInput
    shipment: ShipmentCreateNestedOneWithoutShipmentCostsInput
  }

  export type Shipment_CostsUncheckedCreateInput = {
    id?: string
    driver_code: string
    shipment_no: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Shipment_CostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
    driver?: DriversUpdateOneRequiredWithoutShipmentCostsNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutShipmentCostsNestedInput
  }

  export type Shipment_CostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    shipment_no?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type Shipment_CostsCreateManyInput = {
    id?: string
    driver_code: string
    shipment_no: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Shipment_CostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type Shipment_CostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    shipment_no?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type ShipmentCreateInput = {
    shipment_no: string
    shipment_date: Date | string
    shipment_status: $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    shipment_no: string
    shipment_date: Date | string
    shipment_status: $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    shipmentCosts?: Shipment_CostsUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    shipment_no: string
    shipment_date: Date | string
    shipment_status: $Enums.ShipmentStatus
  }

  export type ShipmentUpdateManyMutationInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  }

  export type ShipmentUncheckedUpdateManyInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  }

  export type Variable_ConfigCreateInput = {
    key: string
    value: number
  }

  export type Variable_ConfigUncheckedCreateInput = {
    key: string
    value: number
  }

  export type Variable_ConfigUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type Variable_ConfigUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type Variable_ConfigCreateManyInput = {
    key: string
    value: number
  }

  export type Variable_ConfigUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type Variable_ConfigUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
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

  export type Drivers_AttendancesListRelationFilter = {
    every?: Drivers_AttendancesWhereInput
    some?: Drivers_AttendancesWhereInput
    none?: Drivers_AttendancesWhereInput
  }

  export type Shipment_CostsListRelationFilter = {
    every?: Shipment_CostsWhereInput
    some?: Shipment_CostsWhereInput
    none?: Shipment_CostsWhereInput
  }

  export type Drivers_AttendancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Shipment_CostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriversCountOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    name?: SortOrder
  }

  export type DriversMaxOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    name?: SortOrder
  }

  export type DriversMinOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    name?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DriversScalarRelationFilter = {
    is?: DriversWhereInput
    isNot?: DriversWhereInput
  }

  export type Drivers_AttendancesCountOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    attendance_date?: SortOrder
    attendance_status?: SortOrder
  }

  export type Drivers_AttendancesMaxOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    attendance_date?: SortOrder
    attendance_status?: SortOrder
  }

  export type Drivers_AttendancesMinOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    attendance_date?: SortOrder
    attendance_status?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumCostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CostStatus | EnumCostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCostStatusFilter<$PrismaModel> | $Enums.CostStatus
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type Shipment_CostsCountOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    shipment_no?: SortOrder
    total_costs?: SortOrder
    cost_status?: SortOrder
  }

  export type Shipment_CostsAvgOrderByAggregateInput = {
    total_costs?: SortOrder
  }

  export type Shipment_CostsMaxOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    shipment_no?: SortOrder
    total_costs?: SortOrder
    cost_status?: SortOrder
  }

  export type Shipment_CostsMinOrderByAggregateInput = {
    id?: SortOrder
    driver_code?: SortOrder
    shipment_no?: SortOrder
    total_costs?: SortOrder
    cost_status?: SortOrder
  }

  export type Shipment_CostsSumOrderByAggregateInput = {
    total_costs?: SortOrder
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

  export type EnumCostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostStatus | EnumCostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCostStatusWithAggregatesFilter<$PrismaModel> | $Enums.CostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCostStatusFilter<$PrismaModel>
    _max?: NestedEnumCostStatusFilter<$PrismaModel>
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type ShipmentCountOrderByAggregateInput = {
    shipment_no?: SortOrder
    shipment_date?: SortOrder
    shipment_status?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    shipment_no?: SortOrder
    shipment_date?: SortOrder
    shipment_status?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    shipment_no?: SortOrder
    shipment_date?: SortOrder
    shipment_status?: SortOrder
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type Variable_ConfigCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type Variable_ConfigAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type Variable_ConfigMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type Variable_ConfigMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type Variable_ConfigSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type Drivers_AttendancesCreateNestedManyWithoutDriverInput = {
    create?: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput> | Drivers_AttendancesCreateWithoutDriverInput[] | Drivers_AttendancesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Drivers_AttendancesCreateOrConnectWithoutDriverInput | Drivers_AttendancesCreateOrConnectWithoutDriverInput[]
    createMany?: Drivers_AttendancesCreateManyDriverInputEnvelope
    connect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
  }

  export type Shipment_CostsCreateNestedManyWithoutDriverInput = {
    create?: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput> | Shipment_CostsCreateWithoutDriverInput[] | Shipment_CostsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutDriverInput | Shipment_CostsCreateOrConnectWithoutDriverInput[]
    createMany?: Shipment_CostsCreateManyDriverInputEnvelope
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
  }

  export type Drivers_AttendancesUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput> | Drivers_AttendancesCreateWithoutDriverInput[] | Drivers_AttendancesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Drivers_AttendancesCreateOrConnectWithoutDriverInput | Drivers_AttendancesCreateOrConnectWithoutDriverInput[]
    createMany?: Drivers_AttendancesCreateManyDriverInputEnvelope
    connect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
  }

  export type Shipment_CostsUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput> | Shipment_CostsCreateWithoutDriverInput[] | Shipment_CostsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutDriverInput | Shipment_CostsCreateOrConnectWithoutDriverInput[]
    createMany?: Shipment_CostsCreateManyDriverInputEnvelope
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Drivers_AttendancesUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput> | Drivers_AttendancesCreateWithoutDriverInput[] | Drivers_AttendancesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Drivers_AttendancesCreateOrConnectWithoutDriverInput | Drivers_AttendancesCreateOrConnectWithoutDriverInput[]
    upsert?: Drivers_AttendancesUpsertWithWhereUniqueWithoutDriverInput | Drivers_AttendancesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Drivers_AttendancesCreateManyDriverInputEnvelope
    set?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    disconnect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    delete?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    connect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    update?: Drivers_AttendancesUpdateWithWhereUniqueWithoutDriverInput | Drivers_AttendancesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Drivers_AttendancesUpdateManyWithWhereWithoutDriverInput | Drivers_AttendancesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Drivers_AttendancesScalarWhereInput | Drivers_AttendancesScalarWhereInput[]
  }

  export type Shipment_CostsUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput> | Shipment_CostsCreateWithoutDriverInput[] | Shipment_CostsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutDriverInput | Shipment_CostsCreateOrConnectWithoutDriverInput[]
    upsert?: Shipment_CostsUpsertWithWhereUniqueWithoutDriverInput | Shipment_CostsUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Shipment_CostsCreateManyDriverInputEnvelope
    set?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    disconnect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    delete?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    update?: Shipment_CostsUpdateWithWhereUniqueWithoutDriverInput | Shipment_CostsUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Shipment_CostsUpdateManyWithWhereWithoutDriverInput | Shipment_CostsUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
  }

  export type Drivers_AttendancesUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput> | Drivers_AttendancesCreateWithoutDriverInput[] | Drivers_AttendancesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Drivers_AttendancesCreateOrConnectWithoutDriverInput | Drivers_AttendancesCreateOrConnectWithoutDriverInput[]
    upsert?: Drivers_AttendancesUpsertWithWhereUniqueWithoutDriverInput | Drivers_AttendancesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Drivers_AttendancesCreateManyDriverInputEnvelope
    set?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    disconnect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    delete?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    connect?: Drivers_AttendancesWhereUniqueInput | Drivers_AttendancesWhereUniqueInput[]
    update?: Drivers_AttendancesUpdateWithWhereUniqueWithoutDriverInput | Drivers_AttendancesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Drivers_AttendancesUpdateManyWithWhereWithoutDriverInput | Drivers_AttendancesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Drivers_AttendancesScalarWhereInput | Drivers_AttendancesScalarWhereInput[]
  }

  export type Shipment_CostsUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput> | Shipment_CostsCreateWithoutDriverInput[] | Shipment_CostsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutDriverInput | Shipment_CostsCreateOrConnectWithoutDriverInput[]
    upsert?: Shipment_CostsUpsertWithWhereUniqueWithoutDriverInput | Shipment_CostsUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Shipment_CostsCreateManyDriverInputEnvelope
    set?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    disconnect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    delete?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    update?: Shipment_CostsUpdateWithWhereUniqueWithoutDriverInput | Shipment_CostsUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Shipment_CostsUpdateManyWithWhereWithoutDriverInput | Shipment_CostsUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
  }

  export type DriversCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<DriversCreateWithoutAttendancesInput, DriversUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DriversCreateOrConnectWithoutAttendancesInput
    connect?: DriversWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DriversUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<DriversCreateWithoutAttendancesInput, DriversUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: DriversCreateOrConnectWithoutAttendancesInput
    upsert?: DriversUpsertWithoutAttendancesInput
    connect?: DriversWhereUniqueInput
    update?: XOR<XOR<DriversUpdateToOneWithWhereWithoutAttendancesInput, DriversUpdateWithoutAttendancesInput>, DriversUncheckedUpdateWithoutAttendancesInput>
  }

  export type DriversCreateNestedOneWithoutShipmentCostsInput = {
    create?: XOR<DriversCreateWithoutShipmentCostsInput, DriversUncheckedCreateWithoutShipmentCostsInput>
    connectOrCreate?: DriversCreateOrConnectWithoutShipmentCostsInput
    connect?: DriversWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutShipmentCostsInput = {
    create?: XOR<ShipmentCreateWithoutShipmentCostsInput, ShipmentUncheckedCreateWithoutShipmentCostsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutShipmentCostsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCostStatusFieldUpdateOperationsInput = {
    set?: $Enums.CostStatus
  }

  export type DriversUpdateOneRequiredWithoutShipmentCostsNestedInput = {
    create?: XOR<DriversCreateWithoutShipmentCostsInput, DriversUncheckedCreateWithoutShipmentCostsInput>
    connectOrCreate?: DriversCreateOrConnectWithoutShipmentCostsInput
    upsert?: DriversUpsertWithoutShipmentCostsInput
    connect?: DriversWhereUniqueInput
    update?: XOR<XOR<DriversUpdateToOneWithWhereWithoutShipmentCostsInput, DriversUpdateWithoutShipmentCostsInput>, DriversUncheckedUpdateWithoutShipmentCostsInput>
  }

  export type ShipmentUpdateOneRequiredWithoutShipmentCostsNestedInput = {
    create?: XOR<ShipmentCreateWithoutShipmentCostsInput, ShipmentUncheckedCreateWithoutShipmentCostsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutShipmentCostsInput
    upsert?: ShipmentUpsertWithoutShipmentCostsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutShipmentCostsInput, ShipmentUpdateWithoutShipmentCostsInput>, ShipmentUncheckedUpdateWithoutShipmentCostsInput>
  }

  export type Shipment_CostsCreateNestedManyWithoutShipmentInput = {
    create?: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput> | Shipment_CostsCreateWithoutShipmentInput[] | Shipment_CostsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutShipmentInput | Shipment_CostsCreateOrConnectWithoutShipmentInput[]
    createMany?: Shipment_CostsCreateManyShipmentInputEnvelope
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
  }

  export type Shipment_CostsUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput> | Shipment_CostsCreateWithoutShipmentInput[] | Shipment_CostsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutShipmentInput | Shipment_CostsCreateOrConnectWithoutShipmentInput[]
    createMany?: Shipment_CostsCreateManyShipmentInputEnvelope
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type Shipment_CostsUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput> | Shipment_CostsCreateWithoutShipmentInput[] | Shipment_CostsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutShipmentInput | Shipment_CostsCreateOrConnectWithoutShipmentInput[]
    upsert?: Shipment_CostsUpsertWithWhereUniqueWithoutShipmentInput | Shipment_CostsUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: Shipment_CostsCreateManyShipmentInputEnvelope
    set?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    disconnect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    delete?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    update?: Shipment_CostsUpdateWithWhereUniqueWithoutShipmentInput | Shipment_CostsUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: Shipment_CostsUpdateManyWithWhereWithoutShipmentInput | Shipment_CostsUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
  }

  export type Shipment_CostsUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput> | Shipment_CostsCreateWithoutShipmentInput[] | Shipment_CostsUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: Shipment_CostsCreateOrConnectWithoutShipmentInput | Shipment_CostsCreateOrConnectWithoutShipmentInput[]
    upsert?: Shipment_CostsUpsertWithWhereUniqueWithoutShipmentInput | Shipment_CostsUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: Shipment_CostsCreateManyShipmentInputEnvelope
    set?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    disconnect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    delete?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    connect?: Shipment_CostsWhereUniqueInput | Shipment_CostsWhereUniqueInput[]
    update?: Shipment_CostsUpdateWithWhereUniqueWithoutShipmentInput | Shipment_CostsUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: Shipment_CostsUpdateManyWithWhereWithoutShipmentInput | Shipment_CostsUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CostStatus | EnumCostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCostStatusFilter<$PrismaModel> | $Enums.CostStatus
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

  export type NestedEnumCostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostStatus | EnumCostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostStatus[] | ListEnumCostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCostStatusWithAggregatesFilter<$PrismaModel> | $Enums.CostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCostStatusFilter<$PrismaModel>
    _max?: NestedEnumCostStatusFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type Drivers_AttendancesCreateWithoutDriverInput = {
    id?: string
    attendance_date: Date | string
    attendance_status: boolean
  }

  export type Drivers_AttendancesUncheckedCreateWithoutDriverInput = {
    id?: string
    attendance_date: Date | string
    attendance_status: boolean
  }

  export type Drivers_AttendancesCreateOrConnectWithoutDriverInput = {
    where: Drivers_AttendancesWhereUniqueInput
    create: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput>
  }

  export type Drivers_AttendancesCreateManyDriverInputEnvelope = {
    data: Drivers_AttendancesCreateManyDriverInput | Drivers_AttendancesCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type Shipment_CostsCreateWithoutDriverInput = {
    id?: string
    total_costs: number
    cost_status: $Enums.CostStatus
    shipment: ShipmentCreateNestedOneWithoutShipmentCostsInput
  }

  export type Shipment_CostsUncheckedCreateWithoutDriverInput = {
    id?: string
    shipment_no: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Shipment_CostsCreateOrConnectWithoutDriverInput = {
    where: Shipment_CostsWhereUniqueInput
    create: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput>
  }

  export type Shipment_CostsCreateManyDriverInputEnvelope = {
    data: Shipment_CostsCreateManyDriverInput | Shipment_CostsCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type Drivers_AttendancesUpsertWithWhereUniqueWithoutDriverInput = {
    where: Drivers_AttendancesWhereUniqueInput
    update: XOR<Drivers_AttendancesUpdateWithoutDriverInput, Drivers_AttendancesUncheckedUpdateWithoutDriverInput>
    create: XOR<Drivers_AttendancesCreateWithoutDriverInput, Drivers_AttendancesUncheckedCreateWithoutDriverInput>
  }

  export type Drivers_AttendancesUpdateWithWhereUniqueWithoutDriverInput = {
    where: Drivers_AttendancesWhereUniqueInput
    data: XOR<Drivers_AttendancesUpdateWithoutDriverInput, Drivers_AttendancesUncheckedUpdateWithoutDriverInput>
  }

  export type Drivers_AttendancesUpdateManyWithWhereWithoutDriverInput = {
    where: Drivers_AttendancesScalarWhereInput
    data: XOR<Drivers_AttendancesUpdateManyMutationInput, Drivers_AttendancesUncheckedUpdateManyWithoutDriverInput>
  }

  export type Drivers_AttendancesScalarWhereInput = {
    AND?: Drivers_AttendancesScalarWhereInput | Drivers_AttendancesScalarWhereInput[]
    OR?: Drivers_AttendancesScalarWhereInput[]
    NOT?: Drivers_AttendancesScalarWhereInput | Drivers_AttendancesScalarWhereInput[]
    id?: StringFilter<"Drivers_Attendances"> | string
    driver_code?: StringFilter<"Drivers_Attendances"> | string
    attendance_date?: DateTimeFilter<"Drivers_Attendances"> | Date | string
    attendance_status?: BoolFilter<"Drivers_Attendances"> | boolean
  }

  export type Shipment_CostsUpsertWithWhereUniqueWithoutDriverInput = {
    where: Shipment_CostsWhereUniqueInput
    update: XOR<Shipment_CostsUpdateWithoutDriverInput, Shipment_CostsUncheckedUpdateWithoutDriverInput>
    create: XOR<Shipment_CostsCreateWithoutDriverInput, Shipment_CostsUncheckedCreateWithoutDriverInput>
  }

  export type Shipment_CostsUpdateWithWhereUniqueWithoutDriverInput = {
    where: Shipment_CostsWhereUniqueInput
    data: XOR<Shipment_CostsUpdateWithoutDriverInput, Shipment_CostsUncheckedUpdateWithoutDriverInput>
  }

  export type Shipment_CostsUpdateManyWithWhereWithoutDriverInput = {
    where: Shipment_CostsScalarWhereInput
    data: XOR<Shipment_CostsUpdateManyMutationInput, Shipment_CostsUncheckedUpdateManyWithoutDriverInput>
  }

  export type Shipment_CostsScalarWhereInput = {
    AND?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
    OR?: Shipment_CostsScalarWhereInput[]
    NOT?: Shipment_CostsScalarWhereInput | Shipment_CostsScalarWhereInput[]
    id?: StringFilter<"Shipment_Costs"> | string
    driver_code?: StringFilter<"Shipment_Costs"> | string
    shipment_no?: StringFilter<"Shipment_Costs"> | string
    total_costs?: IntFilter<"Shipment_Costs"> | number
    cost_status?: EnumCostStatusFilter<"Shipment_Costs"> | $Enums.CostStatus
  }

  export type DriversCreateWithoutAttendancesInput = {
    id?: string
    driver_code: string
    name: string
    shipmentCosts?: Shipment_CostsCreateNestedManyWithoutDriverInput
  }

  export type DriversUncheckedCreateWithoutAttendancesInput = {
    id?: string
    driver_code: string
    name: string
    shipmentCosts?: Shipment_CostsUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriversCreateOrConnectWithoutAttendancesInput = {
    where: DriversWhereUniqueInput
    create: XOR<DriversCreateWithoutAttendancesInput, DriversUncheckedCreateWithoutAttendancesInput>
  }

  export type DriversUpsertWithoutAttendancesInput = {
    update: XOR<DriversUpdateWithoutAttendancesInput, DriversUncheckedUpdateWithoutAttendancesInput>
    create: XOR<DriversCreateWithoutAttendancesInput, DriversUncheckedCreateWithoutAttendancesInput>
    where?: DriversWhereInput
  }

  export type DriversUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: DriversWhereInput
    data: XOR<DriversUpdateWithoutAttendancesInput, DriversUncheckedUpdateWithoutAttendancesInput>
  }

  export type DriversUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shipmentCosts?: Shipment_CostsUpdateManyWithoutDriverNestedInput
  }

  export type DriversUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shipmentCosts?: Shipment_CostsUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriversCreateWithoutShipmentCostsInput = {
    id?: string
    driver_code: string
    name: string
    attendances?: Drivers_AttendancesCreateNestedManyWithoutDriverInput
  }

  export type DriversUncheckedCreateWithoutShipmentCostsInput = {
    id?: string
    driver_code: string
    name: string
    attendances?: Drivers_AttendancesUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriversCreateOrConnectWithoutShipmentCostsInput = {
    where: DriversWhereUniqueInput
    create: XOR<DriversCreateWithoutShipmentCostsInput, DriversUncheckedCreateWithoutShipmentCostsInput>
  }

  export type ShipmentCreateWithoutShipmentCostsInput = {
    shipment_no: string
    shipment_date: Date | string
    shipment_status: $Enums.ShipmentStatus
  }

  export type ShipmentUncheckedCreateWithoutShipmentCostsInput = {
    shipment_no: string
    shipment_date: Date | string
    shipment_status: $Enums.ShipmentStatus
  }

  export type ShipmentCreateOrConnectWithoutShipmentCostsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutShipmentCostsInput, ShipmentUncheckedCreateWithoutShipmentCostsInput>
  }

  export type DriversUpsertWithoutShipmentCostsInput = {
    update: XOR<DriversUpdateWithoutShipmentCostsInput, DriversUncheckedUpdateWithoutShipmentCostsInput>
    create: XOR<DriversCreateWithoutShipmentCostsInput, DriversUncheckedCreateWithoutShipmentCostsInput>
    where?: DriversWhereInput
  }

  export type DriversUpdateToOneWithWhereWithoutShipmentCostsInput = {
    where?: DriversWhereInput
    data: XOR<DriversUpdateWithoutShipmentCostsInput, DriversUncheckedUpdateWithoutShipmentCostsInput>
  }

  export type DriversUpdateWithoutShipmentCostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    attendances?: Drivers_AttendancesUpdateManyWithoutDriverNestedInput
  }

  export type DriversUncheckedUpdateWithoutShipmentCostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    attendances?: Drivers_AttendancesUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type ShipmentUpsertWithoutShipmentCostsInput = {
    update: XOR<ShipmentUpdateWithoutShipmentCostsInput, ShipmentUncheckedUpdateWithoutShipmentCostsInput>
    create: XOR<ShipmentCreateWithoutShipmentCostsInput, ShipmentUncheckedCreateWithoutShipmentCostsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutShipmentCostsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutShipmentCostsInput, ShipmentUncheckedUpdateWithoutShipmentCostsInput>
  }

  export type ShipmentUpdateWithoutShipmentCostsInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  }

  export type ShipmentUncheckedUpdateWithoutShipmentCostsInput = {
    shipment_no?: StringFieldUpdateOperationsInput | string
    shipment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
  }

  export type Shipment_CostsCreateWithoutShipmentInput = {
    id?: string
    total_costs: number
    cost_status: $Enums.CostStatus
    driver: DriversCreateNestedOneWithoutShipmentCostsInput
  }

  export type Shipment_CostsUncheckedCreateWithoutShipmentInput = {
    id?: string
    driver_code: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Shipment_CostsCreateOrConnectWithoutShipmentInput = {
    where: Shipment_CostsWhereUniqueInput
    create: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput>
  }

  export type Shipment_CostsCreateManyShipmentInputEnvelope = {
    data: Shipment_CostsCreateManyShipmentInput | Shipment_CostsCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type Shipment_CostsUpsertWithWhereUniqueWithoutShipmentInput = {
    where: Shipment_CostsWhereUniqueInput
    update: XOR<Shipment_CostsUpdateWithoutShipmentInput, Shipment_CostsUncheckedUpdateWithoutShipmentInput>
    create: XOR<Shipment_CostsCreateWithoutShipmentInput, Shipment_CostsUncheckedCreateWithoutShipmentInput>
  }

  export type Shipment_CostsUpdateWithWhereUniqueWithoutShipmentInput = {
    where: Shipment_CostsWhereUniqueInput
    data: XOR<Shipment_CostsUpdateWithoutShipmentInput, Shipment_CostsUncheckedUpdateWithoutShipmentInput>
  }

  export type Shipment_CostsUpdateManyWithWhereWithoutShipmentInput = {
    where: Shipment_CostsScalarWhereInput
    data: XOR<Shipment_CostsUpdateManyMutationInput, Shipment_CostsUncheckedUpdateManyWithoutShipmentInput>
  }

  export type Drivers_AttendancesCreateManyDriverInput = {
    id?: string
    attendance_date: Date | string
    attendance_status: boolean
  }

  export type Shipment_CostsCreateManyDriverInput = {
    id?: string
    shipment_no: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Drivers_AttendancesUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Drivers_AttendancesUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Drivers_AttendancesUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance_status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shipment_CostsUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
    shipment?: ShipmentUpdateOneRequiredWithoutShipmentCostsNestedInput
  }

  export type Shipment_CostsUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipment_no?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type Shipment_CostsUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipment_no?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type Shipment_CostsCreateManyShipmentInput = {
    id?: string
    driver_code: string
    total_costs: number
    cost_status: $Enums.CostStatus
  }

  export type Shipment_CostsUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
    driver?: DriversUpdateOneRequiredWithoutShipmentCostsNestedInput
  }

  export type Shipment_CostsUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
  }

  export type Shipment_CostsUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_code?: StringFieldUpdateOperationsInput | string
    total_costs?: IntFieldUpdateOperationsInput | number
    cost_status?: EnumCostStatusFieldUpdateOperationsInput | $Enums.CostStatus
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