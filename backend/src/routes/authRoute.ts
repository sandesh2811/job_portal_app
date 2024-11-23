import express from "express";
import { Login, Logout, Register } from "../controllers/authController";

const authRouter = express.Router();

authRouter.route("/register").post(Register);
authRouter.route("/login").post(Login);
authRouter.route("/logout").get(Logout);

export default authRouter;
