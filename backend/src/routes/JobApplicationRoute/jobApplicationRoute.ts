import express from "express";
import { ApplyForJob } from "../../controllers/JobApplicationController/jobApplicationController";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/apply/:id").post(ApplyForJob);

export default jobApplicationRouter;
