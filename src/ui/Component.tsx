import {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";

type ComponentType<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Component<U extends ElementType>({
  as,
  children,
  ...props
}: ComponentType<U>) {
  const Components = as || "div";

  return <Components {...props}> {children} </Components>;
}

export default Component;
