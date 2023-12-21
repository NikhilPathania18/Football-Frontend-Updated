import React, { useEffect, useState } from "react";
import Highlight from "./Highlight";
import axios from "axios";
import { fetchNews } from "../api/news";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  const [highlights, setHighlights] = useState([]);

  const [topNews, setTopNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchNews();

        setTopNews(data.data.topNews);
        setHighlights(data.data.news);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row py-10 items-center lg:items-start flow-column px-5 "
      style={{ backgroundImage: "url(/newsBackground.webp)" }}
    >
      <div className="w-full lg:w-[60%] md:mx-5 lg:mx-20 border border-blue-700 border-solid  rounded-lg relative overflow-hidden my-5 hover:cursor-pointer">
      <Link to={`/news/${topNews?._id}`} >
        <img
          src={topNews?.image}
          className="z-[-2] w-full  object-cover"
          alt=""
        />
        </Link>
        <div className="font-championsbold absolute bottom-0 text-white  md:text-3xl md:p-5 p-2 bg-gradient-to-t from-blue-950 to-blue-700/20 w-full text-left text-base">
          <Link to={`/news/${topNews?._id}`} >
          {topNews?.title}
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[40%] md:mx-5 lg:mx-20 lg:border lg:border-blue-600 lg:bg-blue-950/50 border-solid h-full rounded-lg text-white  my-5 pb-4">
        <p className="hidden lg:block font-championsregular text-2xl md:text-3xl text-white font-semibold text-left m-3 py-3">
          Headlines
        </p>
        {highlights.map((item, index) => (
          <React.Fragment key={index}>
            <Highlight img={item.image} title={item.title} href={item._id} />
            {index !== highlights.length - 1 && (
              <div className="mx-5 border-solid border-t-2"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default News;
