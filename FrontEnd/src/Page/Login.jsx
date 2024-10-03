import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../Context/authContext";
import { useToast } from "../Context/ToastContext";

function Login() {
  const { toastData, hideToast, setToastData } = useToast();
  const { isAdmin, isManager, setIsLoggedIn, fetchData } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("login", JSON.stringify(formData)); // Print formData as string
      const res = await authService.login(formData);
      console.log("Response:", res); // Check response structure

      setToastData(res);
      if (res.success) {
        fetchData();
        setIsLoggedIn(true);
        // Navigate based on user role (assumed to be part of res)
        if (res.role === "admin") {
          navigate("/admin/home");
        } else if (res.role === "manager") {
          navigate("/manager/home");
        }
      } else {
        setErrorMessage(res.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="login-form">
          <h2>Login</h2>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email" // Change to email type for better validation
                onChange={handleChange}
                className="form-control py-3"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                className="form-control py-3"
                placeholder="Password"
                required
              />
            </div>
            <div className="row align-items-center">
              <div className="lost-your-password">
                <a href="#" className="lost-your-password">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login Now
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Login;
