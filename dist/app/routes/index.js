"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const order_route_1 = require("../modules/order/order.route");
const routes = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRouter,
    },
    {
        path: "/users",
        route: user_route_1.UserRoute,
    },
    {
        path: "/categories",
        route: category_route_1.CategoryRoute,
    },
    {
        path: "/books",
        route: book_route_1.BookRouter,
    },
    {
        path: "/orders",
        route: order_route_1.OrderRoute,
    },
];
moduleRoutes.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
