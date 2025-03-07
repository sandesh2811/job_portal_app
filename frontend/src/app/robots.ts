import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Which crawler we want to target
        // "*" le sabbai lai huncha
        userAgent: "*",
        // We want all of the pages index
        allow: "/",
        // What pages we want to exclude
        disallow: ["/admin"],
      },
    ],
    // sitemap ko url dine jaha crawler le sitemap lai bhetauna sakcha
    sitemap: `http://localhost:3000/sitemap.xml`,
  };
}
