import Logout from "@/features/Profile/api/UserLogout";

import { getLoginData } from "@/Store/Features/userLoginState";
import { AppDispatch } from "@/Store/store";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type HandleUserLogoutProps = {
  router: AppRouterInstance;
  dispatch: AppDispatch;
};

const handleUserLogout = async ({
  router,
  dispatch,
}: HandleUserLogoutProps) => {
  await Logout();

  dispatch(
    getLoginData({
      userName: "",
      userId: "",
      role: "",
    })
  );
  router.push("/");
};

export default handleUserLogout;
