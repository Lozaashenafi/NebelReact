import React, { useState } from "react";

function Info({ info }) {
  // If you plan to manage form inputs locally, you can use state hooks.
  const [openHour, setOpenHour] = useState(info?.OpenHour || "");
  const [establishmentDate, setEstablishmentDate] = useState(
    info?.EstablishmentDate || ""
  );
  const [location, setLocation] = useState(info?.Location || "");
  const [phoneNumber, setPhoneNumber] = useState(info?.PhoneNumber || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call to update info
    console.log({ openHour, establishmentDate, location, phoneNumber });
  };

  return (
    <>
      {/* Current Info Section */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Current Info</h3>
                <div className="about-us-item">
                  <p>
                    <strong>Open Hour:</strong> {info?.OpenHour}
                  </p>
                  <p>
                    <strong>Establishment Date:</strong>{" "}
                    {info?.EstablishmentDate}
                  </p>
                  <p>
                    <strong>Location:</strong> {info?.Location}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {info?.PhoneNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* Edit Info Section */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Edit Info</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="OpenHour" className="control-label">
                      Open Hour
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="OpenHour"
                      placeholder="like 09:00 AM to 07:00 PM"
                      value={openHour}
                      onChange={(e) => setOpenHour(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="EstablishmentDate"
                      className="control-label"
                    >
                      Establishment Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="EstablishmentDate"
                      value={establishmentDate}
                      onChange={(e) => setEstablishmentDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Location" className="control-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="PhoneNumber" className="control-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="PhoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-border"
                      onClick={() => window.history.back()}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default Info;
