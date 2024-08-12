import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.875rem] box-border max-w-full text-left text-[1.125rem] text-black font-alfa-slab-one ${className}`}
    >
      <Navigation1
        brandName="NFT"
        text="Talk To Sale"
        showText={false}
        iconRight5={false}
        iconLeft5
        propPadding="1.687rem 0.75rem"
        propGap="0.375rem"
        propTextDecoration="unset"
        propColor="#000"
        propMinWidth="unset"
        propWidth="6.188rem"
        propMinHeight="1.125rem"
      />
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
