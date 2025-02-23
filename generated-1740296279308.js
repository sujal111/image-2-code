To recreate the given image using a functional React component, we can create a component structure with appropriate styling. Note that the actual CSS styles to match the exact look of the image will be quite detailed, and I'll focus here on providing a structure with some basic styles and CSS classes that you can further customize based on your needs.

Here is a basic outline of what the React component might look like:

```jsx
import React from 'react';
import './Dashboard.css'; // Assuming you will create this CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo">equitum</div>
        <nav className="nav-links">
          <a href="#about-us">About us</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
        <button className="get-started">Get started</button>
      </header>

      <main className="main-content">
        <section className="intro">
          <h1>We’re here to help you achieve financial success</h1>
          <p>
            Let’s talk about money. Your money. And making more of it. Welcome to equitum, where
            the power of investing is a privilege everyone can afford and enjoy.
          </p>
          <div className="buttons">
            <button className="open-account">Open an account</button>
            <a href="#how-it-works" className="how-it-works">How it works →</a>
          </div>
        </section>

        <section className="stats">
          <div className="stat-box">
            <p>Total market size</p>
            <h2>$42.74B</h2>
            <div className="updated">Updated on Jan 23, 2023</div>
          </div>
          <div className="stat-box">
            <h2>$3,852.75</h2>
            <p>+25.42%</p>
            <div className="chart">Chart Placeholder</div>
          </div>
          <div className="availability-box">
            <p>Total available</p>
            <h2>$26.35B</h2>
            <div className="avatars">Avatar Placeholder</div>
            <div className="updated">Updated on Jan 23, 2023</div>
          </div>
        </section>

        <section className="investment-tool">
          <div className="investment-input">
            <input type="text" placeholder="Invest USD, EUR, UAH" />
            <button className="start-button">Start →</button>
          </div>
          <p className="investment-info">
            By Joana Fitzroy – Jan 23, 2023 Better investments with equitum.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
```

### CSS (Dashboard.css)
You'll need to create a `Dashboard.css` file to handle styles. Here's a simple start; you'll need to expand this to fit the exact appearance:

```css
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(to right, #242625, #262f38);
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: bold;
}

.nav-links a {
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
}

.get-started {
  background-color: #0f0;
  padding: 8px 20px;
  border-radius: 20px;
}

.main-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.intro h1 {
  font-size: 2rem;
}

.intro p {
  margin-top: 10px;
}

.buttons {
  display: flex;
}

.open-account {
  background-color: #0f0;
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 20px;
}

.how-it-works {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}

.stats {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.stat-box, .availability-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
}

.investment-tool {
  margin-top: 40px;
}

.investment-input {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.investment-input input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 6px;
  border: none;
  outline: none;
}

.start-button {
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

```

This code provides a basic structure for the layout presented in the image. The actual colors, fonts, sizes, and other styling details will require additional adjustments in the CSS to closely mimic the UI shown in the image.