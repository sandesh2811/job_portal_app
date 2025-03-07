import setBookmark from "@/features/bookmarks/api/setBookmark";
import InvalidateAndRefetchQuery from "@/utils/InvalidateAndRefetchQuery";
import { QueryClient } from "@tanstack/react-query";

import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

const handleBookmarks = async (
  queryClient: QueryClient,
  jobId: string,
  loginData: LoginDataType,
  setBookmarkedJobs: Dispatch<SetStateAction<BookmarkedJobType>>,
) => {
  if (!loginData.userId) return;
  if (loginData.role === "employer") return;

  // Set or remove bookmarks in database
  const data = await setBookmark(jobId, loginData.userId);

  // Set the bookmarkedjobs for icon switching
  setBookmarkedJobs((prev) => ({
    ...prev,
    [jobId]: (prev[jobId] ?? false) ? false : true,
  }));

  if (!data.success) {
    toast.error(data?.message);
  }

  toast.success(data?.message);

  InvalidateAndRefetchQuery({ queryClient, queryKey: ["bookmarks"] });
};

export default handleBookmarks;
