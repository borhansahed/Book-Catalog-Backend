import express from "express";
import { CategoryController } from "./category.controller";
import ZodValidation from "../../middleware/zodValidation";
import { CategoryValidation } from "./category.validation";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../../../enum/role.enum";

const router = express.Router();

router.get("/", CategoryController.getAllCategory);
router.post(
  "/create-category",
  auth(USER_ROLE.ADMIN),
  ZodValidation(CategoryValidation.create),
  CategoryController.createCategory
);
router.get("/:id", CategoryController.getCategoryById);
router.patch(
  "/:id",
  auth(USER_ROLE.ADMIN),
  CategoryController.updateCategoryById
);
router.delete(
  "/:id",
  auth(USER_ROLE.ADMIN),
  CategoryController.deleteCategoryById
);

export const CategoryRoute = router;
