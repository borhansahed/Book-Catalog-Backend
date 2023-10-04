import express, { Router } from "express";
import { BookController } from "./book.controller";

const router: Router = express.Router();

router.post("/create-book", BookController.createBook);
router.get("/", BookController.getAllBook);
router.get("/:categoryId/category", BookController.getBookByCategory);

export const BookRouter = router;
