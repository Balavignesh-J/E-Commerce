import React from 'react'
import Navbar from './Components/Navbar' 
import Footer from './Components/Footer'
import Header from './Components/Header'

const Rootlayout = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <outlet />
        <Footer />
    </div>
  )
}

export default Rootlayout