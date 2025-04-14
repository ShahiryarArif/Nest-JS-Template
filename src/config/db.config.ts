import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";
import { registerAs } from "@nestjs/config";

export default registerAs("dbconfig.dev", (): PostgresConnectionOptions => ({
    type: "postgres", 
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    synchronize: true,
    logging: true,
    entities: [path.resolve(__dirname, "..") + "/**/*.entity{.ts,.js}"],
  }),
);