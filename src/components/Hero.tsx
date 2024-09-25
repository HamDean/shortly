import heroImage from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center">
      {/* Text Section */}
      <div className="flex flex-col gap-4 text-center items-center lg:items-start lg:text-left lg:h-[350px]">
        <h1 className="text-[42px] md:text-[65px] lg:text-[80px] font-extrabold leading-[45px] md:leading-[90px] tracking-[-1.05px] md:tracking-[-2px] text-[#34313D]">
          More than just shorter links
        </h1>
        <p className="text-[#9E9AA8] text-[18px] md:w-[540px] leading-8 md:text-[22px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button className="btn  btn-primary mx-auto lg:mx-0 rounded-full mt-2 bg-[#2BD0D0] text-center text-nowrap w-[200px] h-[40px] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="relative lg:mr-[-200px] mb-[40px] lg:overflow-x-hidden">
        <img
          src={heroImage}
          alt="An illustration of a person working"
          className="md:w-[500px] lg:w-[733px]"
        />
      </div>
    </div>
  );
};

export default Hero;
