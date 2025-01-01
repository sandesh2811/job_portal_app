import express from "express";
import GetCvNameOfApplicants from "../../controllers/CvController/cvController";

const ShowCvOfApplicants = express.Router();

ShowCvOfApplicants.get("/files/:filename", GetCvNameOfApplicants);

export default ShowCvOfApplicants;
