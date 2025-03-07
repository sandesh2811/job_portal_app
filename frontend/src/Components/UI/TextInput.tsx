import Input from "@/Components/UI/Input";

import { ComponentProps } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

type TextInputProps<T extends FieldValues> = ComponentProps<"input"> & {
  // yesma hamro control le chai useform ma use hune type lai infer gardincha so that the form fields are available to access
  control: Control<T>;
  text: string;
  //   Path kina use gariyo bhanda yesle k ensure garcha bhanda name chai form data ma bhayeko valid key(or path) sanga milcha.
  name: Path<T>;
};

const TextInput = <T extends { [key: string]: any }>({
  control,
  text,
  name,
  ...props
}: TextInputProps<T>) => {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-1 flex-col gap-2">
      <span className="text-sm font-semibold mid:text-base">{text}</span>
      <Input
        {...control.register(name)}
        type="text"
        name={name}
        autoComplete="off"
        {...props}
      />
      {errors[name] && (
        <span className="text-xs text-red-600 mid:text-sm">
          {errors[name].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default TextInput;
