import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[3.25rem] max-w-full text-left text-[5rem] text-black font-inter mq725:gap-[1.625rem] ${className}`}
    >
      <h1 className="m-0 w-[34.625rem] relative text-inherit font-normal font-[inherit] inline-block max-w-full mq450:text-[1.5rem] mq1000:text-[2.5rem]">
        File Library
      </h1>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-[0.813rem] text-darkslategray-300 font-body">
        <div className="w-[67.688rem] flex flex-col items-end justify-start gap-[1.75rem] max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.906rem] max-w-full">
            <div className="w-[56.25rem] flex flex-row items-start justify-end py-[0rem] px-[4.187rem] box-border max-w-full mq1000:pl-[2.063rem] mq1000:pr-[2.063rem] mq1000:box-border">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq725:flex-wrap">
                <div className="relative tracking-[-0.02em] inline-block min-w-[2.25rem]">
                  Name
                </div>
                <div className="flex flex-row items-start justify-start gap-[4rem] max-w-full mq725:flex-wrap mq725:gap-[2rem]">
                  <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[5.375rem] gap-[0.625rem]">
                    <div className="relative tracking-[-0.02em] inline-block min-w-[3.063rem]">
                      Created
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.062rem]">
                        <img
                          className="w-[0.375rem] h-[0.219rem] relative rounded-12xs-5 object-contain"
                          loading="lazy"
                          alt=""
                          src="/vector-20.svg"
                        />
                        <img
                          className="w-[0.375rem] h-[0.219rem] relative rounded-12xs-5"
                          loading="lazy"
                          alt=""
                          src="/vector-19.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative tracking-[-0.02em] inline-block min-w-[3.875rem]">
                    Download
                  </div>
                  <div className="relative tracking-[-0.02em] inline-block min-w-[1.625rem]">
                    Edit
                  </div>
                  <div className="relative tracking-[-0.02em] inline-block min-w-[2.5rem]">
                    Delete
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-8xs bg-black flex flex-row items-start justify-between pt-[0.625rem] pb-[0.418rem] pl-[11.187rem] pr-[1.062rem] box-border max-w-full gap-[1.25rem] text-background-color mq450:pl-[1.25rem] mq450:box-border mq725:pl-[2.75rem] mq725:box-border mq1000:flex-wrap mq1050:pl-[5.563rem] mq1050:box-border">
              <div className="h-[3.313rem] w-[67.688rem] relative rounded-8xs bg-black hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-[0.593rem] px-[0rem] pb-[0rem]">
                <div className="relative tracking-[-0.02em] z-[1]">
                  companies_demo_export.xlsx
                </div>
              </div>
              <div className="w-[32.706rem] flex flex-row items-start justify-start gap-[6.812rem] max-w-full mq450:gap-[1.688rem] mq725:flex-wrap mq725:gap-[3.375rem]">
                <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.437rem]">
                    <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                      2021-11-04
                    </div>
                    <div className="relative tracking-[-0.02em] inline-block min-w-[1.813rem] whitespace-nowrap z-[1]">
                      11:54
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-end justify-start py-[0rem] pl-[0rem] pr-[0.125rem] box-border gap-[3.125rem] min-w-[10.063rem] mq450:flex-wrap mq450:gap-[1.563rem]">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.268rem]">
                    <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.625rem] pb-[0.375rem] bg-background-color shadow-[1px_2px_3px_rgba(70,_118,_251,_0.41)] rounded-6xs flex flex-row items-start justify-start z-[1] hover:bg-gainsboro">
                      <div className="relative text-[0.813rem] tracking-[-0.02em] font-body text-black text-left inline-block min-w-[3.875rem]">
                        Download
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.937rem]">
                    <div className="h-[1.875rem] w-[1.875rem] relative">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray1-400 w-full h-full z-[1]" />
                      <img
                        className="absolute top-[0.544rem] left-[0.813rem] w-[0.213rem] h-[0.063rem] z-[2]"
                        loading="lazy"
                        alt=""
                        src="/edit.svg"
                      />
                      <img
                        className="absolute top-[0.875rem] left-[0.838rem] w-[0.438rem] h-[0.563rem] z-[2]"
                        loading="lazy"
                        alt=""
                        src="/fill-3.svg"
                      />
                    </div>
                  </div>
                  <div className="h-[1.875rem] w-[1.875rem] relative">
                    <img
                      className="absolute top-[0.794rem] left-[0.625rem] w-[0.575rem] h-[0.719rem] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/delete@2x.png"
                    />
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray1-500 w-full h-full z-[2]" />
                  </div>
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.65rem]">
                    <img
                      className="w-[0.269rem] h-[1.181rem] relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/options@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-[0rem] px-[1.062rem] box-border max-w-full text-gray">
            <div className="flex flex-row items-end justify-start gap-[3.875rem] max-w-full mq450:gap-[0.938rem] mq1000:flex-wrap mq1000:gap-[1.938rem]">
              <div className="w-[29.875rem] flex flex-col items-start justify-end pt-[0rem] pb-[0.562rem] pl-[0rem] pr-[2.375rem] box-border max-w-full">
                <div className="self-stretch flex flex-row items-end justify-start gap-[0.25rem] max-w-full mq725:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem] box-border min-w-[13.25rem] max-w-full">
                    <div className="flex flex-col items-start justify-start gap-[3.268rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                          demo_image.jpg
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                          demo_image.jpg
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[3.625rem]">
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                          <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                            demo_image.jpg
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0.062rem]">
                          <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                            demo_image.jpg
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.125rem]">
                          <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                            demo_image.jpg
                          </div>
                        </div>
                        <div className="relative tracking-[-0.02em] inline-block min-w-[6.25rem] z-[1]">
                          demo_image.jpg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[3.268rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                      <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                        2021-11-03
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                      <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                        2021-11-03
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3.625rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                          2021-11-03
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0.062rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                          2021-11-03
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.125rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                          2021-11-03
                        </div>
                      </div>
                      <div className="relative tracking-[-0.02em] inline-block min-w-[4.063rem] z-[1]">
                        2021-11-03
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[3.268rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                      <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                        22:00
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                      <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                        22:00
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3.625rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                          22:00
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0.062rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                          22:00
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0.125rem]">
                        <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                          22:00
                        </div>
                      </div>
                      <div className="relative tracking-[-0.02em] inline-block min-w-[2.188rem] whitespace-nowrap z-[1]">
                        22:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10.313rem] flex flex-col items-start justify-start gap-[2.562rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0rem]">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[1.687rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.887rem]">
                      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.268rem]">
                          <div className="flex flex-row items-start justify-start relative">
                            <img
                              className="h-[3.313rem] w-[67.688rem] absolute !m-[0] bottom-[-0.687rem] left-[-47.062rem] rounded-8xs"
                              alt=""
                              src="/base.svg"
                            />
                            <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.625rem] pb-[0.375rem] bg-black shadow-[1px_2px_3px_rgba(70,_118,_251,_0.41)] rounded-6xs flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
                              <div className="relative text-[0.813rem] tracking-[-0.02em] font-body text-background-color text-left inline-block min-w-[3.875rem]">
                                Download
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[1.875rem] w-[1.875rem] relative">
                            <img
                              className="absolute top-[0.575rem] left-[0.813rem] w-[0.213rem] h-[0.063rem] z-[1]"
                              alt=""
                              src="/edit-1.svg"
                            />
                            <img
                              className="absolute top-[0.906rem] left-[0.838rem] w-[0.438rem] h-[0.563rem] z-[1]"
                              alt=""
                              src="/fill-3.svg"
                            />
                            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]" />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.562rem]">
                          <div className="flex flex-row items-start justify-start relative">
                            <img
                              className="h-[3.313rem] w-[67.688rem] absolute !m-[0] bottom-[-0.687rem] left-[-47.062rem] rounded-8xs"
                              alt=""
                              src="/base.svg"
                            />
                            <button className="cursor-pointer [border:none] pt-[0.625rem] px-[0.625rem] pb-[0.375rem] bg-black shadow-[1px_2px_3px_rgba(70,_118,_251,_0.41)] rounded-6xs flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
                              <div className="relative text-[0.813rem] tracking-[-0.02em] font-body text-background-color text-left inline-block min-w-[3.875rem]">
                                Download
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="h-[1.875rem] w-[1.875rem] relative">
                          <img
                            className="absolute top-[0.75rem] left-[0.975rem] w-[0.213rem] h-[0.063rem] object-cover z-[1]"
                            alt=""
                            src="/edit-2@2x.png"
                          />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-royalblue w-full h-full z-[2]" />
                          <img
                            className="absolute top-[0.75rem] left-[0.75rem] w-[0.438rem] h-[0.563rem] z-[3]"
                            alt=""
                            src="/fill-3-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <FrameComponent base="/base.svg" base1="/base.svg" />
                  </div>
                </div>
                <FrameComponent base="/base.svg" base1="/base.svg" />
              </div>
              <div className="w-[5.531rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2.687rem]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0rem]">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[1.75rem]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[2.268rem]">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="h-[1.875rem] w-[1.875rem] relative">
                            <img
                              className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.719rem] object-cover z-[1]"
                              loading="lazy"
                              alt=""
                              src="/delete-1@2x.png"
                            />
                            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                          </div>
                          <img
                            className="h-[1.244rem] w-[0.281rem] relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/options-1@2x.png"
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="flex flex-col items-start justify-start pt-[0.306rem] px-[0rem] pb-[0rem]">
                            <div className="w-[1.875rem] h-[1.875rem] relative">
                              <img
                                className="absolute top-[0.181rem] left-[0.625rem] w-[0rem] h-[0rem] object-cover z-[1]"
                                alt=""
                                src="/delete-2@2x.png"
                              />
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                              <img
                                className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.181rem] z-[3]"
                                alt=""
                                src="/fill-4.svg"
                              />
                              <img
                                className="absolute top-[1.044rem] left-[0.669rem] w-[0.488rem] h-[0.481rem] z-[3]"
                                alt=""
                                src="/fill-1.svg"
                              />
                            </div>
                          </div>
                          <img
                            className="h-[1.244rem] w-[0.281rem] relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/options-2@2x.png"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[2.687rem]">
                        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem]">
                          <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                            <div className="h-[1.875rem] w-[1.875rem] relative">
                              <img
                                className="absolute top-[0.806rem] left-[0.625rem] w-[0rem] h-[0rem] object-cover z-[1]"
                                alt=""
                                src="/delete-2@2x.png"
                              />
                              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                              <img
                                className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.181rem] z-[3]"
                                alt=""
                                src="/fill-4.svg"
                              />
                              <img
                                className="absolute top-[1.044rem] left-[0.669rem] w-[0.488rem] h-[0.481rem] z-[3]"
                                alt=""
                                src="/fill-1.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                              <img
                                className="w-[0.281rem] h-[1.244rem] relative object-contain z-[1]"
                                loading="lazy"
                                alt=""
                                src="/options-2@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                          <div className="h-[1.875rem] w-[1.875rem] relative">
                            <img
                              className="absolute top-[0.806rem] left-[0.625rem] w-[0rem] h-[0rem] object-cover z-[1]"
                              alt=""
                              src="/delete-2@2x.png"
                            />
                            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                            <img
                              className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.181rem] z-[3]"
                              alt=""
                              src="/fill-4.svg"
                            />
                            <img
                              className="absolute top-[1.044rem] left-[0.669rem] w-[0.488rem] h-[0.481rem] z-[3]"
                              alt=""
                              src="/fill-1.svg"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                            <img
                              className="w-[0.281rem] h-[1.244rem] relative object-contain z-[1]"
                              loading="lazy"
                              alt=""
                              src="/options-2@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[5.406rem] flex flex-col items-start justify-start gap-[2.687rem]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.062rem] pr-[0rem]">
                      <div className="flex-1 flex flex-row items-end justify-between gap-[1.25rem]">
                        <div className="h-[1.875rem] w-[1.875rem] relative">
                          <img
                            className="absolute top-[0.806rem] left-[0.625rem] w-[0rem] h-[0rem] object-cover z-[1]"
                            alt=""
                            src="/delete-2@2x.png"
                          />
                          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                          <img
                            className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.181rem] z-[3]"
                            alt=""
                            src="/fill-4.svg"
                          />
                          <img
                            className="absolute top-[1.044rem] left-[0.669rem] w-[0.488rem] h-[0.481rem] z-[3]"
                            alt=""
                            src="/fill-1.svg"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                          <img
                            className="w-[0.281rem] h-[1.244rem] relative object-contain z-[1]"
                            loading="lazy"
                            alt=""
                            src="/options-2@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem]">
                      <div className="h-[1.875rem] w-[1.875rem] relative">
                        <img
                          className="absolute top-[0.806rem] left-[0.625rem] w-[0rem] h-[0rem] object-cover z-[1]"
                          alt=""
                          src="/delete-2@2x.png"
                        />
                        <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red-200 w-full h-full z-[2]" />
                        <img
                          className="absolute top-[0.806rem] left-[0.625rem] w-[0.575rem] h-[0.181rem] z-[3]"
                          alt=""
                          src="/fill-4.svg"
                        />
                        <img
                          className="absolute top-[1.044rem] left-[0.669rem] w-[0.488rem] h-[0.481rem] z-[3]"
                          alt=""
                          src="/fill-1.svg"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                        <img
                          className="w-[0.281rem] h-[1.244rem] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/options-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
