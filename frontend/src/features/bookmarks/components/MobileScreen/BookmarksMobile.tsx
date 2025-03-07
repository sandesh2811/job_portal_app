type BookmarksMobileProps = {
  bookmark: BookmarkType<JobType>;
};

const BookmarksMobile = ({ bookmark }: BookmarksMobileProps) => {
  return (
    <div className="flex cursor-pointer flex-col gap-2 py-4 mid:flex-row mid:justify-between">
      <span>{bookmark.jobId.title}</span>
      <span className="text-sm">
        {bookmark.jobId.salaryFrom} - {bookmark.jobId.salaryTo}
      </span>
      <span className="text-sm">{bookmark.jobId.status}</span>
    </div>
  );
};

export default BookmarksMobile;
