import React from "react";
import Image from "../../assets/images/about/photonejib.jpg";

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
              <p style={{ fontSize: "18px" }}>
                At our practice, our clients are our top priority. We provide
                quality dental services delivered by experienced specialists who
                are dedicated to offering personalized care and ensuring the
                best outcomes for your oral health.
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="about-info">
                    <i className="flaticon-caduceus"></i>
                    <h4>2 Years</h4>
                    <span>Dental Experienced</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-info">
                    <i className="flaticon-chair"></i>
                    <h4>15+</h4>
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
