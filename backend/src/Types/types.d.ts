import { JwtPayload } from "jsonwebtoken";
import { z } from "zod";

import createdJobSchema from "../validators/JobValidators/createdJobValidator";
import JobApplicationSchema from "../validators/JobValidators/appliedJobValidator";
// import * as express from "express-serve-static-core";

// declare global {
//   namespace Express {
//     interface Request {
//       customField?: string;
//     }
//   }
// }

declare global {
  // Type declaration for JWT token payload

  interface userData extends JwtPayload {
    username: string;
    userId: string;
    role: string;
  }

  // Type declaration for job updation

  type UpdatedDataByEmployer = {
    title?: string;
    description?: string;
    salaryFrom?: string | number;
    salaryTo?: string | number;
    required?: string | number;
    skills?: string;
    position?: string;
    experience?: string | number;
    status?: string;
    companyName?: string;
    location?: string;
  };

  // For typicial params for req.params
  type ParamsType = {
    id?: string;
    filename?: string;
  };

  // Types used for req.body

  // For bookmark req.body
  type BookmarkType = {
    bookmarkId?: string;
    jobId: string;
    userId?: string;
  };

  // For the job creation req.body
  type CreateJobType = z.infer<typeof createdJobSchema>;

  // For the job updation req.body
  type UpdateJobType<T> = {
    updatedData: {
      [k in keyof T]?: T[k];
    };
  };

  // For job application req.body
  type JobApplicationType = z.infer<typeof JobApplicationSchema>;
}

// For search query / req.query

export type FilterType = {
  title?: string;
  salaryFrom?: string;
  salaryTo?: string;
  salary?: string;
  position?: string;
  experience?: string;
  searchQuery?: string;
  location?: string;
  page?: string;
  limit?: string;
};

export type PipelineMatcherType<T> = {
  // (iterates) For each key in the generic T(which we will pass) searches the generic with certain key and assigns the type of the found key in this match.

  $match: {
    [K in keyof T]?:
      | T[K]
      | { $regex?: string; $options?: string }
      | { $gte?: string }
      | { $lte?: string };
  };
};
