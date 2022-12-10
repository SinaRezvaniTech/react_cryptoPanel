//libaries
import React from 'react'

const TradeBoard = ({ title, color, t1, t2, t3 }) => {
  return (
    <div className='container m-auto 7'>
      <div className='grid grid-cols-11 bg-white h-28 items-center  shadow-md rounded-lg text-center'>
        {/*Title*/}
        <div
          style={{ backgroundColor: color }}
          className={`col-span-1 items-center flex justify-center h-full  rounded-l-lg`}
        >
          <p className='-rotate-90 text-center text-white font-medium '>
            <span className='block w-max'>{title}</span>
          </p>
        </div>
        {/*Items*/}
        {t1 && (
          <div className='col-span-3'>
            <p className='font-semibold text-[0.9rem] opacity-50'>{t1.title}</p>
            <p
              style={{ color: t1.color }}
              className='mt-2  font-semibold text-[1.18rem]'
            >
              {t1.value}
            </p>
          </div>
        )}
        {t2 && (
          <div className='col-span-3'>
            <p className='font-semibold text-[0.9rem] opacity-50'>{t2.title}</p>
            <p
              style={{ color: t2.color }}
              className='mt-2  font-semibold text-[1.18rem]'
            >
              {t2.value}
            </p>
          </div>
        )}
        {t3 && (
          <div className='col-span-3'>
            <p className='font-semibold text-[0.9rem] opacity-50'>{t3.title}</p>
            <p
              style={{ color: t3.color }}
              className='mt-2  font-semibold text-[1.18rem]'
            >
              {t3.value}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TradeBoard
