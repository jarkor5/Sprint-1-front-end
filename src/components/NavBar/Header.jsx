import React from 'react';
import NavBar from './NavBar';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header-text">
        <h1>For the love of manga</h1>
        <h2>Explore our varieties</h2>
        <h3>#MingaLove❤</h3>
        <a href="#" className="lets-go">Let's go!</a>
      </div>
    </header>
  );
}





