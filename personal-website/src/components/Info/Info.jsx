import React from "react";
import myImage from "../../assets/me(4).jpg"; 
import "./Info.css";

function Info() {
  return (
    <div className="info-container">
      <img src={myImage} className="circular-image" alt="Elise Poniman" />
      <h1>Elise Poniman</h1>
      <p>Hi!</p>
      <p>
        My name is Elise Poniman and I'm currently in my senior year majoring
        in Computer Science at the University of Washington.
      </p>
    </div>
  );
}

export default Info;
