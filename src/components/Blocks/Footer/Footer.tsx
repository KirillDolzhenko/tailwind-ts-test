import FooterList from "./FooterList/FooterList";

import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";

export default function () {
  return (
    <footer>
      <div className="flex flex-wrap gap-6 ssm:justify-center lg:gap-10 lg:flex-row justify-between lg:flex-nowrap lg:justify-between mb-10">
        <div>
          <p className="text-1xl ssm:text-2xl min-w-[150px]">
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </p>
        </div>
        <FooterList />
        <FooterList />
        <FooterList />
      </div>
      <div className="w-[100%] h-[1px] bg-white"></div>
      <div className="flex justify-between py-5">
        <ul className="flex gap-4">
          <li>
            <button>
              <PiFacebookLogo className="hover:fill-[#9B51E0] fill-[#828282] transition duration-150 w-[25px] h-[25px] hover:scale-110 hover:opacity-100" />
            </button>
          </li>
          <li>
            <button>
              <PiTwitterLogo className="hover:fill-[#9B51E0] fill-[#828282] transition duration-150 w-[25px] h-[25px] hover:scale-110 hover:opacity-100" />
            </button>
          </li>
          <li>
            <button>
              <PiYoutubeLogo className="hover:fill-[#9B51E0] fill-[#828282] transition duration-150 w-[25px] h-[25px] hover:scale-110 hover:opacity-100" />
            </button>
          </li>
        </ul>
        <p className="text-4 text-[#828282]">Copyright 2021 Gaslur</p>
      </div>
    </footer>
  );
}
