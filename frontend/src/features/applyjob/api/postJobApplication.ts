import api from "@/axios/axios";
import axios from "axios";

type PostJobApplicationReturnType = {
  success: boolean;
  message: string;
  newJobApplication?: JobApplicationType<JobType>;
  error?: unknown;
};

const postJobApplication = async (
  id: string,
  formData: FormData,
): Promise<PostJobApplicationReturnType> => {
  try {
    const postApplication = await api.post(
      `/jobApplication/apply/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    const messageFromBackend = postApplication.data;

    return messageFromBackend;
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

export default postJobApplication;
