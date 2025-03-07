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

const Filters = ({ pathname }: { pathname: string }) => {
  const { id } = useParams();
  const { loginData } = GetLoginData();

  return (
    <div className="flex min-h-[5vh] flex-col items-center justify-between gap-4 text-lg mid:flex-row">
      <Link
        className={
          pathname.startsWith("/details") ? "underline underline-offset-4" : ""
        }
        href={`/details/${id}`}
      >
        Profile
      </Link>
      {loginData.role === "employer" ? (
        <div className="flex flex-1 items-center justify-end gap-4">
          {EmployerOptions.map((option) => {
            return (
              <Link
                key={option.name}
                href={`${option.href}/${id}`}
                className={
                  pathname.startsWith(option.href)
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                {option.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-end gap-4">
          {ApplierOptions.map((option) => {
            return (
              <Link
                key={option.name}
                href={`${option.href}/${id}`}
                className={
                  pathname.startsWith(option.href)
                    ? "underline underline-offset-4"
                    : ""
                }
              >
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
