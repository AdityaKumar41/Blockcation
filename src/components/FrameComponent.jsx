import PropTypes from "prop-types";

const FrameComponent = ({ className = "", base, base1 }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.562rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem]">
        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="flex flex-row items-start justify-start relative">
            <img
              className="h-[3.313rem] w-[67.688rem] absolute !m-[0] bottom-[-0.687rem] left-[-47.062rem] rounded-8xs"
              alt=""
              src={base}
            />
            <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.625rem] pb-[0.375rem] bg-black shadow-[1px_2px_3px_rgba(70,_118,_251,_0.41)] rounded-6xs flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
              <div className="relative text-[0.813rem] tracking-[-0.02em] font-body text-background-color text-left inline-block min-w-[3.875rem]">
                Download
              </div>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
            <div className="w-[1.875rem] h-[1.875rem] relative">
              <img
                className="absolute top-[1.375rem] left-[0.975rem] w-[0.213rem] h-[0.063rem] object-cover z-[1]"
                alt=""
                src="/edit-2@2x.png"
              />
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]" />
              <img
                className="absolute top-[0.75rem] left-[0.75rem] w-[0.438rem] h-[0.563rem] z-[3]"
                alt=""
                src="/fill-3-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-[3.313rem] w-[67.688rem] absolute !m-[0] bottom-[-0.687rem] left-[-47.062rem] rounded-8xs"
            alt=""
            src={base1}
          />
          <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.625rem] pb-[0.375rem] bg-black shadow-[1px_2px_3px_rgba(70,_118,_251,_0.41)] rounded-6xs flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
            <div className="relative text-[0.813rem] tracking-[-0.02em] font-body text-background-color text-left inline-block min-w-[3.875rem]">
              Download
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <div className="w-[1.875rem] h-[1.875rem] relative">
            <img
              className="absolute top-[1.375rem] left-[0.975rem] w-[0.213rem] h-[0.063rem] object-cover z-[1]"
              alt=""
              src="/edit-2@2x.png"
            />
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]" />
            <img
              className="absolute top-[0.75rem] left-[0.75rem] w-[0.438rem] h-[0.563rem] z-[3]"
              loading="lazy"
              alt=""
              src="/fill-3-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  base: PropTypes.string,
  base1: PropTypes.string,
};

export default FrameComponent;
