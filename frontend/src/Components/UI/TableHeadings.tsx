type TableHeadingsProps = {
  data: string[];
};

const TableHeadings = ({ data }: TableHeadingsProps) => {
  return (
    <tr>
      {data.map((heading) => {
        return (
          <th key={heading} className="w-1/5 font-normal py-6">
            {heading}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeadings;
