To recreate this dashboard interface as a React functional component using hooks and JSX, you will need to create multiple components for various parts of the interface, such as the sidebar, header, user table, and form. Here's a simplified example to get you started:

```jsx
import React, { useState } from 'react';

const usersData = [
  { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 }
];

function Dashboard() {
  const [users, setUsers] = useState(usersData);
  const [formData, setFormData] = useState({ username: '', email: '', role: '', calorieLimit: 0 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ username: '', email: '', role: '', calorieLimit: 0 });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="main-content">
          <UserTable users={users} />
          <UserForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Ferexim</h2>
      <ul>
        <li>Dashboard</li>
        <li>Appointments</li>
        <li>Patients</li>
        <li>Counter</li>
        <li>Layout</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <input type="text" placeholder="Search..." />
      <div className="user-profile">
        <span>Albiona</span>
      </div>
    </header>
  );
}

function UserTable({ users }) {
  return (
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
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UserForm({ formData, onChange, onSubmit }) {
  return (
    <div className="user-form">
      <h3>User Form</h3>
      <form onSubmit={onSubmit}>
        <input name="username" type="text" placeholder="Enter name..." value={formData.username} onChange={onChange} />
        <input name="email" type="email" placeholder="Enter email..." value={formData.email} onChange={onChange} />
        <input name="role" type="text" placeholder="Enter role..." value={formData.role} onChange={onChange} />
        <input name="calorieLimit" type="number" placeholder="Calorie Limit" value={formData.calorieLimit} onChange={onChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setFormData({ username: '', email: '', role: '', calorieLimit: '' })}>Clear</button>
      </form>
    </div>
  );
}

export default Dashboard;
```

### Notes
- This code structure assumes you are using CSS for styling. You'll notice the class names like `dashboard`, `sidebar`, `content`, `user-table`, and `user-form`. Replace these with your actual CSS class names.
- The functions `handleChange` and `handleSubmit` manage the state for a simple form, allowing users to be added.
- The data setup (`usersData`) and methods (`handleChange`, `handleSubmit`) are examples. You might adjust these based on your application's logic.
- Components (`Dashboard`, `Sidebar`, `Header`, `UserTable`, and `UserForm`) are structured functionally, and demonstrate separation of concerns with each part of the UI within its own component.