import { RequestHandler } from "express";
import { verifyJwtToken } from "../../utils/jwtToken";

// 1) Check if the user has session. Session can be obtained from cookie.
// 2) Send response based on whether session exists or not. If session doesn't exists then redirect user to the login page

const checkUserSession: RequestHandler = async (
  req,
  res,
  next
): Promise<any> => {
  const userSession = req.cookies.token;
  const demo = req.headers["authorization"];

  console.log(demo);

  if (userSession) {
    const userDataFromToken = verifyJwtToken(userSession);

    // return res.status(200).json({
    //   message: "Authenticated!",
    //   userDetails: userDataFromToken,
    // });
  } else {
    return res.status(404).json({ message: "Please login to continue!" });
  }
};

export default checkUserSession;
