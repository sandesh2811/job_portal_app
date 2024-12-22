import { JwtPayload } from "jsonwebtoken";

declare global {
  // Type declaration for JWT token payload

  export interface userData extends JwtPayload {
    username: string;
    userId: string;
    role: string;
  }

  // Type declaration for job updation

  export type UpdatedDataByEmployer = {
    title?: string;
    description?: string;
    salary?: string | number;
    required?: string | number;
    position?: string;
    experience?: string | number;
    status?: string;
    companyName?: string;
    location?: string;
  };
}
