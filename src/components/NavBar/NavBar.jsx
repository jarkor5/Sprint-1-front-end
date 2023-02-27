import React from 'react'
import MenuImage from '../assets/Menu.png'
import LogoImage from '../assets/Logo.svg'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <img src={MenuImage} alt="Menu" className="Menu" />
      <img src={LogoImage} alt="Logo" className="logo" />
    </nav>
  )
}

