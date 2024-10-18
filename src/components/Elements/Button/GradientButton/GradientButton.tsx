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
          className={`${defaultStyles} py-2 px-10 text-2 md:text-xl lg:text-2xl lg:py-3 lg:px-16 ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    default: {
      return (
        <button
          className={`${defaultStyles} px-[24px] py-[2px] border border-white border-solid rounded-[10px] ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
  }
}
