import React from 'react'
import NavBar from '../components/NavBar/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Index from '../components/Index/Index.jsx'

export default function layout() {
  return (
    <div>
        <NavBar/>
        <Index/>
        <Footer/>
    </div>
  )
}
