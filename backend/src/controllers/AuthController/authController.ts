import { RequestHandler } from "express";
import NewUserModel from "../../models/RegistrationModel/registerModel";
import { comparePasswords } from "../../utils/bcrypt";
import { generateJwtToken, verifyJwtToken } from "../../utils/jwtToken";
import mongoose from "mongoose";
import { LoginDataType } from "../../validators/AuthValidators/loginSchema";
import { RegisterDataType } from "../../validators/AuthValidators/registerSchema";

// Handling user registration

export const Register: RequestHandler<{}, {}, RegisterDataType> = async (
  req,
  res
): Promise<void> => {
  try {
    const { email, password, username, role } = req.body;

    const userExists = await NewUserModel.findOne({ email });

    if (userExists) {
      res.status(400).json({ success: false, message: "User already exists!" });
    } else {
      // Creating a new user with hashed password
      const newUser = await NewUserModel.create({
        email,
        password,
        username,
        role,
      });

      res
        .status(201)
        .json({ success: true, message: "User created successfully" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Handling user login

export const Login: RequestHandler<{}, {}, LoginDataType> = async (
  req,
  res
): Promise<void> => {
  try {
    const { username, password } = req.body;

    const user = await NewUserModel.findOne({ username });

    if (!user) {
      res.status(400).json({ success: false, message: "Invalid credentials!" });
    } else {
      const passwordsMatch = await comparePasswords(password, user.password);

      if (passwordsMatch) {
        const { access_token, refresh_token } = generateJwtToken(
          user.username,
          user._id as string,
          user.role
        );

        const verifiedUser = await NewUserModel.findOneAndUpdate(
          { username },
          {
            $set: {
              refreshToken: refresh_token,
              refreshTokenExpiry: new Date(
                Date.now() + 7 * 24 * 60 * 60 * 1000
              ),
            },
          },
          { new: true }
        );

        const userId = user._id as mongoose.Types.ObjectId;
        const convertedUserId = userId.toString();

        const userData = {
          userName: user.username,
          userId: convertedUserId,
          role: user.role,
        };

        res
          .status(200)
          .cookie("access_token", access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development" ? false : true,
            sameSite:
              process.env.NODE_ENV === "development" ? "strict" : "none",
            maxAge: 15 * 60 * 1000,
          })
          .cookie("refresh_token", refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development" ? false : true,
            sameSite:
              process.env.NODE_ENV === "development" ? "strict" : "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
          })
          .json({
            success: true,
            message: "Login successful",
            userData,
          });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid Credentials!" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Handling user logout

export const Logout: RequestHandler = async (req, res): Promise<void> => {
  try {
    if (!req.cookies.access_token && !req.cookies.refresh_token) {
      res.status(404).json({ success: false, message: "Couldn't logout!" });
      return;
    }
    res
      .clearCookie("access_token")
      .clearCookie("refresh_token")
      .status(200)
      .json({ success: true, message: "Removed session!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Handling user session

export const RefreshUserSession: RequestHandler<void> = async (
  request,
  response
): Promise<void> => {
  const refreshToken = request.cookies.refresh_token;

  if (!refreshToken) {
    response.status(403).json({ message: "No refresh token provided!" });
    return;
  }

  const verifyRefreshToken = verifyJwtToken(refreshToken);

  if (verifyRefreshToken) {
    const user = await NewUserModel.findOne({ refreshToken });

    if (!user) {
      response.status(403).json({ message: "Invalid refresh token!" });
      return;
    }

    if (user.refreshTokenExpiry < new Date()) {
      response.status(403).json({ message: "Refresh token expired!" });
      return;
    }

    const { access_token, refresh_token } = generateJwtToken(
      user.username,
      user._id as string,
      user.role
    );

    user.refreshToken = refresh_token;
    user.refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await user.save();

    response
      .status(200)
      .cookie("refresh_token", refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? "strict" : "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .cookie("access_token", access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? "strict" : "none",
        maxAge: 30 * 1000,
      })
      .json({ message: "Session refreshed successfully!" });
  }
};
