import { type ComponentPropsWithoutRef } from "react";

type ButtonPropType = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type LinkPropType = {
  el: "link";
} & ComponentPropsWithoutRef<"a">;
1;
const Button = (props: LinkPropType | ButtonPropType) => {
  if (props.el === "link") {
    return <a {...props}>{props.children}</a>;
  }

  return <button {...props}> {props.children} </button>;
};

export default Button;
