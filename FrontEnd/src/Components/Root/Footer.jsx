import React from "react";
import logo from "../../assets/images/nebellogo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h2>
                <a style={{ color: "#0094ff" }}>
                  <img src={logo} alt="Nebellogo" style={{ width: "90px" }} />
                  NE<span style={{ color: "#fff" }}>BE</span>L
                </a>
              </h2>
              <p>
                We prioritize our clients, offering top-quality dental care from
                experienced specialists dedicated to personalized treatment and
                optimal results.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Useful Link</h3>
              <ul className="quick-links">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Dental Services</Link>
                </li>
                <li>
                  <Link to="/dentist">Dentist</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="single-footer-widget">
              <h3>Contact Information</h3>
              <ul className="footer-information">
                <li>
                  <i className="flaticon-emergency-call"></i>
                  Call Today
                  <span>
                    <a href="tel:088123654987">+251 91 139 2567</a>
                  </span>
                </li>
                <li>
                  <i className="flaticon-wall-clock"></i>
                  Open Hour
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li>
                  <i className="flaticon-red-cross"></i>
                  Location 1<span>Hawassa ,piassa , </span>
                </li>
                <li>
                  <i className="flaticon-red-cross"></i>
                  Location 2<span>Arbaminch </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
