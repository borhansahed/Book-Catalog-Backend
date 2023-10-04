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
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.createCategory(req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: " Category created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getAllCategory();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "fetched all categories successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getCategoryById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getCategoryById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "fetched  category successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCategoryById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.updateCategoryById(req.params.id, req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "updated  category successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteCategoryById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.deleteCategoryById(req.params.id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "deleted  category successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CategoryController = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};
