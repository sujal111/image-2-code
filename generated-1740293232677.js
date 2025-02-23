To recreate an equivalent React component for the image you provided, we'll utilize React functional components, hooks, and JSX. The UI consists of a sidebar navigation, a registered users table, and a user entry form. Note that this is a static representation based on what is visible in the image, and some functionality (e.g., button handlers or filtering) will need to be implemented as needed.

```jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    calorieLimit: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Submitted', formData);
  };

  const handleClear = () => {
    setFormData({
      username: '',
      email: '',
      role: '',
      calorieLimit: 0
    });
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">Ferexim</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Appointments</li>
            <li>Patients</li>
            <li>Counter</li>
            <li>Layout</li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <header className="header">
          <input type="text" placeholder="Search..." className="search-bar" />
        </header>
        <section className="registered-users">
          <h2>Registered Users</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Calorie Limit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Albiona</td>
                <td>alb@gmail.com</td>
                <td>Admin</td>
                <td>123</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">❌</button>
                </td>
              </tr>
              {/* Repeat the row below as needed */}
              <tr>
                <td>Albiona</td>
                <td>alb@gmail.com</td>
                <td>Admin</td>
                <td>123</td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">❌</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="user-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter name..."
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email..."
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Enter role..."
              />
            </div>
            <div className="form-group">
              <label>Calorie Limit</label>
              <input
                type="number"
                name="calorieLimit"
                value={formData.calorieLimit}
                onChange={handleInputChange}
                placeholder="0"
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
```

**Styling (App.css):**
```css
.app {
  display: flex;
}

.sidebar {
  width: 200px;
  background: #f8f9fa;
  padding: 20px;
}

.sidebar .logo {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  padding: 15px 0;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.search-bar {
  padding: 5px;
}

.registered-users, .user-form {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.edit-btn, .delete-btn {
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
}

.submit-btn, .clear-btn {
  padding: 10px 20px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 10px;
}
```

This code creates a basic layout with a sidebar, user table, and a form. Adjust the styles and functionality as needed for your specific use case.