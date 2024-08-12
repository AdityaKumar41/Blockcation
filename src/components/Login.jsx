import Login1 from "./Login1";
import PropTypes from "prop-types";

const Login = ({
  className = "",
  text,
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
    <button
      className={`cursor-pointer [border:none] py-[0rem] px-[0.75rem] bg-black flex flex-row items-center justify-start ${className}`}
    >
      <Login1
        showText={showText}
        iconRight={iconRight}
        iconLeft={iconLeft}
        text={text}
        propPadding={propPadding}
        propGap={propGap}
        iconLeft1="/icon-left.svg"
        propTextDecoration={propTextDecoration}
        propColor={propColor}
        propMinWidth={propMinWidth}
        propWidth={propWidth}
        iconRight1="/icon-right.svg"
        propMinHeight={propMinHeight}
      />
    </button>
  );
};

Login.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
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

export default Login;
