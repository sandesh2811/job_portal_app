type SelectOptionProps = {
  value: string | undefined;
  title: string | undefined;
};

const SelectOption = ({ value, title }: SelectOptionProps) => {
  return (
    <option className="text-background" value={value}>
      {title}
    </option>
  );
};

export default SelectOption;
