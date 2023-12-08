import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

type ComponentType<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<U extends ElementType>({
  as,
  children,
  ...props
}: ComponentType<U>) {
  const Component = as || "div";

  return <Component {...props}> {children} </Component>;
}

export default Container;
