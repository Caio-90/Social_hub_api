import { DataSource } from "typeorm";

const {
    POSTGRES_USER = "__USERNAME__",
    POSTGRES_PASSWORD = "__PASSWORD__",
    POSTGRES_DB = "__DATABASENAME__",
} = process.env

export default new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/models/**/*.model.ts`],
    subscribers: [],
    migrations: [],
})