import React, { useEffect, useState } from "react";
import SingleMatch from "./SingleMatch";
import { getLatestTournamentMatches } from "../api/matches";

const matchesList = [
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
  {
    title: "Match 1",
    teamA: {
      name: "Team A",
      logo: "/logo512.png",
    },
    teamB: {
      name: "Team B",
      logo: "/logo512.png",
    },
    teamAScore: 3,
    teamBScore: 3,
    date: new Date("2023-12-18"),
    time: "5:00 PM",
  },
];

const Matches = () => {

  const [matchesList, setMatchesList] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const {data} = await getLatestTournamentMatches();

        setMatchesList(data.matches)
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])
  return (
    <>
      <h1 className="md:text-5xl font-bold bg-[#f1f3f8] text-left p-10 pb-0 text-3xl text-blue-950">
        Fixtures & Results
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 m:p-10 bg-[#f1f3f8] p-5">
        {matchesList.map((match, index) => (
          <SingleMatch
            title={match.matchName}
            teamA={match.teamA}
            teamB={match.teamB}
            teamAScore={match.teamAScore}
            teamBScore={match.teamBScore}
            date={new Date(match.date)}
            time={match.time}
            teamAPenalties={match.teamAPenalties}
            teamBPenalties={match.teamBPenalties}
            status={match.status}
            // status={"ongoing"}
            // currentStatus={"firstHalf"}
            currentStatus={match.currentStatus}
            halfLength={match.halfLength}
            firstHalfStartTime={match.firstHalfStartTime}
            secondHalfStartTime={match.secondHalfStartTime}
            extraTimeHalfLength={match.extraTimeHalfLength}
            extraTimeFirstHalfStartTime={match.extraTimeFirstHalfStartTime}
            extraTimeSecondHalfStartTime={match.extraTimeSecondHalfStartTime}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Matches;
