import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputType = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="control">
        <label htmlFor={id}> {label} </label>
        <input id={id} {...props} ref={ref} />
      </div>
    );
  }
);

export default Input;
