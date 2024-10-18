import { useState } from "react";
import {
  imgNFTLand,
  imgProfilePlaceholder,
  svgHeart,
} from "../../../links/img.links";
import GradientButton from "../../Elements/Button/GradientButton/GradientButton";
import "./border.scss";

export default function () {
  let [like, setLike] = useState<number>(1);

  return (
    <div className="ltr flex justify-between mt-44 sheight:mt-20 items-center gap-[20px] items-start flex-col sm:flex-row">
      <div className="flex flex-col gap-6">
        <h1 className="p-100 max-w-2xl font-semibold justify-center items-center text-4xl lg:text-6xl xl:text-7xl">
          Discover, collect, and charity in extraordinary NFT marketplace
        </h1>
        <p className="text-xl lg:text-2xl text-[#E2E2E2] max-w-[630px]">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <section className="flex-col items-start gap-2 ssm:flex-row ssm:gap-[40px] flex mt-4 text-2xl font-semibold text-[#D7D7D7]">
          <GradientButton>Create</GradientButton>
          <GradientButton>Explore</GradientButton>
        </section>
      </div>
      {/* <div className="box">smt</div> */}
      <section className="hidden sm:flex relative flex-col gap-5 p-5 lg:gap-5 lg:p-8 borderGradient">
        <div className="after:content-[''] after:absolute after:opacity-40 after:rounded-full after:blur-[70px] after:block after:w-[125px] after:bg-[#18B2DE] after:h-[125px] after:bottom-[-110px] after:right-[-55px]    before:content-[''] before:absolute before:opacity-40 before:rounded-full before:blur-[70px] before:block before:w-[125px] before:bg-[#FB37FF] before:h-[125px] before:top-[-110px] before:left-[-55px] rounded-[20px] max-w-[445px] max-h-[445px] overflow-hidden object-cover">
          <img src={imgNFTLand} alt="nft" />
        </div>
        <div className="flex justify-between flex-col gap-[10px] items-start md:justify-between md:flex-row">
          <section className="flex gap-3">
            <div className="w-[53px] h-[53px] object-cover overflow-hidden rounded-[50%]">
              <img src={imgProfilePlaceholder} alt="Laura" />
            </div>
            <div>
              <h5>Laura</h5>
              <span>0.21 Weth</span>
            </div>
          </section>
          <section className="flex flex-col align-end">
            <h4 className="font-semibold">WE ARE HERE</h4>
            <button
              onClick={() => {
                setLike(++like);
              }}
              className="[&>span]:hover:text-[#9B51E0] [&>svg]:hover:fill-[#9B51E0] [&>svg]:hover:[filter:_drop-shadow(0px_0px_3px_#9B51E0)] flex gap-2 justify-start md:justify-end"
            >
              <svg className="fill-white transition duration-200 w-[25px] h-[25px]">
                <use href={`${svgHeart}#icon`} />
              </svg>
              <span className="transition duration-200">{like}</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
