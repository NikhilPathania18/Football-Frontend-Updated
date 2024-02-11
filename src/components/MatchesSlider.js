import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getLatestTournamentMatches } from "../api/matches";
import { useNavigate } from "react-router-dom";
import decorateName from "../helpers/decorateName";
import calculateTime from "../helpers/calculateTime";
const monthName = (month) => {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
  }
};

const SingleMatch = ({
  title,
  teamA,
  teamB,
  teamAScore,
  teamBScore,
  date,
  time,
  teamAPenalties,
  teamBPenalties,
  status,
  currentStatus,
  halfLength,
  firstHalfStartTime,
  secondHalfStartTime,
  extraTimeHalfLength,
  extraTimeFirstHalfStartTime,
  extraTimeSecondHalfStartTime,
  id,
  loading
}) => {
  const arePenalties = teamAPenalties > 0 || teamBPenalties > 0;

  const navigate = useNavigate();
  return (
    <div
      className="min-w-[160px] mb-2 mr-5 p-2 border-solid font-championslight border  border-indigo-900 rounded-lg bg-[#090361] text-gray-600 flex flex-col justify-center hover:cursor-pointer "
      onClick={() => {
        navigate(`/match/${id}`);
      }}
    >
      {status === "upcoming" ? (
        <p className="text-white text-opacity-40 text-left text-sm">{`${date.getDate()} ${monthName(
          date.getMonth() + 1
        )}, ${time}`}</p>
      ) : status === "ongoing" ? (
        <p className=" text-left text-sm text-[#5af7dc]">Live</p>
      ) : (
        <div className="flex justify-between">
          <p className="text-white text-opacity-40 text-left text-sm">{`${date.getDate()} ${monthName(
            date.getMonth() + 1
          )}`}</p>
          <span className="text-white text-opacity-40 text-sm">FT</span>
        </div>
      )}

      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <img src={teamA.logo} width={"20px"} className="max-h-[20px]" />
          <p className="text-white text-left text-sm ">
            {decorateName(teamA.name)}
          </p>
        </div>
        <span className="text-white">
          {status !== "upcoming" ? teamAScore : ""}
        </span>
      </div>
      <div className="flex justify-between my-1">
        <div className="flex items-center">
          <img src={teamB.logo} width={"20px"} className="max-h-[20px]" />
          <p className="text-white  text-left text-sm ">
            {decorateName(teamB.name)}
          </p>
        </div>
        <span className="text-white">
          {status !== "upcoming" ? teamBScore : ""}
        </span>
      </div>
    </div>
  );
};

const AnimationCard = () => {
  return (
    <div
      className="min-w-[160px] min-h-[96px] mb-2 mr-5 p-2 border-solid font-championslight   rounded-lg bg-[#090361] text-gray-600 flex flex-col justify-center hover:cursor-pointer animate-pulse"
    >
      <p className="max-w-[50px] min-h-[15px] bg-slate-600 rounded-md my-2"></p>
      <p className="max-w-[100px] min-h-[15px] bg-slate-600 rounded-md my-1"></p>
      <p className="max-w-[100px] min-h-[15px] bg-slate-600 rounded-md my-1"></p>
    </div>
  )
}

const emptyMatches = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',]

const MatchesSlider = () => {
  const navigate = useNavigate();
  const [matchesList, setMatchesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [matchesHover, setMatchesHover] = useState(false)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getLatestTournamentMatches();

        let matches = data.matches;
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
  return (
    <>
      <div className="bg-[#000040]">
        <div className={` scroll  max-w-7xl md:pl-10 mr:pr-0  pl-2 pr-0 sm:pl-6 sm:pr-0 lg:pl-8 lg:pr-0 mx-auto ${loading? 'overflow-hidden':'overflow-x-auto'}  w-full py-0 relative `} style={{scrollbarWidth: '0' }}>
          <div className="flex  justify-start items-center h-[150px] pr-16">
            {/* {
              loading && emptyMatches.map((ele,index)=>(
                <SingleMatch loading={loading}/>
              ))
            } */}
            {
              loading && 
              emptyMatches.map((ele,index)=>(
                <AnimationCard />
              ))
            }
            { !loading && matchesList.map((match, index) => (
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
                // status={"ended"}
                // currentStatus={"firstHalf"}
                status={match.status}
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
            

            {/* //Mobile View */}
            <div className="flex flex-col items-center justify-center min-w-[100px] md:hidden font-semibold font-sans
            ">
              {/* <div className="border-2 rounded-[50%] w-[50px]  border-[#0d3aff]   "> */}
              <div
                className="border-2 rounded-[50%] w-[50px]  border-[#0d3aff] hover:cursor-pointer  "
                onClick={() => {
                  navigate("/matches");
                }}
              >
                <img
                  src="/next.png"
                  className="color-[#0d3aff]"
                  width={"50px"}
                />
              </div>
              <p className="text-[#0d3aff] text-sm my-2">View All</p>
            </div>

            {/* Desktop View */}
            <div className=" justify-center items-center sticky bg-[#000040] right-[-1px] px-5  min-w-[280px] hidden md:flex  h-full ">
              <div className="flex my-auto justify-center text-[#5af7dc] text-lg font-championsregular border-2 hover:bg-[#5af7dc] hover:text-[#000040]  border-[#5af7dc]  rounded-lg py-4 px-2 hover:cursor-pointer" onMouseOver={()=>{setMatchesHover(true)}} onMouseLeave={()=>{setMatchesHover(false)}} onClick={()=>{navigate('/matches')}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill=""
                viewBox="0 0 24 24"
                class="pk-svg__icon pk-svg__icon--product" 
                part="svg"
                width={"25px"}
                className="mx-1 "
              >
                <path
                  fill="#5af7dc"
                  fill-rule="evenodd"
                  className={` ${matchesHover? 'fill-[#000040]': ''}`}
                  d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm11 2h2v7h-3.169a3.001 3.001 0 00-5.662 0H6V4h2v2.5a1 1 0 001 1h6a1 1 0 001-1V4zm-6.828 9H6v7h2v-2.5a1 1 0 011-1h6a1 1 0 011 1V20h2v-7h-3.172a3.001 3.001 0 01-5.656 0zM14 18.5V20h-4v-1.5h4zM10 4v1.5h4V4h-4zm2 8.995a1 1 0 110-2 1 1 0 010 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>

                <p className="text-md">View all Matches</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesSlider;
