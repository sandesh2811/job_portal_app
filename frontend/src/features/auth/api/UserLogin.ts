import { LoginType } from "@/features/auth/schemas/LoginSchema";

const userLogin = async (data: LoginType) => {
  const { username, password } = data;

  try {
    const postToDatabase = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await postToDatabase.json();
    return responseData;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default userLogin;
