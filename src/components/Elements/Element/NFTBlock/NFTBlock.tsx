import { imgNFT1 } from "../../../../links/img.links";
import { EnumSize } from "../../../../types/enums";
import { IPropsChildren, IPropsNFTBlock } from "../../../../types/props.types";
import GradientButton from "../../Button/GradientButton/GradientButton";

export default function ({ title, price, src }: IPropsNFTBlock) {
  return (
    <section className="transition duration-100 w-[100%] inline-flex flex-col gap-4 md:hover:scale-105 items-start">
      <div className="w-[100%] h-0 pb-[100%] object-cover overflow-hidden rounded-[12px] relative">
        <img
          className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
          src={src}
          alt="nft1"
        />
      </div>
      <div className="font-semibold text-4 w-[100%] flex justify-between mt-2">
        <h6>{title}</h6>
        <span>{price} Weth</span>
      </div>
      <div className="w-[100%] h-[1px] bg-white"></div>
      <div className="w-[100%] flex justify-between items-center">
        <p className="text-4">
          Ends in <span className="text-4 text-[#D7D7D7]">01.34.54</span>
        </p>
        <GradientButton size={EnumSize.DEFAULT}>Bid</GradientButton>
      </div>
    </section>
  );
}
