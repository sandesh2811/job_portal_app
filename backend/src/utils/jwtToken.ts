import jwt from "jsonwebtoken";

export const generateJwtToken = (username: string, userId: string): string => {
  const jwtPayload = {
    username: username,
    id: userId,
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "15m",
  });
  return token;
};
