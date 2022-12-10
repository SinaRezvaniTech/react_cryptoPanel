import React from 'react'
import TradingViewWidget from 'react-tradingview-widget'

const TradingView = () => {
  return (
    <div className='w-full '>
      <div className=' h-[530px] w-full rounded-xl shadow-md    overflow-hidden'>
        {/*Chart*/}
        <TradingViewWidget
          locale='fr'
          autosize
          symbol={'BTCUSDT'}
          timezone='Etc/UTC'
          style='1'
        />
      </div>
    </div>
  )
}

export default TradingView
