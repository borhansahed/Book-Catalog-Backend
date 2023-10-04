import { NextFunction, Response } from "express";
import { JwtHelper } from "../../helper/jwtHelper";
import config from "../../config";
import { JwtPayload, Secret } from "jsonwebtoken";

export const auth =
  (...role: string[]) =>
  (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("Token not found");
    }

    const verifyToken = JwtHelper.jwtVerify(
      token,
      config.jwt.jwt_secret as Secret
    ) as JwtPayload;

    if (!verifyToken) {
      throw new Error("Token not authorized");
    }
    req.user = verifyToken;

    if (!role.includes(verifyToken.data.role)) {
      throw new Error("Forbidden");
    }
    next();
  };
