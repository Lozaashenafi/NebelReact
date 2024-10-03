import React from "react";

function Location() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="page-inner">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="section-title-warp">
                <span className="sub-title">
                  <i className="flaticon-hashtag-symbol"></i>
                  Our Locations
                </span>
                <h2>
                  We are proud to serve our community through multiple
                  locations.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <div className="doctor-content mb-2">
                  <h4>
                    <a>Hawassa Branch</a>
                  </h4>
                </div>
                <div className="card-body">
                  <iframe
                    src="https://maps.google.com/maps?q=7.0506472,38.4736755&hl=es;z=14&amp;output=embed"
                    width="600"
                    height="450"
                    style={{ border: "0", width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div className="doctor-content mb-2">
                  <h4>
                    <a>Arbaminch Branch</a>
                  </h4>
                </div>
                <div className="card-body">
                  <iframe
                    src="https://maps.google.com/maps?q=6.0340861,37.5576039&hl=es;z=14&amp;output=embed"
                    width="600"
                    height="450"
                    style={{ border: "0", width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
