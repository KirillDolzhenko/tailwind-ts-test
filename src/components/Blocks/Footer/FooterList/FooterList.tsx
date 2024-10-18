import { IPropsFooterList } from '../../../../types/props.types';

export default function FooterList({ title, elements }: IPropsFooterList) {
  return (
    <div>
      <h6 className="mb-3 text-[30px] lg:mb-5 lg:text-[40px]">{title}</h6>
      <ul className="flex flex-col gap-1 lg:gap-4">
        {elements.map((el) => (
          <li>
            <a
              className="text-[#D7D7D7] transition duration-200 hover:text-[white]"
              href="#"
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
