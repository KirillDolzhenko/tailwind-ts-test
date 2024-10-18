import { useState } from "react";
import { imgNFTs } from "../../../links/img.links";
import { EnumSize } from "../../../types/enums";
import GradientButton from "../../Elements/Button/GradientButton/GradientButton";
import NFTBlock from "../../Elements/Element/NFTBlock/NFTBlock";
import HeaderSection from "../../Elements/Header/HeaderSection/HeaderSection";

export default function () {
  let [nfts, setNFTS] = useState<string[]>(imgNFTs.slice(4));
  return (
    <div className="flex flex-col">
      <HeaderSection>Discover</HeaderSection>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4 lg:gap-y-20 ssmAndMd:grid-cols-2 ssmAndMd:gap-x-3 ssmAndMd:gap-y-10">
        {nfts.map((el) => (
          <NFTBlock src={el} title="Somethin" price={1.5} />
        ))}
      </div>
      <GradientButton
        size={EnumSize.DEFAULT}
        className="mx-auto mt-10 self-center"
        onClick={() => setNFTS([...nfts, ...imgNFTs.slice(0, 8)])}
      >
        Load more
      </GradientButton>
    </div>
  );
}
