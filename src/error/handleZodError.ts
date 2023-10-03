import { ZodError, ZodIssue } from "zod";

export const handleZodError = (error: ZodError) => {
  const errors = error.issues.map((err: ZodIssue) => ({
    path: err.path[err.path.length - 1],
    message: err.message,
  }));

  return {
    message: "ZodValidation Error",
    statusCode: 400,
    errorMessages: errors,
  };
};
