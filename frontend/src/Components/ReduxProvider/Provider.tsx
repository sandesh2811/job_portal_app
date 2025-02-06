"use client";

import { GlobalStore } from "@/Store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={GlobalStore}>{children}</Provider>;
};

export default Providers;
