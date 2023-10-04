import { z } from "zod";

const signup = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z.string({ required_error: "Email is required" }).email(),
    password: z.string({ required_error: "Name is required" }),
    role: z.string().optional(),
    contactNo: z
      .string({ required_error: "ContactNo is required" })
      .regex(/^\d{10}$/),
    address: z.string({ required_error: "Address is required" }),
    profileImg: z.string({ required_error: "Profile Image is required" }),
  }),
});
const login = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email(),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export const AuthValidation = {
  signup,
  login,
};
