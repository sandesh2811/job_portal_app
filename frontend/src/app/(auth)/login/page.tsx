import Login from "@/Components/pages/Login";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
