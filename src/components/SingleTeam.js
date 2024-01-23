import React, { useEffect, useState } from "react";
import { getTeamById } from "../api/teams";
import { useNavigate, useParams } from "react-router-dom";
import decorateName from "../helpers/decorateName";
import Spinner from "./Spinner";

const teamDetails = {
  name: "Real Madrid CF",
  matches: 21,
  win: 18,
  draw: 2,
  lost: 1,
  logo: "/maxresdefault-1.jpg",
  players: [
    {
      name: "Nikhil",
      position: "Right Back",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/logo192.png",
    },
    {
      name: "Nikhil Pathania",
      position: "Defender",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/maxresdefault-1.jpg",
    },
    {
      name: "Nikhil",
      position: "Right Back",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/logo192.png",
    },
    {
      name: "Nikhil",
      position: "Right Back",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/logo192.png",
    },
    {
      name: "Nikhil",
      position: "Right Back",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/logo192.png",
    },
    {
      name: "Nikhil",
      position: "Right Back",
      matches: 5,
      goals: 0,
      assists: 1,
      image: "/logo192.png",
    },
  ],
};

const SingleTeam = () => {
  const navigate = useNavigate();

  const [teamDetails, setTeamDetails] = useState({
    name: "",
    numberOfMatches: 0,
    wins: 0,
    draw: 0,
    loses: 0,
    logo: "",
    players: [],
  });

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);
        const { data } = await getTeamById(id);
        setTeamDetails(data.teamDetails);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData(id);
  }, [id]);

  return loading ? (
    <Spinner className={'py-20'} size={100} color={'blue'}/>
  ) : (
    <div className="bg-white mx-3 lg:mx-[200px] boder-solid border my-10 rounded-md">
      <h1 className="text-3xl md:text-5xl font-championsbold text-blue-950 md:text-left p-10">
        {decorateName(teamDetails.name + " FC")}
      </h1>
      <div className="md:flex">
        <div className="md:w-[30%] w-[80%] mb-4 md:mb-0 flex mx-auto justify-center ">
          <img src={teamDetails?.logo} alt="" width={"100%"} className="" />
        </div>
        <div className="second grid md:grid-cols-4 grid-cols-2 items-center">
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-championsbold">
              {teamDetails.numberOfMatches}
            </h2>
            <p className="text-blue-950 text-2xl font-championsregular">Matches</p>
          </div>
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-championsbold">
              {teamDetails.wins}
            </h2>
            <p className="text-blue-950 text-2xl font-championsregular">Wins</p>
          </div>
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-championsbold">
              {teamDetails.draw}
            </h2>
            <p className="text-blue-950 text-2xl font-championsregular">Draws</p>
          </div>
          <div className="m-5">
            <h2 className="text-blue-950 text-7xl font-championsbold">
              {teamDetails.loses}
            </h2>
            <p className="text-blue-950 text-2xl font-championsregular">Lost</p>
          </div>
        </div>
      </div>
      {teamDetails.players.length && (
        <div className="players md:mx-10 mx-3 border-solid md:border-t-2 border-t my-5 py-5">
          <h3 className="text-blue-950 text-left font-championsbold md:text-5xl text-3xl mb-4 ">
            Players
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1">
            {teamDetails.players.map((player, index) => (
              <div
                className="flex items-center my-2 border-solid border-b pb-3 hover:cursor-pointer"
                key={index}
                onClick={() => {
                  navigate(`/player/${player._id}`);
                }}
              >
                <div className="w-[15%] overflow-hidden ">
                  <img
                    src={"/profile-icon.png"}
                    alt=""
                    className="rounded-[50%]"
                  />
                </div>
                <div className="px-5 text-left  ">
                  <h2 className="text-gray-600 text-2xl">
                    {decorateName(player.name)}
                  </h2>
                  <p className="text-gray-400 text-sm italic">
                    {decorateName(player.position)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTeam;
