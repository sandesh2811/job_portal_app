import Card from "@/Components/UI/Card";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Button from "@/Components/UI/Button";

const LatestJobs = () => {
  return (
    <div className="min-h-[80vh] bg-blue-600 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col justify-evenly tracking-wide">
      <h2 className="text-2xl font-semibold">Latest Job Postings</h2>
      <div className="flex flex-col gap-6 mid:items-center md:flex-row flex-wrap md:justify-center ">
        <Card>
          {/* Top */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">Frontend Developer</h3>
            <div className="flex flex-col justify-between">
              <span className="text-sm">A and B IT Solutions</span>
              <span className="text-sm">Kumaripati, Lalitpur</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center ">
            <Link
              href="/"
              className="flex gap-2 items-center underline underline-offset-4 text-sm"
            >
              See more <GoArrowRight />
            </Link>
            <Button
              buttonType="Apply"
              size="small"
              className="text-primaryText flex gap-2 items-center "
            >
              Apply <GoArrowRight />
            </Button>
          </div>
        </Card>
        <Card>
          {/* Top */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">UI/UX Designer</h3>
            <div className="flex flex-col justify-between">
              <span className="text-sm">A and B IT Solutions</span>
              <span className="text-sm">Kumaripati, Lalitpur</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center ">
            <Link
              href="/"
              className="flex gap-2 items-center underline underline-offset-4 text-sm"
            >
              See more <GoArrowRight />
            </Link>
            <Button
              buttonType="Apply"
              size="small"
              className="text-primaryText flex gap-2 items-center "
            >
              Apply <GoArrowRight />
            </Button>
          </div>
        </Card>
        <Card>
          {/* Top */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">Devops Engineer</h3>
            <div className="flex flex-col justify-between">
              <span className="text-sm">A and B IT Solutions</span>
              <span className="text-sm">Kumaripati, Lalitpur</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center ">
            <Link
              href="/"
              className="flex gap-2 items-center underline underline-offset-4 text-sm"
            >
              See more <GoArrowRight />
            </Link>
            <Button
              buttonType="Apply"
              size="small"
              className="text-primaryText flex gap-2 items-center "
            >
              Apply <GoArrowRight />
            </Button>
          </div>
        </Card>
        <Card>
          {/* Top */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">UI/UX Designer</h3>
            <div className="flex flex-col justify-between">
              <span className="text-sm">A and B IT Solutions</span>
              <span className="text-sm">Kumaripati, Lalitpur</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center ">
            <Link
              href="/"
              className="flex gap-2 items-center underline underline-offset-4 text-sm"
            >
              See more <GoArrowRight />
            </Link>
            <Button
              buttonType="Apply"
              size="small"
              className="text-primaryText flex gap-2 items-center "
            >
              Apply <GoArrowRight />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LatestJobs;
