import { RequestHandler } from "express";
import JobApplicationModel from "../../models/JobApplicationModel/jobApplicationModel";
import { verifyJwtToken } from "../../utils/jwtToken";

// Applier applying to the job

// Get the job id from the url params
// Check if the job is available
// Check whether the same user has applied to the same job.
// Compare the two id's : one from session token and the other from the application itself i.e. applierId
//  User shouldn't be able to apply for same job twice.
// If user has not applied for the same job then post a new job to the database

export const ApplyForJob: RequestHandler = async (req, res): Promise<any> => {
  try {
    const jobId = req.params.id;
    const sessionToken = req.cookies.token;
    const { fullname, phonenumber, experience, email } = req.body;
    const jwtData = verifyJwtToken(sessionToken);

    const isJobAvailable = await JobApplicationModel.findOne({ jobId });

    if (!isJobAvailable) {
      return res.status(404).json({ message: "Job not found!" });
    } else if (isJobAvailable) {
      if (isJobAvailable.applierId.toString() === jwtData.userId) {
        return res.status(400).json({ message: "Already applied to this job" });
      } else {
        const newJobApplication = await JobApplicationModel.create({
          jobId,
          applierId: jwtData.userId,
          fullname,
          phonenumber,
          experience,
          email,
        });

        return res.status(200).json({
          message: "Applied to the job successfully!",
          newJobApplication,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error from application controller : Internal Server Error!",
      error,
    });
  }
};
