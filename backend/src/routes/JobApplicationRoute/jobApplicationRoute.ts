import express from "express";
import multer from "multer";

import {
  ApplyForJob,
  GetJobApplicationsAppliedByApplier,
  GetJobApplicationsPostedByEmployer,
  GetSingleJobApplication,
  ReviewJobApplications,
} from "../../controllers/JobApplicationController/jobApplicationController";
import verifyJobApplicationData from "../../middleware/jobApplicationMiddleware/checkApplicationData";
import JobApplicationSchema from "../../validators/JobValidators/appliedJobValidator";
import checkUserSession from "../../middleware/authMiddleware/checkSession";
import { verifyUserRole } from "../../middleware/authMiddleware/verifyUserRole";

const jobApplicationRouter = express.Router();

// Multer for file uploads

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// For applier
jobApplicationRouter
  .route("/apply/:id")
  .post(
    upload.single("file"),
    checkUserSession,
    verifyUserRole("applier"),
    verifyJobApplicationData(JobApplicationSchema),
    ApplyForJob
  );

jobApplicationRouter
  .route("/applier/:id")
  .get(
    checkUserSession,
    verifyUserRole("applier"),
    GetJobApplicationsAppliedByApplier
  );

// For employer
jobApplicationRouter
  .route("/:id")
  .get(
    checkUserSession,
    verifyUserRole("employer"),
    GetJobApplicationsPostedByEmployer
  );
jobApplicationRouter
  .route("/details/:id")
  .get(checkUserSession, verifyUserRole("applier"), GetSingleJobApplication);
jobApplicationRouter
  .route("/review/:id")
  .patch(checkUserSession, verifyUserRole("applier"), ReviewJobApplications);

export default jobApplicationRouter;
