import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
  type: "postgres", 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest_template',
  synchronize: true,
  logging: true,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  name: "default", 
}