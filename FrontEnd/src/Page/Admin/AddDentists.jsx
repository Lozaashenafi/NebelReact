import React, { useState } from "react";

function AddDentists() {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    phoneNumber: "",
    imageFile: null,
    linkedinLink: "",
    igLink: "",
    fbLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ImageFile") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., API call
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="fw-bold mb-4">Add New Dentist</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="control-label">
                        Full Name
                      </label>
                      <input
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="profession" className="control-label">
                        Profession
                      </label>
                      <input
                        name="profession"
                        className="form-control"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber" className="control-label">
                        Phone Number
                      </label>
                      <input
                        name="phoneNumber"
                        className="form-control"
                        type="text"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageFile" className="control-label">
                        <strong>Image</strong>
                      </label>
                      <label className="control-label">
                        Height: 550 px Width: 550 px
                      </label>
                      <input
                        name="ImageFile"
                        className="form-control"
                        type="file"
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="linkedinLink" className="control-label">
                        LinkedIn Profile
                      </label>
                      <input
                        name="linkedinLink"
                        className="form-control"
                        value={formData.linkedinLink}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="igLink" className="control-label">
                        Instagram Profile
                      </label>
                      <input
                        name="igLink"
                        className="form-control"
                        value={formData.igLink}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="fbLink" className="control-label">
                        Facebook Profile
                      </label>
                      <input
                        name="fbLink"
                        className="form-control"
                        value={formData.fbLink}
                        onChange={handleChange}
                      />
                      <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Save"
                        className="btn btn-info btn-fw"
                      />
                      <button
                        type="button"
                        className="btn btn-primary btn-border"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default AddDentists;
