"use server";

import { JobApplicationType } from "@/Components/Redirects/JobApplication/Form/JobApplicationForm";
import { NextRequest, NextResponse } from "next/server";

const postJobApplication = async (id: string, data: JobApplicationType) => {
  const { fullname, email, phonenumber, experience } = data;

  try {
    const postApplication = await fetch(
      `http://localhost:5000/api/jobApplication/apply/${id}`,
      {
        method: "POST",
        body: JSON.stringify({
          jobId: id,
          applierId: "675a87dc89807ad9e57dadd5",
          fullname,
          email,
          phonenumber,
          experience,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const messageFromBackend = await postApplication.json();
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
  }
};

export default postJobApplication;
