import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import { assert } from 'console'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] =useState(false)
  return (
    <>
    {!isMenuOpen && <img src={asse}}
    <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>
        <div className='flex h-screen w-screen'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<ChatBox />} />
          <Route path='/credits' element={<Credits />} />
          <Route path='/community' element={<Community />} />
        </Routes>
      </div>
    </div>

    </>
  )
}
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <Routes>
       <Route path='/' element={<ChatBox />} />
       <Route path='/credits' element={<Credits />} />
       <Route path='/community' element={<Community />} />
      </Routes>
    </div>
      

export default App