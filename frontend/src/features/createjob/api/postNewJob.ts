import api from "@/axios/axios";
import axios from "axios";

const postNewJob = async (
  formData: FormDataType,
  userId: string,
): Promise<CreatedJobReturnType | BaseReturnType> => {
  const {
    title,
    description,
    salaryFrom,
    salaryTo,
    required,
    skills,
    experience,
    position,
    status,
    companyName,
    location,
  } = formData;

  try {
    const response = await api.post("/jobs", {
      title,
      description,
      salaryFrom,
      salaryTo,
      required,
      skills,
      position,
      experience,
      status,
      companyName,
      location,
      createdBy: userId,
    });

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

export default postNewJob;
