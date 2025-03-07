"use client";

import useGetAllBookmarks from "@/features/bookmarks/hooks/useGetAllBookmarks";
import CheckIdType from "@/utils/CheckIdType";

import NoBookmarksMobile from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksMobile";
import NoBookmarksLaptop from "@/Components/FallbackUI/NoJobsOrJobApplicationsOrBookmarksLaptop";
import BookmarksContainerMobile from "@/features/bookmarks/components/MobileScreen/BookmarksContainerMobile";
import BookmarksTableContainer, {
  headings,
} from "@/features/bookmarks/components/LaptopScreen/BookmarksContainerTable";
import Loading from "@/Components/Loading/PostedJobs/Loading";

import { useParams } from "next/navigation";

const Bookmarks = () => {
  const { id } = useParams();

  //   Check if the id is of type string or not
  const userId = CheckIdType(id);

  //   Fetch all the bookmarks made by user
  const { data, bookmarksLoading } = useGetAllBookmarks(userId);

  if (bookmarksLoading) {
    return <Loading headings={headings} dataLength={3} colsNumber={4} />;
  }

  return (
    <div>
      {/* Mobile Devices */}

      {!bookmarksLoading &&
        (data?.bookmarksOfUser.length === 0 ? (
          <NoBookmarksMobile
            href="/jobs"
            title="No bookmarks to show"
            buttonText="Bookmark Jobs?"
          />
        ) : (
          <BookmarksContainerMobile data={data} userId={userId} />
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
          <BookmarksTableContainer data={data} userId={userId} />
        ))}
    </div>
  );
};

export default Bookmarks;
