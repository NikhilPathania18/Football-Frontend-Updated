import React from "react";
import { Link } from "react-router-dom";


const teamStats = [
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
  {
    logo: '/logo192.png',
    name: 'Civil FC',
    goals: 14
  },
]
const Card = ({rank, image, name, score, href}) => {
  return (
    <div className={`mx-4 ${rank==1?'text-white':'text-gray-500'} py-2 flex justify-between items-center  ${rank>1&&'border-b'}`}>
      <div className="flex gap-2 items-center">
        <p className="text-lg font-championsregular mr-2 ">{rank}</p>
        <img src={image} width={'45px'} alt="" />
        <Link to={href}>
        <p className="text-xl">{name}</p>
        </Link>
      </div>
      <h1 className="text-3xl font-championsbold">{score}</h1>
    </div>
  )
}

const Stats = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/stats-bg.webp)" }}
        className="font-championsbold pb-8"
      >
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl md:text-5xl text-left p-4  md:p-16 py-8 text-white  ">
            Competition Stats 2023/24
          </h1>
          {/* <button className="bg-teal-400 rounded-3xl p-5 py-2 text-3xl text-white  mx-16 h-full">{"See All Time Stats >"}</button> */}
        </div>
        <div className="lg:w-1/2 p-5 mx-4 md:mx-16 bg-[#000040] bg-opacity-50 rounded-lg lg:min-w-[670px]">
          {/* <h3 className=" text-left text-white text-xl">Goals</h3> */}
          <div className="flex py-8 pb-4 mb-4 justify-between  border-b border-opacity-50 border-white">
            <div className="">
              <h1 className="text-6xl text-white ">296</h1>
              <p className="text-white text-left px-1 text-opacity-50 font-championsregular">
                Total goals
              </p>
            </div>
            <img src="https://img.uefa.com/imgml/uefacom/ucl/2020/stats/net.svg" />
          </div>
          <div className="text-white md:flex md:gap-16 grid grid-cols-2">
            <div className="">
              <h2 className="font-championsbold text-3xl text-left">30</h2>
              <p className="text-left font-championsregular text-opacity-50 text-white">
                Teams
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left">30</h2>
              <p className="text-left font-championsregular text-opacity-50 text-white">
                Matches played
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left">3.09</h2>
              <p className="text-left font-championsregular text-opacity-50 text-white flex items-center">
                <img src="/card icons/yellow.svg" width={'15px'} alt="yellow card " className="inline" /> 
                <span className="mx-1">Cards</span>
              </p>
            </div>
            <div className="">
              <h2 className="font-championsbold text-3xl text-left">3.09</h2>
              <p className="text-left font-championsregular text-opacity-50 text-white flex items-center">
                <img src="/card icons/red.svg" width={'15px'} alt="yellow card " className="inline" /> 
                <span className="mx-1">Cards</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#000040] text-4xl font-championsbold md:text-left px-16 py-8">Team Stats</h2>

      <div className="grid grid-cols-1 md:grid-cols-4  px-4 md:px-16 mb-8 font-championsregular flex-col md:flex-row gap-6 items-center md:justify-start rounded-b-lg overflow-hidden ">
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Scored</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
          </div>
        </div>
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Conceeded</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
          </div>
        </div>
        <div className=""> </div>
        <div className=""> </div>
      </div>

      
      <h2 className="text-[#000040] text-4xl font-championsbold md:text-left px-16 py-8">Player Stats</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 md:px-16 mb-8 font-championsregular gap-6 items-center md:justify-start rounded-b-lg overflow-hidden ">
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Scored</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>
        
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Scored</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>
        
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Scored</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>
        
        <div className=" rounded-lg" style={{ backgroundImage: "url(/stats-bg.webp)" }}>
          <div className="header">
            <h2 className="text-white text-left p-4 pb-0 text-xl">Goals Scored</h2>
            <Card image={teamStats[0].logo} name={teamStats[0].name} score={teamStats[0].goals} rank = {1} />
          </div>
          <div className="bg-white rounded-b-lg">
            {
              teamStats.map((team, index)=>(
                index>0&&
                <Card image={team.logo} name={team.name} score={team.goals} rank={index+1} />
              ))
            }
            {/* <Link to={'#'} className="text-blue-900 text-left">
              <p className="text-left px-4 text-2xl py-3 font-championsbold">Full Ranking...</p>
            </Link> */}
          </div>
        </div>
        
        
      </div>
    </div>
  );
};
  
export default Stats;
