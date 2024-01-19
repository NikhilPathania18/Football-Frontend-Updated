import React, { useEffect, useState } from "react";
import Highlight from "./Highlight";
import axios from "axios";
import { fetchNews } from "../api/news";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const News = () => {
  const navigate = useNavigate();

  const [highlights, setHighlights] = useState([]);

  const [topNews, setTopNews] = useState(null);

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await fetchNews();

        setTopNews(data.data.topNews);
        setHighlights(data.data.news);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();  
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row py-10 items-center lg:items-start flow-column px-5 min-h-screen"
      style={{ backgroundImage: "url(/newsBackground.webp)" }}
    >
      <div className={`w-full lg:w-[70%] md:mx-5 border  bg-[#000040]  border-blue-700 border-solid  rounded-lg relative overflow-hidden my-5 hover:cursor-pointer ${(loading || topNews)? 'block' : "hidden" } overflow-hidden`}>
        {loading ? (
          <Spinner color={"white"} size={100} className={"my-20 block"} />
        ) : (
          <>
            <Link to={`/news/${topNews?._id}`}>
              <img
                src={topNews?.image}
                className="z-[-2] w-full  object-cover transform  transition-transform hover:scale-110"
                alt=""
              />
            </Link>
            <div className="bg-gradient-to-t from-gray-800 to-transparent font-cabin absolute bottom-0 overflow-hidden z-10 text-white  md:text-3xl p-2 md:p-5 md:pb-1 w-full text-left text-base">
              <Link to={`/news/${topNews?._id}`}>{topNews?.title}</Link>
            </div>
          </>
        )}
      </div>
      <div className="w-full lg:w-[40%] md:mx-5 lg:border lg:border-blue-600 lg:bg-blue-950/50 border-solid h-full rounded-lg text-white  my-5 pb-4">
        <p className="hidden lg:block font-championsregular text-2xl md:text-3xl text-white font-semibold text-left m-3 py-1">
          Headlines
        </p>
        {loading ? (
          <Spinner color={"white"} size={100} className={"my-20"} />
        ) : (
          <>
            {highlights.map((item, index) => (
              <React.Fragment key={index}>
                <Highlight
                  img={item.image}
                  title={item.title}
                  href={item._id}
                />
                {index !== highlights.length - 1 && (
                  <div className="md:mx-5 border-solid border-t-2 border-white border-opacity-20"></div>
                )}
              </React.Fragment>
            ))}
            {
              highlights.length === 0 && (
                <p className="text-xl text-gray-300">No Headlines available</p>
              )
            }
          </>
        )}
      </div>
    </div>
  );
};

export default News;
