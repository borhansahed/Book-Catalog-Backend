"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middleware/auth");
const role_enum_1 = require("../../../enum/role.enum");
const router = express_1.default.Router();
router.get("/", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), user_controller_1.UserController.getAllUser);
router.get("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), user_controller_1.UserController.getUserById);
router.patch("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), user_controller_1.UserController.updateUserById);
router.delete("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), user_controller_1.UserController.deleteUserById);
exports.UserRoute = router;
