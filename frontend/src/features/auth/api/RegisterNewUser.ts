import api from "@/axios/axios";
import { RegisterType } from "@/features/auth/schemas/RegistrationSchema";
import axios from "axios";

const RegisterNewUser = async (data: RegisterType): Promise<BaseReturnType> => {
  const { username, password, email, role } = data;
  try {
    const response = await api.post("/auth/register", {
      username,
      password,
      email,
      role,
    });

    const { data } = response;

    return data;
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

export default RegisterNewUser;
