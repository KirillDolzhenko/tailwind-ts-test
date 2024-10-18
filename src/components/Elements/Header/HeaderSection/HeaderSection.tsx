import { svgArrow } from "../../../../links/img.links";
import { IPropsChildren } from "../../../../types/props.types";

export default function ({ children }: IPropsChildren) {
  return (
    <div className="flex gap-1 justify-between align-bottom mb-[30px] ssm:mb-[60px]">
      <h3 className="text-3xl ssmAndMd:text-4xl md:text-5xl">{children}</h3>
      <button className="flex gap-[12px] items-center [&>svg]:hover:translate-x-0.5 [&>span]:hover:text-[white] [&>svg]:hover:fill-white">
        <span className="text-2xl text-[#D7D7D7] transition">View all</span>
        <svg className="fill-[#D7D7D7] w-[25px] h-[25px] relative z-10 transition duration-150">
          <use href={`${svgArrow}#icon`} />
        </svg>
      </button>
    </div>
  );
}
