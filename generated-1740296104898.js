To recreate an equivalent React component of the dashboard shown in the image using React with hooks and JSX, here's a basic structure. This code focuses on structure and layout rather than functionality, styling details, or data integration.

```jsx
import React from 'react';
import './Dashboard.css'; // Assuming you will take care of the styling details in this CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <img src="profile-pic.png" alt="Profile" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>My assets</li>
            <li>Notification</li>
            <li>Trade</li>
            <li>Neutrade AI</li>
            <li>Premium</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="upgrade-banner">
          <img src="neutrade-ad.png" alt="Neutrade AI" />
          <button>Upgrade to Pro</button>
        </div>
      </aside>
      <main className="content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="buy-sell">Buy & Sell</button>
            <div className="profile-thumbnail">
              <img src="user-avatar.png" alt="User" />
            </div>
          </div>
        </header>
        <section className="balance-section">
          <h2>Balance</h2>
          <div className="balance-info">
            <h3>$3,200.80</h3>
            <p>+85.66%</p>
          </div>
          <div className="balance-chart"> {/* Your chart implementation here */}</div>
        </section>
        <section className="bottom-panels">
          <div className="top-tokens panel">
            <header>
              <h3>Top Tokens</h3>
              <a href="#">See all</a>
            </header>
            <ul>
              <li>Ripple - 50.4631 - +0.60%</li>
              <li>Ethereum - $2,084.31 - +1.58%</li>
              <li>Solana - $132.28 - -5.02%</li>
            </ul>
          </div>
          <div className="greed-index panel">
            <header>
              <h3>Greed Index</h3>
              <a href="#">See all</a>
            </header>
            <div className="greed-meter"> {/* Greed meter implementation */}</div>
            <div className="greed-value">82</div>
          </div>
        </section>
        <section className="additional-panels">
          <div className="recent-activities panel">
            <header>
              <h3>Recent Activities</h3>
              <a href="#">See all</a>
            </header>
            <ul>
              <li>0x8k...d33B - +3.3289 ETH - Completed</li>
              <li>0x8l...d33B - +1.3209 ETH - Pending</li>
              <li>0x8m...c34B - -0.9238 BTC - Failed</li>
              <li>0x8n...c34B - -3.3209 BTC - Completed</li>
            </ul>
          </div>
          <div className="neura-ai panel">
            <header>
              <h3>Neura AI</h3>
              <div>Expert mode</div>
            </header>
            <div className="ai-tools">
              <div className="ai-tool">Trade Execution</div>
              <div className="ai-tool">Real-Time Alerts</div>
            </div>
            <div className="ai-query">
              <input type="text" placeholder="Ask AI anything" />
              <button>Send</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
```

Explanation:
- The sidebar contains navigation links and an upgrade banner.
- The main section is divided into a header, a balance section with a chart placeholder, and multiple smaller panels for top tokens, greed index, recent activities, and Neura AI.
- Styling and specific component logic (like charts, dynamic data loading, etc.) need to be incorporated using additional CSS and potentially importing specialized components or libraries.