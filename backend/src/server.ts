// Enables us to use environment variables
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Application } from "express";
import connectToDatabase from "./config/dbConnect";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute";

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

app.get("/", async (req, res): Promise<any> => {
  const cookie = req.cookies.token;

  if (cookie) {
    console.log("Session exists!");
  } else {
    console.log("Session doesn't exists!");
    return res.status(404).json({ message: "Please login to continue!" });
  }

  return res.status(200).json({ message: "Welcome to job portal app!" });
});

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running in port ${process.env.PORT}`);
  await connectToDatabase();
});
