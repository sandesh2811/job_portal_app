import Jobs from "@/Components/pages/Jobs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs",
};

const JobsPage = () => {
  return <Jobs />;
};

export default JobsPage;
