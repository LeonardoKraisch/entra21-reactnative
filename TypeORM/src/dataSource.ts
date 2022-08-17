import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "leoa2009",
    database: "postgres",
    entities: [`${__dirname}/Entities/**/*{.js,.ts}`],
    logging: false,
    synchronize: true,
})

export default dataSource