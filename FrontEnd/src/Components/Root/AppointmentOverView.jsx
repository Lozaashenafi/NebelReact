import React from "react";
import Image from "../../assets/images/man.jpg";
import Image2 from "../../assets/images/fampic.jpg";
import { Link } from "react-router-dom";

function AppointmentOverView() {
  return (
    <section className="appointment-overview-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="appointment-overview-contact">
              <img src={Image} alt="image" />
              <div className="appointment-info">
                <ul className="call-info">
                  <li>
                    <i className="flaticon-emergency-call"></i>
                    Call Today
                    <span>
                      <a href="tel:088123654987">+251 91 139 2567</a>
                    </span>
                  </li>
                </ul>
                <p>Get in touch with us for personalized assistance.</p>
                <Link to="/contact" className="default-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8" style={{ margin: "auto" }}>
            <div className="appointment-overview-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="content">
                    <div className="box-image">
                      <img src={Image2} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="make-appointment-content">
                    <h4>
                      <i className="flaticon-calendar"></i> Make An Appointment
                    </h4>
                    <form className="mt-4">
                      <Link
                        to="/appointment"
                        type="submit"
                        className="default-btn"
                      >
                        Book Appointment
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentOverView;
