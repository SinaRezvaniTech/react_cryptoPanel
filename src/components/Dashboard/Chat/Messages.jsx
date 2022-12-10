import React, { useEffect, useState } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  from,
  useSubscription,
} from '@apollo/client'

//images
import p3 from '../../../assets/images/ransford-quaye-DzAFv1iVMGg-unsplash.jpg'
//css
import style from './Chat.module.scss'

//icons
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoSendSharp } from 'react-icons/io5'
import useChat from '../../../hooks/useChat'

const Messages = ({ user, data }) => {
  // ====> format Date.
  const dateNow = new Date(Date.now())
  const time = ` ${dateNow.getHours()}:${dateNow.getMinutes()}`

  const { messages, setMessages } = useChat()
  if (!data) {
    return null
  }
  const newMessage = data.messageSent
  let oldMessages = [...messages]
  oldMessages.push({
    from: newMessage.from,
    message: newMessage.message,
    id: newMessage.id,
    time: time,
  })
  if (messages.length == 0) {
    setMessages(oldMessages)
  }
  if (
    messages.length !== 0 &&
    messages[messages.length - 1].id !== newMessage.id
  ) {
    setMessages(oldMessages)
  }

  return (
    <>
      {messages.map(({ id, from, message, time }, index) => (
        <div key={index}>
          {user == from ? (
            <div key={id} dir='rtl' className='flex items-end gap-3'>
              <div dir='ltr' className='bg-green-100 p-4 rounded-lg'>
                <p className='text-gray-600'>{message}</p>
                <div className='flex items-center gap-1 text-gray-500 mt-3'>
                  <AiOutlineClockCircle className='text-lg ' />
                  <p dir='ltr'>{time}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex items-end gap-3'>
              <div
                className={`w-2 aspect-square rounded-full bg-green-500 mb-4`}
              ></div>
              <img
                src={p3}
                alt=''
                className='w-12 h-12  rounded-[50%] object-cover'
              />
              <div className='bg-[#f3effe] p-4 rounded-lg'>
                <p className='text-[#8860f5] font-bold opacity-90'>{from}</p>
                <p className='text-gray-600'>{message}</p>
                <div className='flex items-center gap-1 text-gray-500 mt-3'>
                  <AiOutlineClockCircle className='text-lg ' />
                  <p>{time}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
export default Messages
