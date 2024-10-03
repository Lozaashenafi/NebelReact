import React from "react";
import Image from "../../assets/images/doctor/doctor-1.jpg";

function SingleDoctor() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-doctor">
        <a href="dentist-details.html">
          <img src={Image} alt="image" />
        </a>
        <div className="doctor-content">
          <h3>
            <a href="dentist-details.html">Dr. Johnson Melbourne</a>
          </h3>
          <span>Prosthodontics Dentist</span>
          <div className="share-link">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDoctor;
