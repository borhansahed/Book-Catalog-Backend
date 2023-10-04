"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const signup = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        email: zod_1.z.string({ required_error: "Email is required" }).email(),
        password: zod_1.z.string({ required_error: "Name is required" }),
        role: zod_1.z.string().optional(),
        contactNo: zod_1.z
            .string({ required_error: "ContactNo is required" })
            .regex(/^\d{10}$/),
        address: zod_1.z.string({ required_error: "Address is required" }),
        profileImg: zod_1.z.string({ required_error: "Profile Image is required" }),
    }),
});
const login = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "Email is required" }).email(),
        password: zod_1.z.string({ required_error: "Password is required" }),
    }),
});
exports.AuthValidation = {
    signup,
    login,
};
