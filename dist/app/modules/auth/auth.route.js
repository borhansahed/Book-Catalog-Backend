"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const route = express_1.default.Router();
route.post("/signup", auth_controller_1.AuthController.userSingUp);
route.post("/signin", auth_controller_1.AuthController.userLogin);
route.get("/", (req, res) => {
    res.send("HEllo auth");
});
exports.AuthRouter = route;
