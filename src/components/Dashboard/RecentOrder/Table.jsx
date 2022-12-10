import React from 'react'

//icons
import { BiLinkExternal } from 'react-icons/bi'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { RiFileCopyLine } from 'react-icons/ri'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Table = ({ i, index }) => {
  return (
    <tr className='text-gray-500'>
      <td className='border px-5 py-2'>{index + 1}</td>
      <td className='border px-4 py-2 text-sm'>{i.date}</td>
      <td className='border px-6 py-2'>{i.pair}</td>
      <td className='border px-5 py-2'>{i.buySell}</td>
      <td
        className={`border px-5 py-2 ${
          i.entry1.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.entry1.title}</p>
          <p
            className={`${
              i.entry1.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.entry1.des}
          </p>
        </div>
      </td>
      <td
        className={`border px-5 py-2 ${
          i.entry2.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.entry2.title}</p>
          <p
            className={`${
              i.entry2.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.entry2.des}
          </p>
        </div>
      </td>
      <td
        className={`border px-5 py-2 ${
          i.entry3.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.entry3.title}</p>
          <p
            className={`${
              i.entry3.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.entry1.des}
          </p>
        </div>
      </td>
      <td
        className={`border px-5 py-2 ${
          i.target1.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.target1.title}</p>
          <p
            className={`${
              i.target1.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.target1.des}
          </p>
        </div>
      </td>
      <td
        className={`border px-5 py-2 ${
          i.target2.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.target2.title}</p>
          <p
            className={`${
              i.target2.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.target2.des}
          </p>
        </div>
      </td>
      <td
        className={`border px-5 py-2 ${
          i.target3.status == 'profit' ? 'bg-[#eaf9f4]' : 'bg-[#fdefef]'
        }`}
      >
        <div>
          <p>{i.target3.title}</p>
          <p
            className={`${
              i.target3.status == 'profit' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {i.target3.des}
          </p>
        </div>
      </td>
      <td className='border px-5 py-2'>
        {i.status == 'Completed' ? (
          <div className='items-center flex flex-col'>
            <i className='m-auto text-xl text-green-500'>
              <IoCheckmarkDoneCircleSharp />
            </i>
            {i.status}
          </div>
        ) : (
          i.status
        )}
      </td>
      <td className='border '>
        <table>
          <thead>
            <tr>
              <td className='border-r px-5    py-5'>{i.gain.precent}%</td>
              <td className=' px-2 py-2'>${i.gain.price}</td>
            </tr>
          </thead>
        </table>
      </td>
      <td className='border px-5 py-2'>
        <div className='flex gap-[1.38rem]'>
          <BiLinkExternal className='p-1 text-2xl rounded-md bg-blue-100 text-blue-600 cursor-pointer' />
          <RiFileCopyLine className='p-1 text-2xl rounded-md bg-purple-100 text-purple-600 cursor-pointer' />
          <IoIosCloseCircleOutline className='p-1 text-2xl rounded-md bg-red-100 text-red-600 cursor-pointer' />
        </div>
      </td>
    </tr>
  )
}

export default Table
