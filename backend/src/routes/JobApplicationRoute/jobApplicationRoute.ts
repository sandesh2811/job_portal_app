import express from "express";
import {
  ApplyForJob,
  GetJobApplicationsPostedByEmployer,
  ReviewJobApplications,
} from "../../controllers/JobApplicationController/jobApplicationController";

const jobApplicationRouter = express.Router();

// For applier
jobApplicationRouter.route("/apply/:id").post(ApplyForJob);

// For employer
jobApplicationRouter.route("/:id").get(GetJobApplicationsPostedByEmployer);
jobApplicationRouter.route("/review/:id").patch(ReviewJobApplications);

export default jobApplicationRouter;
