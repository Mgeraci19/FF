'use client'

import React, { useEffect, useState } from 'react';
import './Homepage.css'; // Import a CSS file for custom styling
import Runner2 from '../static-content/Runner2.png'

export function Homepage(){
    const [quests, setQuests] = useState<string[]>([]);

    //TODO Update to pull quests from db
    useEffect(() => {
        setQuests(['Quest 1', 'Quest 2', 'Quest 3']);
    },[])

  return (
    <div className="fitness-app">
      <header className="header">
        <h1>FittestFriends</h1>
      </header>

      <div className="content">
        {/* Sidebar for Active Quests and Stats */}
        <div className="sidebar">
          <div className="quests">
            <h2>Active Quests</h2>
            {quests.map((quest, index) => (
              <div key={index} className="quest-item">
                {quest}
              </div>
            ))}
          </div>

          <div className="stats">
            <h2>Stats</h2>
            <div className="stat-item">10mi Run Today</div>
          </div>

          <div className="workout-buttons">
            <button className="sync-button">Log Miles</button>
          </div>
        </div>

        {/* Main Area for the Pixel Art Game */}
        <div className="game-area">
          <img src={Runner2.src} alt="Pixel Art Game" className="game-image" />
        </div>
      </div>

      {/* Bottom navigation buttons */}
      <footer className="footer">
        <button className="footer-button">Open Shop</button>
        <button className="footer-button">HomePage</button>
        <button className="footer-button">Go to Clan</button>
      </footer>
    </div>
  );
};

