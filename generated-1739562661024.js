To recreate the provided image using React, you can create a functional component using hooks and JSX. The image represents a user interface with a sidebar, a navigation bar, a table displaying registered users, and a simple form for adding new users. Here's a basic implementation:

```jsx
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './App.css'; // Assuming some basic CSS for layout and styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item"><i className="home-icon"></i> Dashboard</div>
      <div className="sidebar-item"><i className="appointments-icon"></i> Appointments</div>
      <div className="sidebar-item active"><i className="patients-icon"></i> Patients</div>
      <div className="sidebar-item"><i className="counter-icon"></i> Counter</div>
      <div className="sidebar-item"><i className="layout-icon"></i> Layout</div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Ferexim</div>
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="navbar-actions">
        <i className="mail-icon"></i><span className="notif-count">22</span>
        <i className="profile-icon"></i> Albiona
      </div>
    </div>
  );
};

const UserTable = () => {
  const users = [
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 }
  ];

  return (
    <table className="user-table">
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
            <td>{user.calorieLimit}</td>
            <td>
              <button className="action-btn edit-btn"><FaEdit /></button>
              <button className="action-btn delete-btn"><FaTrash /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [calorieLimit, setCalorieLimit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ username, email, role, calorieLimit });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter name..." />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />
      </div>
      <div>
        <label>Role</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter role..." />
      </div>
      <div>
        <label>Calory Limit</label>
        <input type="number" value={calorieLimit} onChange={(e) => setCalorieLimit(e.target.value)} placeholder="0" />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
      <button type="reset" className="clear-btn">Clear</button>
    </form>
  );
};

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <h2>Registered Users</h2>
          <UserTable />
          <h2>Add New User</h2>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default App;
```

**Notes:**
1. **Styling**: You should create appropriate CSS styles in `App.css` to match the layout and style shown in the image. This will include positioning the sidebar, main content, navbar, and ensuring the table and form have adequate styling.
2. **Icons**: I used the `FaEdit` and `FaTrash` from `react-icons/fa` for the action buttons. You need to install `react-icons` package to use them.
3. **Static Content**: This example uses static content, which can be replaced with dynamic content from APIs or state management as needed.
4. **Functionality**: The form and table are basic and need functionalities like validation, CRUD operations, etc., to become fully functional in a real-world app.

This React component sets up a basic layout to mimic the provided user interface. Adjust CSS and functionality as needed based on your project's specific requirements.