"use client";

import setBookmark from "@/Actions/JobBookmarks/SetBookmarks/setBookmark";
import useGetAllBookmarks from "@/utils/Hooks/GetBookmarks/useGetAllBookmarks";

import Toast from "@/Components/UI/Toast";
import { GoX } from "react-icons/go";

import { useParams } from "next/navigation";
import { useState } from "react";

const Bookmarks = () => {
  const { id } = useParams();
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  //   Check if the id is of type string or not
  const userId = typeof id === "string" ? id : "";

  //   Fetch all the bookmarks made by user
  const { data, bookmarksLoading } = useGetAllBookmarks(userId);

  // Handling Bookmarks
  const handleBookmark = async (jobId: string, id: string) => {
    const data = await setBookmark(jobId, id);

    setBookmarkStatus(data?.message);

    let timerId = setTimeout(() => {
      setBookmarkStatus("");
      clearTimeout(timerId);
    }, 3000);
  };

  return (
    <div className="min-h-[80vh]">
      {/* Mobile Devices */}

      {!bookmarksLoading &&
        (data?.bookmarksOfUser.length === 0 ? (
          <h3>No bookmarks to show</h3>
        ) : (
          data?.bookmarksOfUser.map((bookmark: BookmarkType<JobType>) => (
            <div
              key={bookmark._id}
              className="md:hidden flex justify-between items-center border-b-[1.2px]"
            >
              <div className="flex flex-col gap-2 cursor-pointer lg:hover:bg-white/20 duration-300 ease-in-out py-4 mid:flex-row mid:justify-between">
                <span>{bookmark.jobId.title}</span>
                <span className="text-sm">
                  {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
                </span>
                <span className="text-sm">{bookmark.jobId.status}</span>
              </div>
              <span
                onClick={() => handleBookmark(bookmark.jobId._id, userId)}
                className="underline underline-offset-4 text-sm cursor-pointer"
              >
                Remove
              </span>
            </div>
          ))
        ))}

      {/* For laptop screens */}

      {data?.bookmarksOfUser.length === 0 ? (
        <h3>No bookmarks to show</h3>
      ) : (
        <table className="hidden mid:block w-full">
          <thead className="border-b-[1.3px]">
            <tr>
              <th className="w-1/5 font-normal py-6">Job Title</th>

              <th className="w-1/5 font-normal py-6">Salary</th>
              <th className="w-1/5 font-normal py-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {!bookmarksLoading &&
              data?.bookmarksOfUser.map((bookmark) => (
                <tr key={bookmark._id} className="border-b-[1.3px]">
                  <td className=" w-1/5 py-6 text-center px-5">
                    {bookmark.jobId.title}
                  </td>
                  <td className=" w-1/5 py-6 text-center px-5">
                    {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
                  </td>
                  <td className=" w-1/5 py-6 text-center px-5">
                    {bookmark.jobId.status}
                  </td>
                  <td
                    onClick={() => handleBookmark(bookmark.jobId._id, userId)}
                    className=" w-1/5 py-6 text-center px-5 underline underline-offset-4 cursor-pointer"
                  >
                    Remove
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {/* Toast Notification */}

      <div
        className={
          bookmarkStatus !== ""
            ? "absolute top-5 mid:right-10 right-2"
            : "hidden absolute top-5 mid:right-10 right-2"
        }
      >
        <Toast>
          <span>{bookmarkStatus}</span>
          <GoX size={20} className="absolute top-2 right-2 cursor-pointer" />
        </Toast>
      </div>
    </div>
  );
};

export default Bookmarks;
