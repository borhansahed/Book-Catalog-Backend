"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwtHelper_1 = require("../../helper/jwtHelper");
const config_1 = __importDefault(require("../../config"));
const auth = (...role) => (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new Error("Token not found");
    }
    const verifyToken = jwtHelper_1.JwtHelper.jwtVerify(token, config_1.default.jwt.jwt_secret);
    if (!verifyToken) {
        throw new Error("Token not authorized");
    }
    req.user = verifyToken;
    if (!role.includes(verifyToken.data.role)) {
        throw new Error("Forbidden");
    }
    next();
};
exports.auth = auth;
