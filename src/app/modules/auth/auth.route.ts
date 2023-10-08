import express from "express";
import { AuthController } from "./auth.controller";

const route = express.Router();

route.post("/signup", AuthController.userSingUp);
route.post("/signin", AuthController.userLogin);
route.get("/", (req, res) => {
  res.send("HEllo auth");
});

export const AuthRouter = route;
