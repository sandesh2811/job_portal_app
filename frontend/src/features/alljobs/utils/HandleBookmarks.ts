import setBookmark from "@/features/latestjobs/api/server_actions/setBookmark";

import { Dispatch, SetStateAction } from "react";

const handleBookmarks = async (
  jobId: string,
  userId: string,
  setBookmarkedJobs: Dispatch<SetStateAction<BookmarkedJobType>>,
  setBookmarkStatus: Dispatch<SetStateAction<string>>
) => {
  // Set or remove bookmarks in database
  const data = await setBookmark(jobId, userId);

  // Set the bookmarkedjobs for icon switching
  setBookmarkedJobs((prev) => ({
    ...prev,
    [jobId]: prev[jobId] ?? false ? false : true,
  }));

  setBookmarkStatus(data?.message);

  let timerId = setTimeout(() => {
    setBookmarkStatus("");
    clearTimeout(timerId);
  }, 3000);
};

export default handleBookmarks;
