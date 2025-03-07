import Logout from "@/features/Profile/api/UserLogout";

import { getLoginData } from "@/Store/Features/userLoginState";
import { AppDispatch } from "@/Store/store";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

type HandleUserLogoutProps = {
  router: AppRouterInstance;
  dispatch: AppDispatch;
};

const handleUserLogout = async ({
  router,
  dispatch,
}: HandleUserLogoutProps) => {
  const response = await Logout();

  if (response.success) {
    dispatch(
      getLoginData({
        userName: "",
        userId: "",
        role: "",
      }),
    );
    router.push("/");
  } else {
    toast.error(response.message);
  }
};

export default handleUserLogout;
