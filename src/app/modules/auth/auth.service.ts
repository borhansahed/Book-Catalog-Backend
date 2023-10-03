import { User } from "@prisma/client";
import prisma from "../../../helper/prisma";

import config from "../../../config";
import { JwtHelper } from "../../../helper/jwtHelper";

const userSignIn = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const userLogin = async (data: Partial<User>): Promise<string | undefined> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
      password: data.password,
    },
  });

  if (result) {
    return JwtHelper.jwtCreate(
      { role: result.role, userId: result.id },
      config.jwt.jwt_secret as string
    );
  }

  throw new Error("User not found");
};

export const AuthService = {
  userSignIn,
  userLogin,
};
