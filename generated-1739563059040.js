To recreate the image provided using React, we can write a functional component that uses hooks and JSX. The layout contains a navigation sidebar, a top search bar, a registered users table, and a form. Let's write the React code:

```jsx
import React from 'react';
import './App.css'; // Assuming styles are defined in App.css

const App = () => {
  const handleEdit = (id) => {
    // Handle edit logic here
    console.log(`Edit user with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete user with id: ${id}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit form');
  };

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="logo">Ferexim</div>
        <ul>
          <li><i className="icon-dashboard"></i> Dashboard</li>
          <li><i className="icon-appointments"></i> Appointments</li>
          <li className="active"><i className="icon-patients"></i> Patients</li>
          <li><i className="icon-counter"></i> Counter</li>
          <li><i className="icon-layout"></i> Layout</li>
        </ul>
      </nav>
      <div className="content">
        <header className="top-bar">
          <input type="text" placeholder="Search..." />
          <div className="user-info">
            <i className="icon-mail"></i>
            <i className="icon-avatar"></i>
            Albiona
          </div>
        </header>
        <main>
          <section className="registered-users">
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
                {[1, 2, 3].map(id => (
                  <tr key={id}>
                    <td>Albiona</td>
                    <td>alb@gmail.com</td>
                    <td>Admin</td>
                    <td>123</td>
                    <td>
                      <button className="edit" onClick={() => handleEdit(id)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Enter name..." />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email..." />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" placeholder="Enter role..." />
              </div>
              <div className="form-group">
                <label>Calory Limit</label>
                <input type="number" defaultValue="0" />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit">Submit</button>
                <button type="reset" className="btn-clear">Clear</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
```

This code snippet creates a basic layout closely mimicking the image you provided. Note:
- We are using simple HTML and basic React to output sections of the UI.
- Styles and icons are assumed to be handled separately in an external CSS file like `App.css`.
- The buttons' onClick events are set to log actions which is where you can integrate your logic for editing, deleting data, etc.