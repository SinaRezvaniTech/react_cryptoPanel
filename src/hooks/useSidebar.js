import React, { useContext } from 'react'
import SidebarContext from '../context/sidebar/SidebarContext'

const useSiebar = () => {
  const { toggleSidebar, sidebar, setSidebar } = useContext(SidebarContext)
  return { toggleSidebar, sidebar, setSidebar }
}

export default useSiebar
