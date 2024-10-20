import { useContext } from 'react';
import Auctions from '../../Blocks/Auctions/Auctions';
import Discover from '../../Blocks/Discover/Discover';
import Footer from '../../Blocks/Footer/Footer';
import GettingStarted from '../../Blocks/GettingStarted/GettingStarted';
import Header from '../../Blocks/Header/Header';
import PreviewLanding from '../../Blocks/PreviewLanding/PreviewLanding';
import ContainerMain from '../../Containers/ContainerMain/ContainerMain';
import { ContextMenu } from '../../../App';
import classNames from 'classnames';

const defaultClasses =
  'relative selection:bg-[#3081ED] selection:text-[#ffffff] min-h-screen bg-[#1F1D2B] text-white leading-normal overflow-hidden';

export default function LandingPage() {
  const context = useContext(ContextMenu);

  return (
    <div className={classNames(defaultClasses, context.state && 'menuActive')}>
      <ContainerMain className="relative z-50">
        <div className="flex flex-col gap-[80px] md:gap-[160px]">
          <section className="mb-[100px] md:mb-0 lg:min-h-[100vh]">
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
      <div className="circleAnimation h-[200px] w-[200px] rounded-full bg-[#9B51E0] blur-[80px]"></div>
      <div className="circleAnimation_2 h-[100px] w-[100px] rounded-full bg-[#ffffff] blur-[100px]"></div>
      <div className="circleAnimation_3 h-[200px] w-[200px] rounded-full bg-[#3081ED] blur-[100px]"></div>
      <div className="circleAnimation_4 h-[300px] w-[300px] rounded-full bg-[#ffffff] blur-[100px]"></div>
    </div>
  );
}
