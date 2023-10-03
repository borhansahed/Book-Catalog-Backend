import { User } from "@prisma/client";
import prisma from "../../../helper/prisma";

const getAllUser = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

const getUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

const updateUserById = async (
  id: string,
  payload: Partial<User>
): Promise<User | null> => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: payload,
  });
};

const deleteUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export const UserService = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
