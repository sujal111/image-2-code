To recreate the given UI as a React functional component using hooks and JSX, you can consider the following example. This code is a very simplified version just to give an idea of structure and layout, and it assumes you have appropriate CSS styles and icons available along with necessary libraries like React Icons:

```jsx
import React, { useState } from 'react';
import { FaPen, FaTrashAlt, FaSearch } from 'react-icons/fa';
import { AiFillHome, AiOutlineCalendar, AiOutlineUser, AiOutlineClockCircle, AiOutlineLogout } from 'react-icons/ai';

const Dashboard = () => {
  const [users, setUsers] = useState([
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  ]);

  const [form, setForm] = useState({ username: '', email: '', role: '', calorieLimit: 0 });

  const handleSubmit = () => {
    // handle form submission
  };

  const handleClear = () => {
    setForm({ username: '', email: '', role: '', calorieLimit: 0 });
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">Ferexim</div>
        <ul>
          <li><AiFillHome /> Dashboard</li>
          <li><AiOutlineCalendar /> Appointments</li>
          <li><AiOutlineUser /> Patients</li>
          <li><AiOutlineClockCircle /> Counter</li>
          <li><AiOutlineCalendar /> Layout</li>
        </ul>
      </div>
      <div className="content">
        <div className="topbar">
          <input type="text" placeholder="Search..." />
          <div className="profile">
            <span>Albiona</span>
            <button><AiOutlineLogout /></button>
          </div>
        </div>
        <div className="main">
          <div className="user-table">
            <h3>Registered Users</h3>
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
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.calorieLimit}</td>
                    <td>
                      <button><FaPen /></button>
                      <button><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="user-form">
            <h3>User Form</h3>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                placeholder="Enter name..."
              />
              <label>Email</label>
              <input
                type="text"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Enter email..."
              />
              <label>Role</label>
              <input
                type="text"
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value })}
                placeholder="Enter role..."
              />
              <label>Calorie Limit</label>
              <input
                type="number"
                value={form.calorieLimit}
                onChange={e => setForm({ ...form, calorieLimit: e.target.value })}
                placeholder="Enter calorie limit..."
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

### Notes:
1. **Icons**: For the icons, you can use `react-icons` library. Make sure to install this library or replace these icons with the ones you have.
2. **CSS Styles**: Ensure you have proper CSS styles that mirror the appearance of the image.
3. **State Management**: This example uses a simple local state through React's `useState` to handle form data and user list.

Remember, the actual construction of the component may vary based on additional requirements not visible in the static image, like handling data fetching, form validation, or integrating with backend services.