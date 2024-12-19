import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>Portfolio</h2>
        <ul>
          <li>
            <a 
              href="https://cse442.pages.cs.washington.edu/24au/fp/finalproject442/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Digestive System Website
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/elise-p/crime_finder" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Crime Finder
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/lkim0402/BinGenius" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Bin Genius
            </a>
          </li>
        </ul>
    </div>
  );
}

export default Portfolio;
