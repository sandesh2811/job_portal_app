import { RequestHandler } from "express";
import { verifyJwtToken } from "../../utils/jwtToken";

interface userTokenData {
  username: string;
  id: string;
  role: string;
  iat: number;
  exp: number;
}

const verifyUserRole: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const userSession = req.cookies.token;

    const userDataFromToken = verifyJwtToken(userSession);

    console.log(userDataFromToken);

    // if (userDataFromToken.role === "employer") {
    //   return res
    //     .status(404)
    //     .json({ message: "Please login as employer to continue" });
    // }
    next();
  } catch (error) {
    res.status(404).json({ message: "Please login to continue" });
  }
};

export default verifyUserRole;
