import express from "express";
import { AuthController } from "./auth.controller";
import ZodValidation from "../../middleware/zodValidation";
import { AuthValidation } from "./auth.validation";

const route = express.Router();

route.post(
  "/signup",
  ZodValidation(AuthValidation.signup),
  AuthController.userSingUp
);
route.post(
  "/signin",
  ZodValidation(AuthValidation.login),
  AuthController.userLogin
);
route.get("/", (req, res) => {
  res.send("HEllo auth");
});

export const AuthRouter = route;
