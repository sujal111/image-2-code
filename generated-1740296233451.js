To recreate the provided image as a functional React component using hooks and JSX, I'll break it down into various components based on the visual layout: a sidebar, a header, a main dashboard area, and widget sections for balance, tokens, activities, etc. We'll use basic HTML and CSS representations in the JSX.

```jsx
import React from 'react';
import './Dashboard.css'; // Assume custom CSS for styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <BalanceSection />
          <div className="widget-section">
            <TopTokens />
            <GreedIndex />
          </div>
          <div className="widget-section">
            <RecentActivities />
            <NeuraAI />
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="sidebar">
    <ProfileIcon />
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
    <PromoCard />
  </div>
);

const ProfileIcon = () => (
  <div className="profile-icon">
    {/* Profile image or placeholder */}
  </div>
);

const PromoCard = () => (
  <div className="promo-card">
    <img src="promo-image-url" alt="Promo" />
    <p>Trade smarter with Neutrade AI</p>
    <button>Upgrade to Pro</button>
  </div>
);

const Header = () => (
  <div className="header">
    <h1>Dashboard</h1>
    <button className="buy-sell">Buy & Sell</button>
  </div>
);

const BalanceSection = () => (
  <div className="balance-section">
    <h2>Balance</h2>
    <div className="balance-amount">
      <span>$3,200.80</span> <span className="balance-change">85.66%</span>
    </div>
    <Chart />
  </div>
);

const Chart = () => <div className="chart"> {/* Placeholder for chart */} </div>;

const TopTokens = () => (
  <div className="widget top-tokens">
    <h3>Top tokens</h3>
    <ul>
      <li>Ripple <span>0.46531</span> <span className="positive">0.56%</span></li>
      <li>Ethereum <span>$2,983.31</span> <span className="negative">16.98%</span></li>
      <li>Solana <span>$132.38</span> <span className="negative">5.05%</span></li>
    </ul>
  </div>
);

const GreedIndex = () => (
  <div className="widget greed-index">
    <h3>Greed index</h3>
    <div className="index-circle">82</div>
  </div>
);

const RecentActivities = () => (
  <div className="widget recent-activities">
    <h3>Recent activities</h3>
    <ul>
      <li>0x4...dA33B <span>+3.28%</span></li>
      <li>0x6...dA33B <span>-1.23%</li>
      <li>Pending <span>+0.32%</li>
      <li>Completed <span>-3.23%</li>
    </ul>
  </div>
);

const NeuraAI = () => (
  <div className="widget neura-ai">
    <h3>Neura AI</h3>
    <div className="ai-options">
      <div>Trade Execution</div>
      <div>Real-Time Alerts</div>
    </div>
  </div>
);

export default Dashboard;
```

In the above JSX, I created multiple React functional components to represent different sections of the dashboard UI. These components are nested hierarchically to create the complete structure as seen in the image.

The CSS file 'Dashboard.css' referred to in the code should handle the styling requirements, including layout, colors, fonts, etc., to match the image. Various utility classes like `positive`, `negative`, etc., are assumed to be used for text color differentiation based on value changes.

This JSX structure assumes that appropriate CSS is applied for layout, styling, font sizes, etc., as visual attributes such as shadow, padding, and margin are crucial to recreating the UI accurately.