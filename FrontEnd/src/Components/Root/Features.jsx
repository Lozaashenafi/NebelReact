import React from "react";

function Features() {
  return (
    <section className="features-area pb-70">
      <div className="container">
        <div className="row" style={{ marginTop: "8%" }}>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-features bg-4a6577"
              style={{ height: "230px" }}
            >
              <div className="content">
                <div className="icon">
                  <i className="flaticon-dental-care"></i>
                </div>
                <h3>
                  <a>Fair Payment</a>
                </h3>
                <p>
                  We believe in fair pricing, ensuring that you receive the best
                  value for your money.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-features bg-f57e57"
              style={{ height: "230px" }}
            >
              <div className="content">
                <div className="icon">
                  <i className="flaticon-tooth-1"></i>
                </div>
                <h3>
                  <a>New Technology</a>
                </h3>
                <p>Innovative care powered by the latest technology.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-features" style={{ height: "230px" }}>
              <div className="content">
                <div className="icon">
                  <i className="flaticon-dental-care"></i>
                </div>
                <h3>
                  <a>Certified Dentist</a>
                </h3>
                <p>Certified dentists delivering expert care with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
