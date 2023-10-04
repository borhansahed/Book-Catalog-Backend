"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const zodValidation_1 = __importDefault(require("../../middleware/zodValidation"));
const auth_validation_1 = require("./auth.validation");
const route = express_1.default.Router();
route.post("/signup", (0, zodValidation_1.default)(auth_validation_1.AuthValidation.signup), auth_controller_1.AuthController.userSingUp);
route.post("/signin", 
// ZodValidation(AuthValidation.login),
auth_controller_1.AuthController.userLogin);
route.get("/", (req, res) => {
    res.send("HEllo auth");
});
exports.AuthRouter = route;
