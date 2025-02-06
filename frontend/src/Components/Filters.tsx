import GetLoginData from "@/utils/GetLoginData";

import Link from "next/link";
import { useParams } from "next/navigation";

const EmployerOptions = [
  { name: "Posted Jobs", href: "/postedjobs" },
  { name: "Job Applications", href: "/jobapplications" },
  { name: "Create Job", href: "/createjob" },
];
const ApplierOptions = [
  { name: "Applied Jobs", href: "/appliedjobs" },
  { name: "Bookmarks", href: "/bookmarks" },
];

const Filters = () => {
  const { id } = useParams();
  const { loginData } = GetLoginData();

  return (
    <div className="min-h-[5vh] flex flex-col md:flex-row gap-4 justify-between items-center text-lg">
      <Link href={`/details/${id}`}>Profile</Link>
      {loginData.role === "employer" ? (
        <div className="flex-1 flex gap-4 items-center justify-end">
          {EmployerOptions.map((option) => {
            return (
              <Link key={option.name} href={`${option.href}/${id}`}>
                {option.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex-1 flex gap-4 items-center justify-end">
          {ApplierOptions.map((option) => {
            return (
              <Link key={option.name} href={`${option.href}/${id}`}>
                {option.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filters;
