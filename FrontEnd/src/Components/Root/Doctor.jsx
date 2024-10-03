import React from "react";
import SingleDoctor from "./SingleDoctor";

function Doctor() {
  return (
    <section className="doctor-area pb-70">
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
              <a href="dentist.html" className="default-btn">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <SingleDoctor />
          <SingleDoctor />
          <SingleDoctor />
        </div>
      </div>
    </section>
  );
}

export default Doctor;
