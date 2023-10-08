import express, { Router } from "express";
import { OrderController } from "./order.controller";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../../../enum/role.enum";

const router: Router = express.Router();

router.post(
  "/create-order",
  auth(USER_ROLE.CUSTOMER),
  OrderController.createOrder
);
router.get(
  "/",
  auth(USER_ROLE.CUSTOMER, USER_ROLE.ADMIN),
  OrderController.getAllOrder
);

export const OrderRoute = router;
