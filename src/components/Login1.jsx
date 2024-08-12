import { useMemo } from "react";
import PropTypes from "prop-types";

const Login1 = ({
  className = "",
  showText = true,
  iconRight = false,
  iconLeft = false,
  text = "connect",
  propPadding,
  propGap,
  iconLeft1,
  propTextDecoration,
  propColor,
  propMinWidth,
  propWidth,
  iconRight1,
  propMinHeight,
}) => {
  const loginStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const textStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      color: propColor,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propTextDecoration, propColor, propMinWidth, propWidth]);

  const iconRightStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div
      className={`flex flex-row items-center justify-start py-[1.656rem] px-[0.687rem] gap-[0.375rem] text-left text-[1rem] text-fff font-syne ${className}`}
      style={loginStyle}
    >
      {iconLeft && (
        <img
          className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
          alt=""
          src={iconLeft1}
        />
      )}
      {showText && (
        <a
          className="[text-decoration:none] relative tracking-[0.06em] font-medium text-[inherit] inline-block min-w-[4.375rem]"
          style={textStyle}
        >
          {text}
        </a>
      )}
      {iconRight && (
        <img
          className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
          alt=""
          src={iconRight1}
          style={iconRightStyle}
        />
      )}
    </div>
  );
};

Login1.propTypes = {
  className: PropTypes.string,
  showText: PropTypes.bool,
  iconRight: PropTypes.bool,
  iconLeft: PropTypes.bool,
  text: PropTypes.string,
  iconLeft1: PropTypes.string,
  iconRight1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default Login1;
