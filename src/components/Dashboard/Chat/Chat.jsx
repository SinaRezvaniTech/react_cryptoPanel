import React, { useState } from 'react'

//components
import ChatBox from './ChatBox'
import SerchBox from './SerchBox'


const Chat = () => {
  return (
    <div className='bg-[#ffffff] w-full rounded-xl shadow-lg   items-center h-full'>
      {/* Serch Box */}
      <div className='w-full  relative flex flex-col border-b px-5 pt-5 pb-3 items-end '>
        <SerchBox />
      </div>
      {/* Chat Box */}
      <ChatBox />
    </div>
  )
}

export default Chat
