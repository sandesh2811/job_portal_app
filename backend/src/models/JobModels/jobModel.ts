import mongoose, { Schema, Document, Model } from "mongoose";

interface NewJob extends Document {
  title: string;
  description: string;
  salaryFrom: string | number;
  salaryTo: string | number;
  required: string | number;
  skills: string;
  position: string;
  experience: string | number;
  status: string;
  companyName: string;
  location: string;
  createdBy: Schema.Types.ObjectId;
  expiresAt: Date;
}

// Defining the job schema

const NewJobSchema = new Schema<NewJob>(
  {
    title: {
      type: String,
      required: [true, "Job title cannot be empty!"],
    },
    description: {
      type: String,
      required: [true, "Job description cannot be empty!"],
    },
    salaryFrom: {
      type: String || Number,
      required: [true, "Job salary cannot be empty!"],
    },
    salaryTo: {
      type: String || Number,
      required: [true, "Job salary cannot be empty!"],
    },
    required: {
      type: String || Number,
      required: [true, "Number of required candidates cannot be empty!"],
    },
    skills: {
      type: String || Number,
      required: [true, "Number of required skills cannot be empty!"],
    },
    position: {
      type: String,
      required: [true, "Job position cannot be empty!"],
    },
    experience: {
      type: String || Number,
      required: [true, "Job experience cannot be empty!"],
    },
    status: {
      type: String,
      required: [true, "Job status cannot be empty!"],
    },
    companyName: {
      type: String,
      required: [true, "Company name cannot be empty!"],
    },
    location: {
      type: String,
      required: [true, "Location cannot be empty!"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Job createdBy cannot be empty!"],
    },
    expiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Defining the job model from the above schema

const NewJobModel =
  (mongoose.models.NewJobs as Model<NewJob>) ||
  mongoose.model("NewJob", NewJobSchema);

export default NewJobModel;
