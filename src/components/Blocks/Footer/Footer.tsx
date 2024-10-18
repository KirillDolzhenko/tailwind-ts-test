import FooterList from "./FooterList/FooterList";

import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";

export default function () {
  return (
    <footer>
      <div className="mb-10 flex flex-wrap justify-between gap-6 lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-10 ssm:justify-center">
        <div>
          <p className="text-1xl min-w-[150px] ssm:text-2xl">
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </p>
        </div>
        <FooterList
          title="Marketplace"
          elements={["Home", "Activity", "Discover", "Learn more"]}
        />
        <FooterList
          title="Company"
          elements={["About Us", "Services", "Portfolio"]}
        />
        <FooterList
          title="Contact"
          elements={["Facebook", "Instagram", "Twitter", "Email"]}
        />
      </div>
      <div className="h-[1px] w-[100%] bg-white"></div>
      <div className="flex justify-between py-5">
        <ul className="flex gap-4">
          <li>
            <button>
              <PiFacebookLogo className="h-[25px] w-[25px] fill-[#828282] transition duration-150 hover:scale-110 hover:fill-[#9B51E0] hover:opacity-100" />
            </button>
          </li>
          <li>
            <button>
              <PiTwitterLogo className="h-[25px] w-[25px] fill-[#828282] transition duration-150 hover:scale-110 hover:fill-[#9B51E0] hover:opacity-100" />
            </button>
          </li>
          <li>
            <button>
              <PiYoutubeLogo className="h-[25px] w-[25px] fill-[#828282] transition duration-150 hover:scale-110 hover:fill-[#9B51E0] hover:opacity-100" />
            </button>
          </li>
        </ul>
        <p className="text-4 text-[#828282]">Copyright 2021 Gaslur</p>
      </div>
    </footer>
  );
}
