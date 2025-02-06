import { z } from "zod";

const JobApplicationSchema = z.object({
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
  file: z.any().refine(
    (file) => {
      return (
        file && file[0] instanceof File && file[0].type === "application/pdf"
      );
    },
    { message: "Cv is required" }
  ),
});

export type JobApplicationType = z.infer<typeof JobApplicationSchema>;

export default JobApplicationSchema;
