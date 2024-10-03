import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/images/nebellogo.jpg";

function Header() {
  return (
    <header>
      <div className="middle-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="middle-header">
                <h1>
                  <Link to="/" style={{ color: "#45adff" }}>
                    {" "}
                    {/* Changed from <a> to <Link> */}
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
                    <Link to="tel:088123654987">+251 91 139 2567</Link>{" "}
                    {/* Use Link for tel */}
                  </span>
                </li>
                <li>
                  <i className="flaticon-wall-clock"></i>
                  Open Hour
                  <span>09:00 AM to 07:00 PM</span>
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
                  {" "}
                  {/* Changed from <a> to <Link> */}
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
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
                style={{ display: "block" }}
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/dentist" className="nav-link">
                      Dentist
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>{" "}
                    {/* Changed from <a> to <Link> */}
                  </li>
                </ul>
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="navbar-btn">
                      <Link to="/appointment" className="default-btn">
                        {" "}
                        {/* Changed from <a> to <Link> */}
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
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="search-btn">
                      <Link
                        to="#searchmodal" // You might want to adjust this if it's a modal link
                        data-bs-toggle="modal"
                        data-bs-target="#searchmodal"
                      >
                        <i className="flaticon-search"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="option-item">
                    <div className="navbar-btn">
                      <Link to="/appointment" className="default-btn">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
