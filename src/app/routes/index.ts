import express from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { IRoutes } from "./route.interface";
import { UserRoute } from "../modules/user/user.route";

const routes = express.Router();

const moduleRoutes: IRoutes[] = [
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/users",
    route: UserRoute,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
