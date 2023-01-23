import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [],
  synchronize: true,
  logging: true,
  migrationsTableName: "migrations",
  migrations: ["migration/**/*.ts"],
};
export const AppDataSource = new DataSource(dataSourceOptions);
