"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "leoa2009",
    database: "postgres",
    entities: ["".concat(__dirname, "/Entities/**/*{.js,.ts}")],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
