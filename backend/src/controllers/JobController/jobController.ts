import { RequestHandler } from "express";
import NewJobModel from "../../models/JobModels/jobModel";
import mongoose from "mongoose";
import BookmarkModel from "../../models/BookmarkModel/bookmarkModel";
import { FilterType, PipelineMatcherType } from "../../Types/types";

// Handling job creation by employer

export const CreateJob: RequestHandler = async (req, res): Promise<any> => {
  const {
    title,
    description,
    salaryFrom,
    salaryTo,
    required,
    skills,
    position,
    experience,
    status,
    companyName,
    location,
    createdBy,
  } = req.body;

  const convertedId = new mongoose.Types.ObjectId(createdBy);

  const currentDate = new Date();
  const expiryDate = currentDate.setDate(currentDate.getDate() + 15);

  try {
    const newJob = await NewJobModel.create({
      title,
      description,
      salaryFrom,
      salaryTo,
      required,
      skills,
      position,
      experience,
      status,
      companyName,
      location,
      createdBy: convertedId,
      expiresAt: expiryDate,
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

  const updatedAttributes: UpdatedDataByEmployer = {};

  if (updatedData.title) updatedAttributes.title = updatedData.title;

  if (updatedData.description)
    updatedAttributes.description = updatedData.description;

  if (updatedData.salaryFrom)
    updatedAttributes.salaryFrom = updatedData.salaryFrom;

  if (updatedData.salaryTo) updatedAttributes.salaryTo = updatedData.salaryTo;

  if (updatedData.required) updatedAttributes.required = updatedData.required;

  if (updatedData.skills) updatedAttributes.skills = updatedData.skills;

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

export const DeleteJob: RequestHandler = async (req, res): Promise<any> => {
  const jobId = req.params.id;

  try {
    const job = await NewJobModel.findOne({ _id: jobId });

    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find and  delete job!" });
    } else {
      // Delete the job
      await NewJobModel.deleteOne({ _id: jobId });

      // Deleting the respective bookmarks for the job
      await BookmarkModel.deleteMany({ jobId: jobId });

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

export const GetAllJobs: RequestHandler = async (req, res): Promise<any> => {
  const {
    page,
    limit,
    searchQuery,
    title,
    salaryFrom,
    salaryTo,
    position,
    experience,
    location,
  } = req.query as FilterType;

  const pageNumber: number = parseInt(page as string) || 1;
  const jobLimit: number = parseInt(limit as string) || 4;

  const pipeline: PipelineMatcherType<FilterType> = {
    $match: {},
  };
  // Checking which attributes/queries are being passed and adding it to the match aggregation pipeline

  if (title) pipeline.$match.title = { $regex: title, $options: "i" };

  if (searchQuery)
    pipeline.$match.title = { $regex: searchQuery, $options: "i" };

  if (position)
    pipeline.$match.position = { $regex: searchQuery, $options: "i" };

  if (location) pipeline.$match.location = { $regex: location, $options: "i" };

  if (experience) pipeline.$match.experience = { $gte: experience };

  if (salaryFrom) pipeline.$match.salaryFrom = { $gte: salaryFrom };

  if (salaryTo) pipeline.$match.salaryTo = { $gte: salaryTo };

  try {
    const jobs = await NewJobModel.aggregate([
      pipeline,
      { $skip: (pageNumber - 1) * jobLimit },
      { $limit: jobLimit },
    ]);

    if (!jobs) {
      return res.status(404).json({ message: "Cannot find any job!" });
    } else {
      const countDocuments = await NewJobModel.countDocuments();
      const totalPages = Math.ceil(countDocuments / jobLimit);

      const currentDate = new Date();

      // Update the status of the job to expired
      const expiredJobs = await NewJobModel.updateMany(
        {
          expiresAt: { $lt: currentDate },
        },
        { $set: { status: "Expired" } }
      );

      return res.status(200).json({ message: "All Jobs", jobs, totalPages });
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
