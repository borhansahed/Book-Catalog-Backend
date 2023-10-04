import { NextFunction, RequestHandler, Response } from "express";
import { OrderService } from "./order.service";

const createOrder: RequestHandler = async (req: any, res, next) => {
  try {
    const userId = req.user.data.userId;
    const result = await OrderService.createOrder({
      ...req.body,
      userId,
    });

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
const getAllOrder = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.getAllOrder(req.user.data);

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
