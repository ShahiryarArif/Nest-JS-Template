import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  // Add any other options you need
  // For example, if you want to use a different naming strategy:
  // namingStrategy: new CustomNamingStrategy(),
  // Or if you want to enable query logging:
  // logging: ["query", "error"],
  // Or if you want to use a different timezone:
  // timezone: "Z",
  // Or if you want to use a different charset:
  // charset: "utf8",
  // Or if you want to use a different connection pool size:
  // extra: {
  //   max: 10,
  //   min: 1,
  //   idleTimeoutMillis: 30000,
  //   connectionTimeoutMillis: 2000,
  // },
  // Or if you want to use a different connection pool strategy:
  // connectionPool: {
  //   max: 10,
  //   min: 1,
  //   idleTimeoutMillis: 30000,
  //   connectionTimeoutMillis: 2000,
  // },
}