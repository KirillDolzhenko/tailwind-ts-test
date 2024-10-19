import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderOption from '../../Elements/HeaderOption/HeaderOption';
import { useContext } from 'react';
import classNames from 'classnames';
import { IoCloseOutline } from 'react-icons/io5';
import { ContextMenu } from '../../../App';

export default function Header() {
  const context = useContext(ContextMenu);

  return (
    <header className="py-7">
      <nav className="flex items-center justify-between uppercase">
        <a
          href="https://github.com/KirillDolzhenko/tailwind-ts-test"
          className="inline-block bg-[linear-gradient(30deg,var(--tw-gradient-stops))] from-[#9B51E0] to-[#3081ED] bg-clip-text text-[2rem] font-bold text-transparent"
        >
          NFTORE
        </a>
        <div
          className={classNames(
            `group/menu absolute bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center gap-10 gap-[15px] bg-[rgba(31,29,43,0.95)] p-10 transition duration-200 lg:relative lg:flex lg:gap-10 lg:bg-transparent`,
            context.state
              ? 'translate-x-0'
              : 'translate-x-full lg:translate-x-0',
          )}
        >
          <button
            className="mb-[100px] self-end lg:hidden"
            onClick={() => {
              if (undefined !== context.setState) {
                context.setState((active) => !active);
              }
            }}
          >
            <IoCloseOutline className="size-[25px] text-[#D7D7D7] transition duration-100 hover:text-white" />
          </button>

          <ul className="flex flex-col items-center gap-10 lg:flex-row">
            <HeaderOption>Home</HeaderOption>
            <HeaderOption>My profile</HeaderOption>
            <HeaderOption>Activity</HeaderOption>
            <HeaderOption>How it works</HeaderOption>
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 lg:gap-2 ssm:flex-row">
          <button className="rounded-[10px] border border-solid border-transparent px-3 py-1 text-[0.825rem] font-medium uppercase text-[#BCBCBC] transition duration-300 ease-in-out hover:border-white hover:text-white lg:px-9 ssm:px-5 ssm:py-3">
            Create
          </button>
          <button className="rounded-[10px] border border-solid border-transparent px-3 py-1 text-[0.825rem] font-medium uppercase text-[#BCBCBC] transition duration-300 ease-in-out hover:border-white hover:text-white lg:px-9 ssm:px-5 ssm:py-3">
            Sign In
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => {
            if (context.setState) {
              context.setState((active) => !active);
            }
          }}
        >
          <RxHamburgerMenu className="size-[25px] text-[#D7D7D7] transition duration-100 hover:text-white" />
        </button>
      </nav>
    </header>
  );
}
