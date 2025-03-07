import Details from "@/Components/pages/Details";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const AllDetails = async () => {
  return <Details />;
};

export default AllDetails;
