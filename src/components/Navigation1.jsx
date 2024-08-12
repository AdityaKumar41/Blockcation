import { useMemo } from "react";
import Brand from "./Brand";
import Login1 from "./Login1";
import Sale from "./Sale";
import Login from "./Login";
import PropTypes from "prop-types";

const Navigation1 = ({
  className = "",
  brandFlex,
  brandFlexWrap,
  brandRowGap,
  brandAlignSelf,
  brandHeight,
  brandTop,
  brandPosition,
  iconLeftMinWidth,
  iconLeftAlignSelf,
  iconLeftOverflowX,
  textHeight,
  textAlignSelf,
  textFlex,
  textHeight1,
  textAlignSelf1,
  textFlex1,
  textHeight2,
  textAlignSelf2,
  brandName,
  text,
  showText,
  iconRight5,
  iconLeft5,
  propPadding,
  propGap,
  propTextDecoration,
  propColor,
  propMinWidth,
  propWidth,
  propMinHeight,
}) => {
  const navigationStyle = useMemo(() => {
    return {
      flex: brandFlex,
      flexWrap: brandFlexWrap,
      rowGap: brandRowGap,
      alignSelf: brandAlignSelf,
      height: brandHeight,
      top: brandTop,
      position: brandPosition,
    };
  }, [
    brandFlex,
    brandFlexWrap,
    brandRowGap,
    brandAlignSelf,
    brandHeight,
    brandTop,
    brandPosition,
  ]);

  const menuStyle = useMemo(() => {
    return {
      minWidth: iconLeftMinWidth,
      alignSelf: iconLeftAlignSelf,
      overflowX: iconLeftOverflowX,
    };
  }, [iconLeftMinWidth, iconLeftAlignSelf, iconLeftOverflowX]);

  const productsStyle = useMemo(() => {
    return {
      height: textHeight,
      alignSelf: textAlignSelf,
      flex: textFlex,
    };
  }, [textHeight, textAlignSelf, textFlex]);

  const solutionsStyle = useMemo(() => {
    return {
      height: textHeight1,
      alignSelf: textAlignSelf1,
      flex: textFlex1,
    };
  }, [textHeight1, textAlignSelf1, textFlex1]);

  const enterpriseStyle = useMemo(() => {
    return {
      height: textHeight2,
      alignSelf: textAlignSelf2,
    };
  }, [textHeight2, textAlignSelf2]);

  return (
    <div
      className={`flex-1 bg-fff border-black border-b-[2px] border-solid box-border overflow-hidden flex flex-row flex-wrap items-center justify-start max-w-full [row-gap:20px] text-left text-[1.125rem] text-black font-alfa-slab-one ${className}`}
      style={navigationStyle}
    >
      <div className="border-black border-r-[2px] border-solid flex flex-row items-center justify-start py-[1.468rem] px-[1.437rem]">
        <Brand brandName={brandName} />
      </div>
      <div
        className="flex-1 overflow-x-auto flex flex-row items-center justify-start py-[0rem] pl-[0.75rem] pr-[29.687rem] box-border gap-[0.75rem] min-w-[39.5rem] max-w-full text-[1rem] font-syne mq800:min-w-full mq1125:pr-[14.813rem] mq1125:box-border mq450:pr-[7.375rem] mq450:box-border"
        style={menuStyle}
      >
        <div
          className="h-[4.5rem] flex flex-row items-center justify-start pt-[1.656rem] pb-[0.768rem] pl-[0.687rem] pr-[0.75rem] box-border relative gap-[0.312rem]"
          style={productsStyle}
        >
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/icon-left.svg"
          />
          <a className="[text-decoration:none] relative tracking-[0.06em] leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[5.438rem]">
            listed NFT
          </a>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-left.svg"
          />
          <div className="h-[calc(100%_-_70px)] w-[calc(100%_-_78.7px)] absolute !m-[0] top-[3.544rem] right-[4.244rem] bottom-[0.831rem] left-[0.675rem] border-gray1-300 border-t-[2px] border-solid box-border" />
        </div>
        <div
          className="h-[4.5rem] flex flex-row items-center justify-start pt-[1.656rem] pb-[0.768rem] pl-[0.625rem] pr-[0.687rem] box-border relative gap-[0.375rem]"
          style={solutionsStyle}
        >
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/icon-left.svg"
          />
          <a className="[text-decoration:none] relative tracking-[0.06em] leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[7rem]">{`Upload & Sell`}</a>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[2]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="h-[calc(100%_-_70px)] w-[calc(100%_-_78.7px)] absolute !m-[0] top-[3.544rem] right-[4.244rem] bottom-[0.831rem] left-[0.675rem] border-gray1-300 border-t-[2px] border-solid box-border" />
        </div>
        <div
          className="h-[4.5rem] flex flex-row items-center justify-start pt-[1.656rem] pb-[0.768rem] pl-[0.625rem] pr-[0.687rem] box-border relative gap-[0.375rem]"
          style={enterpriseStyle}
        >
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/icon-left.svg"
          />
          <a className="[text-decoration:none] relative tracking-[0.06em] leading-[1.25rem] font-medium text-[inherit] inline-block min-w-[6.25rem]">
            Explore File
          </a>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[2]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="h-[calc(100%_-_70px)] w-[calc(100%_-_78.7px)] absolute !m-[0] top-[3.544rem] right-[4.244rem] bottom-[0.831rem] left-[0.675rem] border-gray1-300 border-t-[2px] border-solid box-border" />
        </div>
        <div className="self-stretch hidden flex-row items-center justify-start py-[0rem] px-[0.687rem] relative gap-[0.375rem]">
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="relative tracking-[0.06em] font-medium z-[1]">
            Resources
          </div>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[2]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="h-[calc(100%_-_70px)] w-[calc(100%_-_78.7px)] absolute !m-[0] top-[3.544rem] right-[4.244rem] bottom-[0.831rem] left-[0.675rem] border-gray1-300 border-t-[2px] border-solid box-border z-[3]" />
        </div>
        <div className="self-stretch hidden flex-row items-center justify-start py-[0rem] px-[0.687rem] relative gap-[0.375rem]">
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[0]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="relative tracking-[0.06em] font-medium z-[1]">
            Pricing
          </div>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden z-[2]"
            alt=""
            src="/icon-left.svg"
          />
          <div className="h-[calc(100%_-_70px)] w-[calc(100%_-_78.7px)] absolute !m-[0] top-[3.544rem] right-[4.244rem] bottom-[0.831rem] left-[0.675rem] border-gray1-300 border-t-[2px] border-solid box-border z-[3]" />
        </div>
      </div>
      <div className="w-[4.125rem] border-black border-l-[2px] border-solid box-border flex flex-row items-center justify-start py-[0rem] px-[0.687rem]">
        <Login1
          showText={showText}
          iconRight={iconRight5}
          iconLeft={iconLeft5}
          text={text}
          propPadding={propPadding}
          propGap={propGap}
          iconLeft1="/icon-left.svg"
          propTextDecoration={propTextDecoration}
          propColor={propColor}
          propMinWidth={propMinWidth}
          propWidth={propWidth}
          iconRight1="/icon-left.svg"
          propMinHeight={propMinHeight}
        />
      </div>
      <Sale
        iconLeft1="/icon-left-1.svg"
        text="Talk To Sales"
        iconRight1="/icon-left-1.svg"
        showText
        iconRight={false}
        iconLeft
        propPadding="1.656rem 0.75rem"
        propGap="0.312rem"
        propTextDecoration="none"
        propColor="#000"
        propMinWidth="6.75rem"
        propWidth="unset"
        propMinHeight="unset"
      />
      <Login text="connect" showText iconRight iconLeft />
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
  brandName: PropTypes.string,
  text: PropTypes.string,
  showText: PropTypes.bool,
  iconRight5: PropTypes.bool,
  iconLeft5: PropTypes.bool,
  propPadding: PropTypes.string,
  propGap: PropTypes.string,
  propTextDecoration: PropTypes.string,
  propColor: PropTypes.string,
  propMinWidth: PropTypes.string,
  propWidth: PropTypes.string,
  propMinHeight: PropTypes.string,

  /** Style props */
  brandFlex: PropTypes.any,
  brandFlexWrap: PropTypes.any,
  brandRowGap: PropTypes.any,
  brandAlignSelf: PropTypes.any,
  brandHeight: PropTypes.any,
  brandTop: PropTypes.any,
  brandPosition: PropTypes.any,
  iconLeftMinWidth: PropTypes.any,
  iconLeftAlignSelf: PropTypes.any,
  iconLeftOverflowX: PropTypes.any,
  textHeight: PropTypes.any,
  textAlignSelf: PropTypes.any,
  textFlex: PropTypes.any,
  textHeight1: PropTypes.any,
  textAlignSelf1: PropTypes.any,
  textFlex1: PropTypes.any,
  textHeight2: PropTypes.any,
  textAlignSelf2: PropTypes.any,
};

export default Navigation1;
