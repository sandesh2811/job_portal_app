import handleBookmark from "@/features/bookmarks/utils/handleBookmarks";

import { BookmarkSchemaReturnType } from "@/Validators/ReturnDataTypeValidators";

import BookmarksMobile from "@/features/bookmarks/components/MobileScreen/BookmarksMobile";

import { Dispatch, SetStateAction } from "react";

type BookmarksContainerMobileProps = {
  userId: string;
  data: BookmarkSchemaReturnType | undefined;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const BookmarksContainerMobile = ({
  data,
  userId,
  setBookmarkStatus,
}: BookmarksContainerMobileProps) => {
  return data?.bookmarksOfUser?.map((bookmark) => (
    <div
      key={bookmark._id}
      className="md:hidden flex justify-between items-center border-b-[1.2px]"
    >
      <BookmarksMobile bookmark={bookmark} />
      <RemoveBookmark
        setBookmarkStatus={setBookmarkStatus}
        jobId={bookmark.jobId._id}
        id={userId}
      />
    </div>
  ));
};

export default BookmarksContainerMobile;

type RemoveBookmarkProps = {
  jobId: string;
  id: string;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const RemoveBookmark = ({
  jobId,
  id,
  setBookmarkStatus,
}: RemoveBookmarkProps) => {
  return (
    <span
      onClick={() => handleBookmark({ jobId, id, setBookmarkStatus })}
      className="underline underline-offset-4 text-sm cursor-pointer"
    >
      Remove
    </span>
  );
};
