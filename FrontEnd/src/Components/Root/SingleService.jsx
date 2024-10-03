import React from "react";
import Image from "../../assets/images/services/services-1.jpg";

function SingleService() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="services-image">
          <a href="services-details.html">
            <img src={Image} alt="image" />
          </a>
          <div className="icon">
            <a href="services-details.html">
              <i className="flaticon-chair"></i>
            </a>
          </div>
        </div>
        <div className="services-content">
          <h3>
            <a href="services-details.html">General Dentistry</a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
