"use server";

import { JobApplicationType } from "@/Components/Redirects/JobApplication/Form/JobApplicationForm";

const postJobApplication = async (id: string, data: JobApplicationType) => {
  const { fullname, email, phonenumber, experience } = data;

  try {
    const postApplication = await fetch(
      `http://localhost:5000/api/jobApplication/apply/${id}`,
      {
        method: "POST",
        credentials: "include",
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
    console.log("Server action running!", postApplication);

    const messageFromBackend = await postApplication.json();
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
  }
};

export default postJobApplication;
