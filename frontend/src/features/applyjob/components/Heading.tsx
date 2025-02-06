import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg leading-6 md:text-xl">
        Please fill out the form inorder to apply for the job.
      </p>
      <span className="text-xs text-secondaryText md:text-sm">
        NOTE: All the fields are required.
      </span>
    </div>
  );
};

export default Heading;
