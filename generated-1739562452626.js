To recreate the given image using a functional React component with hooks and JSX, we can break down the image into its corresponding UI elements and structure them appropriately. Here's an equivalent React code snippet that represents the layout and contents of the image:

```jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
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
      <main className="main-content">
        <header className="header">
          <input type="text" placeholder="Search..." />
          <div className="user-info">
            <span>Albiona</span>
          </div>
        </header>
        <section className="content">
          <h2>Registered Users</h2>
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
              {Array(3).fill("").map((_, index) => (
                <tr key={index}>
                  <td>Albiona</td>
                  <td>alb@gmail.com</td>
                  <td>Admin</td>
                  <td>123</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <form className="user-form">
            <h3>User Details</h3>
            <div>
              <label>Username</label>
              <input type="text" placeholder="Enter name..." />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Enter email..." />
            </div>
            <div>
              <label>Role</label>
              <input type="text" placeholder="Enter role..." />
            </div>
            <div>
              <label>Calory Limit</label>
              <input type="number" placeholder="0" />
            </div>
            <button type="submit">Submit</button>
            <button type="button">Clear</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
```

### Explanation:

- **Sidebar**: Represents the navigation menu with options like Dashboard, Appointments, Patients, etc.
- **Header**: Contains the search input and user information display.
- **Main Content**: Includes the 'Registered Users' table and a form for 'User Details'.

The above code uses simple JSX to create React components. You can further enhance it with styles and add functional interactivity using React's useState or other hooks as needed for a full-featured application.