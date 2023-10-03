import { RequestHandler } from "express";
import { UserService } from "./user.service";

const getAllUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.getAllUser();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "fetched all users successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.getUserById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "fetched  user successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateUserById: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.updateUserById(req.params.id, req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "updated  user successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteUserById: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.deleteUserById(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "deleted  user successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
