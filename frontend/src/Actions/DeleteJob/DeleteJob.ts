"use server";

const DeleteJob = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export default DeleteJob;
