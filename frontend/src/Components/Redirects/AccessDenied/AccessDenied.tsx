"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const intervalId = setInterval(() => {
      if (signal.aborted) {
        return;
      }
      if (counter !== 0 || counter > 0) {
        setCounter((prev) => prev - 1);
      }
    }, 1000);
    counter === 0 && router.back();

    return () => {
      clearInterval(intervalId);
      controller.abort();
    };
  }, [counter]);

  return (
    <span className="text-sm">
      Redirecting to previous page in : {counter} seconds
    </span>
  );
};

const AccessDenied = () => {
  return (
    <div className="min-h-[70vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col items-center justify-center gap-6">
      <h3 className="text-xl">Access Denied!</h3>
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-9xl">403</h1>
        <>
          <Counter />
          <div className="flex gap-1 text-sm">
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
            <span>with different account?</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default AccessDenied;
