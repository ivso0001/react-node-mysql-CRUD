"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = exports.deleteUser = exports.putUser = exports.postUser = exports.checkConnect = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("../../models/user");
const config_1 = require("../../config");
const sequelize = new sequelize_1.Sequelize(config_1.default.database.name, config_1.default.database.user, config_1.default.database.password, {
    host: config_1.default.database.host,
    dialect: config_1.default.database.dialect
});
const userModel = user_1.default(sequelize);
const checkConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        return 'Connection has been established successfully.';
    }
    catch (error) {
        return 'Unable to connect to the database:';
    }
});
exports.checkConnect = checkConnect;
const postUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.create(user);
        return Promise.resolve({ 'success': 1 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.postUser = postUser;
const putUser = (user, userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.update(user, {
            where: { userID }
        });
        return Promise.resolve({ 'success': 2 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.putUser = putUser;
const deleteUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel.destroy({
            where: { userID }
        });
        return Promise.resolve({ 'success': 3 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.deleteUser = deleteUser;
const getUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.findOne({
            where: { userID }
        });
        return Promise.resolve(user);
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.getUser = getUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel.findAll();
    return users;
});
exports.getUsers = getUsers;
//# sourceMappingURL=user.js.map