import React from "react";
import SingleService from "./SingleService";

function Services() {
  return (
    <section className="services-area pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                Our Best Dental Services
              </span>
              <h2>
                Enjoy Specialized Care Through Precision, Artistry, and
                Experience
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-warp-btn">
              <a href="services.html" className="default-btn">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <SingleService />
          <SingleService />
          <SingleService />
          <SingleService />
          <SingleService />
          <SingleService />
        </div>
      </div>
    </section>
  );
}

export default Services;
