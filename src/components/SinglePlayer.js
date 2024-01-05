import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerDetails } from "../api/player";
import Spinner from "./Spinner";
import decorateName from "../helpers/decorateName";

const playerDetails = {
  name: "Nikhil",
  image: "/logo192.png",
};
const SinglePlayer = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);

        const { data } = await getPlayerDetails(id);
        setPlayerDetails(data.playerDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData(id);
  }, [id]);

  console.log(playerDetails);
  return loading ? (
    <Spinner size={150} color={"blue"} className={"p-20"} />
  ) : (
    playerDetails && (
      <div className="bg-white mx-3 lg:mx-[150px] boder-solid border my-10 rounded-md pb-10">
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-950 md:text-left p-10">
          {decorateName(playerDetails.name)}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-950 font-championsregular md:text-left px-10 pb-10">
          {playerDetails.rollNo + " • " + decorateName(playerDetails.branch)}
        </p>
        <div className="md:flex ">
          <div className="md:w-[20%] md:h-[20%] w-[80%] mb-4 md:mb-0 flex mx-auto md:mx-10 justify-center">
            <img
              src={
                playerDetails.image ? playerDetails?.image : "/profile-icon.png"
              }
              alt=""
              width={"100%"}
              className=" object-cover rounded-[100%]"
            />
          </div>
          <div className="second grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-center">
            <div className="p-5 h-full flex flex-col justify-center">
              <h2 className="text-blue-950 text-5xl font-bold">
                {playerDetails.matches}
              </h2>
              <p className="text-blue-950 text-2xl ">Matches</p>
            </div>
            <div className="p-5 h-full flex flex-col justify-center">
              <h2 className="text-blue-950 text-5xl font-bold">
                {playerDetails.goals}
              </h2>
              <p className="text-blue-950 text-2xl ">Goals</p>
            </div>
            <div className="p-5 h-full flex flex-col justify-center">
              <h2 className="text-blue-950 text-5xl font-bold">
                {playerDetails.assists}
              </h2>
              <p className="text-blue-950 text-2xl ">Assists</p>
            </div>
            <div className="p-5 h-full flex flex-col justify-center">
              <h2 className="text-blue-950 text-5xl font-bold">
                {playerDetails.yellowCards}
              </h2>
              <p className="text-blue-950 text-2xl ">Yellow Cards</p>
            </div>
            <div className="p-5 h-full flex flex-col justify-center">
              <h2 className="text-blue-950 text-5xl font-bold">
                {playerDetails.redCards}
              </h2>
              <p className="text-blue-950 text-2xl ">Red Cards</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SinglePlayer;
