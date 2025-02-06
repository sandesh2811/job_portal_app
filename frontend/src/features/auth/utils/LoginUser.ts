import userLogin from "@/features/auth/api/UserLogin";

import { AppDispatch } from "@/Store/store";
import { getLoginData } from "@/Store/Features/userLoginState";

import { LoginType } from "@/features/auth/schemas/LoginSchema";

import { UseFormReset } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type LoginUserProps = {
  data: LoginType;
  reset: UseFormReset<LoginType>;
  setLoginFailed: Dispatch<SetStateAction<string>>;
  router: AppRouterInstance;
  dispatch: AppDispatch;
};

const loginUser = async ({
  data,
  reset,
  setLoginFailed,
  router,
  dispatch,
}: LoginUserProps): Promise<void> => {
  const res = await userLogin(data);
  const { userData } = res;

  if (res.success) {
    dispatch(getLoginData(userData));
    router.push("/");
    reset();
  } else {
    setLoginFailed(res.message);
    let timerId = setTimeout(() => {
      setLoginFailed("");
      clearTimeout(timerId);
    }, 3000);
  }
};

export default loginUser;
