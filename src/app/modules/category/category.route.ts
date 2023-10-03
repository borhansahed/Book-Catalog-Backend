import express from "express";
import { CategoryController } from "./category.controller";
import ZodValidation from "../../middleware/zodValidation";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

router.get("/", CategoryController.getAllCategory);
router.post(
  "/create-category",
  ZodValidation(CategoryValidation.create),
  CategoryController.createCategory
);
router.get("/:id", CategoryController.getCategoryById);
router.patch("/:id", CategoryController.updateCategoryById);
router.delete("/:id", CategoryController.deleteCategoryById);

export const CategoryRoute = router;
