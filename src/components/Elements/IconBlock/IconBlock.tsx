import classNames from 'classnames';
import { imgRectBg } from '../../../links/img.links';
import { IPropsIconBlock } from '../../../types/props.types';

const defaultStyles =
  'relative flex flex-col items-center gap-[20px] transition duration-200 hover:scale-110 z-10';

export default function IconBlock({
  children,
  Icon,
  className,
}: IPropsIconBlock) {
  return (
    <li className={classNames(defaultStyles, className)}>
      <div className="w-100% relative h-[138px] max-w-[150px] select-none [&>svg]:hover:text-white">
        <img
          className="absolute left-0 top-0 z-10 h-[100%] w-[100%]"
          src={imgRectBg}
          alt="rectangle-of-backround"
        />
        <Icon className="relative z-20 mx-[47px] my-[40px] h-[56px] w-[56px] text-[#D7D7D7] transition duration-200" />
      </div>
      <p className="max-w-[200px] text-center">{children}</p>
    </li>
  );
}
