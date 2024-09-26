import { useState } from "react";

interface Props {
  originalLink: string;
  shortenedLink: string;
}

const ShortLink = ({ originalLink, shortenedLink }: Props) => {
  const [isCopied, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="md:max-w-[1108px] mx-5 md:mx-20 lg:mx-32 flex flex-col md:flex-row md:items-center md:justify-between md:px-8 md:py-4 rounded-md items-start bg-white">
      <p className="py-2 md:py-0 px-4 md:px-0 text-[#34313D]">{originalLink}</p>
      <hr className="w-full md:hidden" />
      <div className="flex flex-col py-2 md:py-0 px-4 md:px-0 md:flex-row gap-2 w-full md:w-auto md:gap-6 items-start md:items-center">
        <p className=" text-[#2BD0D0]">{shortenedLink}</p>
        <button
          onClick={handleCopy}
          className={`my-[14px] md:my-0 md:ml-0 md:w-[103px] rounded-md mt-2 text-center text-nowrap w-full 
                   h-[40px] cursor-pointer text-white font-semibold text-lg transition-all ${
                     isCopied
                       ? "bg-[#3A3054]"
                       : "bg-[#2BD0D0] hover:bg-[#9AE3E3]"
                   }`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortLink;
