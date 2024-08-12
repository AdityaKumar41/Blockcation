import Framed from "./Framed";
import Enterprise from "./Enterprise";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[4.375rem] pl-[1.875rem] pr-[1.25rem] box-border max-w-full text-center text-[1.75rem] text-black font-syne mq800:pb-[2.813rem] mq800:box-border ${className}`}
    >
      <div className="w-[56rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full mq1125:gap-[1.875rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.968rem] max-w-full mq450:gap-[1.5rem]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[2.593rem] max-w-full mq450:gap-[1.313rem]">
            <div className="flex-1 flex flex-row items-end justify-start gap-[1.937rem] min-w-[29.938rem] max-w-full mq800:flex-wrap mq800:gap-[0.938rem] mq800:min-w-full">
              <div className="w-[7.344rem] flex flex-col items-end justify-start gap-[1.668rem]">
                <Framed
                  number="12"
                  propWidth="4.531rem"
                  propBorder="1.2px solid #000"
                  propPadding="0.375rem 0.75rem 0.375rem 0.875rem"
                  propGap="0.3rem"
                  propFlex="unset"
                  propBorderRadius="16.76px"
                  loveYou="/locked.svg"
                  propHeight="1.494rem"
                  propWidth1="1.494rem"
                  propMinHeight="unset"
                  propPadding1="0.25rem 0rem 0rem"
                  propFontSize="0.975rem"
                  propMinWidth="0.938rem"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.493rem]">
                  <Framed
                    number="30"
                    propWidth="3.438rem"
                    propBorder="0.9px solid #000"
                    propPadding="0.25rem 0.562rem 0.25rem 0.625rem"
                    propGap="0.212rem"
                    propFlex="unset"
                    propBorderRadius="11.97px"
                    loveYou="/briefcase.svg"
                    propHeight="1.069rem"
                    propWidth1="1.069rem"
                    propMinHeight="unset"
                    propPadding1="0.193rem 0rem 0rem"
                    propFontSize="0.694rem"
                    propMinWidth="0.875rem"
                  />
                </div>
                <div className="w-[5.031rem] flex flex-row items-start justify-end py-[0rem] px-[0.75rem] box-border">
                  <Framed
                    number="27"
                    propWidth="unset"
                    propBorder="0.9px solid #000"
                    propPadding="0.25rem 0.625rem"
                    propGap="0.225rem"
                    propFlex="1"
                    propBorderRadius="12.48px"
                    loveYou="/chart-increasing.svg"
                    propHeight="1.113rem"
                    propWidth1="1.113rem"
                    propMinHeight="1.125rem"
                    propPadding1="0.187rem 0rem 0rem"
                    propFontSize="0.725rem"
                    propMinWidth="0.813rem"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.781rem] box-border min-w-[23.938rem] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
                    <div className="h-[3.919rem] flex-1 relative max-w-full">
                      <h1 className="m-0 absolute top-[1.294rem] left-[0rem] text-inherit leading-[150%] font-[inherit] mq450:text-[1.375rem] mq450:leading-[2.125rem]">
                        <span className="font-semibold">{`Teams `}</span>
                        <span className="font-extrabold">large</span>
                        <span className="font-semibold">{` and `}</span>
                        <span className="font-medium">small</span>
                        <span className="font-semibold"> rely on</span>
                        <span className="font-extrabold">NFT</span>
                      </h1>
                    </div>
                  </div>
                  <div className="self-stretch relative text-[1.125rem] leading-[150%] font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque officia eaque tenetur!
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[7.313rem] flex flex-col items-end justify-start gap-[1.956rem] text-left text-[0.725rem] font-karla">
              <div className="w-[6.125rem] flex flex-row items-start justify-end py-[0rem] px-[1.562rem] box-border">
                <Framed
                  number="27"
                  propWidth="unset"
                  propBorder="0.8px solid #000"
                  propPadding="0.187rem 0.5rem 0.187rem 0.562rem"
                  propGap="0.193rem"
                  propFlex="1"
                  propBorderRadius="10.73px"
                  loveYou="/flexed-biceps.svg"
                  propHeight="0.956rem"
                  propWidth1="0.956rem"
                  propMinHeight="0.938rem"
                  propPadding1="0.162rem 0rem 0rem"
                  propFontSize="0.625rem"
                  propMinWidth="0.688rem"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <Framed
                  number="42"
                  propWidth="4.125rem"
                  propBorder="1px solid #000"
                  propPadding="0.312rem 0.687rem 0.312rem 0.75rem"
                  propGap="0.262rem"
                  propFlex="unset"
                  propBorderRadius="14.58px"
                  loveYou="/red-heart.svg"
                  propHeight="1.3rem"
                  propWidth1="1.3rem"
                  propMinHeight="unset"
                  propPadding1="0.218rem 0rem 0rem"
                  propFontSize="0.844rem"
                  propMinWidth="1rem"
                />
              </div>
              <Framed number="18" loveYou="/loveyou.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.875rem] box-border max-w-full text-left text-[1.125rem] text-fff">
            <div className="flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq800:flex-wrap">
              <Enterprise rightButton leftButton />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[10.688rem] rounded-sm flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-sm bg-black" />
                <div className="flex-1 rounded-sm bg-fff border-black border-[2px] border-solid flex flex-row items-start justify-start py-[0.687rem] px-[1.375rem] gap-[0.375rem] z-[1]">
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-left.svg"
                  />
                  <b className="relative text-[1.125rem] inline-block font-syne text-black text-left min-w-[7.688rem]">
                    Talk to Sales
                  </b>
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-left.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.875rem] box-border max-w-full text-left text-[3.375rem] text-yellow font-karla">
          <div className="w-[44.875rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq800:flex-wrap">
            <div className="w-[11rem] flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="self-stretch relative leading-[100%] font-extrabold [text-shadow:3px_0_0_#000,_0_3px_0_#000,_-3px_0_0_#000,_0_-3px_0_#000] mq800:text-[2.688rem] mq800:leading-[2.688rem] mq450:text-[2rem] mq450:leading-[2rem]">
                85%
              </div>
              <div className="self-stretch relative text-[0.875rem] leading-[100%] font-medium text-black">
                of users say Slack has improved communication*
              </div>
            </div>
            <div className="w-[11rem] flex flex-col items-start justify-start gap-[0.75rem] text-light-green">
              <div className="self-stretch relative leading-[100%] font-extrabold [text-shadow:3px_0_0_#000,_0_3px_0_#000,_-3px_0_0_#000,_0_-3px_0_#000] mq800:text-[2.688rem] mq800:leading-[2.688rem] mq450:text-[2rem] mq450:leading-[2rem]">
                86%
              </div>
              <div className="self-stretch relative text-[0.875rem] leading-[100%] font-medium text-black">
                feel their ability to work remotely has improved*
              </div>
            </div>
            <div className="w-[11rem] flex flex-col items-start justify-start gap-[0.75rem] text-light-blue">
              <div className="self-stretch relative leading-[100%] font-extrabold [text-shadow:3px_0_0_#000,_0_3px_0_#000,_-3px_0_0_#000,_0_-3px_0_#000] mq800:text-[2.688rem] mq800:leading-[2.688rem] mq450:text-[2rem] mq450:leading-[2rem]">
                88%
              </div>
              <div className="self-stretch relative text-[0.875rem] leading-[100%] font-medium text-black">
                feel more connected to their teams*
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
