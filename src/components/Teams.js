import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../api/teams";
import decorateName from "../helpers/decorateName";
import Spinner from "./Spinner";


const SingleTeamBlock = ({ name, logo, index, href }) => {
  return (
    <div
      className=" m-2 sm:m-5 flex flex-col justify-between border border-solid pb-3 sm:border-0 sm:rounded-none rounded-lg sm:bg-transparent bg-white "
      key={index}
    >
      <Link to={`/team/${href}`}>
        <div className="image overflow-hidden flex justify-center items-center m-10 mb-5">
          <img src={logo} alt={name + "logo"} />
        </div>
      </Link>
      <Link
        to={`/team/${href}`}
        className="text-3xl font-championsregular text-blue-950 mb-2 mx-1"
      >
        {decorateName(name) + " FC"}
      </Link>
    </div>
  );
};

const Teams = () => {
  const [teamList, setTeamList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await API.getLatestTournamentTeams();

        console.log(data);
        setTeamList(data.teams);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" md:m-16 ">
      <h1 className="md:text-5xl text-3xl m-5 text-blue-950 font-semibold text-left my-5">
        Teams
      </h1>
      {loading ? (
        <Spinner size={100} color={"blue"} className={"py-20"} />
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
          <>
            {teamList.map((team, index) => (
              <SingleTeamBlock
                name={team.name}
                logo={team.logo}
                key={index}
                href={team._id}
              />
            ))}
          </>
        </div>
      )}
      {!loading && teamList.length === 0 && (
        <p className="text-xl text-gray-600">No Teams available</p>
      )}
    </div>
  );
};

export default Teams;
