import React from "react";
import Banner from "../Components/Root/Banner";
import SingleService from "../Components/Root/SingleService";

function Services() {
  return (
    <>
      <Banner title="Services" />
      <section class="services-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              Our Best Dental Services
            </span>
            <h2>
              Enjoy Specialized Care Through Precision, Artistry, and Experience
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div class="row">
            <SingleService />
            <SingleService />
            <SingleService />
            <SingleService />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
