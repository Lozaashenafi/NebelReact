import React, { useState } from "react";
import { message } from "antd"; // Ant Design's message for notifications
import userService from "../../services/userService"; // Import the user service

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  console.log(formData);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation (ensure passwords match)
    if (formData.password !== formData.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    try {
      const response = await userService.register(formData); // Call the service
      if (response.success) {
        message.success("User registered successfully!");
      } else {
        message.error(response.message || "Registration failed!");
      }
    } catch (error) {
      message.error("An error occurred during registration.");
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2>Register</h2>
              <form method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="middleName">Middle Name</label>
                      <input
                        id="middleName"
                        name="middleName"
                        className="form-control"
                        value={formData.middleName}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        className="form-control"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        className="form-control"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select
                        name="gender"
                        className="form-control"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                      </select>
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Role</label>
                      <select
                        name="role"
                        className="form-control"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="">Select Role</option>
                        <option value="ADMIN">Admin</option>
                        <option value="MANAGER">Manager</option>
                      </select>
                      <span className="text-danger"></span>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-info btn-fw">
                      Register
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-border"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Register;
