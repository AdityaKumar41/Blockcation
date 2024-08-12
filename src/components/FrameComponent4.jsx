import ButtonSecondary from "./ButtonSecondary";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border max-w-full text-left text-[1.313rem] text-black font-syne ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[1.437rem] box-border relative bg-[url('/public/features@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:pt-[1.25rem] mq800:box-border mq1350:pt-[1.563rem] mq1350:pb-[1.25rem] mq1350:box-border">
        <div className="self-stretch flex flex-col items-start justify-start py-[1.75rem] px-[7.5rem] box-border max-w-full mq800:pl-[3.75rem] mq800:pr-[3.75rem] mq800:box-border mq450:p-[1.25rem] mq450:box-border">
          <div className="self-stretch shadow-[5px_5px_0px_#000,_4px_4px_0px_#000,_3px_3px_0px_#000,_2px_2px_0px_#000,_1px_1px_0px_#000] rounded-sm bg-fff border-black border-[4px] border-solid box-border flex flex-row items-start justify-start py-[0.312rem] px-[0rem] relative gap-[3.312rem] max-w-full mq800:gap-[1.625rem] mq1350:flex-wrap">
            <div className="w-[34.5rem] flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full mq1125:min-w-full mq1350:flex-1">
              <textarea
                className="border-black border-[4px] border-solid bg-mediumslateblue h-[16.5rem] w-auto [outline:none] self-stretch relative shadow-[5px_5px_0px_#000,_4px_4px_0px_#000,_3px_3px_0px_#000,_2px_2px_0px_#000,_1px_1px_0px_#000] rounded-tl-none rounded-tr-181xl rounded-br-181xl rounded-bl-none box-border overflow-hidden shrink-0"
                rows={13}
                cols={28}
              />
            </div>
            <div className="flex-1 border-black border-l-[2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[2.906rem] px-[4rem] gap-[1.5rem] min-w-[23.875rem] max-w-full mq800:pl-[2rem] mq800:pr-[2rem] mq800:box-border mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[2rem] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.563rem]">
                  Bring Your Team Together
                </h3>
                <div className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[150%] font-medium text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos maxime vero nostrum similique maiores dicta ab
                  unde inventore tenetur, quam nulla provident architecto facere
                  facilis vel eaque veritatis ad porro tempore explicabo earum
                  doloribus incidunt quod ipsum! Ut, beatae porro!
                </div>
              </div>
              <ButtonSecondary
                rightButton
                leftButton={false}
                text="More about channels"
              />
            </div>
            <img
              className="h-[7.294rem] w-[7.95rem] absolute !m-[0] right-[-5.387rem] bottom-[-0.787rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[1.75rem] px-[7.5rem] box-border max-w-full mq800:pl-[3.75rem] mq800:pr-[3.75rem] mq800:box-border mq450:p-[1.25rem] mq450:box-border">
          <div className="self-stretch shadow-[5px_5px_0px_#000,_4px_4px_0px_#000,_3px_3px_0px_#000,_2px_2px_0px_#000,_1px_1px_0px_#000] rounded-sm bg-fff border-black border-[4px] border-solid box-border flex flex-row items-start justify-start py-[0.312rem] pl-[0.625rem] pr-[0rem] relative gap-[3.312rem] max-w-full mq800:gap-[1.625rem] mq1350:flex-wrap mq1350:pr-[0.625rem] mq1350:box-border">
            <div className="flex-1 border-black border-r-[2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[3.468rem] px-[4rem] gap-[1.5rem] min-w-[23.875rem] max-w-full mq800:pl-[2rem] mq800:pr-[2rem] mq800:box-border mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[0.02em] leading-[2rem] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.563rem]">
                  Choose how you want to work
                </h3>
                <div className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[160%] font-medium text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, minima. Harum beatae dolor doloremque placeat eos a,
                  adipisci aut, rerum quas sint mollitia eveniet tenetur debitis
                  praesentium earum aliquam ipsum ducimus quod sit excepturi
                  dolorum dicta modi. Pariatur, vitae ex.
                </div>
              </div>
              <div className="rounded-sm flex flex-row items-start justify-start relative text-[1rem]">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-sm bg-black" />
                <div className="rounded-sm bg-fff border-black border-[2px] border-solid flex flex-row items-start justify-start py-[0.687rem] px-[1.375rem] gap-[0.375rem] z-[1]">
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-button.svg"
                  />
                  <div className="relative font-medium">
                    Flexible Communication
                  </div>
                  <input
                    className="m-0 h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="w-[34.5rem] flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full mq1125:min-w-full mq1350:flex-1">
              <textarea
                className="border-black border-[4px] border-solid bg-cornflowerblue h-[16.5rem] w-auto [outline:none] self-stretch relative shadow-[-5px_5px_0px_#000,_-4px_4px_0px_#000,_-3px_3px_0px_#000,_-2px_2px_0px_#000,_-1px_1px_0px_#000] rounded-tl-181xl rounded-tr-none rounded-br-none rounded-bl-181xl box-border"
                rows={13}
                cols={28}
              />
            </div>
            <img
              className="h-[6.975rem] w-[6.613rem] absolute !m-[0] bottom-[0.881rem] left-[-4.769rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[1.75rem] px-[7.5rem] box-border max-w-full mq800:pl-[3.75rem] mq800:pr-[3.75rem] mq800:box-border mq450:p-[1.25rem] mq450:box-border">
          <div className="self-stretch shadow-[5px_5px_0px_#000,_4px_4px_0px_#000,_3px_3px_0px_#000,_2px_2px_0px_#000,_1px_1px_0px_#000] rounded-sm bg-fff border-black border-[4px] border-solid box-border flex flex-row items-start justify-start py-[0.312rem] px-[0rem] relative gap-[3.312rem] max-w-full mq800:gap-[1.625rem] mq1350:flex-wrap">
            <div className="w-[34.5rem] flex flex-col items-start justify-start pt-[1.437rem] px-[0rem] pb-[0rem] box-border min-w-[34.5rem] max-w-full mq1125:min-w-full mq1350:flex-1">
              <textarea
                className="border-black border-[4px] border-solid bg-fuchsia h-[16.5rem] w-auto [outline:none] self-stretch relative shadow-[5px_5px_0px_#000,_4px_4px_0px_#000,_3px_3px_0px_#000,_2px_2px_0px_#000,_1px_1px_0px_#000] rounded-tl-none rounded-tr-181xl rounded-br-181xl rounded-bl-none box-border overflow-hidden shrink-0"
                rows={13}
                cols={28}
              />
            </div>
            <div className="flex-1 border-black border-l-[2px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[2.906rem] px-[4rem] gap-[1.5rem] min-w-[23.875rem] max-w-full mq800:pl-[2rem] mq800:pr-[2rem] mq800:box-border mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem]">
                <h3 className="m-0 relative text-inherit leading-[2rem] font-bold font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.563rem]">
                  Move faster with your tools in one place
                </h3>
                <div className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[150%] font-medium text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia repellendus dignissimos iste nam natus ullam libero,
                  quae quod, quo ut adipisci voluptate unde! Enim quis veniam
                  quae nostrum ipsum dolorum suscipit, officia nesciunt quasi
                  earum.
                </div>
              </div>
              <ButtonSecondary
                rightButton
                leftButton
                text="Learn more about channels"
              />
            </div>
            <img
              className="h-[5.131rem] w-[5.131rem] absolute !m-[0] right-[-4.125rem] bottom-[0.294rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
        <h3 className="!m-[0] absolute bottom-[4.625rem] left-[-0.312rem] text-[1.25rem] font-bold font-roboto-condensed text-whitesmoke-200 z-[1] mq450:text-[1rem]">{`Top Collections over `}</h3>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
