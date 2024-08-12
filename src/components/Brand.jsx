import PropTypes from "prop-types";

const Brand = ({ className = "", brandName = "NFT" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center py-[0rem] px-[2.5rem] gap-[0.625rem] text-left text-[1.125rem] font-alfa-slab-one ${className}`}
    >
      <img
        className="h-[2.125rem] w-[2.125rem] relative hidden"
        alt=""
        src="/slack-logo.svg"
      />
      <a className="[text-decoration:none] relative tracking-[0.06em] inline-block [text-shadow:2px_0_0_#000,_0_2px_0_#000,_-2px_0_0_#000,_0_-2px_0_#000] min-w-[2.875rem]">
        {brandName}
      </a>
    </div>
  );
};

Brand.propTypes = {
  className: PropTypes.string,
  brandName: PropTypes.string,
};

export default Brand;
