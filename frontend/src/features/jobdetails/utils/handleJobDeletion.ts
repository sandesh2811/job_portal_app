import DeleteJob from "@/features/jobdetails/api/actions/DeleteJob";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

type HandleJobDeletionType = {
  jobId: string;
  setJobSettings: Dispatch<SetStateAction<string>>;
  router: AppRouterInstance;
};

const handleJobDeletion = async ({
  jobId,
  setJobSettings,
  router,
}: HandleJobDeletionType) => {
  const response = await DeleteJob(jobId);
  setJobSettings(response.message);
  let timerId = setTimeout(() => {
    setJobSettings("");
    clearTimeout(timerId);
  }, 3000);

  if (response.success) {
    let routeTimerId = setTimeout(() => {
      router.back();
      clearTimeout(routeTimerId);
    }, 5000);
  }
};

export default handleJobDeletion;
