import AccessDenied from "@/Components/AccessDenied";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Denied",
};

const AccessDeniedPage = () => {
  return (
    <>
      <AccessDenied />
    </>
  );
};

export default AccessDeniedPage;
