import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">equitum</div>
        <nav className="nav">
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
        <button className="get-started-btn">Get started</button>
      </header>
      <div className="content">
        <div className="left">
          <h1>We’re here to help you achieve financial success</h1>
          <p>
            Let’s talk about money. Your money. And making more of it. Welcome
            to equitum, where the power of investing is a privilege everyone can
            afford and enjoy.
          </p>
          <button className="open-account-btn">Open an account</button>
          <a href="#" className="how-it-works-link">
            How it works <span>↗</span>
          </a>
        </div>
        <div className="right">
          <div className="card-wrapper">
            <div className="card large">
              <h3>Total market size</h3>
              <h1>$42.74B</h1>
              <p>Updated on Jan 23, 2023</p>
            </div>
            <div className="card small">
              <h3>Total available</h3>
              <h1>$26.35B</h1>
              <p>Updated on Jan 23, 2023</p>
            </div>
          </div>
          <div className="stats">
            <div className="chart">
              <h2>$3,852.75</h2>
              <p>+ 25.42%</p>
              <svg>{/* Add SVG Graph Data here */}</svg>
            </div>
            <div className="invest">
              <label>Invest</label>
              <input type="text" placeholder="USD, EUR, UAH" />
              <button className="start-btn">Start</button>
              <p>By Joana Fitzroy - Jan 23, 2023</p>
            </div>
          </div>
          <div className="better-investments">
            <p>
              Better investments
              <br />
              with equitum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;