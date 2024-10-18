import { GoShieldCheck } from "react-icons/go";
import { BsFolder2 } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { imgRectBg } from "../../../links/img.links";
import IconBlock from "../../Elements/IconBlock/IconBlock";

export default function () {
  return (
    <div className="mb-[30px]">
      <h3 className="text-5xl text-center">Getting Started</h3>
      <p className="text-2xl text-[#E2E2E2] text-center mt-[20px] mb-[30px]">
        Eu, molestie commodo, enim pellentesque turpis integer sagittis
      </p>

      <ul className="group flex gap-5 flex-grow-1 flex-auto flex-wrap justify-center md:flex-nowrap md:flex-row md:justify-between relative">
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
        <div className="block w-[100%] h-[20px] absolute top-[30%] blur-[70px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED]"></div>
        <div className="transition duration-200 group-hover:blur-[70px] block w-[100%] h-[20px] absolute top-[30%] blur-[100px] bg-gradient-to-r from-[#9B51E0] to-[#3081ED]"></div>
      </ul>
    </div>
  );
}
