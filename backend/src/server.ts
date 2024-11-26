// Enables us to use environment variables
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application } from "express";
import connectToDatabase from "./config/dbConnect";
import cookieParser from "cookie-parser";
import authRouter from "./routes/AuthRoute/authRoute";
import checkUserSession from "./middleware/authMiddleware/checkSession";
import errorMiddleware from "./middleware/errorMiddleware/error";
import jobRouter from "./routes/JobRoute/jobRoute";
import jobApplicationRouter from "./routes/JobApplicationRoute/jobApplicationRoute";

const app: Application = express();

// Middlewares

// Enables us to use json data
app.use(express.json());

// Helps to tackle cors error
const corsOptions = {
  origin: process.env.APP_ORIGIN,
  methods: "GET , POST , PUT ,DELETE , PATCH , HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

// Enables us to use cookies
app.use(cookieParser());

// Routes

app.get("/", checkUserSession, async (req, res): Promise<any> => {
  return res.status(200).json({ message: "Welcome to job portal app!" });
});

app.use("/api/auth", authRouter);

// Need to change the delete and update route dynamic
app.use("/api/jobs", jobRouter);

app.use("/api/jobApplication", jobApplicationRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running in port ${process.env.PORT}`);
  await connectToDatabase();
});
