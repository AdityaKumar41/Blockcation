import PropTypes from "prop-types";

const RollingBanner = ({ className = "" }) => {
  return (
    <div
      className={`ml-[-16.563rem] mb-[1.218rem] w-[123.125rem] bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-[0.875rem] px-[2.937rem] box-border max-w-[137%] shrink-0 text-left text-[1.5rem] text-darkslategray-200 font-ibm-plex-mono mq1350:pl-[1.438rem] mq1350:pr-[1.438rem] mq1350:box-border ${className}`}
    >
      <div className="w-[112.25rem] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[0.906rem] max-w-full mq1350:flex-wrap mq1350:justify-center">
        <div className="w-[23.625rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[0.15em] leading-[1.5rem] font-normal font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            This a rolling banner
          </h2>
        </div>
        <img
          className="h-[3rem] w-[3rem] relative rounded"
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[0.15em] leading-[1.5rem] font-normal font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            This a rolling banner
          </h2>
        </div>
        <img
          className="h-[3rem] w-[3rem] relative rounded"
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <h2 className="m-0 relative text-inherit tracking-[0.15em] leading-[1.5rem] font-normal font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            This a rolling banner
          </h2>
        </div>
        <img
          className="h-[3rem] w-[3rem] relative rounded"
          loading="lazy"
          alt=""
          src="/star-1.svg"
        />
        <div className="w-[23.625rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[0.15em] leading-[1.5rem] font-normal font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
            This a rolling banner
          </h2>
        </div>
      </div>
    </div>
  );
};

RollingBanner.propTypes = {
  className: PropTypes.string,
};

export default RollingBanner;
