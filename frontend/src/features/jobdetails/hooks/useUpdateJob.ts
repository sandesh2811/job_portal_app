import { useMutation, useQueryClient } from "@tanstack/react-query";

import UpdateJob from "../api/UpdateJob";

const useUpdateJob = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: UpdateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobsPostedByEmployer"] });
    },
    onError: (err) => {
      console.log("Error deleting job!", err.message);
    },
  });

  return { mutateAsync };
};

export default useUpdateJob;
