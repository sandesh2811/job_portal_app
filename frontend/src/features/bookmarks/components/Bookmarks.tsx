"use client";

import useGetAllBookmarks from "@/features/bookmarks/hooks/useGetAllBookmarks";
import CheckIdType from "@/utils/CheckIdType";

import NoBookmarksMobile from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksMobile";
import NoBookmarksLaptop from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksLaptop";
import BookmarksContainerMobile from "@/features/bookmarks/components/MobileScreen/BookmarksContainerMobile";
import ToastContainer from "@/Components/Toast/ToastContainer";
import BookmarksTableContainer from "@/features/bookmarks/components/LaptopScreen/BookmarksContainerTable";

import { useParams } from "next/navigation";
import { useState } from "react";

const Bookmarks = () => {
  const { id } = useParams();
  const [bookmarkStatus, setBookmarkStatus] = useState<string>("");

  //   Check if the id is of type string or not
  const userId = CheckIdType(id);

  //   Fetch all the bookmarks made by user
  const { data, bookmarksLoading } = useGetAllBookmarks(userId);

  return (
    <div className="min-h-[80vh]">
      {/* Mobile Devices */}

      {!bookmarksLoading &&
        (data?.bookmarksOfUser.length === 0 ? (
          <NoBookmarksMobile
            href="/jobs"
            title="No bookmarks to show"
            buttonText="Bookmark Jobs?"
          />
        ) : (
          <BookmarksContainerMobile
            setBookmarkStatus={setBookmarkStatus}
            data={data}
            userId={userId}
          />
        ))}

      {/* For laptop screens */}

      {!bookmarksLoading &&
        (data?.bookmarksOfUser.length === 0 ? (
          <NoBookmarksLaptop
            href="/jobs"
            title="No bookmarks to show"
            buttonText="Bookmark Jobs?"
          />
        ) : (
          <BookmarksTableContainer
            setBookmarkStatus={setBookmarkStatus}
            data={data}
            userId={userId}
          />
        ))}

      {/* Toast Notification */}
      <ToastContainer value={bookmarkStatus} />
    </div>
  );
};

export default Bookmarks;
