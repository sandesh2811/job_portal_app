import { BookmarkSchemaReturnType } from "@/Validators/ReturnDataTypeValidators";

import TableHeadings from "@/Components/UI/TableHeadings";
import BookmarksLaptop from "@/features/bookmarks/components/LaptopScreen/BookmarksLaptop";

import { Dispatch, SetStateAction } from "react";

const headings = ["Job Title", "Postion", "Status"];

type BookmarksTableContainerProps = {
  data: BookmarkSchemaReturnType | undefined;
  userId: string;
  setBookmarkStatus: Dispatch<SetStateAction<string>>;
};

const BookmarksTableContainer = ({
  data,
  userId,
  setBookmarkStatus,
}: BookmarksTableContainerProps) => {
  return (
    <table className="hidden mid:block w-full">
      <thead className="border-b-[1.3px]">
        <TableHeadings data={headings} />
      </thead>
      <tbody>
        {data?.bookmarksOfUser.map((bookmark) => (
          <BookmarksLaptop
            key={bookmark._id}
            bookmark={bookmark}
            id={userId}
            setBookmarkStatus={setBookmarkStatus}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookmarksTableContainer;
