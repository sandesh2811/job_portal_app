import mongoose, { Schema, Document, Model } from "mongoose";

interface JobApplication extends Document {
  jobId: Schema.Types.ObjectId;
  applierId: Schema.Types.ObjectId;
  fullname: string;
  phonenumber: string | number;
  experience: string | number;
  email: string;
  status: string;
}

const JobApplicationSchema = new Schema<JobApplication>({
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "NewJob",
  },
  applierId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  fullname: {
    type: String,
    required: [true, "Fullname is required!"],
  },
  phonenumber: {
    type: String || Number,
    required: [true, "Phone number is required!"],
  },
  experience: {
    type: String || Number,
    required: [true, "Experience is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const JobApplicationModel =
  (mongoose.models.JobApplications as Model<JobApplication>) ||
  mongoose.model("JobApplication", JobApplicationSchema);

export default JobApplicationModel;
