import UpdateApplicationStatus from "@/features/singleJobApplication/api/actions/UpdateApplicationStatus";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { Dispatch, SetStateAction } from "react";

type handleJobApplicationStatusProps = {
  applicationId: string;
  setApplicationStatusRes: Dispatch<SetStateAction<string>>;
  router: AppRouterInstance;
  status: string;
};

const handleJobApplicationStatus = async ({
  applicationId,
  router,
  setApplicationStatusRes,
  status,
}: handleJobApplicationStatusProps) => {
  const response = await UpdateApplicationStatus(status, applicationId);
  setApplicationStatusRes(response.message);

  let timerId = setTimeout(() => {
    setApplicationStatusRes("");
    router.back();
    clearTimeout(timerId);
  }, 3000);
};

export default handleJobApplicationStatus;
