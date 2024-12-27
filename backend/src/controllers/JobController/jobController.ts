import { RequestHandler } from "express";
import NewJobModel from "../../models/JobModels/jobModel";
import mongoose from "mongoose";

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
    location,
    createdBy,
  } = req.body;

  const convertedId = new mongoose.Types.ObjectId(createdBy);

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
      location,
      createdBy: convertedId,
    });

    return res
      .status(201)
      .json({ success: true, message: "Job created successfully!", newJob });
  } catch (error) {
    console.log("Error from controller", error);

    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// Handling job updation by employer

export const UpdateJob: RequestHandler = async (req, res): Promise<any> => {
  const jobId = req.params.id;
  const { updatedData } = req.body;
  console.log(updatedData);

  const updatedAttributes: UpdatedDataByEmployer = {};

  if (updatedData.title) updatedAttributes.title = updatedData.title;
  if (updatedData.description)
    updatedAttributes.description = updatedData.description;
  if (updatedData.salary) updatedAttributes.salary = updatedData.salary;
  if (updatedData.required) updatedAttributes.required = updatedData.required;
  if (updatedData.position) updatedAttributes.position = updatedData.position;
  if (updatedData.experience)
    updatedAttributes.experience = updatedData.experience;
  if (updatedData.status) updatedAttributes.status = updatedData.status;
  if (updatedData.companyName)
    updatedAttributes.companyName = updatedData.companyName;
  if (updatedData.location) updatedAttributes.location = updatedData.location;

  try {
    const job = await NewJobModel.findByIdAndUpdate(
      { _id: jobId },
      { $set: updatedAttributes },
      { new: true }
    );

    return res
      .status(201)
      .json({ success: true, message: "Job updated successfully!", job });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// Handling job deletion by employer

// Find the job to be deleted with the help of job id passed by user
// If job does not exists then send a response else if the job is found then delete the job and send required response

export const DeleteJob: RequestHandler = async (req, res): Promise<any> => {
  const jobId = req.params.id;

  try {
    const job = await NewJobModel.findOne({ _id: jobId });

    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find and  delete job!" });
    } else {
      await NewJobModel.deleteOne({ _id: jobId });
      return res
        .status(200)
        .json({ success: true, message: "Job deleted successfully!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

// Getting all jobs
// Need to add pagination. For that need to apply aggregation pipeline for the db query

export const GetAllJobs: RequestHandler = async (req, res): Promise<any> => {
  try {
    const jobs = await NewJobModel.find();
    if (!jobs) {
      return res.status(404).json({ message: "Cannot find any job!" });
    } else {
      return res.status(200).json({ message: "All Jobs", jobs });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a single job based on id

export const GetSingleJob: RequestHandler = async (req, res): Promise<any> => {
  const id = req.params.id;
  try {
    const job = await NewJobModel.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Cannot find any job!" });
    } else {
      return res.status(200).json({ message: "Required Job", job });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get job posted by an employer

export const GetJobsPostedByEmployer: RequestHandler = async (
  req,
  res
): Promise<any> => {
  const id = req.params.id;
  const convertedId = new mongoose.Types.ObjectId(id);

  try {
    const jobs = await NewJobModel.find({ createdBy: convertedId });

    if (!jobs) {
      return res.status(404).json({ message: "Cannot find any job!" });
    } else {
      return res
        .status(200)
        .json({ message: "All jobs posted by employer", jobs });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get the latest job postings

export const GetLatestJobPostings: RequestHandler = async (
  req,
  res
): Promise<any> => {
  try {
    const latestJobs = await NewJobModel.aggregate([
      { $sort: { createdAt: -1 } },
      { $limit: 4 },
    ]);

    return res.status(200).json({ message: "All Jobs", latestJobs });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
