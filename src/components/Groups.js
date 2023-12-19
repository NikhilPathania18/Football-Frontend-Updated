import React from "react";
import SingleGroup from "./SingleGroup";

const groupList = [
  {
    title: "Group A",
    teams: [
      {
        logo: "/logo192.png",
        name: "Team 1",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 7,
        ga: 1,
        points: 9,
      },
      {
        logo: "/logo192.png",
        name: "Team 2",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 7,
        ga: 1,
        points: 9,
      },
      {
        logo: "/logo192.png",
        name: "Team 3",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 7,
        ga: 1,
        points: 9,
      },
    ],
  },
  {
    title: "Group A",
    teams: [
      {
        logo: "/logo192.png",
        name: "Team 1lkjlask",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 3,
        ga: 13,
        points: 9,
      },
      {
        logo: "/logo192.png",
        name: "Team 2",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 7,
        ga: 1,
        points: 9,
      },
      {
        logo: "/logo192.png",
        name: "Team 3",
        matches: 3,
        win: 3,
        draw: 0,
        lost: 0,
        gf: 7,
        ga: 1,
        points: 9,
      },
    ],
  },
];

const Groups = () => {
  return (
    <div className="bg-[#f1f3f8]">
      <div className="w-full items-center md:p-10 p-3 min-w-[50%] justify-center flex flex-col">
        <h1 className="md:text-5xl font-bold bg-[#f1f3f8] text-left py-10 pb-0 text-3xl text-blue-950 mb-10 w-full  max-w-6xl ">
          Groups
        </h1>
        {groupList.map((group, index) => (
          <SingleGroup title={group.title} teams={group.teams} />
        ))}
      </div>
    </div>
  );
};

export default Groups;
 