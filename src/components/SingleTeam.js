import React from "react";

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
  return (
    <div className="bg-white mx-3 lg:mx-[250px] boder-solid border my-10 rounded-md">
      <h1 className="text-3xl md:text-5xl font-semibold text-blue-950 md:text-left p-10">
        {teamDetails.name}
      </h1>
      <div className="md:flex">
        <div className="md:w-[30%] w-[80%] mb-4 md:mb-0 flex mx-auto justify-center">
          <img src={teamDetails.logo} alt="" width={"100%"} className=""  />
        </div>
        <div className="second grid md:grid-cols-4 grid-cols-2 items-center">
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-bold">
              {teamDetails.matches}
            </h2>
            <p className="text-blue-950 text-2xl ">Matches</p>
          </div>
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-bold">
              {teamDetails.win}
            </h2>
            <p className="text-blue-950 text-2xl ">Wins</p>
          </div>
          <div className="p-5">
            <h2 className="text-blue-950 text-7xl font-bold">
              {teamDetails.draw}
            </h2>
            <p className="text-blue-950 text-2xl ">Draws</p>
          </div>
          <div className="m-5">
            <h2 className="text-blue-950 text-7xl font-bold">
              {teamDetails.lost}
            </h2>
            <p className="text-blue-950 text-2xl ">Lost</p>
          </div>
        </div>
      </div>
      {teamDetails.players.length && (
        <div className="players md:mx-10 mx-3 border-solid md:border-t-2 border-t my-5 py-5">
          <h3 className="text-blue-950 text-left font-semibold md:text-5xl text-3xl mb-4 ">
            Players
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1">
            {teamDetails.players.map((player, index) => (
              <div
                className="flex items-center my-2 border-solid border-b pb-3"
                key={index}
              >
                <div className="w-[15%] overflow-hidden">
                <img src={player.image} alt=""  />
                </div>
                <div className="px-5 text-left  ">
                  <h2 className="text-gray-600 text-2xl">{player.name}</h2>
                  <p className="text-gray-400 text-sm italic">
                    {player.position}
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
