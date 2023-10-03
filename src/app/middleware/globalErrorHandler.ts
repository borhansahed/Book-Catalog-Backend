import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { handleZodError } from "../../error/handleZodError";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  let statuscode = 500;
  let message = "Something went wrong";
  let errorMessages;
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statuscode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (err instanceof PrismaClientValidationError) {
    const splitError = err.message.split(")");

    statuscode = 400;
    (message = "PrismaClientValidationError"),
      (errorMessages = [
        {
          path: splitError[splitError.length - 1].substring(12, 22),
          message: splitError[splitError.length - 1].substring(2),
        },
      ]);
  } else if (err instanceof PrismaClientKnownRequestError) {
    const prismaError = err.message.split("\n");
    statuscode = 400;
    (message = "PrismaClientKnownRequestError"),
      (errorMessages = [
        {
          path: err.meta?.target?.toString(),
          message: prismaError[prismaError.length - 1],
        },
      ]);
  } else if (err instanceof Error) {
    errorMessages = err?.message
      ? [
          {
            path: "",
            message: err?.message,
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
};

export default globalErrorHandler;
