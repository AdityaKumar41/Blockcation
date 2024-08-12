import PropTypes from "prop-types";

const Enterprise = ({
  className = "",
  rightButton = false,
  leftButton = false,
}) => {
  return (
    <div
      className={`rounded-sm flex flex-row items-start justify-start relative text-left text-[1.125rem] text-fff font-syne ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
        <div className="absolute h-full w-full top-[0rem] right-[-0.125rem] bottom-[-0.125rem] left-[0rem] rounded-sm bg-skyblue border-black border-[2px] border-solid box-border" />
        <div className="absolute h-full w-full top-[0rem] right-[-0.062rem] bottom-[-0.062rem] left-[0rem] rounded-sm bg-orchid border-black border-[1px] border-solid box-border z-[1]" />
      </div>
      <div className="rounded-sm bg-black flex flex-row items-start justify-start py-[0.875rem] px-[1.5rem] gap-[0.25rem] z-[2]">
        {leftButton && (
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            alt=""
            src="/icon-right.svg"
          />
        )}
        <div className="relative">
          <span className="font-semibold">{`Meet `}</span>
          <b>NFT</b>
          <span className="font-semibold"> For Enterprise</span>
        </div>
        {rightButton && (
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            alt=""
            src="/icon-right.svg"
          />
        )}
      </div>
    </div>
  );
};

Enterprise.propTypes = {
  className: PropTypes.string,
  rightButton: PropTypes.bool,
  leftButton: PropTypes.bool,
};

export default Enterprise;
