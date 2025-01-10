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

const jobRouter = express.Router();

jobRouter.route("/").post(verifyJobData(createdJobSchema), CreateJob);
jobRouter.route("/:id").patch(UpdateJob);
jobRouter.route("/:id").delete(DeleteJob);

jobRouter.route("/").get(GetAllJobs);
jobRouter.route("/latestjobs").get(GetLatestJobPostings);
jobRouter.route("/:id").get(GetSingleJob);
jobRouter.route("/employer/:id").get(GetJobsPostedByEmployer);

export default jobRouter;
