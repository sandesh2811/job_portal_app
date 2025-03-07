const EmployerOptions = [
  "Employer",
  "Create Job",
  "Update Job",
  "Delete Job",
  "Review Applications",
];

const ApplierOptions = ["Applier", "Bookmark Jobs", "Apply Jobs"];

const Banner = () => {
  return (
    <div className="mb-16 flex cursor-default flex-col md:mb-20 lg:mb-36">
      <div className="flex items-center justify-center gap-4 whitespace-nowrap">
        <EmployerContainer />
      </div>
      <div className="relative flex items-center justify-center gap-4 whitespace-nowrap">
        <ApplierContainer />
      </div>
    </div>
  );
};

export default Banner;

const EmployerContainer = () => {
  return (
    <>
      {EmployerOptions.concat(EmployerOptions).map((option, idx) => {
        return (
          <div key={idx} className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-semibold md:text-4xl midLg:text-5xl lg:text-[4vw]">
              {option}
            </h2>
            <span className="h-[24px] w-[24px] rounded-full bg-primaryText"></span>
          </div>
        );
      })}
    </>
  );
};

const ApplierContainer = () => {
  return (
    <>
      {ApplierOptions.concat(ApplierOptions).map((option, idx) => {
        return (
          <div key={idx} className="justify-3enter flex items-center gap-4">
            <h2 className="text-3xl font-semibold md:text-4xl midLg:text-5xl lg:text-[4vw]">
              {option}
            </h2>
            <span className="h-[24px] w-[24px] rounded-full bg-primaryText"></span>
          </div>
        );
      })}
    </>
  );
};
