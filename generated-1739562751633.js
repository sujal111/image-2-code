To recreate the given user interface as a React functional component, we can use functional components with hooks like `useState` for managing state. We will assume the use of a library like Bootstrap for styling due to the common UI elements visible in the layout. The component will simulate the structure of the UI, including the sidebar, top navigation, content section, and the table with actions.

Below is an example of how you could structure the code in React:

```jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  // State for managing form inputs
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    role: '',
    calorieLimit: ''
  });

  // Placeholder data for users
  const users = [
    { id: 1, name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { id: 2, name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
    { id: 3, name: 'Albiona', email: 'alb@gmail.com', role: 'Admin', calorieLimit: 123 },
  ];

  // Handler for form submission
  const handleInputChange = e => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Add form submission logic
    console.log('Form submitted', userData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#dashboard">
                  <i className="fas fa-home"></i> Dashboard
                </a>
              </li>
              {/* Add other sidebar items here */}
              <li className="nav-item">
                <a className="nav-link" href="#appointments">
                  <i className="fas fa-calendar-alt"></i> Appointments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#patients">
                  <i className="fas fa-users"></i> Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#counter">
                  <i className="fas fa-clock"></i> Counter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#layout">
                  <i className="fas fa-layout"></i> Layout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <header className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Registered Users</h1>
          </header>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
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
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.calorieLimit}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm mr-2">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border p-4 mt-4">
            <h4>Form Section</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" value={userData.username} onChange={handleInputChange} placeholder="Enter name..." />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Enter email..." />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="role">Role</label>
                  <input type="text" className="form-control" id="role" name="role" value={userData.role} onChange={handleInputChange} placeholder="Enter role..." />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="calorieLimit">Calorie Limit</label>
                  <input type="number" className="form-control" id="calorieLimit" name="calorieLimit" value={userData.calorieLimit} onChange={handleInputChange} placeholder="0" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mr-2">Submit</button>
              <button type="reset" className="btn btn-secondary">Clear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
```

#### Explanation

- **Sidebar and Navigation**: We utilize a static sidebar (by Bootstrap styles) and include links that reflect the placeholder text and icons from the image.
- **Header**: It shows the section you are in ("Registered Users").
- **User Table**: Displays hardcoded entries with action buttons as per the image.
- **Form Section**: Contains input fields to mimic the form shown beneath the table with simple state management using `useState`.

> The above code assumes you've imported necessary styles and icons (such as those from Font Awesome for icons). Libraries and methodologies for CSS and icon usage can be adjusted as per your project's requirements.