import Collection from "./Collection";
import PropTypes from "prop-types";

const Articles = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-start pt-[4.187rem] px-[1.25rem] pb-[5.187rem] box-border gap-[4.375rem] bg-[url('/public/articles@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-[1.5rem] text-fff font-syne mq800:gap-[1.063rem] mq800:pt-[2.75rem] mq800:pb-[3.375rem] mq800:box-border mq1125:gap-[2.188rem] ${className}`}
    >
      <div className="w-[61.25rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
        <h2 className="m-0 relative text-inherit inline-block [filter:drop-shadow(5px_5px_0px_#000)_drop-shadow(4px_4px_0px_#000)_drop-shadow(3px_3px_0px_#000)_drop-shadow(2px_2px_0px_#000)_drop-shadow(1px_1px_0px_#000)] [text-shadow:2px_0_0_#000,_0_2px_0_#000,_-2px_0_0_#000,_0_-2px_0_#000] shrink-0 max-w-full font-[inherit] mq450:text-[1.188rem]">
          <b className="whitespace-pre-wrap">{`Top  `}</b>
          <span className="font-extrabold text-yellow">LIsted NFT</span>
          <span>
            <b className="font-syne">{` . `}</b>
            <span>Collection</span>
          </span>
        </h2>
        <div className="w-[7.319rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
          <button className="cursor-pointer [border:none] py-[0rem] pl-[0rem] pr-[0.125rem] bg-[transparent] self-stretch rounded-sm flex flex-row items-start justify-start relative shrink-0">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-sm bg-black" />
            <div className="flex-1 rounded-sm bg-fff border-black border-[2px] border-solid flex flex-row items-start justify-start py-[0.687rem] px-[1.562rem] gap-[0.375rem] z-[1]">
              <img
                className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon-left.svg"
              />
              <a className="[text-decoration:none] relative text-[1.125rem] font-bold font-syne text-black text-left inline-block min-w-[3.875rem]">
                see all
              </a>
              <img
                className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon-left.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[61.25rem] flex flex-row items-start justify-between py-[0rem] px-[0rem] box-border relative gap-[1.25rem] max-w-full text-[0.75rem] text-black mq1125:flex-wrap mq1125:justify-center">
        <Collection image="/image@2x.png" seeAll={`See All >`} />
        <img
          className="h-[1.125rem] w-[1.125rem] absolute !m-[0] top-[-0.062rem] left-[-0.125rem] z-[1]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <Collection
          propBackgroundColor="#fff"
          image="/image-1@2x.png"
          seeAll="@aditya01"
          propMinWidth="5rem"
        />
        <Collection
          propBackgroundColor="#fff"
          image="/image-2@2x.png"
          seeAll="@abhi12"
          propMinWidth="4rem"
        />
        <Collection
          propBackgroundColor="#fff"
          image="/image-1@2x.png"
          seeAll="@chaitu04"
          propMinWidth="5.313rem"
        />
      </div>
    </section>
  );
};

Articles.propTypes = {
  className: PropTypes.string,
};

export default Articles;
