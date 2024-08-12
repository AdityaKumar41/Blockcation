import Hero from "./Hero";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[3.312rem] pb-[2.937rem] box-border max-w-full text-left text-[3rem] text-black font-ibm-plex-mono mq800:pb-[1.938rem] mq800:box-border mq1350:pl-[1.625rem] mq1350:pr-[1.625rem] mq1350:box-border ${className}`}
    >
      <Hero />
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
