"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const role_enum_1 = require("../../../enum/role.enum");
const auth_1 = require("../../middleware/auth");
const router = express_1.default.Router();
router.post("/create-book", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), book_controller_1.BookController.createBook);
router.get("/", book_controller_1.BookController.getAllBook);
router.get("/:id", book_controller_1.BookController.getBookById);
router.get("/:categoryId/category", book_controller_1.BookController.getBookByCategory);
router.patch("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), book_controller_1.BookController.updateBookById);
router.delete("/:id", (0, auth_1.auth)(role_enum_1.USER_ROLE.ADMIN), book_controller_1.BookController.deleteBookById);
exports.BookRouter = router;
