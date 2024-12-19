import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import myImage from "./assets/me(4).jpg";
import Navbar from './components/Navbar/Navbar';
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="app-container">
      <section className="home-section">
        <div className="fade-in">
          <img src={myImage} className="circular-image" alt="Elise Poniman" />
          <h1>Elise Poniman</h1>
          <p>Hi!</p>
          <p>My name is Elise Poniman and I'm currently in my senior year majoring in Computer Science at the University of Washington.</p>
          <Navbar />
        </div>
        
      </section>

      <section className="portfolio-section">
        <Portfolio />
      </section>
    </div>
  );
}

export default App;
