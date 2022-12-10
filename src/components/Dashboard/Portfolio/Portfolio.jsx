import React from 'react'
//components
import NotFound from './NotFound'

const Portfolio = ({ wallet }) => {
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center'>
      {wallet ? <>Somthing...</> : <NotFound />}
    </div>
  )
}

export default Portfolio
