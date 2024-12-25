import express from "express";
import {
  ApplyForJob,
  GetJobApplicationsAppliedByApplier,
  GetJobApplicationsPostedByEmployer,
  GetSingleJobApplication,
  ReviewJobApplications,
} from "../../controllers/JobApplicationController/jobApplicationController";

const jobApplicationRouter = express.Router();

// For applier
jobApplicationRouter.route("/apply/:id").post(ApplyForJob);
jobApplicationRouter
  .route("/applier/:id")
  .get(GetJobApplicationsAppliedByApplier);

// For employer
jobApplicationRouter.route("/:id").get(GetJobApplicationsPostedByEmployer);
jobApplicationRouter.route("/details/:id").get(GetSingleJobApplication);
jobApplicationRouter.route("/review/:id").patch(ReviewJobApplications);

export default jobApplicationRouter;
