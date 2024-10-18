import { ReactNode } from "react";
import { IPropsChildren } from "../../../types/props.types";
import classNames from "classnames";

let defaultClass = "max-w-7xl mx-auto px-[10px] md:px-[20px]";

export default function ({ children, className }: IPropsChildren) {
  return <div className={classNames(defaultClass, className)}>{children}</div>;
}
