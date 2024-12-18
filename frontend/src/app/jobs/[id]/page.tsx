"use client";

import { useEffect } from "react";

type JobProps = {
  params: {
    id: string;
  };
};

const SingleJob = ({ params }: JobProps) => {
  const getSingleJob = async () => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
    const data = await res.json();
    const { job } = data;

    console.log(job);
  };

  useEffect(() => {
    getSingleJob();
  }, []);

  return <div>This is single job page.</div>;
};

export default SingleJob;
