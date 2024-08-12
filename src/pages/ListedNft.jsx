import Navigation1 from "../components/Navigation1";
import FrameComponent5 from "../components/FrameComponent5";
import FooterNav from "../components/FooterNav";

const ListedNft = () => {
  return (
    <div className="w-full relative bg-fff overflow-hidden flex flex-col items-start justify-start gap-[7.375rem] leading-[normal] tracking-[normal] mq450:gap-[1.813rem] mq725:gap-[3.688rem]">
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
        iconLeftOverflowX="auto"
        textHeight="unset"
        textAlignSelf="stretch"
        textFlex="unset"
        textHeight1="unset"
        textAlignSelf1="stretch"
        textFlex1="unset"
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
      <div className="w-[3.25rem] h-[1.056rem] hidden" />
      <section className="w-[81.188rem] flex flex-row items-start justify-start pt-[0rem] px-[2.5rem] pb-[22.062rem] box-border max-w-full mq725:pb-[9.313rem] mq725:box-border mq1000:pb-[14.313rem] mq1000:box-border">
        <FrameComponent5 />
      </section>
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

export default ListedNft;
