import Card from "./Card";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mid:items-center md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center">
      <Card className="bg-gray-400">
        {/* Headings */}

        <div className="flex flex-col gap-1">
          <h3 className="bg-gray-200 w-[250px] h-[40px] rounded-md animate-pulse"></h3>
          <div className="flex flex-col gap-1">
            <span className="bg-gray-200 w-[150px] h-[15px] rounded-md animate-pulse"></span>
            <span className="bg-gray-200 w-[100px] h-[15px] rounded-md animate-pulse"></span>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center ">
          <span className="bg-gray-200 w-[75px] h-[30px] rounded-md animate-pulse"></span>

          <span className="bg-gray-200 w-[75px] h-[30px] rounded-md animate-pulse"></span>
        </div>
      </Card>
    </div>
  );
};

export default CardSkeleton;
