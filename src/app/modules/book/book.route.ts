import express, { Router } from "express";
import { BookController } from "./book.controller";

const router: Router = express.Router();

router.post("/create-book", BookController.createBook);
router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getBookById);
router.get("/:categoryId/category", BookController.getBookByCategory);
router.patch("/:id", BookController.updateBookById);
router.delete("/:id", BookController.deleteBookById);

export const BookRouter = router;
