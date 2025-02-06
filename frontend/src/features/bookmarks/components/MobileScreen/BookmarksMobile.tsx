type BookmarksMobileProps = {
  bookmark: BookmarkType<JobType>;
};

const BookmarksMobile = ({ bookmark }: BookmarksMobileProps) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer py-4 mid:flex-row mid:justify-between">
      <span>{bookmark.jobId.title}</span>
      <span className="text-sm">
        {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
      </span>
      <span className="text-sm">{bookmark.jobId.status}</span>
    </div>
  );
};

export default BookmarksMobile;
