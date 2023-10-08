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
const library_1 = require("@prisma/client/runtime/library");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let statuscode = 500;
    let message = "Something went wrong";
    let errorMessages;
    if (err instanceof library_1.PrismaClientValidationError) {
        const splitError = err.message.split(")");
        statuscode = 400;
        (message = "PrismaClientValidationError"),
            (errorMessages = [
                {
                    path: splitError[splitError.length - 1].substring(12, 22),
                    message: splitError[splitError.length - 1].substring(2),
                },
            ]);
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        const prismaError = err.message.split("\n");
        const metaError = JSON.stringify(err.meta).split('"');
        statuscode = 400;
        (message = "PrismaClientKnownRequestError"),
            (errorMessages = [
                {
                    path: metaError[metaError.length - 2],
                    message: prismaError[prismaError.length - 1],
                },
            ]);
    }
    else if (err instanceof Error) {
        errorMessages = (err === null || err === void 0 ? void 0 : err.message)
            ? [
                {
                    path: "",
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]
            : [];
    }
    res.status(statuscode).json({
        success: false,
        statuscode,
        message,
        errorMessages,
        stack: err.stack,
    });
});
exports.default = globalErrorHandler;
