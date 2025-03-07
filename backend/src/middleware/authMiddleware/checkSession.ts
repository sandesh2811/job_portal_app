import { RequestHandler } from "express";
import { verifyJwtToken } from "../../utils/jwtToken";
import { JsonWebTokenError } from "jsonwebtoken";

// 1) Check if the user has session. Session can be obtained from cookie.
// 2) Send response based on whether session exists or not. If session doesn't exists then redirect user to the login page

const checkUserSession: RequestHandler = (req, res, next): void => {
  const userSession = req.cookies.access_token;

  if (userSession) {
    try {
      const userDataFromToken = verifyJwtToken(userSession);
      req.user = userDataFromToken;
      next();
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        next(error.message);
      }
    }
  } else {
    res.status(401).json({ message: "Please login to continue!" });
  }
};

export default checkUserSession;
