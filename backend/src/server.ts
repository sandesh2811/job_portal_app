// Enables us to use environment variables
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectToDatabase from "./config/dbConnect";

import errorMiddleware from "./middleware/errorMiddleware/error";

import authRouter from "./routes/AuthRoute/authRoute";
import jobRouter from "./routes/JobRoute/jobRoute";
import jobApplicationRouter from "./routes/JobApplicationRoute/jobApplicationRoute";
import ShowCvOfApplicants from "./routes/CVRoute/cvroute";
import saveBookmarks from "./routes/BookmarkRoute/bookmarkRoute";

const app: Application = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50,
  message: "Too many requests , please try again after 15 minutes.",
});

// Middlewares

// Helps to tackle cors error
const corsOptions = {
  origin: process.env.APP_ORIGIN,
  methods: ["GET , POST , PUT ,DELETE , PATCH , HEAD"],
  credentials: true,
};
app.use(cors(corsOptions));

// Limits the requests from the user
app.use(limiter);

// Sets headers for security
app.use(helmet());

// Enables us to use json data
app.use(express.json());

// Inorder to access the files inside the uploads folder
app.use(express.static("uploads"));

// Enables us to use cookies
app.use(cookieParser());

// Enables us to use url values
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

// Bookmarks Route
app.use("/api/bookmarks", saveBookmarks);

// Error middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running in port ${process.env.PORT}`);
  await connectToDatabase();
});
