import { QueryClient } from "@tanstack/react-query";

type InvalidateAndRefetchQueryProps = {
  queryClient: QueryClient;
  queryKey: string[];
};

const InvalidateAndRefetchQuery = async ({
  queryClient,
  queryKey,
}: InvalidateAndRefetchQueryProps) => {
  if (!queryKey) {
    console.log("Query keys are reqiured!");
    return;
  }

  queryKey.map((key) => {
    queryClient.invalidateQueries({
      queryKey: [key],
      exact: false,
    });

    queryClient.refetchQueries({
      queryKey: [key],
    });
  });
};

export default InvalidateAndRefetchQuery;
