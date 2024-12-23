import Link from "next/link";
import { useParams } from "next/navigation";

// Make active links

const Filters = () => {
  const { id } = useParams();

  return (
    <div className="min-h-[5vh] flex justify-between items-center text-lg">
      <Link href={`/details/${id}`}>Profile</Link>
      <div className="flex-1 flex gap-4 items-center justify-end">
        <Link href={`/postedjobs/${id}`}>Posted Jobs</Link>
        <Link href={`/jobapplications/${id}`}>Job Applications</Link>
        <Link href={`/createjob/${id}`}>Create Job</Link>
      </div>
    </div>
  );
};

export default Filters;
