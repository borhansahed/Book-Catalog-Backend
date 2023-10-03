import { RequestHandler } from "express";
import { AuthService } from "./auth.service";

const userSingUp: RequestHandler = async (req, res, next) => {
  try {
    const { role, ...restData } = req.body;
    const data = { role: role.toUpperCase(), ...restData };
    const result = await AuthService.userSignIn(data);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const userLogin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthService.userLogin(req.body);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User login successfully",

      token: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthController = {
  userSingUp,
  userLogin,
};
