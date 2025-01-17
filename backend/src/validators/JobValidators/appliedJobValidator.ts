import { z } from "zod";

const JobApplicationSchema = z.object({
  applierId: z
    .string({ message: "Applier id is required" })
    .min(24, { message: "Applier id must be 24 characters long!" }),
  fullname: z
    .string({ message: "Fullname is required" })
    .min(3, { message: "Name must be atleast 3 characters long!" }),
  phonenumber: z
    .string({ message: "Phone number is required" })
    .min(10, { message: "Phone number must be atleast of 10 digits long!" })
    .max(10, { message: "Phone number cannot exceed 10 digits!" }),
  experience: z
    .string({ message: "Experience is required" })
    .max(2, { message: "Experience cannot be more than 2 digits!" }),
  email: z.string({ message: "Email is required" }).email(),
  fileName: z.string(),
});

export default JobApplicationSchema;
