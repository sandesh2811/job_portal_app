import { RequestHandler } from "express";
import { verifyJwtToken } from "../../utils/jwtToken";

// 1) Check if the user has session. Session can be obtained from cookie.
// 2) Send response based on whether session exists or not. If session doesn't exists then redirect user to the login page

const checkUserSession: RequestHandler = async (req, res): Promise<any> => {
  const userSession = req.cookies.token;

  if (userSession) {
    // console.log("Session exists! User logged in successfully!");
    const userDataFromToken = verifyJwtToken(userSession);

    return res.status(200).json({
      message: "User logged in successfully!",
      userDetails: userDataFromToken,
    });
  } else {
    // console.log("Session doesn't exists! Redirecting to login page!");
    return res.status(404).json({ message: "Please login to continue!" });
  }
};

export default checkUserSession;
