import { NextFunction, Request, Response } from "express";
import { verifyJwtToken } from "../../utils/jwtToken";
import { JsonWebTokenError } from "jsonwebtoken";

export const verifyUserRole = (role: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.access_token;

    if (!accessToken) {
      res.status(404).json({ message: "No token found!" });
      return;
    } else {
      try {
        const userData = verifyJwtToken(accessToken);

        if (userData.role !== role) {
          res.status(403).json({ message: "Forbidden: No proper permission!" });
          return;
        }
        next();
      } catch (error) {
        if (error instanceof JsonWebTokenError) {
          next(error.message);
        }
      }
    }
  };
};
