import classNames from "classnames";
import { imgRectBg } from "../../../links/img.links";
import { IPropsChildren, IPropsIconBlock } from "../../../types/props.types";

let defaultStyles =
  "relative flex flex-col items-center gap-[20px] transition duration-200 hover:scale-110 z-10";

export default function ({ children, Icon, className }: IPropsIconBlock) {
  return (
    <li className={classNames(defaultStyles, className)}>
      <div className="[&>svg]:hover:text-white max-w-[150px] w-100% h-[138px] relative select-none">
        <img
          className="absolute top-0 left-0 w-[100%] h-[100%] z-10"
          src={imgRectBg}
          alt="rectangle-of-backround"
        />
        <Icon className="transition duration-200 relative w-[56px] h-[56px] text-[#D7D7D7] mx-[47px] my-[40px] z-20" />
      </div>
      <p className="max-w-[200px] text-center">{children}</p>
    </li>
  );
}
