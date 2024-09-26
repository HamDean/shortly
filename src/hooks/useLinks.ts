import axios from "axios";
import { useState } from "react";

interface UrlList {
    originalUrl: string;
    shortenedUrl: string;
  }

const useLinks = () => {
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

    return { url, urlList, setUrl, getShortenedLink}
}

export default useLinks