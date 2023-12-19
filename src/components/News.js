import React from "react";
import Highlight from "./Highlight";

const highlights = [
    {
        img : "/maxresdefault-1.jpg",
        title: "News Number 1"
    },
    {
        img : "/maxresdefault-1.jpg",
        title: "News Number 1"
    },
    {
        img : "/maxresdefault-1.jpg",
        title: "News Number 1"
    },
    {
        img : "/maxresdefault-1.jpg",
        title: "News Number 1"
    },
    {
        img : "/maxresdefault-1.jpg",
        title: "News Number 1"
    },
]



const News = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 bg-[#061fd4] md:flow-column px-5 ">
  <div className="w-full md:w-[60%] md:mx-20 border-2 border-solid h-[20rem] rounded-lg relative overflow-hidden my-5 md:h-[30rem]">
    <img src="/maxresdefault-1.jpg" className="z-[-2] w-full h-full object-cover" alt="" />
    <div className="absolute bottom-0 text-white text-3xl p-5 backdrop-blur-sm w-full text-left">
      News Headline
    </div>
  </div>
  <div className="w-full md:w-[40%] md:mx-20 border-2 border-solid h-[30rem] rounded-lg text-white backdrop-blur-sm my-5 ">
    <p className="text-2xl text-white font-semibold text-left m-3">Headlines</p>
    {
      highlights.map((item, index) => (
        <React.Fragment key={index}>
          <Highlight img={item.img} title={item.title} href={item.href} />
          {index !== highlights.length - 1 &&
            <div className="mx-5 border-solid border-t-2"></div>
          }
        </React.Fragment>
      ))
    }
  </div>
</div>

  );
};

export default News;
