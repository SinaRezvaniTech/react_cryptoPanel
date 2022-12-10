import React from 'react'

const Item = ({ i }) => {
  return (
    <li className=' py-3 border-b border-gray-200  flex items-center justify-between  '>
      {/*left Items*/}
      <div className='flex items-center gap-3 '>
        <div
          className={`w-2 aspect-square rounded-full ${
            i.activity == 'Online' ? 'bg-green-500' : 'bg-gray-400'
          }`}
        ></div>
        <img
          src={i.img}
          alt=''
          className='w-12 aspect-square rounded-[50%] object-cover'
        />
        <span className='text-gray-500 font-bold text-sm flex flex-col'>
          <span>{i.fullName}</span>
          <span
            className={`${
              i.activity == 'Online' ? 'text-green-400' : 'text-gray-400'
            }`}
          >
            {' '}
            {i.activity}
          </span>
        </span>
      </div>
      {/*right Items*/}
      <div className='flex gap-2'>
        {i.role.map((r, index) => (
          <p
            key={index}
            className={` border text-center   opacity-70 p-2 w-8 h-8 text-xs rounded-full ${
              r == 'TA'
                ? 'border-orange-400 bg-orange-100 text-orange-400'
                : r == 'T'
                ? 'border-green-400 bg-green-100 text-green-400'
                : 'border-purple-400 bg-purple-100 text-purple-400'
            }`}
          >
            {r}
          </p>
        ))}
      </div>
    </li>
  )
}

export default Item
