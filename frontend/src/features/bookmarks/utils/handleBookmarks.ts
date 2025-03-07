import setBookmark from "@/features/bookmarks/api/setBookmark";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";
import { QueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

type HandleBookmarkType = {
  queryClient: QueryClient;
  jobId: string;
  id: string;
};

const handleBookmark = async ({
  queryClient,
  jobId,
  id,
}: HandleBookmarkType) => {
  const data = await setBookmark(jobId, id);

  if (!data.success) {
    toast.error(data.message);
    return;
  }

  toast.success(data.message);

  InvalidateAndRefetchQuery({ queryClient, queryKey: ["bookmarks"] });
};

export default handleBookmark;
