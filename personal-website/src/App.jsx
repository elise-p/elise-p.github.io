import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import myImage from "./assets/me(4).jpg";
import Navbar from './components/Navbar/Navbar';
import Portfolio from "./components/Portfolio/Portfolio";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="app-container">
      <section className="home-section">
        <div className="fade-in">
          <Info />
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
