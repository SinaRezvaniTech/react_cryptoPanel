import React, { useState } from 'react'

//icons
import { MdOutlineShowChart } from 'react-icons/md'
import { BiBarChart } from 'react-icons/bi'

//data
import Data from './Data'

const Settings = () => {
  const [tab, setTab] = useState(1)
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center p-5 h-full'>
      {/* Buttons */}
      <div className='flex gap-2'>
        <p
          onClick={() => setTab(1)}
          className={`${
            tab == 1
              ? 'bg-[#8860f5] text-white'
              : 'text-gray-500 font-bold bg-gray-100 '
          } flex items-center h-max rounded-md p-2 px-7 text-sm  font-bold w-max cursor-pointer`}
        >
          <BiBarChart className='mr-1 text-[0.95rem]' />
          Analyst Settings
        </p>
        <p
          onClick={() => setTab(2)}
          className={`${
            tab == 2
              ? 'bg-[#8860f5] text-white'
              : 'text-gray-500 font-bold bg-gray-100 '
          } flex mh-max rounded-md p-2 px-7 text-sm w-max cursor-pointer`}
        >
          <MdOutlineShowChart className='mr-1 text-[0.95rem]' />
          Trade Settings
        </p>
      </div>
      {/*table*/}
      <table className='w-full mt-5 text-start'>
        <thead className=' bg-gray-100 text-gray-500  w-full'>
          <tr>
            <th className='text-left p-3'>Indicators</th>
            <th className='text-center p-3'>Weight</th>
          </tr>
        </thead>
        <tbody className='  text-gray-500'>
          {Data.map((i, index) => (
            <tr key={index}>
              <td className='pl-3 py-3'>{i.indicator}</td>
              <td className=' text-center'>{i.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Settings
