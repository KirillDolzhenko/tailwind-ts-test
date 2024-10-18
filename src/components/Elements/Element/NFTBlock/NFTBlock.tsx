import { EnumSize } from '../../../../types/enums';
import { IPropsNFTBlock } from '../../../../types/props.types';
import GradientButton from '../../Button/GradientButton/GradientButton';

export default function NFTBlock({ title, price, src }: IPropsNFTBlock) {
  return (
    <section className="inline-flex w-[100%] flex-col items-start gap-4 transition duration-100 md:hover:scale-105">
      <div className="relative h-0 w-[100%] overflow-hidden rounded-[12px] object-cover pb-[100%]">
        <img
          className="absolute left-0 top-0 h-[100%] w-[100%] object-cover"
          src={src}
          alt="nft1"
        />
      </div>
      <div className="text-4 mt-2 flex w-[100%] justify-between font-semibold">
        <h6>{title}</h6>
        <span>{price} Weth</span>
      </div>
      <div className="h-[1px] w-[100%] bg-white"></div>
      <div className="flex w-[100%] items-center justify-between">
        <p className="text-4">
          Ends in <span className="text-4 text-[#D7D7D7]">01.34.54</span>
        </p>
        <GradientButton size={EnumSize.DEFAULT}>Bid</GradientButton>
      </div>
    </section>
  );
}
