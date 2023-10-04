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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../helper/prisma"));
const paginationHelper_1 = require("../../../helper/paginationHelper");
const book_constants_1 = require("./book.constants");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
});
const getAllBook = (filters, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip, sortBy, sortOrder } = paginationHelper_1.PaginationHelper.calculation(options);
    const { search } = filters, filterData = __rest(filters, ["search"]);
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: book_constants_1.BookSearchFields.map((field) => ({
                [field]: {
                    contains: search,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => {
                if (key === "category") {
                    return {
                        categoryId: filterData[key],
                    };
                }
                else if (key === "minPrice") {
                    return {
                        price: {
                            gte: parseFloat(filterData[key]),
                        },
                    };
                }
                else if (key === "maxPrice") {
                    return {
                        price: {
                            lte: parseFloat(filterData[key]),
                        },
                    };
                }
            }),
        });
    }
    const whereCondition = andConditions.length > 0 ? andConditions : {};
    const result = yield prisma_1.default.book.findMany({
        where: {
            AND: whereCondition,
        },
        skip,
        take: size,
        orderBy: {
            [sortBy]: sortOrder,
        },
    });
    const totalBook = yield prisma_1.default.book.count();
    const totalPage = Math.ceil(totalBook / 10);
    return {
        meta: {
            page,
            size,
            total: totalBook,
            totalPage,
        },
        data: result,
    };
});
const getBookByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany({
        where: {
            categoryId: id,
        },
        take: 10,
    });
    const totalBook = yield prisma_1.default.book.count({
        where: {
            categoryId: id,
        },
    });
    const totalPage = Math.ceil(totalBook / 10);
    return {
        meta: {
            page: 1,
            size: 10,
            total: totalBook,
            totalPage,
        },
        data: result,
    };
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateBookById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBook,
    getBookByCategory,
    getBookById,
    updateBookById,
    deleteBookById,
};
