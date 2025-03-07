import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

import { JwtPayload } from "jsonwebtoken";

interface ExtendedJwtPayload extends JwtPayload {
  username: string;
  userId: string;
  role: string;
}

export const middleware = (request: NextRequest, response: NextResponse) => {
  // Extracting the token from request
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  //   Extracting the pathaname form url
  const { pathname } = request.nextUrl;

  //   Checking if cookie exists. If not then redirecting user to login page

  if (accessToken) {
    // Decode the cookie to get the payload stored in the token
    const decodeData: ExtendedJwtPayload = jwtDecode(accessToken);
    const { role } = decodeData;

    // Checks if a user is valid to access certain routes

    // Checks user's role and redirects user to access denied page if the route requested by user is not defined for them.
    if (
      role === "employer" &&
      (pathname.startsWith("/bookmarks") ||
        pathname.startsWith("/appliedjobs") ||
        pathname.startsWith("/apply"))
    ) {
      return NextResponse.redirect(new URL("/accessdenied", request.url));
    } else if (
      role === "applier" &&
      (pathname.startsWith("/createjob") ||
        pathname.startsWith("/jobapplications") ||
        pathname.startsWith("/postedjobs") ||
        pathname.startsWith("/jobapplicationdetails") ||
        pathname.startsWith("/jobdetails"))
    ) {
      return NextResponse.redirect(new URL("/accessdenied", request.url));
    }
  }

  if (!accessToken && refreshToken) {
    return;
  } else if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: [
    "/apply/:id",
    "/details/:id",
    "/postedjobs/:id",
    "/createjob/:id",
    "/jobapplications/:id",
    "/appliedjobs/:id",
    "/bookmarks/:id",
    "/jobdetails/:id",
    "/jobapplicationdetails/:id",
  ],
};
