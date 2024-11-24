import { RequestHandler } from "express";
import NewJobModel from "../../models/JobModels/jobModel";

// Handling job creation by employer

export const CreateJob: RequestHandler = async (req, res): Promise<any> => {
  const {
    title,
    description,
    salary,
    required,
    position,
    experience,
    status,
    companyName,
    createdBy,
  } = req.body;

  try {
    const newJob = await NewJobModel.create({
      title,
      description,
      salary,
      required,
      position,
      experience,
      status,
      companyName,
      createdBy,
    });

    return res
      .status(201)
      .json({ message: "Job created successfully!", newJob });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Handling job updation by employer

export const UpdateJob: RequestHandler = async (req, res): Promise<any> => {
  const { jobId } = req.body;

  try {
    const job = await NewJobModel.findOne({ _id: jobId });

    return res.status(201).json({ message: "Job updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Handling job deletion by employer

// Find the job to be deleted with the help of job id passed by user
// If job does not exists then send a response else if the job is found then delete the job and send required response

export const DeleteJob: RequestHandler = async (req, res): Promise<any> => {
  const { jobId } = req.body;

  try {
    const job = await NewJobModel.findOne({ _id: jobId });

    if (!job) {
      return res.status(404).json({ message: "Cannot find and  delete job!" });
    } else {
      await NewJobModel.deleteOne({ _id: jobId });
      return res.status(201).json({ message: "Job deleted successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
