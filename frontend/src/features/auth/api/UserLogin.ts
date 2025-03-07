import api from "@/axios/axios";

import { LoginType } from "@/features/auth/schemas/LoginSchema";

import axios from "axios";

const userLogin = async (
  data: LoginType,
): Promise<LoginReturnType | BaseReturnType> => {
  const { username, password } = data;

  try {
    const postToDatabase = await api.post("/auth/login", {
      username,
      password,
    });

    const responseData = postToDatabase.data;
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

export default userLogin;
