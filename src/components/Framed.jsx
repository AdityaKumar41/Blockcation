import { useMemo } from "react";
import PropTypes from "prop-types";

const Framed = ({
  className = "",
  number = "18",
  propWidth,
  propBorder,
  propPadding,
  propGap,
  propFlex,
  propBorderRadius,
  loveYou,
  propHeight,
  propWidth1,
  propMinHeight,
  propPadding1,
  propFontSize,
  propMinWidth,
}) => {
  const framedStyle = useMemo(() => {
    return {
      width: propWidth,
      border: propBorder,
      padding: propPadding,
      gap: propGap,
      flex: propFlex,
      borderRadius: propBorderRadius,
    };
  }, [propWidth, propBorder, propPadding, propGap, propFlex, propBorderRadius]);

  const loveYouIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      minHeight: propMinHeight,
    };
  }, [propHeight, propWidth1, propMinHeight]);

  const iconLabelStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const divStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      minWidth: propMinWidth,
    };
  }, [propFontSize, propMinWidth]);

  return (
    <div
      className={`w-[3.425rem] rounded-[12.48px] bg-fff border-black border-[0.9px] border-solid box-border flex flex-row items-start justify-start py-[0.25rem] px-[0.625rem] gap-[0.225rem] text-left text-[0.725rem] text-black font-karla ${className}`}
      style={framedStyle}
    >
      <img
        className="h-[1.113rem] w-[1.113rem] relative min-h-[1.125rem]"
        loading="lazy"
        alt=""
        src={loveYou}
        style={loveYouIconStyle}
      />
      <div
        className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]"
        style={iconLabelStyle}
      >
        <div
          className="relative leading-[0.75rem] font-medium inline-block min-w-[0.75rem]"
          style={divStyle}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

Framed.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
  loveYou: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propPadding1: PropTypes.any,
  propFontSize: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Framed;
