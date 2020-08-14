"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const routes_1 = require("./api/routes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});
app.use(routes_1.default);
app.get('/', (req, res) => {
    res.send('branch connect server');
});
app.listen(config_1.default.port);
//# sourceMappingURL=app.js.map