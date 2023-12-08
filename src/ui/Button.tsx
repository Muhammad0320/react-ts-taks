import { type ComponentPropsWithoutRef } from "react";

type ButtonType = {
  el: string;
} & ComponentPropsWithoutRef<"button">;

type LinkType = {
  el: string;
} & ComponentPropsWithoutRef<"a">;

const Button = () => {
  return <div></div>;
};

export default Button;
