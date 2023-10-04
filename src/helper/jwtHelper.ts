import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const jwtCreate = (data: Record<string, unknown>, secret: string): string => {
  return jwt.sign({ data }, secret as string, {
    expiresIn: "365days",
  });
};

const jwtVerify = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const JwtHelper = {
  jwtCreate,
  jwtVerify,
};
