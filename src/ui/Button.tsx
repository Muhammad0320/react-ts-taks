import { ComponentPropsWithoutRef } from "react";

type ButtonType = {
  el: string;
} & ComponentPropsWithoutRef<"button">;

const Button = () => {
  return <div></div>;
};

export default Button;
