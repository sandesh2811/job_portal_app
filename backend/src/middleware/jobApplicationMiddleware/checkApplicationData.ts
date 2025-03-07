import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const verifyJobApplicationData =
  (jobApplicationSchema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { fullname, applierId, phonenumber, experience, email } = req.body;

    const fileName = req.file?.filename;

    const jobData = {
      applierId: applierId,
      fullname: fullname,
      phonenumber: phonenumber,
      experience: experience,
      email: email,
      fileName: fileName,
    };

    try {
      const verifiedJobData = await jobApplicationSchema.parseAsync(jobData);
      req.body = verifiedJobData;
      next();
    } catch (error: any) {
      console.log("Error from middleware", error.errors[0].path[0]);

      next(error.errors[0].message);
    }
  };

export default verifyJobApplicationData;
