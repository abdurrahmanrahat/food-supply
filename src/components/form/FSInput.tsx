import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const FSInput = ({ type, name, label }: TInputProps) => {
  return (
    <div className="md:text-[16px] mb-5">
      {label ? label : null}
      <Controller
        name={name} // register by controller
        render={({ field }) => (
          <Input className="text-[17px]" {...field} type={type} id={name} />
        )}
      />
    </div>
  );
};

export default FSInput;
