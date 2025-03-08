import jwt from "jsonwebtoken";

export const generateJwtToken = (
  username: string,
  userId: string,
  role: string
): { access_token: string; refresh_token: string } => {
  const jwtPayload = {
    username: username,
    userId: userId,
    role: role,
  };
  const access_token = jwt.sign(
    jwtPayload,
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "15m",
    }
  );

  const refresh_token = jwt.sign(
    jwtPayload,
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "7d",
    }
  );

  return {
    access_token,
    refresh_token,
  };
};

export const verifyJwtToken = (token: string) => {
  const userDataFromToken = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY as string
  ) as userData;

  return userDataFromToken;
};
