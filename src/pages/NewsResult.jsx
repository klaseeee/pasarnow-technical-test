import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NewsItem from "../components/NewsItem";
import Loading from "../components/Loading";
import SideNav from "../components/SideNav";
import SavedNews from "./SavedNews";

const NewsResult = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newsStorage, setNewsStorage] = useState([]);

  const searchNews = useLocation();

  const getNews = async () => {
    setIsLoading(true);

    const config = {
      method: "GET",
      url: `https://google-search3.p.rapidapi.com/api/v1/news/q=${searchNews.state}`,
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "IN",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(config);
      setNews(response.data);

      setIsLoading(false);
      // console.log(news);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Pasarnow | News Result";
    getNews();

    const news = JSON.parse(localStorage.getItem("savedNews"));
    setNewsStorage(news);
  }, [searchNews.state]);

  console.log(newsStorage);

  return (
    <div className="min-h-screen">
      {!isLoading ? (
        <>
          <SideNav />
          <section className="flex justify-center">
            <div className="xl:max-w-screen-xl flex flex-col-reverse md:flex-row content-center">
              <div className="w-full flex flex-col gap-2 flex-1 justify-center md:pt-14 xl:pt-16 lg:pl-52 xl:pl-56 pr-6 pb-28">
                {searchNews.pathname === "/search/news/result"
                  ? news.length !== 0 &&
                    news?.entries?.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <NewsItem
                            keys={index}
                            title={item.title}
                            href={item.link}
                            timestamps={item.published}
                            source={item.source.title}
                          />
                        </div>
                      );
                    })
                  : newsStorage?.map((saved, index) => {
                      return (
                        <SavedNews title={saved.title} href={saved.href} />
                      );
                    })}
              </div>

              <div className="w-full p-6 pt-16 md:w-60 xl:w-72">
                <div className="bg-white dark:bg-slate-500 dark:text-white shadow dark:border-0 border-2 border-gray-200 rounded-lg p-4 flex gap-4 justify-start items-center">
                  <div className="dark:bg-white p-2 rounded">
                    <BsSearch className="dark:text-black rounded" />
                  </div>
                  <div>
                    <p>{searchNews.state}</p>
                    <small>Search results</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default NewsResult;
