import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar' 
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const Rootlayout = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Rootlayout