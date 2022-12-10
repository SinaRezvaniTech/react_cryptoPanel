import React, { useState } from 'react'

const SidebarContext = React.createContext()
export function SidebarContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((currentStatus) => !currentStatus)
  }

  return (
    <SidebarContext.Provider
      value={{
        setSidebar,
        sidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
