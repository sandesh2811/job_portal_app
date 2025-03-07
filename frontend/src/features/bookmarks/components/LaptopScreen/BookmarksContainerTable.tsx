import { BookmarkSchemaReturnType } from "@/Validators/ReturnDataTypeValidators";

import TableHeadings from "@/Components/UI/TableHeadings";
import BookmarksLaptop from "@/features/bookmarks/components/LaptopScreen/BookmarksLaptop";

export const headings = ["Job Title", "Postion", "Status"];

type BookmarksTableContainerProps = {
  data: BookmarkSchemaReturnType | undefined;
  userId: string;
};

const BookmarksTableContainer = ({
  data,
  userId,
}: BookmarksTableContainerProps) => {
  return (
    <table className="hidden w-full mid:block">
      <thead className="border-2 border-primaryText">
        <TableHeadings data={headings} />
      </thead>
      <tbody>
        {data?.bookmarksOfUser.map((bookmark) => (
          <BookmarksLaptop key={bookmark._id} bookmark={bookmark} id={userId} />
        ))}
      </tbody>
    </table>
  );
};

export default BookmarksTableContainer;
