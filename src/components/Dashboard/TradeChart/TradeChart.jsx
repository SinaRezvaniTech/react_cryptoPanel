//libaries
import React from 'react'

//components
import BarChart from './BarChart'
import Filter from './Filter'
import Header from './Header'

//css
import style from './Chart.module.scss'

const TradeChart = () => {
  return (
    <div className='container m-auto '>
      <div
        className={`${style.scrollStyle} bg-white h-[25rem]  items-center  flex flex-col justify-between shadow-md rounded-xl text-center`}
      >
        {/*Header And filter*/}
        <div className='mt-5 mr-auto pl-5 font-bold flex justify-between w-full'>
          <Header text={'Trade Chart'} />
          <Filter />
        </div>

        {/*Bar Chart Recharts*/}
        <BarChart />
      </div>
    </div>
  )
}

export default TradeChart
