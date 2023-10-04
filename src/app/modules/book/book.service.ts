/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book } from "@prisma/client";
import prisma from "../../../helper/prisma";
import { IPagination } from "../../../interface/pagination.interface";
import { PaginationHelper } from "../../../helper/paginationHelper";
import { IFilters } from "./book.interface";
import { BookSearchFields } from "./book.constants";

const createBook = async (data: Book): Promise<Book> => {
  return await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
};
const getAllBook = async (filters: IFilters, options: Partial<IPagination>) => {
  const { page, size, skip, sortBy, sortOrder } =
    PaginationHelper.calculation(options);

  const { search, ...filterData } = filters;

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: BookSearchFields.map((field) => ({
        [field]: {
          contains: search,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => {
        if (key === "category") {
          return {
            categoryId: (filterData as any)[key],
          };
        } else if (key === "minPrice") {
          return {
            price: {
              gte: parseFloat((filterData as any)[key]),
            },
          };
        } else if (key === "maxPrice") {
          return {
            price: {
              lte: parseFloat((filterData as any)[key]),
            },
          };
        }
      }),
    });
  }

  const whereCondition = andConditions.length > 0 ? andConditions : {};
  const result = await prisma.book.findMany({
    where: {
      AND: whereCondition,
    },
    skip,
    take: size,

    orderBy: {
      [sortBy]: sortOrder,
    },
  });

  const totalBook = await prisma.book.count();
  const totalPage = Math.ceil(totalBook / 10);

  return {
    meta: {
      page,
      size,
      total: totalBook,
      totalPage,
    },
    data: result,
  };
};

const getBookByCategory = async (id: string) => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    take: 10,
  });

  const totalBook = await prisma.book.count({
    where: {
      categoryId: id,
    },
  });
  const totalPage = Math.ceil(totalBook / 10);

  return {
    meta: {
      page: 1,
      size: 10,
      total: totalBook,
      totalPage,
    },
    data: result,
  };
};
const getBookById = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  return result;
};
const updateBookById = async (
  id: string,
  payload: Partial<Book>
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteBookById = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBook,
  getBookByCategory,
  getBookById,
  updateBookById,
  deleteBookById,
};
