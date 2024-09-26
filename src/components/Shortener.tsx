import { useState } from "react";
import axios from "axios";
import ShortLink from "./ShortLink";

interface UrlList {
  originalUrl: string;
  shortenedUrl: string;
}

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState<UrlList[]>([]);

  const getShortenedLink = async (originalURL: string) => {
    const options = {
      method: "POST",
      url: "https://api.short.io/links",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "sk_fX7tYooZguPcsu3u",
      },
      data: {
        originalURL: originalURL,
        domain: "gfty.short.gy",
      },
    };

    if (originalURL) {
      try {
        const response = await axios.request(options);
        setUrlList((prevUrlList) => [
          ...prevUrlList,
          { originalUrl: originalURL, shortenedUrl: response.data.shortURL },
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
