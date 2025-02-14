To recreate the given user interface using React, we need to break down the structure and components visible in the image. Below is a sample React functional component using hooks and JSX to recreate the visual structure shown in the image.

This involves setting up a sidebar with menu items, a header, a table for registered users, and a form for entering user details.

Here's the code:

```jsx
import React, { useState } from 'react';
import './App.css'; // Assume you have some CSS styles to make it look similar

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', caloricLimit: 123 }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle submit
  };

  const handleClear = () => {
    // Add logic to handle clear
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" /> {/* Replace with actual logo path */}
          <span>FEREXIM</span>
        </div>
        <ul className="menu">
          <li><span role="img" aria-label="dashboard">🏠</span> Dashboard</li>
          <li><span role="img" aria-label="appointments">🗓️</span> Appointments</li>
          <li><span role="img" aria-label="patients">👥</span> Patients</li>
          <li><span role="img" aria-label="counter">⌚</span> Counter</li>
          <li><span role="img" aria-label="layout">📅</span> Layout</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <input type="text" placeholder="Search..." />
          <div className="user-info">
            <span className="notification">22</span>
            <span>Albiona</span>
          </div>
        </header>
        <section className="user-table">
          <h2>Registered Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Calory Limit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.caloricLimit}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="user-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input type="text" placeholder="Enter name..." />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter email..." />
            </div>
            <div>
              <label>Role</label>
              <input type="text" placeholder="Enter role..." />
            </div>
            <div>
              <label>Calory Limit</label>
              <input type="number" defaultValue={0} />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>Clear</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;

// Note: The class names used in the JSX, such as container, sidebar, main-content, 
// header, user-table, and user-form, suggest that you should have CSS styles 
// to style these appropriately in a separate CSS file (e.g., App.css).
```

### Important Considerations:
- The code assumes you will style the component using CSS for layout and appearance so that it matches the image provided. The details of these styles are not included here.
- The actions (Edit, Delete) and form functionalities are represented by placeholder buttons and form methods (`handleSubmit` and `handleClear`), which should be implemented based on your application logic.
- Replace `logo.png` with the actual path to your logo image.