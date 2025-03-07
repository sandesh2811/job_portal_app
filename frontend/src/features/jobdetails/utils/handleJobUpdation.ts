import UpdateJob from "@/features/jobdetails/api/UpdateJob";
import CompareForms from "@/utils/CompareFormData/CompareForm";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

type HandleJobUpdationType = {
  newdata: CreateJobType;
  formData: FormDataType;
  jobId: string;
  router: AppRouterInstance;
};

const handleJobUpdation = async ({
  newdata,
  formData,
  jobId,
  router,
}: HandleJobUpdationType): Promise<boolean> => {
  // Getting the changed attributes by comparing the two form data's
  const changedAttributes = CompareForms(formData, newdata);

  // Making a PATCH request and getting the response
  const response = await UpdateJob(jobId, changedAttributes);

  if (!response.success) {
    toast.error(response.message);
    return response.success;
  }
  toast.success(response.message);
  const routeTimerId = setTimeout(() => {
    router.back();
    clearTimeout(routeTimerId);
  }, 5000);

  return response.success;
};

export default handleJobUpdation;
