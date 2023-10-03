import express from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { IRoutes } from "./route.interface";

const routes = express.Router();

const moduleRoutes: IRoutes[] = [
  {
    path: "/auth",
    route: AuthRouter,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;