import Media from "./Media";
import Brand from "../assets/icon-brand-recognition.svg";
import Detail from "../assets/icon-detailed-records.svg";
import Customize from "../assets/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <section className=" bg-[#F2F2F2]">
      <div className="md:max-w-[1108px]  mx-5 md:mx-20 lg:mx-32 text-center">
        <h1 className="font-bold text-[#34313D] text-[28px] mb-[16px]">
          Advanced Statistics
        </h1>

        <p className="text-[#9E9AA8] mb-[48px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="flex flex-col items-center">
          <Media
            cardImage={Brand}
            title="Brand recognition"
            tag="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />

          <hr className="border-[5px] h-[100px] border-[#2BD0D0]" />

          <Media
            cardImage={Detail}
            title="Detailed records"
            tag="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <hr className="border-[5px] h-[100px] border-[#2BD0D0]" />
          <Media
            cardImage={Customize}
            title="Fully customizable"
            tag="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </section>
  );
};
export default Stats;
