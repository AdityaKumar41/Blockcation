import Navigation1 from "../components/Navigation1";
import FooterNav from "../components/FooterNav";

const CreateNft = () => {
  return (
    <div className="w-full relative bg-fff overflow-hidden flex flex-col items-start justify-start gap-[6.687rem] leading-[normal] tracking-[normal] mq450:gap-[1.688rem] mq750:gap-[3.313rem]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[2.687rem] max-w-full mq750:gap-[1.313rem]">
        <Navigation1
          brandFlex="unset"
          brandFlexWrap="unset"
          brandRowGap="unset"
          brandAlignSelf="stretch"
          brandHeight="4.5rem"
          brandTop="0"
          brandPosition="sticky"
          iconLeftMinWidth="unset"
          iconLeftAlignSelf="stretch"
          iconLeftOverflowX="unset"
          textHeight="unset"
          textAlignSelf="stretch"
          textFlex="1"
          textHeight1="unset"
          textAlignSelf1="stretch"
          textFlex1="1"
          textHeight2="unset"
          textAlignSelf2="stretch"
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
        <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.687rem] box-border max-w-full">
          <form className="m-0 w-[77.313rem] flex flex-col items-start justify-start max-w-full">
            <div className="w-[73rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <h1 className="m-0 w-[34.625rem] relative text-[5rem] font-normal font-inter text-black text-left inline-block shrink-0 max-w-full mq450:text-[1.5rem] mq1050:text-[2.5rem]">
                Create NFT
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-[2.187rem] px-[0rem] box-border gap-[1.875rem] max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq1050:pt-[1.438rem] mq1050:pb-[1.438rem] mq1050:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-[1.625rem] font-normal font-archivo text-gray1-200 text-left mq450:text-[1.313rem]">
                  Photo/Video
                </h2>
                <div className="self-stretch rounded-lg border-darkgray border-[1px] border-solid flex flex-row items-center justify-center py-[4.187rem] px-[1.25rem] gap-[1rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                  <div className="relative text-[1.125rem] font-medium font-archivo text-darkgray text-left">
                    Upload Photo/Video
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-[1.625rem] font-normal font-archivo text-gray1-200 text-left inline-block min-w-[4.375rem] mq450:text-[1.313rem]">
                  Name
                </h2>
                <div className="self-stretch rounded-lg border-darkgray border-[1px] border-solid flex flex-row items-center justify-start py-[2rem] px-[1rem]">
                  <input
                    className="w-[7.188rem] [border:none] [outline:none] font-medium font-archivo text-[1.438rem] bg-[transparent] h-[1.563rem] relative text-darkgray text-left inline-block p-0 mq450:text-[1.125rem]"
                    placeholder="Splashray.."
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                <h2 className="m-0 relative text-[1.625rem] font-normal font-archivo text-gray1-200 text-left inline-block min-w-[2.438rem] mq450:text-[1.313rem]">
                  Bio
                </h2>
                <div className="self-stretch rounded-lg border-darkgray border-[1px] border-solid box-border flex flex-row items-start justify-start p-[1rem] min-h-[7.438rem] max-w-full">
                  <h2 className="m-0 w-[49.875rem] relative text-[1.438rem] font-medium font-archivo text-darkgray text-left inline-block shrink-0 max-w-full mq450:text-[1.125rem]">{`Let people know about your work, creativity & inspiration about this work`}</h2>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-[1.625rem] font-normal font-archivo text-gray1-200 text-left inline-block min-w-[6.25rem] mq450:text-[1.313rem]">
                  Duration
                </h2>
                <div className="self-stretch rounded-lg border-darkgray border-[1px] border-solid flex flex-row items-center justify-start py-[2rem] pl-[0.937rem] pr-[68.062rem] gap-[1rem] lg:pr-[34rem] lg:box-border mq450:pr-[1.25rem] mq450:box-border mq750:pr-[17rem] mq750:box-border">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-1.svg"
                  />
                  <div className="relative text-[1.125rem] font-medium font-archivo text-darkgray text-left inline-block min-w-[5.688rem]">
                    Select time
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h1 className="m-0 relative text-[1.75rem] font-normal font-archivo text-gray1-200 text-left inline-block min-w-[4.063rem] mq450:text-[1.375rem]">
                  Price
                </h1>
                <div className="self-stretch rounded-lg border-darkgray border-[1px] border-solid flex flex-row items-center justify-start py-[1.937rem] px-[1rem]">
                  <input
                    className="w-[12rem] [border:none] [outline:none] font-medium font-archivo text-[1.438rem] bg-[transparent] h-[1.563rem] relative text-darkgray text-left inline-block p-0 mq450:text-[1.125rem]"
                    placeholder="Enter ETH amount"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full">
              <button className="cursor-pointer [border:none] py-[0rem] px-[0rem] bg-[transparent] w-[24.5rem] rounded-sm flex flex-row items-start justify-start box-border relative max-w-full">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                  <div className="absolute h-full w-full top-[0rem] right-[-0.125rem] bottom-[-0.125rem] left-[0rem] rounded-sm bg-skyblue border-black border-[2px] border-solid box-border" />
                  <div className="absolute h-full w-full top-[0rem] right-[-0.062rem] bottom-[-0.062rem] left-[0rem] rounded-sm bg-orchid border-black border-[1px] border-solid box-border z-[1]" />
                </div>
                <div className="flex-1 rounded-sm bg-black flex flex-row items-start justify-center py-[1.312rem] px-[1.25rem] box-border gap-[0.25rem] shrink-0 max-w-full z-[2]">
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-right.svg"
                  />
                  <b className="relative text-[1.125rem] inline-block font-syne text-fff text-left min-w-[4.313rem]">
                    Create
                  </b>
                  <img
                    className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon-right.svg"
                  />
                </div>
              </button>
            </div>
          </form>
        </section>
      </main>
      <FooterNav
        propTextDecoration="unset"
        propTextDecoration1="unset"
        propTextDecoration2="unset"
        propTextDecoration3="unset"
        propTextDecoration4="unset"
        propTextDecoration5="unset"
        propTextDecoration6="none"
        propTextDecoration7="unset"
        propTextDecoration8="unset"
      />
    </div>
  );
};

export default CreateNft;
