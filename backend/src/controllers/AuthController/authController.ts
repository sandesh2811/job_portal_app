import { RequestHandler } from "express";
import NewUserModel from "../../models/RegistrationModel/registerModel";
import { comparePasswords } from "../../utils/bcrypt";
import { generateJwtToken } from "../../utils/jwtToken";
import mongoose from "mongoose";
import { LoginDataType } from "../../validators/AuthValidators/loginSchema";
import { RegisterDataType } from "../../validators/AuthValidators/registerSchema";

// Handling user registration

export const Register: RequestHandler<{}, {}, RegisterDataType> = async (
  req,
  res
): Promise<any> => {
  try {
    const { email, password, username, role } = req.body;

    const userExists = await NewUserModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    } else {
      // Creating a new user with hashed password
      const newUser = await NewUserModel.create({
        email,
        password,
        username,
        role,
      });

      return res
        .status(201)
        .json({ success: true, message: "User created successfully", newUser });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};

// Handling user login

export const Login: RequestHandler<{}, {}, LoginDataType> = async (
  req,
  res
): Promise<any> => {
  try {
    const { username, password } = req.body;

    const user = await NewUserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const passwordsMatch = await comparePasswords(password, user.password);

    if (passwordsMatch) {
      const jwtToken = generateJwtToken(
        user.username,
        user._id as string,
        user.role
      );

      res.cookie("token", jwtToken, {
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: "none",
        maxAge: 15 * 60 * 1000,
        path: "/",
      });

      res.cookie("test", "test-cookie");

      // Alternative approach!
      const userId = user._id as mongoose.Types.ObjectId;
      const convertedUserId = userId.toString();

      const userData = {
        userName: user.username,
        userId: convertedUserId,
        role: user.role,
      };

      return res.status(200).json({
        success: true,
        message: "Login successful",
        userData,
        jwtToken,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username or password!" });
    }
  } catch (error) {
    console.log("Error from controller!", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// Handling user logout

export const Logout: RequestHandler = async (req, res): Promise<any> => {
  try {
    if (!req.cookies.token) {
      return res.status(404).json({ message: "Couldn't logout!" });
    }
    res.clearCookie("token");
    return res.status(200).json({ message: "Removed session!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};
