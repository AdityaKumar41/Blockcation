import PropTypes from "prop-types";

const ButtonSecondary = ({
  className = "",
  rightButton = true,
  leftButton = false,
  text = "Learn more about channels",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] rounded-sm flex flex-row items-start justify-start relative ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-sm bg-black" />
      <div className="rounded-sm bg-fff border-black border-[2px] border-solid flex flex-row items-start justify-start py-[0.687rem] px-[1.375rem] gap-[0.375rem] z-[1]">
        {leftButton && (
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            alt=""
            src="/left-button.svg"
          />
        )}
        <div className="relative text-[1rem] font-medium font-syne text-black text-left">
          {text}
        </div>
        {rightButton && (
          <input
            className="m-0 h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            type="checkbox"
          />
        )}
      </div>
    </button>
  );
};

ButtonSecondary.propTypes = {
  className: PropTypes.string,
  rightButton: PropTypes.bool,
  leftButton: PropTypes.bool,
  text: PropTypes.string,
};

export default ButtonSecondary;
