import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myImage from "./assets/me(4).jpg";

function App() {
  return (
    <>
    <Navbar />
    <div className="fade-in">
      <img src= {myImage} className="circular-image"></img>
      <h1>Elise Poniman</h1>
      <p>Hi!</p>
      <p>My name is Elise Poniman and I'm currently in my senior year majoring in Computer Science at the University of Washington.</p>
    </div>
    </>
  )
}

export default App
