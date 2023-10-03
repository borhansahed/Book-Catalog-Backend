import { RequestHandler } from "express";
import { CategoryService } from "./category.service";

const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: " Category created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllCategory: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.getAllCategory();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "fetched all categories successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getCategoryById: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.getCategoryById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "fetched  category successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateCategoryById: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.updateCategoryById(
      req.params.id,
      req.body
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "updated  category successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteCategoryById: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.deleteCategoryById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "deleted  category successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CategoryController = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
