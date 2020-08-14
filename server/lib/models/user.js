"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = (sequelize) => {
    return sequelize.define('users', {
        userID: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: sequelize_1.DataTypes.STRING(30),
        },
        email: {
            type: sequelize_1.DataTypes.STRING(30),
        }
    });
};
exports.default = user;
//# sourceMappingURL=user.js.map