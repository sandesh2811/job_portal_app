"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";

const GetLoginData = () => {
  const { loginData } = useSelector(
    (state: RootState) => state.loginDataReducer
  );
  return {
    loginData,
  };
};

export default GetLoginData;
