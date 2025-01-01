import CardSkeleton from "./CardSkeleton";

const Skeleton = () => {
  return (
    <div className="min-h-[90vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 tracking-wide flex flex-col justify-evenly  gap-6">
      {/* Searching Section */}

      <div className="bg-gray-200 w-[305px] h-[50px] animate-pulse"></div>

      {/* Card Section */}
      <CardSkeleton />

      {/* CTA Buttons Section*/}

      <div className="flex justify-between items-center">
        <div className="bg-gray-200 w-[75px] h-[40px] rounded-md animate-pulse"></div>
        <div className="bg-gray-200 w-[75px] h-[40px] rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
