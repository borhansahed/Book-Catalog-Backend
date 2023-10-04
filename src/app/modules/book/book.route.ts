import express, { Router } from "express";
import { BookController } from "./book.controller";
import { USER_ROLE } from "../../../enum/role.enum";
import { auth } from "../../middleware/auth";

const router: Router = express.Router();

router.post("/create-book", auth(USER_ROLE.ADMIN), BookController.createBook);
router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getBookById);
router.get("/:categoryId/category", BookController.getBookByCategory);
router.patch("/:id", auth(USER_ROLE.ADMIN), BookController.updateBookById);
router.delete("/:id", auth(USER_ROLE.ADMIN), BookController.deleteBookById);

export const BookRouter = router;
