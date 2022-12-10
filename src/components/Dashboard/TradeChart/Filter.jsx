import React, { useState } from 'react'

const Filter = () => {
  const [filter, setFilter] = useState('M')
  return (
    <div className='flex gap-2 pr-5 text-[0.70rem]  sm:text-[0.82rem]'>
      <p
        onClick={() => setFilter('D')}
        className={`${
          filter == 'D'
            ? 'bg-[#8860f5] text-gray-100'
            : 'bg-gray-100 text-gray-500'
        }  py-2 px-3 sm:px-4 rounded-md  cursor-pointer`}
      >
        D
      </p>
      <p
        onClick={() => setFilter('M')}
        className={`${
          filter == 'M'
            ? 'bg-[#8860f5] text-gray-100'
            : 'bg-gray-100 text-gray-500'
        }  py-2 px-3 sm:px-4 rounded-md  cursor-pointer`}
      >
        M
      </p>
      <p
        onClick={() => setFilter('Y')}
        className={`${
          filter == 'Y'
            ? 'bg-[#8860f5] text-gray-100'
            : 'bg-gray-100 text-gray-500'
        } py-2 px-3 sm:px-4 rounded-md  cursor-pointer`}
      >
        Y
      </p>
    </div>
  )
}

export default Filter
