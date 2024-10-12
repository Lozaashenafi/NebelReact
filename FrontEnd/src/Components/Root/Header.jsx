import React, { useState } from "react"; // Import useState from React
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/images/nebellogo.jpg";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation menu visibility

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle the nav state
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header>
      <div className="middle-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="middle-header">
                <h1>
                  <Link to="/" style={{ color: "#45adff" }}>
                    <img src={Logo} alt="Logo" style={{ width: "90px" }} />
                    NE<span style={{ color: "#081949" }}>BE</span>L
                  </Link>
                </h1>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <ul className="middle-header-content">
                <li>
                  <i className="flaticon-emergency-call"></i>
                  Call Us Anytime
                  <span>
                    <Link>+251 91 139 2567</Link>
                  </span>
                </li>
                <li>
                  <i className="flaticon-wall-clock"></i>
                  Open Hour
                  <span>08:00 AM to 07:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <Link to="/" style={{ color: "#45adff" }}>
                  <img src={Logo} alt="Logo" style={{ width: "90px" }} />
                  NE<span style={{ color: "#081949" }}>BE</span>L
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main-navbar" style={{ backgroundColor: "#45adff" }}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div
                className={`collapse navbar-collapse mean-menu ${
                  isNavOpen ? "show" : ""
                }`} // Show/Hide menu based on state
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/dentist"
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      Dentist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/services"
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/blog"
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="navbar-btn">
                      <Link
                        to="/appointment"
                        className="default-btn"
                        onClick={handleLinkClick}
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={toggleNav}>
              {" "}
              {/* Toggle navigation on click */}
              {isNavOpen ? (
                <IoMdClose size={20} />
              ) : (
                <div className="inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              )}
            </div>

            {isNavOpen && ( // Show options only if nav is open
              <div className="option-inner bg-light p-4">
                <ul
                  className="menu bg-base-200 rounded-box w-56"
                  style={{ listStyle: "none" }}
                >
                  <li className="nav-item mb-2">
                    {" "}
                    {/* Adds margin-bottom for spacing */}
                    <Link
                      to="/"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/about"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/dentist"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      Dentist
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/services"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/blog"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/contact"
                      className="btn w-100"
                      onClick={handleLinkClick}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="d-flex justify-content-center mt-3">
                  <div className="option-item">
                    <Link
                      to="/appointment"
                      className="btn btn-primary"
                      onClick={handleLinkClick}
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
