import React from "react";
import SingleDoctor from "./SingleDoctor";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/doctor/doctor-1.jpg";
import Image2 from "../../assets/images/doctor/doctor-2.jpg";
import Image3 from "../../assets/images/doctor/doctor-3.jpg";

function Doctor() {
  return (
    <section className="doctor-area pb-70 mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                Our Dentist
              </span>
              <h2>Our Specialized and Experienced Dentist</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-warp-btn">
              <Link to="/dentist" className="default-btn">
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <SingleDoctor image={Image1} socialLinks={{}} />
          <SingleDoctor image={Image2} socialLinks={{}} />
          <SingleDoctor image={Image3} socialLinks={{}} />
        </div>
      </div>
    </section>
  );
}

export default Doctor;
