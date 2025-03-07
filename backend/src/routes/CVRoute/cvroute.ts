import express from "express";
import GetCvNameOfApplicants from "../../controllers/CvController/cvController";
import checkUserSession from "../../middleware/authMiddleware/checkSession";

const ShowCvOfApplicants = express.Router();

ShowCvOfApplicants.get(
  "/files/:filename",
  checkUserSession,
  GetCvNameOfApplicants
);

export default ShowCvOfApplicants;
