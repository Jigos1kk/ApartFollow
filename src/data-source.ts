import "reflect-metadata"
import { DataSource } from "typeorm"
import { Apartment } from "./entities/Apartment.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "apartfollow",
    synchronize: true,
    logging: false,
    entities: [Apartment],
    migrations: [],
    subscribers: [],
})
