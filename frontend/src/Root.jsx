import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Root() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    <Footer/>

    
          </div>
  )
}

export default Root
