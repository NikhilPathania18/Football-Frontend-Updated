import React from 'react'

const Highlight = ({img, title, href}) => {
  return (
    <div className='flex items-center h-20 px-5'>
        <div className='w-24 h-15 flex items-center overflow-hidden rounded-md'>
            <img src={img} alt="" />
        </div>
        <a href='#' className='mx-3 text-lg font-medium'>
            {title}
        </a>
    </div>
  )
}

export default Highlight