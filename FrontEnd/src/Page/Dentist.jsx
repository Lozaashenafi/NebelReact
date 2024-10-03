import React from "react";
import Banner from "../Components/Root/Banner";
import SingleDoctor from "../Components/Root/SingleDoctor";

function Dentist() {
  return (
    <>
      <Banner title="Dentist" />
      <section class="doctor-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              Our Dentist
            </span>
            <h2>Our Specialized and Experienced Dentist</h2>
          </div>
          <div class="row">
            <SingleDoctor />
            <SingleDoctor />
            <SingleDoctor />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dentist;
