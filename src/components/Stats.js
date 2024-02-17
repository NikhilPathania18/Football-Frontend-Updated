import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLatestTournamentStats } from "../api/tournament";
import Spinner from "./Spinner";

const teamStats = [
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
  {
    logo: "/logo192.png",
    name: "Civil FC",
    goals: 14,
  },
];

const profileImage = "/profile-icon.png";
const Card = ({ rank, image, name, score, href }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`mx-4 ${
        rank == 1 ? "text-white" : "text-gray-500"
      } py-2 flex justify-between items-center  ${
        rank > 1 && "border-b"
      } min-h-[56px]`}
    >
      <div className="flex gap-2 items-center hover:cursor-pointer" onClick={()=>{navigate(`/player/${href?href:'#'}`)}}>
        <p className="text-xl font-championsregular mr-2 ">
          {name ? rank : " "}
        </p>
        <img
          src={name ? (image ? image : profileImage) : ""}
          width={"40px"}
          alt=""
          className={`rounded-full ${
            name ? (image ? "aspect-square" : "") : ""
          }`}
        />
        {/* <Link to={name ? `` : "#"} onClick={()=>{navigate('/player')}}> */}
          <p className="text-xl">{name ? name : " "}</p>
        {/* </Link> */}
      </div>
      <h1 className="text-3xl font-championsbold">{name ? score : " "}</h1>
    </div>
  );
};

const Stats = () => {
  const [tournamentStats, setTournamentStats] = useState({});

  const [loading, setLoading] = useState(true);
  console.log(tournamentStats);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLatestTournamentStats();
        setTournamentStats(data.tournamentStats);
        console.log(data.tournamentStats);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <Spinner color={"blue"} size={100} className={"p-10"} />
  ) : (
    <div>
      <div
        style={{ backgroundImage: "url(/stats-bg.webp)" }}
        className="font-championsbold pb-8"
      >
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl md:text-5xl text-left p-4  md:p-16 py-8 text-white  ">
            Competition Stats
          </h1>
          {/* <button className="bg-teal-400 rounded-3xl p-5 py-2 text-3xl text-white  mx-16 h-full">{"See All Time Stats >"}</button> */}
        </div>
        <div className="lg:w-1/2 p-5 mx-4 md:mx-16 bg-[#000040] bg-opacity-50 rounded-lg lg:min-w-[670px] ">
          {/* <h3 className=" text-left text-white text-xl">Goals</h3> */}
          <div className="flex py-8 pb-4 mb-4 justify-between  border-b border-opacity-50 border-white">
            <div className="">
              <h1 className="text-6xl text-white ">{tournamentStats?.goals}</h1>
              <p className="text-white text-left px-1 text-opacity-50 font-championsregular">
                Total goals
              </p>
            </div>
            <img src="https://img.uefa.com/imgml/uefacom/ucl/2020/stats/net.svg" />
          </div>
          <div className="text-white md:flex md:gap-16 grid grid-cols-2 ">
            <div className="">
              <h2 className="font-championsbold text-3xl text-left md:text-center">
                {tournamentStats?.teams}
              </h2>
              <p className="text-left font-championsregular text-opacity-50 text-white">
                Teams
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left md:text-center">
                {tournamentStats?.matches}
              </h2>
              <p className="text-left font-championsregular text-opacity-50 text-white">
                Matches played
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left md:text-center">
                {tournamentStats?.yellowCards}
              </h2>
              <p className="text-left font-championsregular text-opacity-50 text-white flex items-center">
                <img
                  src="/card icons/yellow.svg"
                  width={"15px"}
                  alt="yellow card "
                  className="inline"
                />
                <span className="mx-1">Cards</span>
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left md:text-center">
                {tournamentStats?.redCards}
              </h2>
              <p className="text-left font-championsregular text-opacity-50 text-white flex items-center">
                <img
                  src="/card icons/red.svg"
                  width={"15px"}
                  alt="yellow card "
                  className="inline"
                />
                <span className="mx-1">Cards</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#000040] text-4xl font-championsbold md:text-left px-16 py-8">
        Player Stats
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 md:px-16 mb-8 font-championsregular gap-6 items-center md:justify-start rounded-b-lg overflow-hidden ">
        <div
          className=" rounded-lg"
          style={{ backgroundImage: "url(/stats-bg.webp)" }}
        >
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl"> Goals</h2>
            <Card
              image={tournamentStats?.mostGoals[0]?.player?.image}
              name={tournamentStats?.mostGoals[0].player?.name}
              score={tournamentStats?.mostGoals[0]?.count}
              rank={1}
              href={tournamentStats?.mostGoals[0]?.player?._id}
            />
          </div>
          <div className="bg-white rounded-b-lg ">
            {tournamentStats.mostGoals.map(
              (ele, index) =>
                index > 0 && (
                  <Card
                    image={ele.player ? ele.player?.image : null}
                    name={ele.player ? ele.player?.name : null}
                    score={ele.player ? ele?.count: null}
                    rank={index + 1}
                    href={ele?.player?._id}
                  />
                )
            )}
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>

        <div
          className=" rounded-lg"
          style={{ backgroundImage: "url(/stats-bg.webp)" }}
        >
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl"> Assists</h2>
            <Card
              image={tournamentStats?.mostAssists[0]?.player?.image}
              name={tournamentStats?.mostAssists[0]?.player?.name}
              score={tournamentStats?.mostAssists[0]?.count}
              rank={1}
              href={tournamentStats?.mostAssists[0]?.player?._id}
            />
          </div>
          <div className="bg-white rounded-b-lg ">
            {tournamentStats.mostAssists.map(
              (ele, index) =>
                index > 0 && (
                  <Card
                    image={ele.player ? ele.player?.image : null}
                    name={ele.player ? ele.player?.name : null}
                    score={ele.player ? ele?.count : null}
                    rank={index + 1}
                    href={ele?.player?._id}
                  />
                )
            )}
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>

        <div
          className=" rounded-lg"
          style={{ backgroundImage: "url(/stats-bg.webp)" }}
        >
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">
              {" "}
              Yellow Cards
            </h2>
            <Card
              image={tournamentStats?.mostYellow[0]?.player?.image}
              name={tournamentStats?.mostYellow[0]?.player?.name}
              score={tournamentStats?.mostYellow[0]?.count}
              rank={1}
              href={tournamentStats?.mostYellow[0]?.player?._id}
            />
          </div>
          <div className="bg-white rounded-b-lg ">
            {tournamentStats.mostYellow.map(
              (ele, index) =>
                index > 0 && (
                  <Card
                    image={ele.player ? ele?.player?.image : null}
                    name={ele.player ? ele?.player?.name : null}
                    score={ele.player ? ele?.count : null}
                    rank={index + 1}
                    href={ele.player ? ele?.player?._id: '#'}
                  />
                )
            )}
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>

        <div
          className=" rounded-lg"
          style={{ backgroundImage: "url(/stats-bg.webp)" }}
        >
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">
              {" "}
              Red Cards
            </h2>
            <Card
              image={tournamentStats?.mostRed[0]?.player?.image}
              name={tournamentStats?.mostRed[0]?.player?.name}
              score={tournamentStats?.mostRed[0]?.count}
              rank={1}
              href={tournamentStats?.mostRed[0]?.player?._id}
            />
          </div>
          <div className="bg-white rounded-b-lg ">
            {tournamentStats.mostRed.map(
              (ele, index) =>
                index > 0 && (
                  <Card
                    image={ele.player ? ele.player?.image : null}
                    name={ele.player ? ele.player?.name : null}
                    score={ele.player ? ele?.count : null}
                    rank={index + 1}
                    href={ele?.player?._id}
                  />
                )
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
