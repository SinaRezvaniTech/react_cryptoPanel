import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { BiMenu } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'
// Data
import HeaderData from './HeaderData'

//hooks
import useSiebar from '../../../hooks/useSidebar'
// CSS
import style from './HeaderMobile.module.scss'
import MenuItemMobile from './MenuItemMobile'

const HeaderMobile = () => {
  const { sidebar, toggleSidebar } = useSiebar()

  return (
    <>
      {/*BackDrop*/}
      <div
        id='navbar'
        className='w-full  sticky ease-in-out duration-300 bg-blue-dark  p-4 bg-white text-gray-800 z-50'
      >
        <div className=' flex items-center justify-between '>
          <BiMenu
            onClick={toggleSidebar}
            className='text-5xl  -my-3 hover:bg-gray-transparent rounded-lg ease-in-out duration-500 cursor-pointer'
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        onClick={toggleSidebar}
        style={{ visibility: !sidebar ? 'hidden' : 'visible' }}
        className={`${
          sidebar ? 'bg-opacity-90 ' : ' bg-opacity-0 '
        } bg-white text-black  w-screen h-screen z-50 fixed top-0  left-0 ease-in-out duration-500`}
      ></div>
      <div
        style={{ left: sidebar ? '0' : '-300px' }}
        className={`${style.scrollStyle} bg-blue-light top-0 left-0 rounded-l-lg flex	flex-col drop-shadow-md w-52 h-full z-50  text-black fixed ease-in-out duration-500 overflow-y-auto`}
      >
        {/* Nav Closer */}
        <div className='w-full flex justify-start'>
          <RiCloseFill
            onClick={toggleSidebar}
            className=' mt-5 mr-5  text-4xl p-1  hover:bg-gray-transparent rounded-lg ease-in-out duration-500 cursor-pointer'
          />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className=' flex flex-col  '>
            {HeaderData.map((i, index) => (
              <MenuItemMobile key={index} item={i} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default HeaderMobile
