import React from 'react'

//icons
import { FiArrowRightCircle } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'

//data
import Data from './Data'

const Activity = () => {
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center p-5'>
      {/*Title*/}
      <p className='mr-auto text-gray-500 font-bold'>Activity</p>

      <div className='mt-5'>
        <ul className='border-l-2 border-gray-300 border-dashed  pb-1 '>
          {Data.map((i, index) => (
            <li
              key={index}
              className='flex items-center gap-3 my-7 -ml-[0.6rem]'
            >
              <FiArrowRightCircle className='text-gray-500 text-lg bg-white ' />
              <span className='text-gray-500 font-bold text-sm'>{i.title}</span>
              <BsArrowRightShort className='text-[#8860f5] text-3xl drop-shadow-sm ' />
              <span className='text-xs text-gray-400'>{i.des}</span>
            </li>
          ))}
        </ul>
        <p className='text-[#8860f5] text-sm text-center font-bold drop-shadow-sm cursor-pointer'>
          See More...
        </p>
      </div>
    </div>
  )
}

export default Activity
