import React from "react";

const SingleGroup = ({ title, teams }) => {
  return (
    <div className="flex flex-col border-solid border rounded-lg bg-white max-w-6xl mb-5 w-[100%]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className=" min-w-full py-2 sm:px-6 lg:px-8">
          <div className="">
            <p className="text-3xl text-left text-blue-950 px-10 font-semibold mt-3">
              {title}
            </p>
            <table className="min-w-full text-left text-sm font-light overflow-x-scroll">
              <thead className="border-b font-normal  text-center">
                <tr>
                  <th scope="col" className="px-3 md:px-6 py-4 ">
                    {" "}
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4">
                    {" "}
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Played
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Won
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Draw
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Lost
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    For
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Against
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-light">
                    Goal Difference
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 font-medium">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr className="border-b font-medium text-gray-600 mx-5">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-center flex items-center">
                        <img src={team.logo} alt="" width={"20px"} className="mr-4"/>
                      {team.name}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.matches}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.win}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.draw}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.lost}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.gf}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.ga}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-center">
                      {team.gf - team.ga}
                    </td>
                    <td className="whitespace-nowrap px-3 md:px-6 py-4 text-base text-center font-semibold">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
