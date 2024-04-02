import React from "react";
import { Link, useNavigate } from "react-router-dom";

const list = [
  { title: "Matches", href: "/matches" },
  { title: "Groups", href: "/groups" },
  // { title: "Stats", href: "/stats" },
  { title: "Teams", href: "/teams" },
  {title: "Stats", href: "/stats"}
];

const socials = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@NITHFootball",
    icon: "/socials/youtube-white.png",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/nith_football",
    icon: "/socials/instagram-white.png",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full">
      <div className="absolute z-[-10] flex justify-center items-center md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="/footer.webp"
          className="w-full opacity-90 sm:opacity-100"
          alt=""
          style={{ width: "100vw", height: "100%" }}
        />
      </div>

      <div className=" p-8 md:p-20 text-white font-championsregular flex flex-col md:flex-row justify-between w-full">
        <div className="flex justify-between w-full md:border-r ">
          <img
            src="/socials/INTER-YEAR-LOGO-WHITE.png"
            className="max-w-[100px] aspect-auto"
            alt=""
          />
          <div className="flex justify-between md:px-16 text-right sm:flex-row flex-col">
            <div className="">
              {list.map((ele, index) => (
                <p className="" key={index}>
                  <Link to={ele.href}>{ele.title}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full my-4">
          <div className="h-full flex items-center font-championsregular w-full justify-center ">
            <p className="">Follow us on </p>
            <div className="flex">
              {socials.map((icon, index) => (
                <div
                  key={index}
                  className="w-[40px] h-[40px] border-2 rounded-full mx-2 p-2 hover:cursor-pointer"
                  onClick={() => {
                    window.location = icon.href;
                  }}
                >
                  <img
                    src={icon.icon}
                    alt={icon.title + "icon"}
                    title={icon.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-white opacity-50 font-championsregular"> 2024 NIT Hamirpur Football | Created by Nikhil Pathania <span className="mx-2"></span></p>
    </div>
  );
};

export default Footer;
