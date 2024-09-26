import ShortLink from "./ShortLink";
import useLinks from "../hooks/useLinks";

const Shortener = () => {
  const { setUrl, url, getShortenedLink, urlList} = useLinks()

  return (
    <>
      <section className="relative -top-40">
        <div className="md:max-w-[1108px] mx-5 md:mx-20 lg:mx-32 flex flex-col gap-3 lg:gap-0 lg:flex-row bg-boostmob bg-[#3A3054] rounded-lg mt-20 p-5 lg:px-[64px] lg:py-[54px] lg:justify-between">
          <input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
            type="text"
            placeholder="Shorten a link here..."
            className="px-4 lg:px-[32px] bg-white py-1 lg:py-[14px] h-[48px] lg:h-[64px] rounded-lg outline-none text-gray-700 lg:w-full lg:mr-[24px]"
          />

          <button
            onClick={() => {
              getShortenedLink(url);
              setUrl("");
            }}
            className="bg-[#2BD0D0] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all px-3 py-1 h-[48px] lg:w-[188px] lg:h-[64px] rounded-lg"
          >
            Shorten it!
          </button>
        </div>
      </section>

      <div className="relative bottom-36 flex flex-col gap-3">
        {urlList.map((list) => (
          <ShortLink
            originalLink={list.originalUrl}
            shortenedLink={list.shortenedUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Shortener;
