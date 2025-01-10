"use client";

import { useEffect, useState } from "react";

const GetSingleJob = (id: string) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    salaryFrom: "",
    salaryTo: "",
    required: "",
    skills: "",
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
        salaryFrom: job.salaryFrom,
        salaryTo: job.salaryTo,
        required: job.required,
        skills: job.skills,
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
