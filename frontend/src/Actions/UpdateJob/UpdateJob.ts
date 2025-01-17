"use server";

const UpdateJob = async (id: string, updatedData: unknown) => {
  try {
    const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({
        updatedData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export default UpdateJob;
