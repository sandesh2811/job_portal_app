"use server";

import { JobApplicationType } from "@/Components/Redirects/JobApplication/Form/JobApplicationForm";

const postJobApplication = async (
  id: string,
  data: JobApplicationType,
  userId: string
) => {
  const { fullname, email, phonenumber, experience } = data;

  try {
    const postApplication = await fetch(
      `http://localhost:5000/api/jobApplication/apply/${id}`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          jobId: id,
          applierId: userId,
          fullname,
          email,
          phonenumber,
          experience,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const messageFromBackend = await postApplication.json();
    return messageFromBackend;
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
  }
};

export default postJobApplication;
