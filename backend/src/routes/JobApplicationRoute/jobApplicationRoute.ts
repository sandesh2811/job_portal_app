import express from "express";
import {
  ApplyForJob,
  GetJobsPostedByEmployer,
  ReviewJobApplications,
} from "../../controllers/JobApplicationController/jobApplicationController";

const jobApplicationRouter = express.Router();

// For applier
jobApplicationRouter.route("/apply/:id").post(ApplyForJob);

// For employer
jobApplicationRouter.route("/").get(GetJobsPostedByEmployer);
jobApplicationRouter.route("/review").post(ReviewJobApplications);

export default jobApplicationRouter;
