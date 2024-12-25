"use server";

import { CreateJobType } from "@/Components/Redirects/Details/CreateJob/CreateJob";

const postNewJob = async (formData: CreateJobType, userId: string) => {
  const {
    title,
    description,
    salary,
    required,
    experience,
    position,
    status,
    companyName,
    location,
  } = formData;

  try {
    const response = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        title,
        description,
        salary,
        required,
        position,
        experience,
        status,
        companyName,
        location,
        createdBy: userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Oops something went wrong!", error);
  }
};

export default postNewJob;
