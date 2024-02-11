import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchDetails } from "../api/matches";
import { decorateDate } from "../helpers/decorateDate";
import decorateName from "../helpers/decorateName";
import calculateTime from "../helpers/calculateTime";
import PenaltyMissed from "./svg-icons/PenaltyMissed";
import Goal from "./svg-icons/Goal";
import Spinner from "./Spinner";

const EventComponentLeft = ({ name, time, type, goalType, playerId}) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end text-sm md:text-base my-1 "  >
      <p className={`text-white font-championslight ml-1 md:mr-5 mr-2 hover:cursor-pointer`} onClick={()=>{navigate(`/player/${playerId}`)}}>
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
  const navigate = useNavigate()
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
      <p className={`text-white font-championslight ml-2 md:ml-5 mr-1 hover:cursor-pointer`} onClick={()=>{navigate(`/player/${playerId}`)}}>
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
          {matchDetails && <span className="">{matchDetails.teamAScore}</span>}
          {penalties && (
            <span className=" text-sm font-medium md:text-3xl h-full my-auto">{`(${matchDetails.teamAPenalties})`}</span>
          )}
          {" - "}
          {penalties && (
            <span className="text-sm font-medium md:text-3xl h-full my-auto">{`(${matchDetails.teamBPenalties})`}</span>
          )}
          {matchDetails && <span className="">{matchDetails.teamBScore}</span>}
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
  );
};

export default MatchDetails;
