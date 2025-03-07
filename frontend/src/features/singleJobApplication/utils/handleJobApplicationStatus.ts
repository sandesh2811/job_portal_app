import UpdateApplicationStatus from "@/features/singleJobApplication/api/UpdateApplicationStatus";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";
import { QueryClient } from "@tanstack/react-query";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import toast from "react-hot-toast";

type handleJobApplicationStatusProps = {
  applicationId: string;
  router: AppRouterInstance;
  status: string;
  queryClient: QueryClient;
};

const handleJobApplicationStatus = async ({
  applicationId,
  router,
  status,
  queryClient,
}: handleJobApplicationStatusProps) => {
  const response = await UpdateApplicationStatus(status, applicationId);

  if (!response.success) {
    toast.error(response.message);
    return;
  }

  const queryKey = ["jobApplications"];

  toast.success(response.message);

  InvalidateAndRefetchQuery({ queryClient, queryKey });

  const timerId = setTimeout(() => {
    router.back();
    clearTimeout(timerId);
  }, 3000);
};

export default handleJobApplicationStatus;
