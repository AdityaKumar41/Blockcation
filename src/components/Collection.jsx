import { useMemo } from "react";
import PropTypes from "prop-types";

const Collection = ({
  className = "",
  propBackgroundColor,
  image,
  seeAll,
  propMinWidth,
}) => {
  const collectionStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const seeAllStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`h-[17.938rem] w-[12.875rem] shadow-[2px_2px_0px_#000,_1px_1px_0px_#000] rounded-3xl bg-yellow border-black border-[3px] border-solid box-border flex flex-col items-start justify-between py-[1.125rem] px-[0.562rem] min-h-[17.938rem] text-left text-[0.75rem] text-black font-syne ${className}`}
      style={collectionStyle}
    >
      <div className="relative font-medium inline-block min-w-[3.625rem]">
        Collection
      </div>
      <img
        className="w-[11.375rem] flex-1 relative rounded-xs max-h-full overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.5rem] text-[0.875rem]">
        <b
          className="relative inline-block min-w-[3.875rem]"
          style={seeAllStyle}
        >
          {seeAll}
        </b>
      </div>
    </div>
  );
};

Collection.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  seeAll: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Collection;
