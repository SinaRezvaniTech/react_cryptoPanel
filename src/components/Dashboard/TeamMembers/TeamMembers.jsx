import React from 'react'

//icons
import { FiArrowRightCircle } from 'react-icons/fi'
import { BsArrowRightShort } from 'react-icons/bs'

//data
import Data from './Data'
import Item from './Item'

const TeamMembers = () => {
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center p-5'>
      {/*Title*/}
      <p className='mr-auto text-gray-500 font-bold'>Team Members</p>

      <div className='mt-5'>
        <ul className=' pb-1 '>
          {Data.map((i, index) => (
            <Item key={index} i={i} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamMembers
