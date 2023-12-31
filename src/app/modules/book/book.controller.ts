import { RequestHandler } from "express";
import { BookService } from "./book.service";
import { pick } from "../../../helper/pick";

const createBook: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.createBook(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBook: RequestHandler = async (req, res, next) => {
  try {
    const filters = pick(req.query, [
      "minPrice",
      "maxPrice",
      "category",
      "search",
    ]);
    const options = pick(req.query, ["page", "size", "sortBy", "sortOrder"]);

    const result = await BookService.getAllBook(filters, options);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Books fetched successfully",

      meta: result?.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};
const getBookByCategory: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.getBookByCategory(req.params.categoryId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Books with associated category data fetched successfully",

      meta: result?.meta,
      data: result?.data,
    });
  } catch (err) {
    next(err);
  }
};
const getBookById: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.getBookById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book fetched successfully",

      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateBookById: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.updateBookById(req.params.id, req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book updated successfully",

      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBookById: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.deleteBookById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book deleted successfully",

      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BookController = {
  createBook,
  getAllBook,
  getBookByCategory,
  getBookById,
  updateBookById,
  deleteBookById,
};
