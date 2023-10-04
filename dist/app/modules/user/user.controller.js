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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getAllUser();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "fetched all users successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUserById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "fetched  user successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.updateUserById(req.params.id, req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "updated  user successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.deleteUserById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "deleted  user successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
};
