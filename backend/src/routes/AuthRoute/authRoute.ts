import express from "express";
import {
  Login,
  Logout,
  Register,
  RefreshUserSession,
} from "../../controllers/AuthController/authController";
import verfiyRegisteredCredentials from "../../middleware/authMiddleware/registerMiddleware";
import RegisterSchema from "../../validators/AuthValidators/registerSchema";
import verfiyLoginCredentials from "../../middleware/authMiddleware/loginMiddleware";
import LoginSchema from "../../validators/AuthValidators/loginSchema";

const authRouter = express.Router();

authRouter
  .route("/register")
  .post(verfiyRegisteredCredentials(RegisterSchema), Register);
authRouter.route("/login").post(verfiyLoginCredentials(LoginSchema), Login);
authRouter.route("/logout").get(Logout);
authRouter.route("/refresh").get(RefreshUserSession);

export default authRouter;
