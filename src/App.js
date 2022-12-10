//libraries
import { Route, Routes } from 'react-router-dom'
import React from 'react'

// Hooks
import useViewportWidth from './hooks/useViewportWidth'

//components
import Dashboard from './components/Dashboard/Dashboard'
import HeaderDesktop from './components/common/Header/HeaderDesktop'
import HeaderMobile from './components/common/Header/HeaderMobile'

function App() {
  const { viewportWidth } = useViewportWidth()

  return (
    <div className=''>
      {viewportWidth >= 1024 ? <HeaderDesktop /> : <HeaderMobile />}
      <main className=''>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
