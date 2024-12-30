"use server";

import { RegisterType } from "@/Components/Redirects/Register/Form";

const RegisterNewUser = async (data: RegisterType) => {
  const { username, password, email, role } = data;
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
        email,
        role,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Oops! Something went wrong!", error);
  }
};
export default RegisterNewUser;
