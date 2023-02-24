import React from 'react';
import './Main.css';
import animeImage from '../components/assets/283918815cce51edfc3bd01e534298c8-removebg-preview 1.png';
import onePieceImage from '../components/assets/image 2.png';

export default function Main() {
  return (
    <main>
      <div className="home-container">
        <div className="home-text-container-two">
          <img src={animeImage} alt="" id="anime-image" />
          <img src={onePieceImage} alt="" id="one-piece-image" />
          <div className="home-text-container">
            <h1 className="one-piece-home">One piece</h1>
            <p className="manga-home">Manga</p>
            <p className="home-text">Monkey D. Luffy refuses to let anyone stand in his way to become King of the Pirates. He launches into the seas and will become a captain willing to never give up until he gets hold of the greatest treasure in history: the legendary One Piece.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

