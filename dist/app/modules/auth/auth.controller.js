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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const userSingUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthService.userSignIn(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthService.userLogin(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User login successfully",
            token: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.AuthController = {
    userSingUp,
    userLogin,
};
