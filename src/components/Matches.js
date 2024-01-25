import React, { useEffect, useState } from "react";
import SingleMatch from "./SingleMatch";
import { getLatestTournamentMatches } from "../api/matches";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import MatchesCarausel from "./MatchesCarausel";


const Matches = () => {
  const [matchesList, setMatchesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getLatestTournamentMatches();
        let matches = data.matches
        matches.reverse();
        setMatchesList(matches);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
      {/* <MatchesCarausel {...settings}/> */}
      <h1 className="md:text-5xl font-championsbold font-bold bg-[#f1f3f8] text-left p-10 pb-0 text-4xl text-blue-950">
        Fixtures & Results
      </h1>
      {loading ? (
        <Spinner size={100} color={"blue"} className={"py-20"} />
      ) : (
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-4 m:p-10 bg-[#f1f3f8] p-5`}
        >
          <>
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
                extraTimeSecondHalfStartTime={
                  match.extraTimeSecondHalfStartTime
                }
                id={match._id}
                key={index}
              />
            ))}
          </>
        </div>
      )}

      {!loading && matchesList.length === 0 && (
        <p className="text-gray-600 text-xl">No matches available</p>
      )}
    </>
  );
};

export default Matches;
