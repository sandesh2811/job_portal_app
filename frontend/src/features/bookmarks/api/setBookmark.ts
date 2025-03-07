import api from "@/axios/axios";
import axios from "axios";

const setBookmark = async (
  jobId: string,
  userId: string,
): Promise<BaseReturnType> => {
  try {
    const response = await api.post("/bookmarks", {
      jobId,
      userId,
    });
    const { message, success } = response.data;

    return {
      message,
      success,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success,
        message: error.response.data.message,
      };
    }

    return {
      success: false,
      message: "Something went wrong! Please try again later.",
    };
  }
};

export default setBookmark;
