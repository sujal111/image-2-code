import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">equitum</div>
        <nav className="nav">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <button className="get-started">Get started</button>
        </nav>
      </header>
      <main className="main">
        <div className="intro">
          <h1>We’re here to help you achieve financial success</h1>
          <p>
            Let’s talk about money. Your money. And making more of it. Welcome to equitum, 
            where the power of investing is a privilege everyone can afford and enjoy.
          </p>
          <div className="cta-buttons">
            <button className="open-account">Open an account</button>
            <a href="#how-it-works">How it works</a>
          </div>
        </div>
        <div className="cards">
          <div className="card large">
            <h2>Total market size</h2>
            <div className="value">$42.74B</div>
            <div className="updated">Updated on Jan 23, 2023</div>
          </div>
          <div className="card medium">
            <h2>$3,852.75</h2>
            <div className="change">+ 25,42%</div>
            {/* Placeholder for chart */}
          </div>
          <div className="card input-card">
            <input type="text" placeholder="Invest USD, EUR, UAH" />
            <button className="start-button">Start</button>
          </div>
        </div>
        <div className="info">
          <p>Better investments with equitum.</p>
          <div className="author">By Joana Fitzroy - Jan 23, 2023</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;