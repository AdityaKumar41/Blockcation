import PropTypes from "prop-types";

const CollectionGridRow = ({ className = "" }) => {
  return (
    <div
      className={`w-[20.313rem] flex flex-col items-end justify-start gap-[1.375rem] max-w-full shrink-0 text-center text-[1.5rem] text-whitesmoke-200 font-dm-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.375rem] pr-[0.312rem]">
        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem]">
            <b className="relative tracking-[-0.02em] leading-[1.563rem] inline-block min-w-[0.563rem] mq450:text-[1.188rem] mq450:leading-[1.25rem]">
              1
            </b>
          </div>
          <div className="w-[15.563rem] flex flex-row items-start justify-start gap-[1.562rem] text-left text-[1rem]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.062rem]">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[3.75rem] w-[3.75rem] absolute !m-[0] bottom-[-2.125rem] left-[-2.125rem] rounded-[50%] object-cover"
                  alt=""
                  src="/unsplashk0rvudbob4c@2x.png"
                />
                <div className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]">
                  <div className="absolute h-[34.38%] w-6/12 top-[31.25%] right-[25%] bottom-[34.38%] left-[25%] bg-gray1-100" />
                  <img
                    className="absolute h-[83.44%] w-[83.44%] top-[8.44%] right-[8.13%] bottom-[8.13%] left-[8.44%] max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
                  <div className="relative tracking-[-0.02em] leading-[103%] font-medium inline-block min-w-[5.813rem]">
                    CryptoFunks
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.375rem] text-[0.875rem] text-dimgray font-poppins">
                    <img
                      className="h-[1.5rem] w-[0.938rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ethereum-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                      <div className="relative tracking-[-0.02em] leading-[0.938rem] font-semibold inline-block min-w-[3.875rem]">
                        19,769.39
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.625rem] px-[0rem] pb-[0rem] text-right text-[1.25rem] text-turquoise font-poppins">
              <div className="relative tracking-[-0.02em] leading-[1.313rem] font-semibold inline-block min-w-[5.125rem] mq450:text-[1rem] mq450:leading-[1rem]">
                +26.52%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.956rem]">
        <div className="self-stretch h-[0.063rem] relative border-darkgray border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.25rem] pr-[0.312rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.343rem] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem]">
              <b className="relative tracking-[-0.02em] leading-[1.563rem] inline-block min-w-[0.875rem] mq450:text-[1.188rem] mq450:leading-[1.25rem]">
                2
              </b>
            </div>
            <img
              className="h-[3.75rem] w-[3.75rem] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/unsplashft49qnfucq8@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[8.063rem] text-left text-[1rem]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative tracking-[-0.02em] leading-[103%] font-medium inline-block min-w-[3.375rem]">
                  Cryptix
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.875rem] text-dimgray font-poppins">
                  <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.375rem]">
                      <img
                        className="h-[1.5rem] w-[0.938rem] relative overflow-hidden shrink-0"
                        alt=""
                        src="/ethereum-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                        <div className="relative tracking-[-0.02em] leading-[103%] font-semibold inline-block min-w-[3.5rem]">
                          2,769.39
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[1.25rem] tracking-[-0.02em] leading-[1.313rem] font-semibold text-red-100 text-right inline-block min-w-[4.813rem] mq450:text-[1rem] mq450:leading-[1rem]">
                    +10.52%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.063rem] relative border-darkgray border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.25rem] pr-[0.312rem]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div className="w-[12.125rem] flex flex-row items-start justify-start gap-[1.312rem]">
              <div className="w-[0.938rem] flex flex-col items-start justify-start pt-[0.875rem] px-[0rem] pb-[0rem] box-border">
                <b className="self-stretch relative tracking-[-0.02em] leading-[1.563rem] inline-block min-w-[0.938rem] mq450:text-[1.188rem] mq450:leading-[1.25rem]">
                  3
                </b>
              </div>
              <img
                className="h-[3.75rem] w-[3.75rem] relative object-cover"
                loading="lazy"
                alt=""
                src="/unsplash5mtf9xyvvgm@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-left text-[1rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
                  <div className="relative tracking-[-0.02em] leading-[103%] font-medium inline-block min-w-[4.688rem]">
                    Frensware
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.375rem] text-[0.875rem] text-dimgray font-poppins">
                    <img
                      className="h-[1.5rem] w-[0.938rem] relative overflow-hidden shrink-0"
                      alt=""
                      src="/ethereum-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                      <div className="relative tracking-[-0.02em] leading-[103%] font-semibold inline-block min-w-[3.5rem]">
                        9,232.39
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] text-right text-[1.25rem] text-turquoise font-poppins">
              <div className="relative tracking-[-0.02em] leading-[1.313rem] font-semibold inline-block min-w-[4.313rem] mq450:text-[1rem] mq450:leading-[1rem]">
                +2.52%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CollectionGridRow.propTypes = {
  className: PropTypes.string,
};

export default CollectionGridRow;
