import React from "react";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">equitu<span className="logo-icon">m</span></div>
        <nav className="nav">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
        <button className="get-started">Get started</button>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h1>We’re here to help you achieve financial success</h1>
            <p>Let’s talk about money. Your money. And making more of it. Welcome to equitum...</p>
            <div className="hero-buttons">
              <button className="open-account">Open an account</button>
              <a className="how-it-works" href="#how-it-works">How it works <span>➔</span></a>
            </div>
          </div>
          <div className="stats">
            <div className="stat-card">
              <small>Total market size</small>
              <p>$42.74B</p>
              <small>Updated on Jan 23, 2023</small>
            </div>
            <div className="stat-card">
              <small>Total available</small>
              <p>$26.35B</p>
              <small>Updated on Jan 23, 2023</small>
            </div>
            <div className="chart">
              <small>$3,852.75</small>
              <span>+25.42%</span>
              <canvas></canvas>
            </div>
          </div>
        </section>
        <section className="investment-section">
          <div className="investment-input">
            <input type="text" placeholder="Invest USD, EUR, UAH" />
            <button>Start ➔</button>
          </div>
          <div className="investment-text">
            <p>Better investments with equitum.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;