import jwt from "jsonwebtoken";
import { userData } from "../TypeDeclarations/types";

export const generateJwtToken = (
  username: string,
  userId: string,
  role: string
): string => {
  const jwtPayload = {
    username: username,
    userId: userId,
    role: role,
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "15m",
  });
  return token;
};

export const verifyJwtToken = (token: string) => {
  const userDataFromToken = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY as string
  ) as userData;

  return userDataFromToken;
};
