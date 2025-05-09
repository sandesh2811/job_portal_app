// import { verifyJwtToken } from "../../utils/jwtToken";
import JobApplicationModel from "../../models/JobApplicationModel/jobApplicationModel";
import NewJobModel from "../../models/JobModels/jobModel";

import { RequestHandler } from "express";
import mongoose from "mongoose";

// Applier applying to the job

// Get the job id from the url params
// Check if the job is available
// Check whether the same user has applied to the same job.
// Compare the two id's : one from session token and the other from the application itself i.e. applierId
//  User shouldn't be able to apply for same job twice.
// If user has not applied for the same job then post a new job to the database

export const ApplyForJob: RequestHandler<
  ParamsType,
  {},
  JobApplicationType
> = async (req, res): Promise<void> => {
  try {
    const jobId = req.params.id;
    // const sessionToken = req.cookies.token;

    // Applier id is alternative approach
    const { applierId, fullname, phonenumber, experience, email } = req.body;
    const fileName = req.file?.filename;

    // const jwtData = verifyJwtToken(sessionToken);
    const convertedJobId = new mongoose.Types.ObjectId(jobId);

    const isJobAvailable = await NewJobModel.findById(jobId);

    const applications = await JobApplicationModel.find({
      jobId: convertedJobId,
    });

    if (!isJobAvailable) {
      res.status(404).json({ success: false, message: "Job not found!" });
    } else if (isJobAvailable) {
      const hasApplied = applications.some((application) => {
        return application.applierId.toString() === applierId;
        // return application.applierId.toString() === jwtData.userId;
      });

      if (hasApplied) {
        res
          .status(400)
          .json({ success: false, message: "Already applied to this job" });
      } else {
        const newJobApplication = await JobApplicationModel.create({
          jobId,
          applierId,
          fullname,
          phonenumber,
          experience,
          email,
          fileName,
        });

        res.status(200).json({
          success: true,
          message: "Applied to the job successfully!",
          newJobApplication,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error from application controller : Internal Server Error!",
    });
  }
};

// Getting the list of jobs posted by the employer

// Get the userid from the token
// Get all the jobs created by user in the jobs model
// Extract the job ids of the all the jobs posted by a particular employer
// Match the job ids of the array with the job ids of the applications
// Return the job applications list

export const GetJobApplicationsPostedByEmployer: RequestHandler<
  ParamsType
> = async (req, res): Promise<void> => {
  try {
    // const token = req.cookies.token;
    // const userData = verifyJwtToken(token);

    // Alternative approach
    const creatorId = req.params.id;

    const jobsCreatedByUser = await NewJobModel.find({
      // createdBy: userData.userId,
      createdBy: creatorId,
    });
    const jobIds = jobsCreatedByUser.map((job) => job._id);

    const jobApplicationsToTheJob = await JobApplicationModel.find({
      jobId: { $in: jobIds },
    }).populate("jobId");
    res.status(200).json({
      success: true,
      message: "List of all jobs!",
      jobApplicationsToTheJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error from application controller : Internal Server Error!",
    });
  }
};

// Review the applications for the job

// Get the selected application id from the URL params
// Update the status of the particular application for the job

export const ReviewJobApplications: RequestHandler<
  ParamsType,
  {},
  { status: string }
> = async (req, res): Promise<void> => {
  const applicationId = req.params.id;
  const { status } = req.body;
  try {
    const updatedApplication = await JobApplicationModel.findByIdAndUpdate(
      applicationId,
      { $set: { status } },
      { new: true }
    );

    res
      .status(200)
      .json({ success: true, message: "Status Updated!", updatedApplication });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error from application controller : Internal Server Error!",
    });
  }
};

// Get the job applications applied by the applier

// Get the selected user id from the URL params
// Filter the job applications by matching the applier Id with the id coming from the url params.

export const GetJobApplicationsAppliedByApplier: RequestHandler<
  ParamsType
> = async (req, res): Promise<void> => {
  const applierId = req.params.id;
  try {
    const jobApplicationsByApplier = await JobApplicationModel.find({
      applierId,
    }).populate("jobId");

    res.status(200).json({
      success: true,
      message: "All jobs applied by applier!",
      jobApplicationsByApplier,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error from application controller : Internal Server Error!",
    });
  }
};

// Get single job application

export const GetSingleJobApplication: RequestHandler<ParamsType> = async (
  req,
  res
): Promise<void> => {
  const applicationId = req.params.id;

  console.log(req.user);

  try {
    const singleJobApplication = await JobApplicationModel.findById(
      applicationId
    ).populate("jobId");

    res.status(200).json({
      success: true,
      message: "Required job application!",
      singleJobApplication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error from application controller : Internal Server Error!",
    });
  }
};
