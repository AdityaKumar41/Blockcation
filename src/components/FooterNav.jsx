import { useMemo } from "react";
import PropTypes from "prop-types";

const FooterNav = ({
  className = "",
  propTextDecoration,
  propTextDecoration1,
  propTextDecoration2,
  propTextDecoration3,
  propTextDecoration4,
  propTextDecoration5,
  propTextDecoration6,
  propTextDecoration7,
  propTextDecoration8,
}) => {
  const featuresStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const enterprise1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const solutions1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  const plansStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration3,
    };
  }, [propTextDecoration3]);

  const partnersStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration4,
    };
  }, [propTextDecoration4]);

  const eventsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration5,
    };
  }, [propTextDecoration5]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration6,
    };
  }, [propTextDecoration6]);

  const newsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration7,
    };
  }, [propTextDecoration7]);

  const careersStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration8,
    };
  }, [propTextDecoration8]);

  return (
    <footer
      className={`self-stretch bg-purple border-black border-t-[2px] border-solid box-border overflow-hidden flex flex-row items-start justify-center pt-[3.187rem] px-[1.25rem] pb-[3.375rem] max-w-full text-left text-[0.875rem] text-fff font-syne mq450:pt-[2.063rem] mq450:pb-[2.188rem] mq450:box-border ${className}`}
    >
      <div className="w-[60.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq800:flex-wrap">
        <div className="w-[7.75rem] flex flex-col items-start justify-start gap-[1.125rem]">
          <b className="self-stretch relative">PRODUCT</b>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={featuresStyle}
          >
            Features
          </a>
          <div className="self-stretch relative">Integrations</div>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={enterprise1Style}
          >
            Enterprise
          </a>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={solutions1Style}
          >
            Solutions
          </a>
        </div>
        <div className="w-[7.75rem] flex flex-col items-start justify-start gap-[1.125rem]">
          <b className="self-stretch relative">Pricing</b>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={plansStyle}
          >
            Plans
          </a>
          <div className="self-stretch relative">Paid vs. Free</div>
        </div>
        <div className="w-[7.75rem] flex flex-col items-start justify-start gap-[1.125rem]">
          <b className="self-stretch relative">RESOURCES</b>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={partnersStyle}
          >
            Partners
          </a>
          <div className="self-stretch relative">Developers</div>
          <div className="self-stretch relative">Community</div>
          <div className="self-stretch relative">Apps</div>
          <div className="self-stretch relative">Blog</div>
          <div className="self-stretch relative">Help Center</div>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={eventsStyle}
          >
            Events
          </a>
        </div>
        <div className="w-[7.75rem] flex flex-col items-start justify-start gap-[1.125rem]">
          <b className="self-stretch relative">COMPANY</b>
          <div className="self-stretch relative" style={aboutUsStyle}>
            About Us
          </div>
          <div className="self-stretch relative">Leadership</div>
          <div className="self-stretch relative">Investor Relations</div>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={newsStyle}
          >
            News
          </a>
          <div className="self-stretch relative">Media Kit</div>
          <a
            className="[text-decoration:none] self-stretch relative text-[inherit]"
            style={careersStyle}
          >
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
};

FooterNav.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propTextDecoration2: PropTypes.any,
  propTextDecoration3: PropTypes.any,
  propTextDecoration4: PropTypes.any,
  propTextDecoration5: PropTypes.any,
  propTextDecoration6: PropTypes.any,
  propTextDecoration7: PropTypes.any,
  propTextDecoration8: PropTypes.any,
};

export default FooterNav;
