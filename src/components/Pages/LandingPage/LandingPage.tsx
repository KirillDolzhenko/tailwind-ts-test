import { useContext, useEffect } from "react";
import { imgNFTLand } from "../../../links/img.links";
import Auctions from "../../Blocks/Auctions/Auctions";
import Discover from "../../Blocks/Discover/Discover";
import Footer from "../../Blocks/Footer/Footer";
import GettingStarted from "../../Blocks/GettingStarted/GettingStarted";
import Header from "../../Blocks/Header/Header";
import PreviewLanding from "../../Blocks/PreviewLanding/PreviewLanding";
import ContainerMain from "../../Containers/ContainerMain/ContainerMain";
import { ContextMenu } from "../../../App";
import classNames from "classnames";

let defaultClasses =
  "relative selection:bg-[#9B51E0] selection:text-[#ffffff] min-h-screen bg-[#1F1D2B] text-white leading-normal overflow-hidden";

export default function () {
  let context = useContext(ContextMenu);

  return (
    <div className={classNames(defaultClasses, context.state && "menuActive")}>
      <ContainerMain className="relative z-50">
        <div className="flex flex-col gap-[80px] md:gap-[160px]">
          <section className="lg:min-h-[100vh] mb-[100px] md:mb-0">
            <Header />
            <PreviewLanding />
          </section>
          <section>
            <Auctions />
          </section>
          <section>
            <GettingStarted />
          </section>
          <section>
            <Discover />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </ContainerMain>
      <div className="w-[200px] h-[200px] rounded-full bg-[#9B51E0] blur-[80px] circleAnimation"></div>
      <div className="w-[100px] h-[100px] rounded-full bg-[#ffffff] blur-[100px] circleAnimation_2"></div>
      <div className="w-[200px] h-[200px] rounded-full bg-[#3081ED] blur-[100px] circleAnimation_3"></div>
      <div className="w-[300px] h-[300px] rounded-full bg-[#ffffff] blur-[100px] circleAnimation_4"></div>
    </div>
  );
}
