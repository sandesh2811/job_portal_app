type TableHeadingsProps = {
  data: string[];
};

const TableHeadings = ({ data }: TableHeadingsProps) => {
  return (
    <tr>
      {data.map((heading) => {
        return (
          <th
            key={heading}
            className="w-1/5 border-r-2 border-primaryText py-6 text-xl font-semibold"
          >
            {heading}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeadings;
