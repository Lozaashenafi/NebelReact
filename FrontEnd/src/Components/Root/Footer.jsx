import React from "react";
import logo from "../../assets/images/nebellogo.jpg";

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
                  NE<span style={{ color: "#0c2c7d" }}>BE</span>L
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
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/services">Dental Services</a>
                </li>
                <li>
                  <a href="/dentists">Dentist</a>
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
                    <a href="tel:088123654987">088123654987</a>
                  </span>
                </li>
                <li>
                  <i className="flaticon-wall-clock"></i>
                  Open Hour
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li>
                  <i className="flaticon-red-cross"></i>
                  Our Location
                  <span>123 Dental Street, Cityname</span>
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
