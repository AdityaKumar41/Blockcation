import Login1 from "./Login1";
import PropTypes from "prop-types";

const Sale = ({
  className = "",
  iconLeft1,
  text,
  iconRight1,
  showText,
  iconRight,
  iconLeft,
  propPadding,
  propGap,
  propTextDecoration,
  propColor,
  propMinWidth,
  propWidth,
  propMinHeight,
}) => {
  return (
    <div
      className={`border-black border-l-[2px] border-solid flex flex-row items-center justify-start py-[0rem] px-[0.687rem] ${className}`}
    >
      <Login1
        showText={showText}
        iconRight={iconRight}
        iconLeft={iconLeft}
        text={text}
        propPadding={propPadding}
        propGap={propGap}
        iconLeft1={iconLeft1}
        propTextDecoration={propTextDecoration}
        propColor={propColor}
        propMinWidth={propMinWidth}
        propWidth={propWidth}
        iconRight1={iconRight1}
        propMinHeight={propMinHeight}
      />
    </div>
  );
};

Sale.propTypes = {
  className: PropTypes.string,
  iconLeft1: PropTypes.string,
  text: PropTypes.string,
  iconRight1: PropTypes.string,
  showText: PropTypes.bool,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,
  propPadding: PropTypes.string,
  propGap: PropTypes.string,
  propTextDecoration: PropTypes.string,
  propColor: PropTypes.string,
  propMinWidth: PropTypes.string,
  propWidth: PropTypes.string,
  propMinHeight: PropTypes.string,
};

export default Sale;
