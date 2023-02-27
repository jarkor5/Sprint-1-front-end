import React, { useState } from 'react';
import MenuImage from '../assets/Menu.png';
import LogoImage from '../assets/Logo.svg';
import ProfileImage from '../assets/Rectangle 10.png'; // Agregar la imagen del perfil
import './NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <button className="toggle-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={MenuImage} alt="Menu" className="Menu" />
      </button>
      <img src={LogoImage} alt="Logo" className="logo" />
      <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>X</button>
        <div className="profile">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
        <div className="profile-text">
          <p className="profile-name">Lucas Ezequiel Silva </p>
          <p className="profile-email">lucasezequielsilva@gmail.com</p>
        </div>
      </div>
        <a href="#">Read</a>
        <a href="#">Register</a>
        <a href="#">Login</a>
      </div>
      
    </nav>
  )
}

