import Card from "./Card";

const CardSkeleton = () => {
  return (
    <>
      <div className="flex grid-cols-2 grid-rows-2 flex-wrap gap-4 mid:gap-6 md:grid lg:gap-10">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card key={idx} className="animate-pulse bg-secondaryText">
            {/* Headings */}

            <div className="mb-2 flex flex-col justify-between">
              <h3 className="mb-2 h-[20px] w-[200px] rounded-sm bg-gray-200/20"></h3>
              <div className="flex flex-col gap-1">
                <span className="h-[15px] w-[150px] animate-pulse rounded-sm bg-gray-200/20"></span>
                <span className="h-[15px] w-[100px] animate-pulse rounded-sm bg-gray-200/20"></span>
              </div>
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="h-[15px] w-[60px] animate-pulse rounded-sm bg-gray-200/20"></span>

              <span className="h-[15px] w-[60px] animate-pulse rounded-sm bg-gray-200/20"></span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardSkeleton;
