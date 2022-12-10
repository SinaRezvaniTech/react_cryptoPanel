import React, { useState } from 'react'

//icons
import { AiOutlineStar } from 'react-icons/ai'
import { SiBinance } from 'react-icons/si'
//data
import Data from './Data'
import Table from './Table'

const CoinWorth = () => {
  const [tab, setTab] = useState(1)
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center p-5 h-full'>
      <p className='font-bold text-gray-500'>Main Coin Worth</p>
      {/*table*/}
      <div className='overflow-auto'>
        <table className='w-full mt-5 text-center '>
          <thead className=' bg-gray-100 text-gray-500  w-full'>
            <tr>
              <th className=' py-3 '>
                <AiOutlineStar className='m-auto text-2xl text-orange-500 cursor-pointer opacity-70' />
              </th>

              <th className=' py-3'>Name</th>
              <th className=' py-3'>Price</th>
              <th className=' py-3'>Change(24th)</th>
              <th className=' py-3'>High(24th)</th>
              <th className=' py-3'>Low(24th)</th>
              <th className=' py-3'>Market Cap</th>
              <th className=' py-3'>Total Valume</th>
              <th className=' py-3'></th>
            </tr>
          </thead>
          <tbody className='  text-gray-500'>
            {Data.map((i, index) => (
              <Table key={index} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinWorth
