//libaries
import React from 'react'

//components
import Breadcrumb from '../common/Breadcrumb/Breadcrumb'
import Activity from './Activity/Portfolio'
import Chat from './Chat/Chat'
import CoinWorth from './CoinWorth/CoinWorth'
import Portfolio from './Portfolio/Portfolio'
import RecentOrder from './RecentOrder/RecentOrder'
import Settings from './Settings/Settings'
import TeamMembers from './TeamMembers/TeamMembers'
import TradeBoard from './TradeBoard/TradeBoard'
import TradeChart from './TradeChart/TradeChart'
import TradingView from './TradingView/TradingView'
import Welcome from './Welcome/Welcome'

const Dashboard = () => {
  return (
    <div className='container m-auto my-7 sm:px-0 px-3'>
      <Breadcrumb text={'Dashboard'} />
      <div className='grid grid-cols-12 mt-4 gap-5'>
        {/*Left Items*/}
        <div className='col-span-12 lg:col-span-4  grid grid-cols-12 gap-5 '>
          {/* Welcome */}
          <div className='col-span-12 h-max'>
            <Welcome user={{ firstName: 'Reza', lastName: 'Zargari' }} />
          </div>{' '}
          {/* Portfolio */}
          <div className='col-span-12'>
            <Portfolio />
          </div>
          {/* Activity */}
          <div className='col-span-12'>
            <Activity />
          </div>
        </div>
        {/*Right Items*/}
        <div className='col-span-12 lg:col-span-8 grid grid-cols-12 gap-5 '>
          {/* Trade Gain */}
          <div className='col-span-12 md:col-span-6 '>
            <TradeBoard
              title={'Trade Gain'}
              color={'#8cdad7'}
              t1={{ title: 'This Year', value: '2.8%', color: '#47c899' }}
              t2={{ title: 'This Month', value: '2.8%', color: '#f46b6b' }}
              t3={{ title: 'Today', value: '2.8%', color: '#f46b6b' }}
            />
          </div>
          {/* Signals */}
          <div className='col-span-12 md:col-span-6'>
            <TradeBoard
              title={'Signals'}
              color={'#ae93f9'}
              t1={{ title: 'Total Signals', value: '2.8%', color: '#6a6a6a' }}
              t2={{ title: 'Your Signals', value: '2.8%', color: '#6a6a6a' }}
            />
          </div>
          {/* TradeChart */}
          <div className='col-span-12'>
            <TradeChart />
          </div>
          {/* TradingView */}
          <div className='col-span-12'>
            <TradingView />
          </div>
        </div>

        {/*Section 2 Chat and others...*/}
        <div className='col-span-12 grid grid-cols-12 gap-5 '>
          {/* TeamMembers */}
          <div className='col-span-12 lg:col-span-4'>
            <TeamMembers />
          </div>
          {/* Chat */}
          <div className='col-span-12 lg:col-span-4'>
            <Chat />
          </div>
          {/* Settings */}
          <div className='col-span-12 lg:col-span-4'>
            <Settings />
          </div>{' '}
          {/* CoinWorth */}
          <div className='col-span-12'>
            <CoinWorth />
          </div>
          {/* RecentOrder */}
          <div className='col-span-12'>
            <RecentOrder />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
