import React from 'react'
import { Link } from 'react-router-dom'

const Highlight = ({img, title, href}) => {
  return (
    <div className='flex items-center my-2 md:px-5 w-full font-cabin  '>
    <div className='w-24 max-h-15 flex items-center rounded-md justify-center ' >
        <Link to={`/news/${href}`} >
        <img src={img} alt="" className=' object-cover rounded-sm' width={"100%"}/>
        </Link>
    </div>
    <Link to={`/news/${href}`} className=' block mx-3 md:text-lg font-championsregular text-left w-[80%] '>
        {title}
    </Link>
</div>

  )
}

export default Highlight