import { JwtPayload } from "jsonwebtoken";

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
}

// For search query

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
