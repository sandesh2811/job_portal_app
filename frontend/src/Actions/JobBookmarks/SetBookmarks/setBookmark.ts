"use server";

const setBookmark = async (jobId: string, userId: string) => {
  try {
    const response = await fetch("http://localhost:5000/api/bookmarks", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        jobId,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    const { message, success } = responseData;

    return {
      message,
      success,
    };
  } catch (error) {
    console.log(error);
  }
};

export default setBookmark;
