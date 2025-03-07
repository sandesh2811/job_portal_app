import handleBookmark from "@/features/bookmarks/utils/handleBookmarks";
import { useQueryClient } from "@tanstack/react-query";

type BookmarksLaptopProps = {
  bookmark: BookmarkType<JobType>;
  id: string;
};

const BookmarksLaptop = ({ bookmark, id }: BookmarksLaptopProps) => {
  const jobId = bookmark.jobId._id;

  const queryClient = useQueryClient();

  return (
    <tr className="border-2 border-primaryText">
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {bookmark.jobId.title}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
      </td>
      <td className="w-1/5 border-r-2 border-primaryText px-5 py-6 text-center">
        {bookmark.jobId.status}
      </td>
      <td
        onClick={() => handleBookmark({ queryClient, jobId, id })}
        className="w-1/5 cursor-pointer px-5 py-6 text-center underline underline-offset-4"
      >
        Remove
      </td>
    </tr>
  );
};

export default BookmarksLaptop;
