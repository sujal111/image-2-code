To recreate the image provided as a React functional component using hooks and JSX, the following code is a possible implementation. The code aims to mimic the UI layout and style using React and basic CSS styling.

```jsx
import React from 'react';
import './Dashboard.css'; // assuming this file contains the required CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="profile-section">
          <img src="profile_pic_url" alt="Profile" className="profile-image" />
        </div>
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>My assets</li>
          <li>Notification</li>
          <li>Trade</li>
          <li>Neutrade AI</li>
          <li>Premium</li>
          <li>Settings</li>
        </ul>
        <div className="sidebar-upgrade">
          <img src="ad_img_url" alt="Upgrade Ad" className="upgrade-image" />
          <button className="upgrade-button">Upgrade to Pro</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <button className="buy-sell-btn">Buy & Sell</button>
          <div className="search-profile">
            <input type="text" placeholder="Search..." className="search-input" />
            <img src="user_img_url" alt="User" className="user-image" />
          </div>
        </header>

        <section className="balance-section">
          <h2>Balance</h2>
          <div className="balance-details">
            <span className="balance-amount">$3,200.80</span>
            <span className="balance-change">+85.66%</span>
          </div>
          <div className="balance-chart">
            {/* Placeholder for a chart, can integrate with a chart library */}
            <svg>
              {/* SVG content goes here */}
            </svg>
          </div>
        </section>

        <section className="dashboard-widgets">
          <div className="widget tokens-widget">
            <h3>Top tokens <span className="see-all">See all</span></h3>
            <ul>
              <li>Ripple <span className="price">50.4831 +0.56%</span></li>
              <li>Ethereum <span className="price">$2,084.31 +1.56%</span></li>
              <li>Solana <span className="price">$113.28 -5.02%</span></li>
            </ul>
          </div>

          <div className="widget greed-index-widget">
            <h3>Greed index <span className="see-all">See all</span></h3>
            {/* Placeholder for displayed metrics */}
            <div className="greed-meter">
              <span className="greed-score">82</span>
              <span className="greed-label">Greed</span>
            </div>
          </div>

          <div className="widget activities-widget">
            <h3>Recent activities <span className="see-all">See all</span></h3>
            <ul>
              <li>0x8e...d53B3 <span className="amount">+3.22899714 ETH</span></li>
              {/* Other activities */}
            </ul>
          </div>

          <div className="widget neura-ai-widget">
            <h3>Neura AI <span className="expert-mode">Expert mode</span></h3>
            <div className="ai-functionality">
              <div className="trade-execution-card">
                <h4>Trade Execution</h4>
                <p>Automate trades based on user-defined criteria...</p>
              </div>
              <div className="real-time-alerts-card">
                <h4>Real-Time Alerts</h4>
                <p>Get real-time alerts for price changes...</p>
              </div>
            </div>
            <div className="ai-input">
              <input type="text" placeholder="Ask AI anything" className="ai-query-input" />
              <button className="ai-query-button">Send</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
```

### Additional Notes
- **CSS (Dashboard.css):** You would need to write styles in a `Dashboard.css` file to properly style the elements, including layout, colors, and fonts.
- **Chart Integration:** For rendering the balance chart, consider using a library like `Chart.js` or `Recharts` for rendering the chart component.
- **Images:** Replace the placeholder image URLs (`profile_pic_url`, `ad_img_url`, `user_img_url`) with actual URLs or use image imports.

This code provides a structural basis to recreate the image in React. You'll need to adjust styles and integrate components as needed to match your design system and further refine the UI.