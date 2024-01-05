import React, { useEffect, useState } from "react";
import SingleGroup from "./SingleGroup";
import { getLatestTournamentDetails } from "../api/tournament";
import Spinner from "./Spinner";

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

const compareTeams = (a, b) => {
  if (a.points == b.points) {
    if (a.gf - a.ga == b.gf - b.ga) {
      if (a.gf == b.gf) {
        if (a.yellowCards == b.yellowCards) {
          return 0;
        } else if (a.yellowCards < b.yellowCards) return -1;
        else return 1;
      } else if (a.gf > b.gf) return -1;
      else return 1;
    } else if (a.gf - a.ga > b.gf - b.ga) return -1;
    else return 1;
  } else if (a.points > b.points) return -1;
  else return 1;
};

const Groups = () => {
  const [groupList, setGroupList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getLatestTournamentDetails();

        let groupLength = data.latestTournament.pointsTable.length;

        for (let i = 0; i < groupLength; i++) {
          data.latestTournament.pointsTable[i].teamStats.sort(compareTeams);
        }

        // console.log(data.latestTournament.pointsTable);
        setGroupList(data.latestTournament.pointsTable);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-[#f1f3f8]">
      <div className="w-full items-center md:p-10 p-3  min-w-[50%] justify-center flex flex-col">
        <h1 className="md:text-5xl font-bold bg-[#f1f3f8] text-left py-10 pb-0 text-3xl text-blue-950 mb-10 w-full  max-w-6xl ">
          Groups
        </h1>
        {loading ? (
          <Spinner size={100} className={"py-20"} color={"blue"} />
        ) : (
          <>
            {groupList.map((group, index) => (
              <SingleGroup
                title={group.title}
                teams={group.teamStats}
                key={index}
              />
            ))}
            {
              groupList.length===0 && (
                <p className="text-xl text-gray-600">No groups available</p>
              )
            }
          </>
        )}
      </div>
    </div>
  );
};

export default Groups;
