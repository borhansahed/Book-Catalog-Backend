import { RequestHandler } from "express";
import { OrderService } from "./order.service";

const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.createOrder(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Order created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getAllOrder: RequestHandler = async (req, res, next) => {
  try {
    const result = await OrderService.getAllOrder();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Order fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
