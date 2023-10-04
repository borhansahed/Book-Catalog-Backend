import express, { Router } from "express";
import { OrderController } from "./order.controller";
import ZodValidation from "../../middleware/zodValidation";
import { OrderValidation } from "./order.validation";

const router: Router = express.Router();

router.post(
  "/create-order",
  ZodValidation(OrderValidation.createOrder),
  OrderController.createOrder
);
router.get("/", OrderController.getAllOrder);
// router.get("/:id", BookController.getBookById);
// router.get("/:categoryId/category", BookController.getBookByCategory);
// router.patch("/:id", BookController.updateBookById);
// router.delete("/:id", BookController.deleteBookById);

export const OrderRoute = router;
