"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("./user");
const app = express();
app.use(user_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map