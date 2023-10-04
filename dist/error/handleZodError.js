"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const handleZodError = (error) => {
    const errors = error.issues.map((err) => ({
        path: err.path[err.path.length - 1],
        message: err.message,
    }));
    return {
        message: "ZodValidation Error",
        statusCode: 400,
        errorMessages: errors,
    };
};
exports.handleZodError = handleZodError;
