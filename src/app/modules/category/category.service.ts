import { Category } from "@prisma/client";
import prisma from "../../../helper/prisma";

const createCategory = async (data: Category): Promise<Category> => {
  return await prisma.category.create({
    data,
  });
};
const getAllCategory = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

const getCategoryById = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
};

const updateCategoryById = async (
  id: string,
  payload: Partial<Category>
): Promise<Category | null> => {
  return await prisma.category.update({
    where: {
      id: id,
    },
    data: payload,
  });
};

const deleteCategoryById = async (id: string): Promise<Category | null> => {
  return await prisma.category.delete({
    where: {
      id: id,
    },
  });
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
