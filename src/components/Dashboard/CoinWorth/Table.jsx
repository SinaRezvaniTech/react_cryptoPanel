import React from 'react'

//icons
import { AiOutlineStar } from 'react-icons/ai'
import { SiBinance } from 'react-icons/si'
const Table = ({ i }) => {
  return (
    <tr className='text-center border-b text-[0.92rem]'>
      <td className=' items-center  py-4 '>
        <AiOutlineStar className='m-auto text-2xl  cursor-pointer opacity-70' />
      </td>
      <td className=' text-left px-2'>
        <div className='text-center flex justify-center gap-2'>
          <i style={{ color: i.color }} className=' text-xl'>
            {i.icon}
          </i>
          <p>{i.symbol}</p>
          <p>{i.name}</p>
        </div>
      </td>
      <td className='px-2'>
        <p>${i.price}</p>
      </td>
      <td className='px-2'>
        <div className=''>
          <p
            className={`${
              i.change.status == 'profit' ? 'text-[#5acac6]' : 'text-red-500'
            }`}
          >
            {i.change.precent}%
          </p>
          <p>${i.price}</p>
        </div>
      </td>
      <td className='px-2'>
        <p>${i.high}</p>
      </td>
      <td className='px-2'>
        <p>${i.low}</p>
      </td>
      <td className='px-2'>
        <p>${i.marketCap}</p>
      </td>
      <td className='px-2'>
        <p>${i.totalVolume}</p>
      </td>
      <td className='px-2'>
        <SiBinance className='m-auto text-2xl  cursor-pointer opacity-50' />
      </td>
    </tr>
  )
}

export default Table
