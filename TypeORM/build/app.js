"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var userRoute_1 = require("./routes/userRoute");
var productRoute_1 = require("./routes/productRoute");
var dataSource_1 = require("./dataSource");
dataSource_1.default
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
app.use(express.json());
app.use('/user', userRoute_1.default);
app.use('/stock', productRoute_1.default);
var PORT = process.env.PORT;
app.listen(PORT, function () { console.log("executando em http://localhost:".concat(PORT, "/user")); });
