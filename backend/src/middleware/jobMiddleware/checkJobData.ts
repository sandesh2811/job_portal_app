import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

const verifyJobData =
  (jobSchema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const jobData = req.body;
    try {
      const verifiedJobData = await jobSchema.parseAsync(jobData);
      req.body = verifiedJobData;
      next();
    } catch (error: any) {
      console.log("Error from middleware", error.errors[0].path[0]);

      next(error.errors[0].message);
    }
  };

export default verifyJobData;
