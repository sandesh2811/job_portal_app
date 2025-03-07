import { z } from "zod";

export const CreateJobSchema = z.object({
  title: z
    .string({ message: "Job title is required!" })
    .min(5, { message: "Job title cannot be less than 5 characters!" })
    .max(25, { message: "Job title cannot exceed 25 characters!" }),
  description: z
    .string({ message: "Job description is required!" })
    .min(20, { message: "Job description cannot be less than 20 characters!" })
    .max(300, { message: "Job description cannot exceed 300 characters!" }),
  salaryFrom: z
    .string({ message: "Lowest salary is required!" })
    .min(4, { message: "Salary cannot be less than 4 characters!" })
    .max(50, { message: "Salary cannot exceed 50 characters!" }),
  salaryTo: z
    .string({ message: "Highest Salary is required!" })
    .min(4, { message: "Salary cannot be less than 4 characters!" })
    .max(50, { message: "Salary cannot exceed 50 characters!" }),
  required: z
    .string({ message: "Number of required candidates is required!" })
    .min(1, {
      message:
        "Number of required candidates cannot be less than 1 characters!",
    })
    .max(3, {
      message: "Number of required candidates cannot exceed 3 characters!",
    }),
  skills: z
    .string({ message: "Skills is required!" })
    .min(5, {
      message: "Required skills cannot be less than 5 characters!",
    })
    .max(40, {
      message: "Number of required skills cannot exceed 40 characters!",
    }),
  experience: z
    .string({ message: "Experience is required!" })
    .min(1, { message: "Experience cannot be less than 1 characters!" })
    .max(2, { message: "Experience cannot exceed 2 characters!" }),
  position: z
    .string({ message: "Position is required!" })
    .min(5, { message: "Position cannot be less than 5 characters!" })
    .max(20, { message: "Position cannot exceed 20 characters!" }),
  status: z
    .string({ message: "Status is required!" })
    .min(5, { message: "Status cannot be less than 5 characters!" })
    .max(20, { message: "Status cannot exceed 20 characters!" }),
  companyName: z
    .string({ message: "Company name is required!" })
    .min(5, { message: "Company name cannot be less than 5 characters!" })
    .max(20, { message: "Company name cannot exceed 20 characters!" }),
  location: z
    .string({ message: "Location is required!" })
    .min(4, { message: "Location cannot be less than 5 characters!" })
    .max(25, { message: "Location cannot exceed 20 characters!" }),
});

export type CreateJobType = z.infer<typeof CreateJobSchema>;

export default CreateJobSchema;
