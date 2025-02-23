To recreate this UI in a functional React component using hooks and JSX, we need to structure the code to include a sidebar for navigation, a table for registered users, and a form for adding users. Here's an equivalent React component:

```jsx
import React, { useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([
    { name: "Albiona", email: "alb@gmail.com", role: "Admin", calorieLimit: 123 },
    { name: "Albiona", email: "alb@gmail.com", role: "Admin", calorieLimit: 123 },
    { name: "Albiona", email: "alb@gmail.com", role: "Admin", calorieLimit: 123 },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    calorieLimit: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    setForm({ name: "", email: "", role: "", calorieLimit: 0 });
  };

  const handleClear = () => {
    setForm({ name: "", email: "", role: "", calorieLimit: 0 });
  };

  return (
    <div className="dashboard-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: "250px", background: "#f5f5f5", padding: "20px" }}>
        <div className="logo" style={{ marginBottom: "20px" }}>
          <img src="logo.png" alt="Ferexim" style={{ width: "100px" }} />
        </div>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px" }}><a href="#dashboard">Dashboard</a></li>
            <li style={{ marginBottom: "10px" }}><a href="#appointments">Appointments</a></li>
            <li style={{ marginBottom: "10px" }}><a href="#patients">Patients</a></li>
            <li style={{ marginBottom: "10px" }}><a href="#counter">Counter</a></li>
            <li style={{ marginBottom: "10px" }}><a href="#layout">Layout</a></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <h2>Registered Users</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
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
                  <button style={{ marginRight: "5px" }}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Enter name..."
              value={form.name}
              onChange={handleInputChange}
              style={{ flex: 1, marginRight: "10px" }}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter email..."
              value={form.email}
              onChange={handleInputChange}
              style={{ flex: 1, marginRight: "10px" }}
            />
            <input
              type="text"
              name="role"
              placeholder="Enter role..."
              value={form.role}
              onChange={handleInputChange}
              style={{ flex: 1, marginRight: "10px" }}
            />
            <input
              type="number"
              name="calorieLimit"
              placeholder="Calorie Limit"
              value={form.calorieLimit}
              onChange={handleInputChange}
              style={{ flex: 1 }}
            />
          </div>
          <button type="submit" style={{ marginRight: "10px" }}>Submit</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
```

This code sets up a `Dashboard` component with a sidebar for navigation, a user list table, and a form to add users. The user's name, email, role, and calorie limit are managed using React's `useState` hook. Styles are included directly within the component using inline CSS for simplicity.