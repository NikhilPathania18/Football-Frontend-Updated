import React, { useEffect, useState } from "react";
import { getNewsById } from "../api/news";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const getMonth = (month) => {
  if (month === 1) return "January";
  if (month === 2) return "February";
  if (month === 3) return "March";
  if (month === 4) return "April";
  if (month === 5) return "May";
  if (month === 6) return "June";
  if (month === 7) return "July";
  if (month === 8) return "August";
  if (month === 9) return "September";
  if (month === 10) return "October";
  if (month === 11) return "November";
  if (month === 12) return "December";
};

const getDay = (day) => {
  if (day == 0) return "Sunday";
  if (day == 1) return "Monday";
  if (day == 2) return "Tuesday";
  if (day == 3) return "Wednesday";
  if (day == 4) return "Thursday";
  if (day == 5) return "Friday";
  if (day == 6) return "Saturday";
};

const decorateDate = (date) => {
  const numerical_date = date.getDate();
  const month = getMonth(date.getMonth() + 1);
  const year = date.getFullYear();
  const day = getDay(date.getDay());
  return `${day}, ${month} ${numerical_date}, ${year}`;
};

const SingleNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState({
    title: "",
    image: "",
    paragraphs: [],
    date: new Date(),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);
        let { data } = await getNewsById(id);

        data.news.date = new Date(data.news.date);
        setNews(data.news);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData(id);
  }, [id]);

  return loading ? (
    <Spinner size={100} color={"blue"} className={"py-20"} />
  ) : (
    <div className="my-10 md:mx-20 mx-5 md:mr-[200px] lg:mr-[300px] sm:mr-[100px] sm:mx-14">
      <h1 className="font-championsregular text-3xl md:text-5xl font-bold text-left text-blue-950">
        {news.title}
      </h1>
      <p className="text-gray-500 text-left sm:text-2xl text-xl my-10">
        {decorateDate(news.date)}
      </p>
      <div className="news">
        {news.image && (
          <div className="w-full flex ">
            <img src={news?.image} alt="" style={{ maxHeight: "500px" }} />
          </div>
        )}
        {news.paragraphs.map((para, index) => (
          <p className="text-blue-900 font-base text-lg sm:text-xl text-left my-6">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SingleNews;
