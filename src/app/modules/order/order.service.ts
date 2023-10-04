import { Order } from "@prisma/client";
import prisma from "../../../helper/prisma";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (data: Order | any) => {
  console.log(data);
  return await prisma.order.create({
    data,
  });
};
const getAllOrder = async (data: { role: string; userId: string }) => {
  if (data.role === "customer") {
    return await prisma.order.findMany({
      where: {
        userId: data.userId,
      },
    });
  }
  return await prisma.order.findMany({});
};

export const OrderService = {
  createOrder,
  getAllOrder,
};
