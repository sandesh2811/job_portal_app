import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

// 1) Get the user data from req.body
// 2) parseAsync / match  the user data with the zod validation schema
// 3) If the data passes the schema validation continue to pass the valid data in req.body and proceeed to  other process else throw the required error

const verfiyLoginCredentials =
  (loginSchema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const newUserData = req.body;
    try {
      const validData = await loginSchema.parseAsync(newUserData);
      req.body = validData;
      next();
    } catch (error: any) {
      console.log("Error from middleware");

      next(error.errors[0].message);
    }
  };

export default verfiyLoginCredentials;
