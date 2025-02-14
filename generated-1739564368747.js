To recreate the given image in a functional React component using hooks and JSX, you would need to break it down into a structured component, which includes a sidebar menu, a search bar, a table for registered users, and a form. Below is an example of how this could be done in React:

```jsx
import React, { useState } from 'react';

const Dashboard = () => {
  const [users] = useState([
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  ]);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo"><h2>Ferexim</h2></div>
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
        <header>
          <input type="text" placeholder="Search..." />
          <div className="user-info">
            <span>Albiona</span>
          </div>
        </header>

        <section className="registered-users">
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
        </section>

        <section className="user-form">
          <h3>Add User</h3>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter name..." />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Enter email..." />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input type="text" placeholder="Enter role..." />
            </div>
            <div className="form-group">
              <label>Calorie Limit</label>
              <input type="number" value="0" />
            </div>
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="button">Clear</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
```

### Explanation:
1. **Sidebar**: Contains a simple list of links styled as a sidebar.
2. **Header**: Contains a search input and user information.
3. **Registered Users Table**: Displays a list of users in a table. You can add editing or deletion functionalities in the `button` elements within the table.
4. **User Form**: A simple form to add new users.

### Note:
- This code provides a basic template, and you'll need to implement additional functionalities such as form handling, buttons interaction, actual data fetching, and incorporating CSS for styling to completely recreate the look of the image.
- CSS styles should be added separately to achieve the look and layout.