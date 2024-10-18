import { useState } from 'react';
import {
  imgNFTLand,
  imgProfilePlaceholder,
  svgHeart,
} from '../../../links/img.links';
import GradientButton from '../../Elements/Button/GradientButton/GradientButton';
import './border.scss';

export default function PreviewLanding() {
  const [like, setLike] = useState<number>(1);

  return (
    <div className="ltr mt-44 flex flex-col items-center justify-between gap-[20px] sm:flex-row sheight:mt-20">
      <div className="flex flex-col gap-6">
        <h1 className="p-100 max-w-2xl items-center justify-center text-4xl font-semibold lg:text-6xl xl:text-7xl">
          Discover, collect, and charity in extraordinary NFT marketplace
        </h1>
        <p className="max-w-[630px] text-xl text-[#E2E2E2] lg:text-2xl">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <section className="mt-4 flex flex-col items-start gap-2 text-2xl font-semibold text-[#D7D7D7] ssm:flex-row ssm:gap-[40px]">
          <GradientButton>Create</GradientButton>
          <GradientButton>Explore</GradientButton>
        </section>
      </div>
      {/* <div className="box">smt</div> */}
      <section className="borderGradient relative hidden flex-col gap-5 p-5 sm:flex lg:gap-5 lg:p-8">
        <div className="max-h-[445px] max-w-[445px] overflow-hidden rounded-[20px] object-cover before:absolute before:left-[-55px] before:top-[-110px] before:block before:h-[125px] before:w-[125px] before:rounded-full before:bg-[#FB37FF] before:opacity-40 before:blur-[70px] before:content-[''] after:absolute after:bottom-[-110px] after:right-[-55px] after:block after:h-[125px] after:w-[125px] after:rounded-full after:bg-[#18B2DE] after:opacity-40 after:blur-[70px] after:content-['']">
          <img src={imgNFTLand} alt="nft" />
        </div>
        <div className="flex flex-col items-start justify-between gap-[10px] md:flex-row md:justify-between">
          <section className="flex gap-3">
            <div className="h-[53px] w-[53px] overflow-hidden rounded-[50%] object-cover">
              <img src={imgProfilePlaceholder} alt="Laura" />
            </div>
            <div>
              <h5>Laura</h5>
              <span>0.21 Weth</span>
            </div>
          </section>
          <section className="align-end flex flex-col">
            <h4 className="font-semibold">WE ARE HERE</h4>
            <button
              onClick={() => {
                setLike(++like);
              }}
              className="flex justify-start gap-2 md:justify-end [&>span]:hover:text-[#9B51E0] [&>svg]:hover:fill-[#9B51E0] [&>svg]:hover:[filter:_drop-shadow(0px_0px_3px_#9B51E0)]"
            >
              <svg className="h-[25px] w-[25px] fill-white transition duration-200">
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
