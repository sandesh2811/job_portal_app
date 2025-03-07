import userLogin from "@/features/auth/api/UserLogin";

import { AppDispatch } from "@/Store/store";
import { getLoginData } from "@/Store/Features/userLoginState";

import { LoginType } from "@/features/auth/schemas/LoginSchema";

import { UseFormReset } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

type LoginUserProps = {
  data: LoginType;
  reset: UseFormReset<LoginType>;
  router: AppRouterInstance;
  dispatch: AppDispatch;
};

const loginUser = async ({
  data,
  reset,
  router,
  dispatch,
}: LoginUserProps): Promise<void> => {
  const res = await userLogin(data);

  if (res.success) {
    const { userData } = res as LoginReturnType;
    dispatch(getLoginData(userData));
    router.push("/");
    reset();
  } else {
    toast.error(res.message);
  }
};

export default loginUser;
