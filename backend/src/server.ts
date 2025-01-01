// Enables us to use environment variables
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application } from "express";
import cookieParser from "cookie-parser";
import path from "path";

import connectToDatabase from "./config/dbConnect";

import checkUserSession from "./middleware/authMiddleware/checkSession";
import errorMiddleware from "./middleware/errorMiddleware/error";

import authRouter from "./routes/AuthRoute/authRoute";
import jobRouter from "./routes/JobRoute/jobRoute";
import jobApplicationRouter from "./routes/JobApplicationRoute/jobApplicationRoute";
import ShowCvOfApplicants from "./routes/AuthRoute/cvroute";

const app: Application = express();

// Middlewares

// Enables us to use json data
app.use(express.json());

// Inorder to access the files inside the uploads folder
app.use(express.static("uploads"));

// Helps to tackle cors error
const corsOptions = {
  origin: process.env.APP_ORIGIN,
  methods: ["GET , POST , PUT ,DELETE , PATCH , HEAD"],
  credentials: true,
};
app.use(cors(corsOptions));

// Enables us to use cookies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get("/home", async (req, res): Promise<any> => {
  return res.status(200).json({ message: "Welcome to job portal app!" });
});

// Login & Register Route
app.use("/api/auth", authRouter);

// Job Route
app.use("/api/jobs", jobRouter);

// Job Application Route
app.use("/api/jobApplication", jobApplicationRouter);

// Cv Route
app.use("/api/uploads", ShowCvOfApplicants);

app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running in port ${process.env.PORT}`);
  await connectToDatabase();
});
