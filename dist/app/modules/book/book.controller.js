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
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const pick_1 = require("../../../helper/pick");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.createBook(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Book created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, pick_1.pick)(req.query, [
            "minPrice",
            "maxPrice",
            "category",
            "search",
        ]);
        const options = (0, pick_1.pick)(req.query, ["page", "size", "sortBy", "sortOrder"]);
        const result = yield book_service_1.BookService.getAllBook(filters, options);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Books fetched successfully",
            meta: result === null || result === void 0 ? void 0 : result.meta,
            data: result.data,
        });
    }
    catch (err) {
        next(err);
    }
});
const getBookByCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getBookByCategory(req.params.categoryId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Books with associated category data fetched successfully",
            meta: result === null || result === void 0 ? void 0 : result.meta,
            data: result === null || result === void 0 ? void 0 : result.data,
        });
    }
    catch (err) {
        next(err);
    }
});
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getBookById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Book fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.updateBookById(req.params.id, req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Book updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.deleteBookById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Book deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.BookController = {
    createBook,
    getAllBook,
    getBookByCategory,
    getBookById,
    updateBookById,
    deleteBookById,
};
