import postNewJob from "@/features/createjob/api/actions/postNewJob";

import { CreateJobType } from "@/features/createjob/schemas/CreateJobSchema";

import { UseFormReset } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

type HandleJobCreationType = {
  formData: CreateJobType;
  setJobCreationRes: Dispatch<SetStateAction<string>>;
  reset: UseFormReset<CreateJobType>;
  userId: string;
};

const handleJobCreation = async ({
  formData,
  setJobCreationRes,
  reset,
  userId,
}: HandleJobCreationType): Promise<void> => {
  const response = await postNewJob(formData, userId);
  setJobCreationRes(response.message);
  let timerId = setTimeout(() => {
    setJobCreationRes("");
    clearTimeout(timerId);
  }, 2000);
  reset();
};

export default handleJobCreation;
