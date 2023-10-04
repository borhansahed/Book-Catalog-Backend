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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../../helper/prisma"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelper_1 = require("../../../helper/jwtHelper");
const userSignIn = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.create({
        data,
    });
    return result;
});
const userLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            email: data.email,
            password: data.password,
        },
    });
    if (result) {
        return jwtHelper_1.JwtHelper.jwtCreate({ role: result.role, userId: result.id }, config_1.default.jwt.jwt_secret);
    }
    throw new Error("User not found");
});
exports.AuthService = {
    userSignIn,
    userLogin,
};
