import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../Context/authContext";
import { useToast } from "../Context/ToastContext";

function Login() {
  const { toastData, hideToast, setToastData } = useToast();
  const {
    isAdmin,
    isManager,
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    fetchData,
  } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigater = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login: " + JSON.stringify(formData));
    const res = await authService.login(formData);
    console.log(res);
    setToastData(res);
    if (res.success) {
      await fetchData();
      setIsLoggedIn(true);
      if (isAdmin) {
        navigater("/admin");
      } else if (isManager) {
        navigater("/manager");
      } else {
        navigater("/login");
      }
    }
  };
  useEffect(() => {
    console.log(isLoggedIn);
    if (isAdmin) {
      navigater("/admin");
    } else if (isManager) {
      navigater("/manager");
    } else {
      navigater("/login");
    }
  }, [isLoggedIn]);

  return (
    <div className="row mt-4">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="login-form">
          <h2>Login</h2>

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
