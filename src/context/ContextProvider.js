import { ChatContextProvider } from './chat/ChatContext'
import { SidebarContextProvider } from './sidebar/SidebarContext'

const ContextProvider = ({ children }) => {
  return (
    // S I D E B A R
    <SidebarContextProvider>
      {/*  C H A T */}
      <ChatContextProvider>{children}</ChatContextProvider>
    </SidebarContextProvider>
  )
}

export default ContextProvider
