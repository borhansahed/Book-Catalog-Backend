"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.data.userId;
        const result = yield order_service_1.OrderService.createOrder(Object.assign(Object.assign({}, req.body), { userId }));
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getAllOrder(req.user.data);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Order fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.OrderController = {
    createOrder,
    getAllOrder,
};
