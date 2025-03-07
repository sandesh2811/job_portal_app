import handleBookmark from "@/features/bookmarks/utils/handleBookmarks";

import { BookmarkSchemaReturnType } from "@/Validators/ReturnDataTypeValidators";

import BookmarksMobile from "@/features/bookmarks/components/MobileScreen/BookmarksMobile";
import { useQueryClient } from "@tanstack/react-query";

type BookmarksContainerMobileProps = {
  userId: string;
  data: BookmarkSchemaReturnType | undefined;
};

const BookmarksContainerMobile = ({
  data,
  userId,
}: BookmarksContainerMobileProps) => {
  return data?.bookmarksOfUser?.map((bookmark) => (
    <div
      key={bookmark._id}
      className="flex items-center justify-between border-b-[1.2px] border-primaryText mid:hidden"
    >
      <BookmarksMobile bookmark={bookmark} />
      <RemoveBookmark jobId={bookmark.jobId._id} id={userId} />
    </div>
  ));
};

export default BookmarksContainerMobile;

type RemoveBookmarkProps = {
  jobId: string;
  id: string;
};

const RemoveBookmark = ({ jobId, id }: RemoveBookmarkProps) => {
  const queryClient = useQueryClient();

  return (
    <span
      onClick={() => handleBookmark({ queryClient, jobId, id })}
      className="cursor-pointer text-sm underline underline-offset-4"
    >
      Remove
    </span>
  );
};
