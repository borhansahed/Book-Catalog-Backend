import express from "express";
import { AuthRouter } from "../modules/auth/auth.route";
import { IRoutes } from "./route.interface";
import { UserRoute } from "../modules/user/user.route";
import { CategoryRoute } from "../modules/category/category.route";
import { BookRouter } from "../modules/book/book.route";
import { OrderRoute } from "../modules/order/order.route";

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
  {
    path: "/categories",
    route: CategoryRoute,
  },
  {
    path: "/books",
    route: BookRouter,
  },
  {
    path: "/orders",
    route: OrderRoute,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
