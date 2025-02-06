import handleBookmark from "@/features/bookmarks/utils/handleBookmarks";

import { Dispatch, SetStateAction } from "react";

type BookmarksLaptopProps = {
  bookmark: BookmarkType<JobType>;
  id: string;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const BookmarksLaptop = ({
  bookmark,
  id,
  setBookmarkStatus,
}: BookmarksLaptopProps) => {
  const jobId = bookmark.jobId._id;
  return (
    <tr className="border-b-[1.3px]">
      <td className=" w-1/5 py-6 text-center px-5">{bookmark.jobId.title}</td>
      <td className=" w-1/5 py-6 text-center px-5">
        {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
      </td>
      <td className=" w-1/5 py-6 text-center px-5">{bookmark.jobId.status}</td>
      <td
        onClick={() => handleBookmark({ jobId, id, setBookmarkStatus })}
        className=" w-1/5 py-6 text-center px-5 underline underline-offset-4 cursor-pointer"
      >
        Remove
      </td>
    </tr>
  );
};

export default BookmarksLaptop;
