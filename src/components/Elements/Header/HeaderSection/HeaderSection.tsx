import { svgArrow } from '../../../../links/img.links';
import { IPropsChildren } from '../../../../types/props.types';

export default function HeaderSection({ children }: IPropsChildren) {
  return (
    <div className="mb-[30px] flex justify-between gap-1 align-bottom ssm:mb-[60px]">
      <h3 className="text-3xl md:text-5xl ssmAndMd:text-4xl">{children}</h3>
      <button className="flex items-center gap-[12px] [&>span]:hover:text-[white] [&>svg]:hover:translate-x-0.5 [&>svg]:hover:fill-white">
        <span className="text-2xl text-[#D7D7D7] transition">View all</span>
        <svg className="relative z-10 h-[25px] w-[25px] fill-[#D7D7D7] transition duration-150">
          <use href={`${svgArrow}#icon`} />
        </svg>
      </button>
    </div>
  );
}
