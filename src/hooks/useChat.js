import React, { useContext } from 'react'
import ChatContext from '../context/chat/ChatContext'

const useChat = () => {
  const { messages, setMessages } = useContext(ChatContext)
  return { messages, setMessages }
}

export default useChat
