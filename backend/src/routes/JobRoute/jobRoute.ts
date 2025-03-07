import express from "express";
import {
  CreateJob,
  DeleteJob,
  GetAllJobs,
  GetJobsPostedByEmployer,
  GetLatestJobPostings,
  GetSingleJob,
  UpdateJob,
} from "../../controllers/JobController/jobController";
import verifyJobData from "../../middleware/jobMiddleware/checkJobData";
import createdJobSchema from "../../validators/JobValidators/createdJobValidator";
import checkUserSession from "../../middleware/authMiddleware/checkSession";
import { verifyUserRole } from "../../middleware/authMiddleware/verifyUserRole";

const jobRouter = express.Router();

jobRouter
  .route("/")
  .post(
    checkUserSession,
    verifyUserRole("employer"),
    verifyJobData(createdJobSchema),
    CreateJob
  );
jobRouter
  .route("/:id")
  .patch(checkUserSession, verifyUserRole("employer"), UpdateJob);
jobRouter
  .route("/:id")
  .delete(checkUserSession, verifyUserRole("employer"), DeleteJob);

jobRouter.route("/").get(GetAllJobs);
jobRouter.route("/latestjobs").get(GetLatestJobPostings);
jobRouter.route("/:id").get(GetSingleJob);
jobRouter
  .route("/employer/:id")
  .get(checkUserSession, verifyUserRole("employer"), GetJobsPostedByEmployer);

export default jobRouter;
