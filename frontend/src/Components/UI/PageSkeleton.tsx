import MainContainer from "../MainContainer";
import CardSkeleton from "./CardSkeleton";

const Skeleton = () => {
  return (
    <MainContainer className="my-8 min-h-[90vh] gap-8">
      {/* Searching Section */}

      <div className="h-[35px] w-[250px] animate-pulse bg-secondaryText"></div>

      {/* Card Section */}
      <CardSkeleton />

      {/* CTA Buttons Section*/}

      <div className="flex items-center justify-between">
        <div className="h-[40px] w-[75px] animate-pulse rounded-sm bg-secondaryText"></div>
        <div className="h-[40px] w-[75px] animate-pulse rounded-sm bg-secondaryText"></div>
      </div>
    </MainContainer>
  );
};

export default Skeleton;
