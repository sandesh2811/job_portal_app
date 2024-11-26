import express from "express";
import {
  CreateJob,
  DeleteJob,
  UpdateJob,
} from "../../controllers/JobController/jobController";
import verifyJobData from "../../middleware/jobMiddleware/checkJobData";
import createdJobSchema from "../../validators/JobValidators/createdJobValidator";
import verifyUserRole from "../../middleware/jobMiddleware/checkUserRole";

const jobRouter = express.Router();

jobRouter
  .route("/")
  .post(verifyJobData(createdJobSchema), verifyUserRole, CreateJob);
jobRouter.route("/").put(UpdateJob);
jobRouter.route("/").delete(DeleteJob);

export default jobRouter;
