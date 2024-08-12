import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <div
      className={`w-[80rem] border-black border-t-[2px] border-solid border-black border-b-[2px] border-solid border-black border-l-[2px] border-solid box-border flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-[3rem] text-black font-ibm-plex-mono mq1125:flex-wrap ${className}`}
    >
      <div className="flex-[0.8807] flex flex-col items-start justify-start pt-[3.812rem] pb-[3.875rem] pl-[3.5rem] pr-[1.25rem] box-border gap-[2.875rem] bg-[url('/public/card@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[26rem] max-w-full mq800:gap-[1.438rem] mq800:pl-[1.75rem] mq800:pt-[2.5rem] mq800:pb-[2.5rem] mq800:box-border mq800:min-w-full mq1125:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq800:text-[2.375rem] mq450:text-[1.813rem]">
          Radical landscapes: Art, identity and activism
        </h1>
        <div className="self-stretch relative text-[1rem]">
          Expanding on landscape art as being limited to paintings of lush green
          hills, enjoy art that reflects the diversity of the Landscape and the
          communities that inhabit it.
        </div>
        <button className="cursor-pointer [border:none] py-[0rem] px-[0rem] bg-[transparent] w-[24.5rem] rounded-sm flex flex-row items-start justify-start box-border relative max-w-full">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <div className="absolute h-full w-full top-[0rem] right-[-0.125rem] bottom-[-0.125rem] left-[0rem] rounded-sm bg-skyblue border-black border-[2px] border-solid box-border" />
            <div className="absolute h-full w-full top-[0rem] right-[-0.062rem] bottom-[-0.062rem] left-[0rem] rounded-sm bg-orchid border-black border-[1px] border-solid box-border z-[1]" />
          </div>
          <div className="flex-1 rounded-sm bg-black flex flex-row items-start justify-center py-[1.312rem] px-[1.25rem] box-border gap-[0.25rem] shrink-0 max-w-full z-[2]">
            <img
              className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-right.svg"
            />
            <b className="relative text-[1.125rem] inline-block font-syne text-fff text-left min-w-[4.25rem]">
              Button
            </b>
            <img
              className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-right.svg"
            />
          </div>
        </button>
      </div>
      <img
        className="h-[33.563rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[26rem] mq800:min-w-full mq1125:flex-1"
        loading="lazy"
        alt=""
        src="/photo@2x.png"
      />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
