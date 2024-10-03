import React from "react";

function CoreFeaturse() {
  return (
    <section className="core-features-area pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                Specialty and Our Features
              </span>
              <h2>Features That You Will Love Us</h2>
            </div>
          </div>
          <div className="col-lg-8"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-core-features" style={{ height: "330px" }}>
              <div className="icon">
                <i className="flaticon-caduceus"></i>
              </div>
              <h3>
                <a asp-controller="Services" asp-action="Services">
                  Quality Brackets
                </a>
              </h3>
              <p style={{ fontSize: "16px" }}>
                High-quality brackets designed for precision and comfort,
                ensuring a perfect smile.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-core-features" style={{ height: "330px" }}>
              <div className="icon">
                <i className="flaticon-policy"></i>
              </div>
              <h3>
                <a href="services-details.html">Certified Dentists</a>
              </h3>
              <p style={{ fontSize: "16px" }}>
                Experienced and certified dentists providing top-notch care and
                expertise.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-core-features" style={{ height: "330px" }}>
              <div className="icon">
                <i className="flaticon-diamond"></i>
              </div>
              <h3>
                <a href="services-details.html">Experience</a>
              </h3>
              <p style={{ fontSize: "16px" }}>
                Benefit from our extensive experience and expertise in
                delivering outstanding dental care.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-core-features" style={{ height: "330px" }}>
              <div className="icon">
                <i className="flaticon-hospitalisation"></i>
              </div>
              <h3>
                <a href="services-details.html">Patient Care</a>
              </h3>
              <p style={{ fontSize: "16px" }}>
                Dedicated to personalized patient care with a focus on your
                comfort and overall health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreFeaturse;
