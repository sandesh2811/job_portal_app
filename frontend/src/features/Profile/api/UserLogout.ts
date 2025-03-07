import api from "@/axios/axios";
import axios from "axios";

const Logout = async (): Promise<BaseReturnType> => {
  try {
    const response = await api.get("/auth/logout");

    const responseData = response.data;

    return responseData;
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

export default Logout;
