import { useMutation, useQueryClient } from "@tanstack/react-query";

import DeleteJob from "@/features/jobdetails/api/DeleteJob";

import toast from "react-hot-toast";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";

const useDeleteJob = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: DeleteJob,
    onSuccess: () => {
      InvalidateAndRefetchQuery({
        queryClient,
        queryKey: ["jobsPostedByEmployer", "allJobs"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutateAsync };
};

export default useDeleteJob;
