const Boost = () => {
  return (
    <section className="bg-[#F2F2F2] pb-32">
      <div className="md:max-w-[1108px] mx-5 md:mx-20 lg:mx-32 flex flex-col gap-3 lg:gap-0 lg:flex-row bg-boostmob bg-[#3A3054] rounded-lg mt-20 p-5 lg:px-[64px] lg:py-[54px] lg:justify-between">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="input border-none px-4 lg:px-[32px] py-1 lg:py-[14px] h-[48px] lg:h-[64px] rounded-lg outline-none text-gray-700 lg:w-full lg:mr-[24px]"
        />

        <button className="btn btn-primary bg-[#2BD0D0] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all px-3 py-1 h-[48px] lg:w-[188px] lg:h-[64px] rounded-lg">
          Shorten it!
        </button>
      </div>
    </section>
  );
};
export default Boost;
