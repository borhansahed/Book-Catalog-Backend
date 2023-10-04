import express from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middleware/auth";
import { USER_ROLE } from "../../../enum/role.enum";

const router = express.Router();

router.get("/", auth(USER_ROLE.ADMIN), UserController.getAllUser);
router.get("/:id", auth(USER_ROLE.ADMIN), UserController.getUserById);
router.patch("/:id", auth(USER_ROLE.ADMIN), UserController.updateUserById);
router.delete("/:id", auth(USER_ROLE.ADMIN), UserController.deleteUserById);

export const UserRoute = router;
