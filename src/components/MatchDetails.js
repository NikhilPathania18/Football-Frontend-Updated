import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchDetails } from "../api/matches";
import { decorateDate } from "../helpers/decorateDate";
import decorateName from "../helpers/decorateName";
import calculateTime from "../helpers/calculateTime";
import PenaltyMissed from "./svg-icons/PenaltyMissed";
import Goal from "./svg-icons/Goal";
import Spinner from "./Spinner";

const SquadList = ({
  teamA,
  teamB,
  playersA,
  playersB,
  teamALogo,
  teamBLogo,
}) => {
  const [selectedTeam, setSelectedTeam] = useState("A");
  const navigate = useNavigate();
  return (
    <>
      <div className="md:px-72 bg-[#F1F3F8] font-championsregular">
        <h1 className="text-4xl text-left text-[#31306E] font-championsregular my-5 px-2 md:px-0">
          Squad List
        </h1>
        <div className="flex justify-start gap-3 my-3 px-2 md:px-0">
          <button
            className={`bg-white min-w-[130px] px-2 py-2 rounded-full hover:bg-[#f5f5f8] ${
              selectedTeam === "A" ? "border border-[#0d3bfe]" : ""
            } ${
              selectedTeam === "A" ? "text-[#0d3bfe]" : "text-[#304a9c]"
            } text-xl flex justify-center items-center`}
            onClick={() => {
              setSelectedTeam("A");
            }}
          >
            <p className="">{decorateName(teamA)}</p>
            <img src={teamALogo} alt="" className="w-[30px] " />
          </button>
          <button
            className={`bg-white min-w-[130px] px-2 py-2 rounded-full hover:bg-[#f5f5f8] ${
              selectedTeam === "B" ? "border border-[#0d3bfe]" : ""
            } ${
              selectedTeam === "B" ? "text-[#0d3bfe]" : "text-[#304a9c]"
            } text-xl flex justify-center items-center`}
            onClick={() => {
              setSelectedTeam("B");
            }}
          >
            <p className="">{decorateName(teamB)}</p>
            <img src={teamBLogo} alt="" className="w-[30px] " />
          </button>
        </div>

            <div className="max-w-full overflow-auto px-2 md:px-0">

            <div className="grid grid-cols-8 w-full text-[#31306e] text-xl  overflow-auto min-w-[800px]">
          <div className="text-sm flex w-full my-2   col-span-2 p-2 items-center   rounded-l-lg"></div>
          <div className=" text-sm w-full items-center flex justify-center    my-2">
            Branch
          </div>
          <div className="text-sm w-full items-center flex justify-center   my-2">
            Matches
          </div>
          <div className="text-sm w-full items-center flex justify-center   my-2">
            Goals
          </div>
          <div className="text-sm w-full items-center flex justify-center    my-2">
            Assists
          </div>
          <div className="text-sm w-full items-center flex justify-center    my-2">
            Yellow
          </div>
          <div className="text-sm w-full items-center flex justify-center   my-2">
            Red
          </div>

          {/* map players here */}

          {selectedTeam === "A" ? (
            playersA.map((player, index) => (
              <>
                <div className="flex w-full my-2 border-r border-[#DBDCE8] col-span-2 p-2 text-base md:text-lg items-center bg-white border-t border-b border-l rounded-l-lg hover:cursor-pointer"  onClick={()=>{navigate(`/player/${player._id}`)}}>
                  <span className="text-sm">{index+1}</span>
                  <img src={player.image ? player.image : '/profile-icon.png'} alt="" className="mx-2 aspect-square rounded-full w-[25px]" />
                  <p className="text-[#31306e] ">{player.name}</p>
                </div>

                <div className="w-full items-center text-base flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {decorateName(player?.branch)}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player?.matches}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player?.goals}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player.assists}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player.yellowCards}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white rounded-r-lg  my-2">
                  {player.redCards}
                </div>
              </>
            ))
          ) : (
            playersB.map((player, index) => (
              <>
                <div className="flex w-full my-2 border-r border-[#DBDCE8] col-span-2 p-2 text-base md:text-lg items-center bg-white border-t border-b border-l rounded-l-lg hover:cursor-pointer" onClick={()=>{navigate(`/player/${player._id}`)}}>
                  <span className="text-sm">{index+1}</span>
                  <img src={player.image ? player.image : '/profile-icon.png'} alt="" className="mx-2 aspect-square rounded-full w-[25px]" />
                  <p className="text-[#31306e] ">{player.name}</p>
                </div>

                <div className="w-full items-center text-base flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {decorateName(player?.branch)}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player?.matches}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player?.goals}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player.assists}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white my-2">
                  {player.yellowCards}
                </div>
                <div className="w-full items-center flex justify-center border-t border-b border-[#DBDCE8] bg-white rounded-r-lg  my-2">
                  {player.redCards}
                </div>
              </>
            ))
          )}
        </div>


            </div>
        
      </div>
    </>
  );
};

const EventComponentLeft = ({ name, time, type, goalType, playerId }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end text-sm md:text-base my-1 ">
      <p
        className={`text-white font-championslight ml-1 md:mr-5 mr-2 hover:cursor-pointer`}
        onClick={() => {
          navigate(`/player/${playerId}`);
        }}
      >
        {decorateName(name)}{" "}
        <span className="text-white mx-1 text-opacity-70 ">{time}</span>
        {type === "goal" && goalType === "penalty" && "(P)"}
        {type === "goal" && goalType === "ownGoal" && "(O.G.)"}
      </p>
      {type && type !== "goal" && type !== "penaltyMissed" && (
        <img
          src={`/card icons/${
            type === "yellowCard"
              ? "yellow.svg"
              : type === "redCard"
              ? "red.svg"
              : type === "secondYellow"
              ? "second yellow.svg"
              : ""
          } `}
          alt=""
          className={`w-[14px] md:w-[17px] fill-white object-contain`}
        />
      )}

      {type === "goal" ? (
        <Goal className={"w-5"} />
      ) : type === "penaltyMissed" ? (
        <PenaltyMissed className={"w-5"} />
      ) : (
        ""
      )}
    </div>
  );
};

const EventComponentRight = ({ name, time, type, goalType, playerId }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start text-sm md:text-base my-1">
      {type && type !== "goal" && type !== "penaltyMissed" && (
        <img
          src={`/card icons/${
            type === "yellowCard"
              ? "yellow.svg"
              : type === "redCard"
              ? "red.svg"
              : type === "secondYellow"
              ? "second yellow.svg"
              : ""
          } `}
          alt=""
          className={`w-[14px] md:w-[17px] fill-white object-contain`}
        />
      )}

      {type === "goal" ? (
        <Goal className={"w-5"} />
      ) : type === "penaltyMissed" ? (
        <PenaltyMissed className={"w-5"} />
      ) : (
        ""
      )}
      <p
        className={`text-white font-championslight ml-2 md:ml-5 mr-1 hover:cursor-pointer`}
        onClick={() => {
          navigate(`/player/${playerId}`);
        }}
      >
        {decorateName(name)}{" "}
        <span className="text-white mx-1 text-opacity-70 ">{time}</span>
        {type === "goal" && goalType === "penalty" && "(P)"}
        {type === "goal" && goalType === "ownGoal" && "(O.G.)"}
      </p>
    </div>
  );
};

const MatchDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [matchDetails, setMatchDetails] = useState(null);

  const [penalties, setPenalties] = useState(false);

  const fetchData = async (id) => {
    try {
      const { data } = await getMatchDetails(id);
      console.log(data);
      setMatchDetails(data.matchDetails);

      if (
        data.matchDetails.teamAPenalties > 0 ||
        data.matchDetails.teamBPenalties > 0
      )
        setPenalties(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);

      const intervalId = setInterval(() => {
        fetchData(id);
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [id]);

  return loading ? (
    <Spinner size={100} color={"blue"} className={"p-20"} />
  ) : (
    <>
      <div className="bg-[#0a0a61] py-10 md:px-20">
        <p className="text-white text-opacity-70 text-sm border-b py-5 mb-5 border-white border-opacity-70">
          {matchDetails &&
            decorateDate(new Date(matchDetails.date)) +
              " • " +
              matchDetails?.tournament.name +
              " • " +
              matchDetails.matchName}
        </p>
        <div className="flex justify-center items-center">
          <div
            className="w-full flex justify-end items-center hover:cursor-pointer "
            onClick={() => {
              navigate(`/team/${matchDetails.teamA._id}`);
            }}
          >
            <p className="text-white font-championsregular text-lg  md:text-3xl text-right">
              {matchDetails && decorateName(matchDetails.teamA.name)}
            </p>
            <img
              src={matchDetails && matchDetails.teamA.logo}
              alt=""
              className="object-cover w-[25px] md:w-[50px] mx-1 md:mx-3"
            />
          </div>
          <p className="font-championsregular  flex gap-1 justify-center items-center font-bold text-4xl md:text-7xl text-white mx-1 md:mx-3 ">
            {matchDetails && (
              <span className="">{matchDetails.teamAScore}</span>
            )}
            {penalties && (
              <span className=" text-sm font-medium md:text-3xl h-full my-auto">{`(${matchDetails.teamAPenalties})`}</span>
            )}
            {" - "}
            {penalties && (
              <span className="text-sm font-medium md:text-3xl h-full my-auto">{`(${matchDetails.teamBPenalties})`}</span>
            )}
            {matchDetails && (
              <span className="">{matchDetails.teamBScore}</span>
            )}
          </p>
          <div
            className="w-full flex justify-start items-center hover:cursor-pointer"
            onClick={() => {
              navigate(`/team/${matchDetails.teamB._id}`);
            }}
          >
            <img
              src={matchDetails && matchDetails.teamB.logo}
              alt=""
              className="object-cover w-[25px] md:w-[50px] mx-1 md:mx-3"
            />
            <p className="text-white font-championsregular  text-lg  md:text-3xl text-left ">
              {matchDetails && decorateName(matchDetails.teamB.name)}
            </p>
          </div>
        </div>
        <p className="text-teal-300 text-lg md:text-xl my-2 mb-0">
          {matchDetails &&
            (matchDetails.status === "upcoming"
              ? `Starts at ${decorateDate(new Date(matchDetails.date))}, ${
                  matchDetails?.time
                }`
              : matchDetails.status === "ended"
              ? "Full Time"
              : matchDetails.status === "ongoing"
              ? calculateTime(
                  matchDetails.currentStatus,
                  matchDetails.halfLength,
                  matchDetails.firstHalfStartTime,
                  matchDetails.secondHalfStartTime,
                  matchDetails.extraTimeHalfLength,
                  matchDetails.extraTimeFirstHalfStartTime,
                  matchDetails.extraTimeSecondHalfStartTime
                )
              : "")}
        </p>

        <div className="flex justify-center my-5 ">
          <div className="min-w-[40%] md:mx-5 mx-2">
            {matchDetails &&
              matchDetails.teamAEvents.map((event, index) => (
                <EventComponentLeft
                  playerId={event.player._id}
                  name={event.player.name}
                  time={event.time + "'"}
                  type={event.type}
                  goalType={event.goalType}
                  key={index}
                />
              ))}
          </div>
          <div className="min-w-[40%] md:mx-5 mx-2">
            {matchDetails &&
              matchDetails.teamBEvents.map((event, index) => (
                <EventComponentRight
                  playerId={event.player._id}
                  name={event.player.name}
                  time={event.time + "'"}
                  type={event.type}
                  goalType={event.goalType}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Squad List */}
      <SquadList
        teamALogo={matchDetails.teamA.logo}
        teamBLogo={matchDetails.teamB.logo}
        teamA={matchDetails.teamA.name}
        teamB={matchDetails.teamB.name}
        playersA={matchDetails.playersA}
        playersB={matchDetails.playersB}
      />
    </>
  );
};

export default MatchDetails;
