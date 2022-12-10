import React, { useState } from 'react'

//icons
import { AiOutlineCloseCircle, AiOutlineStar } from 'react-icons/ai'
import { BiFullscreen, BiLinkExternal } from 'react-icons/bi'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { SiBinance } from 'react-icons/si'
import { RiFileCopyLine } from 'react-icons/ri'
import { IoIosCloseCircleOutline } from 'react-icons/io'
//data
import Data from './Data'
import Table from './Table'

const RecentOrder = () => {
  const [tab, setTab] = useState(1)

  function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (
      (document.fullScreenElement !== undefined &&
        document.fullScreenElement === null) ||
      (document.msFullscreenElement !== undefined &&
        document.msFullscreenElement === null) ||
      (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
      (document.webkitIsFullScreen !== undefined &&
        !document.webkitIsFullScreen)
    ) {
      if (elem.requestFullScreen) {
        elem.requestFullScreen()
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen()
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center p-5 h-full'>
      <p className='font-bold text-gray-500'>Main Coin Worth</p>
      {/*table*/}
      <div className='overflow-auto'>
        <table className='w-full mt-5 text-center '>
          <thead className='   w-full'>
            <tr>
              <td>
                <div className='bg-gray-100 text-gray-500 flex justify-between '>
                  <div className='flex gap-7'>
                    <p
                      onClick={() => setTab(1)}
                      className={`cursor-pointer p-3 ${
                        tab == 1 && 'text-blue-500 font-bold'
                      }`}
                    >
                      Open Orders
                    </p>
                    <p
                      onClick={() => setTab(2)}
                      className={`cursor-pointer p-3 ${
                        tab == 2 && 'text-blue-500 font-bold'
                      }`}
                    >
                      Closed Orders
                    </p>
                    <p
                      onClick={() => setTab(3)}
                      className={`cursor-pointer p-3 ${
                        tab == 3 && 'text-blue-500 font-bold'
                      }`}
                    >
                      Trade History
                    </p>
                  </div>

                  <div className='flex p-2 gap-5 items-center'>
                    <p className='p-[0.35rem] px-5 text-sm rounded-md bg-red-100 drop-shadow-sm text-red-400 font-bold cursor-pointer flex items-center gap-1'>
                      <AiOutlineCloseCircle className='text-lg mb-[0.15rem]' />
                      Cancel All
                    </p>
                    <div onClick={(e) => toggleFullScreen(e.target)}>
                      <BiFullscreen className=' p-2 text-3xl rounded-md bg-blue-100 text-blue-600 cursor-pointer' />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr className='text-center text-gray-500 text-[0.92rem]'>
              <td>
                <table className='w-full text-center 	'>
                  <thead>
                    <tr className=''>
                      <th className='border px-5 py-2'>No.</th>
                      <th className='border px-5 py-2'>Date & Time</th>
                      <th className='border px-5 py-2'>Pair</th>
                      <th className='border px-5 py-2'>Buy/Sell</th>
                      <th className='border px-5 py-2'>Entry1</th>
                      <th className='border px-5 py-2'>Entry2</th>
                      <th className='border px-5 py-2'>Entry3</th>
                      <th className='border px-5 py-2'>Target1</th>
                      <th className='border px-5 py-2'>Target2</th>
                      <th className='border px-5 py-2'>Target3</th>
                      <th className='border px-5 py-2'>Status</th>
                      <th className='border'>
                        <table className=' items-center w-full p-0'>
                          <tbody>
                            <tr>
                              <th colSpan='2' className='p-0'>
                                Gain
                              </th>
                            </tr>
                            <tr className='p-0'>
                              <td className='border-r border-t px-4 py-2'>
                                (%)
                              </td>
                              <td className='border-t px-4 py-2'>($)</td>
                            </tr>
                          </tbody>
                        </table>
                      </th>
                      <th className='border px-5 py-2'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((i, index) => (
                      <Table key={index} index={index} i={i} />
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default RecentOrder
