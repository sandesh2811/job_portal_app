import express from "express";
import { Register } from "../controllers/authController";

const authRouter = express.Router();

authRouter.route("/register").post(Register);

export default authRouter;
