import React from 'react'
//icons
import { SlMagnifier } from 'react-icons/sl'

const SerchBox = () => {
  return (
    <div className='relative float-right h-max'>
      <input
        name='serch'
        type='text'
        className='outline-none pl-9 bg-gray-100 text-gray-400 p-[0.35rem] w-60 rounded-full '
        placeholder='Serch...'
      />
      <label
        htmlFor='serch'
        className='absolute top-2 text-gray-400 drop-shadow-sm left-3 cursor-pointer'
      >
        <SlMagnifier />
      </label>
    </div>
  )
}

export default SerchBox
