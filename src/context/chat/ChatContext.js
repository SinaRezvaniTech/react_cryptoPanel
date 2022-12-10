import React, { useState } from 'react'

const ChatContext = React.createContext()
export function ChatContextProvider({ children }) {
  const [messages, setMessages] = useState([])

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContext
