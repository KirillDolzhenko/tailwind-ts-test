import classNames from "classnames";
import { IPropsChildren } from "../../../types/props.types";

let defaultClass = "[transition:background-color,ease,0.9s] duration-200 tracking-[1.5px] relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:block after:h-[1px] after:scale-x-0 hover:after:scale-100 after:bg-[linear-gradient(30deg,var(--tw-gradient-stops))] after:from-[#9B51E0] after:to-[#3081ED] [&>a]:font-medium bg-[#BCBCBC] hover:bg-[linear-gradient(30deg,var(--tw-gradient-stops))] hover:[&>a]:font-bold hover:from-[#9B51E0] hover:to-[#3081ED] inline-block text-transparent bg-clip-text";

export default function ({ children, className }: IPropsChildren) {
  return (
    <li className={classNames(defaultClass, className)}>
      <a href="">{children}</a>
    </li>
  );
}
