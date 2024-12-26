"use client";

import { useEffect, useState } from "react";

const GetSingleJob = (id: string) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    salary: "",
    required: "",
    experience: "",
    position: "",
    status: "",
    companyName: "",
    description: "",
  });

  const getSingleJob = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/jobs/${id}`);
      const data = await res.json();
      const { job } = data;

      setFormData({
        id: job._id,
        title: job.title,
        location: job.location,
        salary: job.salary,
        required: job.required,
        experience: job.experience,
        position: job.position,
        status: job.status,
        companyName: job.companyName,
        description: job.description,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleJob();
  }, []);

  return {
    formData,
  };
};

export default GetSingleJob;
