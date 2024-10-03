import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/images/nebellogo.jpg";

function SideBar() {
  // State for toggling the dropdowns
  const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);
  const [isDentistsOpen, setIsDentistsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Toggle functions
  const toggleUserManagement = () =>
    setIsUserManagementOpen(!isUserManagementOpen);
  const toggleDentists = () => setIsDentistsOpen(!isDentistsOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleBlog = () => setIsBlogOpen(!isBlogOpen);

  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <Link to="/" style={{ color: "#0094ff" }} className="mt-4">
            <img src={Logo} alt="Logo" style={{ width: "90px" }} />
            NE
            <span style={{ color: "#0c2c7d" }}>BE</span>L
          </Link>
        </div>
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item">
              <Link to="/dashboard">
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Navigation</h4>
            </li>

            <li className="nav-item">
              <Link onClick={toggleUserManagement} to="#">
                <i className="fa-solid fa-users"></i>
                <p>User Management</p>
                <span className="caret"></span>
              </Link>
              <div
                className={`collapse ${isUserManagementOpen ? "show" : ""}`}
                id="base"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/admin/register">
                      <span className="sub-item text-white">Register</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link onClick={toggleDentists} to="#">
                <i className="fa-solid fa-user-doctor"></i>
                <p>Dentists</p>
                <span className="caret"></span>
              </Link>
              <div
                className={`collapse ${isDentistsOpen ? "show" : ""}`}
                id="tables"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/admin/dentists/add">
                      <span className="sub-item text-white">
                        Add New Dentist
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/dentists/list">
                      <span className="sub-item text-white">Dentists List</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link onClick={toggleServices} to="#">
                <i className="fa-solid fa-server"></i>
                <p>Services</p>
                <span className="caret"></span>
              </Link>
              <div
                className={`collapse ${isServicesOpen ? "show" : ""}`}
                id="services"
              >
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/admin/services/add">
                      <span className="sub-item text-white">
                        Add New Services
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/services/list">
                      <span className="sub-item text-white">Services List</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link onClick={toggleBlog} to="#">
                <i className="fa-solid fa-blog"></i>
                <p>Blog</p>
                <span className="caret"></span>
              </Link>
              <div className={`collapse ${isBlogOpen ? "show" : ""}`} id="Blog">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/admin/blog/add">
                      <span className="sub-item text-white">Add New Post</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/blog/posts">
                      <span className="sub-item text-white">Posts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Other navigation items */}
            <li className="nav-item">
              <Link to="/admin/contacts">
                <i className="fa-solid fa-address-book"></i>
                <p>Contacts</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/testimonial">
                <i className="fa-solid fa-star"></i>
                <p>Testimonial</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/about">
                <i className="fa-solid fa-layer-group"></i>
                <p>About Us</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/banner">
                <i className="fa-solid fa-image"></i>
                <p>Banner</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/info">
                <i className="fa-solid fa-circle-info"></i>
                <p>Info</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
