import { RxHamburgerMenu } from "react-icons/rx";
import HeaderOption from "../../Elements/HeaderOption/HeaderOption";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import { ContextMenu } from "../../../App";

export default function () {
  // let [menuActive, setMenuActive] = useState<boolean>(false);
  let context = useContext(ContextMenu);

  // useEffect(() => {
  //   console.log("menu ", menuActive);
  // }, [menuActive]);

  return (
    <header className="py-7">
      <nav className="flex justify-between items-center uppercase">
        <a className="text-[2rem] font-bold bg-[linear-gradient(30deg,var(--tw-gradient-stops))] from-[#9B51E0] to-[#3081ED] inline-block text-transparent bg-clip-text">
          NFTORE
        </a>
        <div
          className={classNames(
            `group/menu flex transition duration-200 absolute top-0 left-0 bottom-0 right-0 flex-col bg-[rgba(31,29,43,0.95)] lg:bg-transparent z-50 p-10 items-center gap-10 lg:relative gap-[15px] lg:gap-10 lg:flex`,
            context.state
              ? "translate-x-0"
              : "translate-x-full lg:translate-x-0"
          )}
        >
          <button
            className="lg:hidden self-end mb-[100px]"
            onClick={() => {
              context.setState && context.setState((active) => !active);
            }}
          >
            <IoCloseOutline className="size-[25px] transition duration-100 text-[#D7D7D7] hover:text-white" />
          </button>

          <ul className="flex gap-10 flex-col items-center lg:flex-row">
            <HeaderOption>Home</HeaderOption>
            <HeaderOption>My profile</HeaderOption>
            <HeaderOption>Activity</HeaderOption>
            <HeaderOption>How it works</HeaderOption>
          </ul>
        </div>

        <div className="flex gap-2.5 lg:gap-2 flex-col ssm:flex-row">
          <button className="py-1 px-3 text-[0.825rem] ssm:py-3 ssm:px-5 lg:px-9 transition ease-in-out duration-300 hover:text-white hover:border-white border border-transparent border-solid  rounded-[10px] text-[#BCBCBC] uppercase font-medium">
            Create
          </button>
          <button className="py-1 px-3 text-[0.825rem] ssm:py-3 ssm:px-5 lg:px-9 transition ease-in-out duration-300 hover:text-white hover:border-white border border-transparent border-solid rounded-[10px] text-[#BCBCBC] uppercase font-medium">
            Sign In
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => {
            context.setState && context.setState((active) => !active);
            // console.log(menuActive);
            // console.log("Click");
          }}
        >
          <RxHamburgerMenu className="size-[25px] transition duration-100 text-[#D7D7D7] hover:text-white" />
        </button>
      </nav>
    </header>
  );
}
