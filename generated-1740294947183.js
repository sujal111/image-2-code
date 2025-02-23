To recreate the image as a functional React component, you would likely use a combination of CSS Flexbox or Grid for layout, React hooks for state management if needed (though static data can initially be hardcoded), and basic JSX. Here's a simple outline for a React component that captures the essence of the design shown in the image:

```jsx
import React from 'react';
import './App.css'; // assume you have a CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🔵</span>
          <span className="logo-text">equitum</span>
        </div>
        <nav className="nav">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
        <button className="get-started">Get started</button>
      </header>
      <main className="main-content">
        <div className="hero-text">
          <h1>We’re here to help you achieve financial success</h1>
          <p>
            Let’s talk about money. Your money. And making more of it. Welcome to equitum, where the
            power of investing is a privilege everyone can afford and enjoy.
          </p>
          <button className="open-account">Open an account</button>
          <a href="#how-it-works">How it works</a>
        </div>
        <div className="stats">
          <div className="stat-card">
            <h2>Total market size</h2>
            <p className="stat-amount">$42.74B</p>
            <p>Updated on Jan 23, 2023</p>
          </div>
          <div className="stat-card">
            <p>$3,852.75</p>
            <small>+ 25.42%</small>
          </div>
          <div className="stat-card">
            <h2>Total available</h2>
            <p className="stat-amount">$26.35B</p>
            <p>Updated on Jan 23, 2023</p>
          </div>
          <div className="investment-widget">
            <select>
              <option>USD, EUR, UAH</option>
            </select>
            <button>Start</button>
          </div>
        </div>
        <div className="investment-info">
          <p>By Joana Fitzroy - Jan 23, 2023</p>
          <p>Better investments with equitum.</p>
        </div>
      </main>
    </div>
  );
};

export default App;
```

```css
/* App.css */
.app-container {
  font-family: Arial, sans-serif;
  color: white;
  background: linear-gradient(to bottom right, #141e30, #243b55);
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  margin-right: 8px;
}

.nav a {
  margin: 0 15px;
  color: #bfbfbf;
  text-decoration: none;
}

.get-started {
  background: #080808;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.main-content {
  display: flex;
  flex-direction: column;
}

.hero-text h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero-text button {
  background: #00ff00;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  color: #000;
  cursor: pointer;
  margin-right: 10px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  flex: 1 1 200px;
}

.stat-amount {
  font-size: 2em;
}

.investment-widget {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
}

.investment-info {
  margin-top: 20px;
}

.select {
  background: transparent;
  border: none;
  color: white;
  margin-right: 10px;
}

button {
  background: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
}
```

This code provides a basic React component that includes the sample data and appearance reflected in the provided image. It uses basic CSS classes for styling, which can be adjusted to fine-tune visual details like color, font size, and spacing to match the visual as closely as possible.