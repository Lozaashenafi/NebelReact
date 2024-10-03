import React from "react";

function Appointment() {
  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content">
            <h2>Appointment</h2>
            <ul className="pages-list">
              <li>
                <a asp-action="Index" asp-controller="Home">
                  Home
                </a>
              </li>
              <li>Appointment</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="features-area-two pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-features-box">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-caduceus"></i>
                  </div>
                  <h3>
                    <a href="services-details.html">Quality Brackets</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-features-box">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-policy"></i>
                  </div>
                  <h3>
                    <a href="services-details.html">Certified Dentist</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-features-box">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-diamond"></i>
                  </div>
                  <h3>
                    <a href="services-details.html">Experience</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-features-box">
                <div className="content">
                  <div className="icon">
                    <i className="flaticon-hospitalisation"></i>
                  </div>
                  <h3>
                    <a href="services-details.html">Patient Care</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="appointment-area bg-image ptb-100">
        <div className="container">
          <div className="appointment-form bg-white p-4 rounded shadow">
            <h4 className="mb-4">
              <i className="flaticon-calendar"></i> Make An Appointment
            </h4>
            <form>
              <div className="d-flex mb-3">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="patientType"
                    id="existingPatient"
                  />
                  <label
                    className="form-check-label ml-4"
                    for="existingPatient"
                  >
                    Existing Patient
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="patientType"
                    id="newPatient"
                    checked
                  />
                  <label className="form-check-label ml-4" for="newPatient">
                    New Patient
                  </label>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="selectDoctor" className="form-label text-2xl">
                  Select Doctor
                </label>
                <select className="form-select" id="selectDoctor">
                  <option value="">---</option>
                  <option value="dr-smith">Dr. John Smith</option>
                  <option value="dr-jones">Dr. Emily Jones</option>
                  <option value="dr-williams">Dr. Michael Williams</option>
                  <option value="dr-brown">Dr. Sarah Brown</option>
                  <option value="dr-johnson">Dr. David Johnson</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="selectTime" className="form-label text-2xl">
                  Select Time
                </label>
                <select className="form-select" id="selectTime">
                  <option value="">---</option>
                  <option value="07.00 am">2.00 am</option>
                  <option value="08.00 am">3.00 am</option>
                  <option value="09.00 am">4.00 am</option>
                  <option value="10.00 am">5.00 am</option>
                  <option value="03.00 pm">8.00 pm</option>
                  <option value="04.00 pm">9.00 pm</option>
                  <option value="05.00 pm">10.00 pm</option>
                  <option value="06.00 pm">11.00 pm</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="purpose" className="form-label text-2xl">
                  Purpose of Appointment
                </label>
                <select className="form-select" id="purpose">
                  <option value="">---</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="Braces">Braces</option>
                  <option value="Fillings and Crowns">
                    Fillings and Crowns
                  </option>
                  <option value="Root canal">Root canal</option>
                  <option value="Emergency">Emergency</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button type="submit" className="default-btn">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
