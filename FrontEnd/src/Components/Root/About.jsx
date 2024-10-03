import React from "react";
import Image from "../../assets/images/about/about-1.png";

function About() {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                About Our Hospital
              </span>
              <h3>
                Our Clients are Our Priority, We Offer Quality Dental Services
                <span>of Specialists</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-info">
                    <i className="flaticon-caduceus"></i>
                    <h4>25 Years</h4>
                    <span>Dental Experienced</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-info">
                    <i className="flaticon-chair"></i>
                    <h4>6405+</h4>
                    <span>Dental Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-image">
              <img src={Image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
