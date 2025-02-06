"use server";

const UpdateApplicationStatus = async (
  status: string,
  applicationId: string
) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/jobApplication/review/${applicationId}`,
      {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify({
          status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Oops something went wrong!", error);
  }
};

export default UpdateApplicationStatus;
