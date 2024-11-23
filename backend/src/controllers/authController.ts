import { RequestHandler } from "express";
import NewUserModel from "../models/registerModel";

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
