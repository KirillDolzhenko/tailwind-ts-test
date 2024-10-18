import { imgNFTs } from "../../../links/img.links";
import NFTBlock from "../../Elements/Element/NFTBlock/NFTBlock";
import HeaderSection from "../../Elements/Header/HeaderSection/HeaderSection";

export default function () {
  return (
    <section>
      <HeaderSection>Hot auctions</HeaderSection>
      <div className="grid grid-cols-1 ssm:grid-cols-2 md:flex gap-[30px] justify-between mb-10">
        {imgNFTs.slice(0, 4).map((el) => (
          <NFTBlock src={el} title="Something like title" price={1.5} />
        ))}
      </div>
    </section>
  );
}
