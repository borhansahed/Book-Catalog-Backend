"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const auth_1 = require("../../middleware/auth");
const role_enum_1 = require("../../../enum/role.enum");
const router = express_1.default.Router();
router.get("/", category_controller_1.CategoryController.getAllCategory);
router.post("/create-category", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), category_controller_1.CategoryController.createCategory);
router.get("/:id", category_controller_1.CategoryController.getCategoryById);
router.patch("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), category_controller_1.CategoryController.updateCategoryById);
router.delete("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteCategoryById);
exports.CategoryRoute = router;
