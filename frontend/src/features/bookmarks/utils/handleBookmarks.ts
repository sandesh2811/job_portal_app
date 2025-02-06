import setBookmark from "@/features/bookmarks/api/actions/setBookmark";

import { Dispatch, SetStateAction } from "react";

type HandleBookmarkType = {
  jobId: string;
  id: string;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const handleBookmark = async ({
  jobId,
  id,
  setBookmarkStatus,
}: HandleBookmarkType) => {
  const data = await setBookmark(jobId, id);

  setBookmarkStatus(data?.message);

  let timerId = setTimeout(() => {
    setBookmarkStatus("");
    clearTimeout(timerId);
  }, 3000);
};

export default handleBookmark;
