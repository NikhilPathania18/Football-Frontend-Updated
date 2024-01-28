import React from "react";
import calculateTime from '../helpers/calculateTime'
import decorateName from "../helpers/decorateName";
import { useNavigate } from "react-router-dom";


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
  id
}) => {

  const arePenalties = teamAPenalties > 0 || teamBPenalties > 0;
  
  const navigate = useNavigate();
  return (
    <div className="p-4 border-solid border rounded-lg bg-white text-gray-600 flex flex-col justify-center hover:bg-[#f0f3f8] hover:cursor-pointer" onClick={()=>{navigate(`/match/${id}`)}}>
      <p className="text-gray-600 text-left">{title}</p> 
      <div className="flex w-full ">
        <div className="flex flex-col w-[65%] mr-8">
          <div className="flex justify-between  items-center">
            <div className="flex my-3 w-[15%] items-center">
              <img src={teamA.logo} alt="" className="object-cover" />
              <p className="font-championsregular text-left text-xl px-5 w-full">
                {decorateName(teamA.name)}
              </p>
            </div>
            <p className="font-championsregular text-2xl flex items-center">
              {teamAScore}
              {arePenalties && (
                <span className=" text-lg my-auto">
                  {`(`}
                  {`${arePenalties ? teamAPenalties : ""}`}
                  {`)`}
                </span>
              )}
            </p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex my-3 w-[15%] items-center">
              <img src={teamB.logo} alt="" className="object-cover" />
              <p className="font-championsregular text-xl px-5 text-left">
                {decorateName(teamB.name)}
              </p>
            </div>
            <p className="font-championsregular text-2xl flex items-center">
              {teamBScore}
              {arePenalties && (
                <span className=" text-lg my-auto">
                  {`(`}
                  {`${arePenalties ? teamBPenalties : ""}`}
                  {`)`}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="border-solid border-l-2 my-4"></div>
        <div className="flex flex-col items-center justify-center mx-auto    ">
          {status === "ended" && (
            <p className="md:text-base text-sm mx-2">Full Time</p>
          )}
          {status === "ongoing" &&(currentStatus!=='halfTime' && currentStatus!=='fullTime' && currentStatus!=='extraTimeHalfTime' && currentStatus!=='penalties' && currentStatus!=='extraTimeFullTime')&& <p className="text-green-600">Live</p>}
          {status === "ongoing" && <p className="text-green-600">{calculateTime(currentStatus,halfLength,firstHalfStartTime,secondHalfStartTime,extraTimeHalfLength,extraTimeFirstHalfStartTime,extraTimeSecondHalfStartTime )}</p>}
          {status !== "ongoing" && (
            <p className="md:text-base text-sm mx-2">{`${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`}</p>
          )}
          {status === "upcoming" && (
            <p
              className={`md:text-base ${
                status !== "upcoming" ? "" : ""
              } text-sm mx-1`}
            >
              {time}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMatch;
