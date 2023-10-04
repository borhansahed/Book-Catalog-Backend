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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../helper/prisma"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    return yield prisma_1.default.order.create({
        data,
    });
});
const getAllOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.role === "customer") {
        return yield prisma_1.default.order.findMany({
            where: {
                userId: data.userId,
            },
        });
    }
    return yield prisma_1.default.order.findMany({});
});
exports.OrderService = {
    createOrder,
    getAllOrder,
};
