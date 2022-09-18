import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";
import ResultItem from "../components/ResultItem";

const Results = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async () => {
    setIsLoading(true);

    const config = {
      method: "GET",
      url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${location.state}`,
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "IN",
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    try {
      const response = await axios(config);
      setSearchResult(response.data);

      console.log(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    search();
  }, [location.state]);

  return (
    <>
      {!isLoading ? (
        <div className="container flex justify-center pt-14 pb-20 xl:pt-10 xl:pb-28 dark:text-white">
          <ul className="max-w-xs overflow-hidden md:max-w-screen-sm lg:max-w-screen-md lg:pt-6 xl:max-w-5xl flex flex-col justify-center gap-1 md:gap-6">
            {searchResult?.results?.map((result) => {
              return <ResultItem result={result} />;
            })}
          </ul>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Results;
