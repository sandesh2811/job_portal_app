import express from "express";
import {
  ApplyForJob,
  ReviewJobApplications,
} from "../../controllers/JobApplicationController/jobApplicationController";

const jobApplicationRouter = express.Router();

jobApplicationRouter.route("/apply/:id").post(ApplyForJob);
jobApplicationRouter.route("/review").post(ReviewJobApplications);

export default jobApplicationRouter;
