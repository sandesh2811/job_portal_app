import postNewJob from "@/features/createjob/api/postNewJob";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";

import toast from "react-hot-toast";

import { UseFormReset } from "react-hook-form";

type HandleJobCreationType = {
  formData: CreateJobType;
  reset: UseFormReset<CreateJobType>;
  userId: string;
};

const handleJobCreation = async ({
  formData,
  reset,
  userId,
}: HandleJobCreationType): Promise<boolean> => {
  const response = await postNewJob(formData, userId);

  if (!response.success) {
    toast.error(response.message);
    return false;
  }

  toast.success(response.message);
  reset();

  return response.success;
};

export default handleJobCreation;
