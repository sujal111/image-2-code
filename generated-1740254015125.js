To recreate the UI in the image provided, you can construct a functional React component using hooks for managing form state. Below is an example of how you can achieve this using React and JSX. I will make some assumptions to generate an equivalent structure but note that actual styling will require the use of CSS or a styling framework like Bootstrap to fully match the visual appearance:

```jsx
import React, { useState } from 'react';

const RegisteredUsers = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: '',
    calorieLimit: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit actions here
    console.log('Form submitted:', user);
  };

  const handleClear = () => {
    setUser({ username: '', email: '', role: '', calorieLimit: 0 });
  };

  const users = [
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  ];

  return (
    <div className="registered-users">
      <h3>Registered Users</h3>
      <div className="table-responsive">
        <table className="table">
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
                  <button className="btn btn-sm btn-secondary">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="user-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter name..."
              value={user.username}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
              value={user.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Enter role..."
              value={user.role}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="calorieLimit">Calorie Limit</label>
            <input
              type="number"
              name="calorieLimit"
              id="calorieLimit"
              value={user.calorieLimit}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
        </form>
      </div>
    </div>
  );
};

export default RegisteredUsers;
```

**Note:**
- This code includes a basic form with input elements and a table structure that represents the user data.
- The example places focus on state management and event handling to update and reset form values.
- For buttons in the Actions column, I've assumed usage of FontAwesome icons ("fas fa-pencil-alt" for editing and "fas fa-trash" for deleting). Make sure to include FontAwesome CSS or replace with appropriate icons depending on your styling setup.
- CSS for layout and styling is necessary but not included here to achieve the exact appearance in the image.

Make sure to include necessary libraries such as `Bootstrap` or other UI frameworks for proper styling.