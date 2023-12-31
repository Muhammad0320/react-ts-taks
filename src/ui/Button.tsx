import { type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonPropType = {
  el: "button";
  textOnly?: boolean;
} & ComponentPropsWithoutRef<"button">;

type LinkPropType = {
  el: "link";
  to: string;
  textOnly?: boolean;
} & LinkProps;

const Button = (props: LinkPropType | ButtonPropType) => {
  if (props.el === "link") {
    return (
      <Link
        to={props.to}
        className={`${props.textOnly ? "button--text-only" : null}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`button ${props.textOnly ? "button--text-only" : null} `}
      {...props}
    >
      {" "}
      {props.children}{" "}
    </button>
  );
};

export default Button;
