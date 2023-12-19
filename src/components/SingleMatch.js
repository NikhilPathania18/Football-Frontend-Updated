import React from 'react'

const SingleMatch = ({title, teamA, teamB, teamAScore, teamBScore, date, time}) => {
    console.log(date)
  return (
    <div className='p-4 border-solid border rounded-lg bg-white text-gray-600 '>
        <p className="text-gray-600 text-left">{title}</p>
        <div className='flex w-full '>
        <div className="flex flex-col w-[65%] mr-8">
            <div className='flex justify-between  items-center'>
                <div className='flex my-3 '>
                    <img src={teamA.logo} alt="" width={"20px"}/>
                    <p className="font-semibold px-5">{teamA.name}</p>
                </div>
                <p className="font-semibold">{teamAScore}</p>
            </div>
            <div className='flex justify-between  items-center'>
                <div className='flex my-3 '>
                    <img src={teamB.logo} alt="" width={"20px"}/>
                    <p className="font-semibold px-5">{teamB.name}</p>
                </div>
                <p className="font-semibold">{teamBScore}</p>
            </div>
        </div>
       <div className="border-solid border-l-2 my-4"></div>
       <div className="flex flex-col items-center justify-center mx-auto    ">
            <p className="md:text-base text-sm mx-2">{`${date.getDate()}/${date.getMonth()+1}/${date.getYear()+1900}`}</p>
            <p className="md:text-base text-sm mx-1" >{time}</p>
       </div>
        </div>
    </div>
  )
}

export default SingleMatch