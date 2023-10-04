"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const zodValidation_1 = __importDefault(require("../../middleware/zodValidation"));
const order_validation_1 = require("./order.validation");
const auth_1 = require("../../middleware/auth");
const role_enum_1 = require("../../../enum/role.enum");
const router = express_1.default.Router();
router.post("/create-order", (0, auth_1.auth)(role_enum_1.USER_ROLE.CUSTOMER), (0, zodValidation_1.default)(order_validation_1.OrderValidation.createOrder), order_controller_1.OrderController.createOrder);
router.get("/", (0, auth_1.auth)(role_enum_1.USER_ROLE.CUSTOMER, role_enum_1.USER_ROLE.ADMIN), order_controller_1.OrderController.getAllOrder);
exports.OrderRoute = router;
