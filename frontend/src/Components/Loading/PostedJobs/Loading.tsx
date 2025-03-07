const Loading = ({
  headings,
  dataLength,
  colsNumber,
}: {
  headings: string[];
  colsNumber: number;
  dataLength: number;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {Array.from({ length: dataLength }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-[150px] cursor-pointer flex-col gap-4 border-b-[1.2px] border-primaryText py-4 mid:hidden mid:flex-row mid:justify-between"
          >
            <span className="h-[10px] w-[200px] animate-pulse rounded-sm bg-secondaryText"></span>
            <span className="h-[10px] w-[150px] animate-pulse rounded-sm bg-secondaryText"></span>
            <span className="h-[10px] w-[120px] animate-pulse rounded-sm bg-secondaryText"></span>
            <span className="h-[10px] w-[100px] animate-pulse rounded-sm bg-secondaryText"></span>
          </div>
        ))}
      </div>
      <table className="hidden w-full mid:table">
        <thead className="h-[60px] w-full border-2 border-primaryText">
          <tr>
            {headings.map((heading, idx) => (
              <th
                key={idx}
                className="w-1/5 border-r-2 border-primaryText py-6 text-xl font-semibold"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: dataLength }).map((_, idx) => (
            <tr
              key={idx}
              className="h-[90px] w-full border-2 border-primaryText"
            >
              {Array.from({ length: colsNumber }).map((_, idx) => (
                <td
                  key={idx}
                  className="w-1/5 border-r-2 border-primaryText p-6 text-center"
                >
                  <span className="block h-[20px] animate-pulse rounded-md bg-primaryText"></span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loading;
