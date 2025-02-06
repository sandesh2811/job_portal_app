import UpdateJob from "@/features/jobdetails/api/actions/UpdateJob";
import CompareForms from "@/utils/CompareFormData/CompareForm";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";
import { Dispatch, SetStateAction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type HandleJobUpdationType = {
  newdata: CreateJobType;
  formData: FormDataType;
  setJobSettings: Dispatch<SetStateAction<string>>;
  jobId: string;
  router: AppRouterInstance;
};

const handleJobUpdation = async ({
  newdata,
  formData,
  setJobSettings,
  jobId,
  router,
}: HandleJobUpdationType) => {
  // Getting the changed attributes by comparing the two form data's
  const changedAttributes = CompareForms(formData, newdata);

  // Making a PATCH request and getting the response
  const response = await UpdateJob(jobId, changedAttributes);

  // For toast message & routing
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

export default handleJobUpdation;
