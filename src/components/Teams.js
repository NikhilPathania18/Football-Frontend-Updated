import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../api/teams'
import decorateName from '../helpers/decorateName'

const teamList = [
{
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/maxresdefault-1.jpg",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  },
  {
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/maxresdefault-1.jpg",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  },{
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/maxresdefault-1.jpg",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  },{
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/maxresdefault-1.jpg",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  },{
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/maxresdefault-1.jpg",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  },{
    name: "Real Madrid CF",
    matches: 21,
    win: 18,
    draw: 2,
    lost: 1,
    logo: "/logo192.png",
    players: [
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil Pathania",
        position: "Defender",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/maxresdefault-1.jpg",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
      {
        name: "Nikhil",
        position: "Right Back",
        matches: 5,
        goals: 0,
        assists: 1,
        image: "/logo192.png",
      },
    ],
  }
]


const SingleTeamBlock = ({name, logo, index, href}) => {
  return (
    <div className='m-5 flex flex-col justify-end border border-solid pb-3 sm:border-0 sm:rounded-none rounded-lg sm:bg-transparent bg-white ' key ={index}>
      <Link to={`/team/${href}`} >
        <div className="image overflow-hidden flex justify-center items-center m-10 mb-5">
            <img src={logo} alt={name+"logo"} />
        </div>
        </Link>
        <Link to={`/team/${href}`} className="text-3xl font-championsregular text-blue-950 mb-5+">{decorateName(name)+ " FC"}</Link>
    </div>
  )
}

const Teams = () => {
  const [teamList, setTeamList] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const {data} = await API.getLatestTournamentTeams();

        console.log(data)
        setTeamList(data.teams)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])
  return (
    <div className=' md:m-16 '>
        <h1 className="text-5xl m-5 text-blue-950 font-semibold text-left my-5">Teams</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {
                teamList.map((team,index)=>(
                    <SingleTeamBlock name={team.name} logo={team.logo} key={index} href={team._id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Teams