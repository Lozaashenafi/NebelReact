import React from "react";
import Image from "../../assets/images/black.png";

function Overview() {
  return (
    <section className="overview-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="overview-content">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                We Care For Every Patient
              </span>
              <h3>Nervous Troubled Attractive Staring Right Anxiously!</h3>
              <p>
                Contact Us Today <a href="tel:088123654987">0988776655</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="overview-image">
              <img src={Image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
