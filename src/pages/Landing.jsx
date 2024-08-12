import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import RollingBanner from "../components/RollingBanner";
import Articles from "../components/Articles";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import CollectionGrid from "../components/CollectionGrid";
import FooterNav from "../components/FooterNav";

const Landing = () => {
  return (
    <div className="w-full relative bg-fff overflow-hidden flex flex-col items-start justify-start gap-[2.187rem] leading-[normal] tracking-[normal] mq800:gap-[1.063rem]">
      <FrameComponent1 />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.218rem] box-border max-w-full text-center text-[2.125rem] text-black font-syne">
        <div className="h-[6.375rem] w-[31rem] relative max-w-full">
          <div className="absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start w-full h-full">
            <div className="relative leading-[150%] mq450:text-[1.188rem] mq450:leading-[2.563rem]">
              <p className="m-0">
                <b>TRUSTED BY COMPANIES</b>
              </p>
              <p className="m-0 text-[1.5rem] tracking-[0.02em] font-extrabold">
                ALL OVER THE WORLD
              </p>
            </div>
            <img
              className="h-[3.913rem] w-[4.019rem] absolute !m-[0] top-[-1.625rem] left-[-2.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <img
            className="absolute top-[5.438rem] left-[19.938rem] w-[9.875rem] h-[0.5rem]"
            loading="lazy"
            alt=""
            src="/line.svg"
          />
        </div>
      </section>
      <RollingBanner />
      <Articles />
      <FrameComponent3 />
      <FrameComponent4 />
      <CollectionGrid />
      <FooterNav />
    </div>
  );
};

export default Landing;
