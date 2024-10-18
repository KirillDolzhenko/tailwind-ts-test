import { GoShieldCheck } from "react-icons/go";
import { BsFolder2 } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { imgRectBg } from "../../../links/img.links";
import IconBlock from "../../Elements/IconBlock/IconBlock";

export default function () {
  return (
    <div className="mb-[30px]">
      <h3 className="text-center text-5xl">Getting Started</h3>
      <p className="mb-[30px] mt-[20px] text-center text-2xl text-[#E2E2E2]">
        Eu, molestie commodo, enim pellentesque turpis integer sagittis
      </p>

      <ul className="flex-grow-1 group relative flex flex-auto flex-wrap justify-center gap-5 md:flex-row md:flex-nowrap md:justify-between">
        <IconBlock Icon={GoShieldCheck}>Connect your wallet</IconBlock>
        <IconBlock Icon={BsFolder2}>
          Posuere urna, sit amet molestie leo
        </IconBlock>
        <IconBlock Icon={CiImageOn}>
          Semper pretium libero sed quam ac integer ut
        </IconBlock>
        <IconBlock Icon={IoRocketOutline}>
          Lectus volutpat magna vitae in arcu
        </IconBlock>
        <div className="absolute top-[30%] block h-[20px] w-[100%] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[70px]"></div>
        <div className="absolute top-[30%] block h-[20px] w-[100%] bg-gradient-to-r from-[#9B51E0] to-[#3081ED] blur-[100px] transition duration-200 group-hover:blur-[70px]"></div>
      </ul>
    </div>
  );
}
