import { EnumSize } from "../../../../types/enums";
import { IPropsGradientButton } from "../../../../types/props.types";

let defaultStyles =
  "transition ease-in-out duration-300 border-solid rounded-2xl border border-[#D7D7D7] hover:text-white hover:bg-gradient-to-r hover:from-[#9B51E0] hover:to-[#3081ED] hover:border-transparent";

export default function ({
  children,
  className,
  onClick,
  size = EnumSize.BIG,
}: IPropsGradientButton) {
  switch (size) {
    case EnumSize.BIG:
      return (
        <button
          className={`${defaultStyles} text-2 px-10 py-2 md:text-xl lg:px-16 lg:py-3 lg:text-2xl ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    default: {
      return (
        <button
          className={`${defaultStyles} rounded-[10px] border border-solid border-white px-[24px] py-[2px] ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  }
}
