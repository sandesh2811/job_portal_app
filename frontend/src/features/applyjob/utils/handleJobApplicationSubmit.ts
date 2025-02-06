import postJobApplication from "@/features/applyjob/api/actions/postJobApplication";

import { JobApplicationType } from "@/features/applyjob/schemas/JobApplicationSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { UseFormReset } from "react-hook-form";

type HandleJobApplicationSubmit = {
  data: JobApplicationType;
  jobId: string;
  userId: string;
  setapplicationRes: Dispatch<SetStateAction<string>>;
  router: AppRouterInstance;
  reset: UseFormReset<JobApplicationType>;
};

const handleJobApplicationSubmit = async ({
  data,
  jobId,
  router,
  setapplicationRes,
  userId,
  reset,
}: HandleJobApplicationSubmit): Promise<void> => {
  const formData = new FormData();

  // Appending all the form data into new form data for only required data.
  formData.append("applierId", userId);
  formData.append("fullname", data.fullname);
  formData.append("phonenumber", data.phonenumber);
  formData.append("experience", data.experience);
  formData.append("email", data.email);
  formData.append("file", data.file[0]);

  const res = await postJobApplication(jobId, formData);

  setapplicationRes(res.message);
  let timerId = setTimeout(() => {
    setapplicationRes("");
    clearTimeout(timerId);
  }, 2000);
  reset();

  if (res.success) {
    let routeTimerId = setTimeout(() => {
      router.push("/");
      clearTimeout(routeTimerId);
    }, 5000);
  }
};

export default handleJobApplicationSubmit;
