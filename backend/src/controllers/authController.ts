import { RequestHandler } from "express";
import NewUserModel from "../models/registerModel";
import { comparePasswords } from "../utils/bcrypt";

export const Register: RequestHandler = async (req, res): Promise<any> => {
  try {
    const { email, password, username } = req.body;

    const userExists = await NewUserModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    } else {
      // Creating a new user with hashed password
      const newUser = await NewUserModel.create({
        email,
        password,
        username,
      });

      return res
        .status(201)
        .json({ message: "User created successfully", newUser });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const Login: RequestHandler = async (req, res): Promise<any> => {
  try {
    const { password, username } = req.body;

    const user = await NewUserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    const passwordsMatch = await comparePasswords(password, user.password);

    if (passwordsMatch) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res
        .status(401)
        .json({ message: "Incorrect username or password!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};
