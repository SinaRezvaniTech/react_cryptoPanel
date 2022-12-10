//libraries
import React from 'react'
// Data
import HeaderData from './HeaderData'

// CSS
import style from './HeaderDesktop.module.scss'
import MenuItemDesktop from './MenuItemDesktop'

const HeaderDesktop = () => {
  return (
    <>
      <div className='w-full z-[9999]  ease-in-out duration-300 bg-[#392867] h-14   text-gray-900 '></div>
      <div className='w-full  ease-in-out duration-300 bg-white   text-gray-900 z-50'>
        {/*Container*/}
        <div className='container m-auto flex items-center'>
          {/*Content - Menu items*/}
          <nav className='h-full'>
            <ul className='mr-16 text-[1.15rem] flex gap-12 h-full'>
              {HeaderData.map((i, index) => (
                <MenuItemDesktop key={index} item={i} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderDesktop
