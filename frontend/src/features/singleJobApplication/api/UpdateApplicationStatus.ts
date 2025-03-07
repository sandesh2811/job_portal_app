import api from "@/axios/axios";
import axios from "axios";

const UpdateApplicationStatus = async (
  status: string,
  applicationId: string,
): Promise<UpdatedApplicationReturnType | BaseReturnType> => {
  try {
    const response = await api.patch(
      `/jobApplication/review/${applicationId}`,
      {
        status,
      },
    );

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

export default UpdateApplicationStatus;
