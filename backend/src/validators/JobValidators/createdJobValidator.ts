import z from "zod";

const createdJobSchema = z.object({
  title: z
    .string({ required_error: "Title cannot be empty!" })
    .min(6, { message: "Title must be of atleast 6 characters long!" }),
  description: z
    .string({ required_error: "Description cannot be empty!" })
    .min(10, { message: "Description must be of atleast 10 characters long!" }),
  // salary : ,
  // required :,
  position: z
    .string({ required_error: "Position cannot be empty!" })
    .min(6, { message: "Position must be of atleast 6 characters long!" }),
  // experience : z.string({required_error : "Position cannot be empty!"}).min(6 ,{ message: "Position must be of atleast 6 characters long!" }),
  status: z
    .string({ required_error: "Status cannot be empty!" })
    .min(1, { message: "Status must be of atleast 1 characters long!" }),
  companyName: z
    .string({ required_error: "Company name cannot be empty!" })
    .min(3, { message: "Company name must be of atleast 3 characters long!" }),
  createdBy: z
    .string({ required_error: "Job creator name  cannot be empty!" })
    .min(3, {
      message: "Job creator name must be of atleast 3 characters long!",
    }),
});

export default createdJobSchema;
