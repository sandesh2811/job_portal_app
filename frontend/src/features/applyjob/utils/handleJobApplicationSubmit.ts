import postJobApplication from "@/features/applyjob/api/postJobApplication";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";

import { JobApplicationType } from "@/features/applyjob/schemas/JobApplicationSchema";

import { QueryClient } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UseFormReset } from "react-hook-form";
import toast from "react-hot-toast";

type HandleJobApplicationSubmit = {
  data: JobApplicationType;
  jobId: string;
  userId: string;
  router: AppRouterInstance;
  reset: UseFormReset<JobApplicationType>;
  queryClient: QueryClient;
};

const handleJobApplicationSubmit = async ({
  data,
  jobId,
  router,
  userId,
  reset,
  queryClient,
}: HandleJobApplicationSubmit): Promise<void> => {
  const formData = new FormData();

  // Appending all the form data into new form data for only required data.

  formData.append("applierId", userId);

  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      if (key === "file") {
        formData.append(key, value[0]);
      }
      formData.append(key, value);
    }
  });

  const res = await postJobApplication(jobId, formData);

  if (!res.success) {
    toast.error(res.message);
    return;
  }

  toast.success(res.message);
  reset();

  const routeTimerId = setTimeout(() => {
    router.push("/");
    clearTimeout(routeTimerId);
  }, 5000);

  InvalidateAndRefetchQuery({ queryClient, queryKey: ["appliedJobs"] });
};

export default handleJobApplicationSubmit;
