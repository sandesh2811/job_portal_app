"use server";

const postJobApplication = async (id: string, formData: FormData) => {
  try {
    const postApplication = await fetch(
      `http://localhost:5000/api/jobApplication/apply/${id}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const messageFromBackend = await postApplication.json();

    return messageFromBackend;
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
  }
};

export default postJobApplication;
