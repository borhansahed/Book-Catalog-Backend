import { Order } from "@prisma/client";
import prisma from "../../../helper/prisma";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (data: Order | any) => {
  return await prisma.order.create({
    data,
  });
};
const getAllOrder = async () => {
  return await prisma.order.findMany({});
};

export const OrderService = {
  createOrder,
  getAllOrder,
};
