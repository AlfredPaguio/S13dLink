import { DataSource } from "typeorm";
import { ShortenedUrl } from "./models/schema";

export default new DataSource({
  type: "postgres",
  host: Bun.env.PG_HOST || "localhost",
  port: parseInt(Bun.env.PG_PORT || "5432", 10),
  username: Bun.env.PG_USERNAME || "root",
  password: Bun.env.PG_PASSWORD || "password",
  database: Bun.env.PG_DATABASE || "your_database",
  entities: [ShortenedUrl],
  migrations: ["migrations/*.ts"],
  migrationsTableName: "typeorm_migrations",
  logger: "debug",
  synchronize: true, // set to true only for development, false for production
});
