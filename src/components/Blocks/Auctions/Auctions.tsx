import { imgNFTs } from '../../../links/img.links';
import NFTBlock from '../../Elements/Element/NFTBlock/NFTBlock';
import HeaderSection from '../../Elements/Header/HeaderSection/HeaderSection';

export default function Auctions() {
  return (
    <section>
      <HeaderSection>Hot auctions</HeaderSection>
      <div className="mb-10 grid grid-cols-1 justify-between gap-[30px] md:flex ssm:grid-cols-2">
        {imgNFTs.slice(0, 4).map((el) => (
          <NFTBlock src={el} title="Something like title" price={1.5} />
        ))}
      </div>
    </section>
  );
}
