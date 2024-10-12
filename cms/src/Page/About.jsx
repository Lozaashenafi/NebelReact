import React, { useState } from "react";
import aboutService from "../services/aboutService";
import { useToast } from "../Context/ToastContext";

function About() {
  const { setToastData } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageFile: null,
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageFile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      imageFile: e.target.files[0], // Store the selected file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aboutUsData = new FormData();
    aboutUsData.append("title", formData.title);
    aboutUsData.append("description", formData.description);
    if (formData.imageFile) {
      aboutUsData.append("ImageFile", formData.imageFile); // Append the file
    }

    try {
      const response = await aboutService.create(aboutUsData);
      if (response.success) {
        setToastData({
          message: "About Us created successfully!",
          type: "success",
        });
      } else {
        setErrors(response.errors || {});
        setToastData({ message: "Failed to create About Us", type: "error" });
      }
    } catch (error) {
      console.error("Error creating About Us:", error);
      setToastData({ message: "An error occurred.", type: "error" });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Add About Us</h3>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="Title" className="control-label">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={formData.title}
                          onChange={handleInputChange}
                        />
                        {errors.title && (
                          <span className="text-danger">{errors.title}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="Description" className="control-label">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          name="description"
                          className="form-control"
                          value={formData.description}
                          onChange={handleInputChange}
                        ></textarea>
                        {errors.description && (
                          <span className="text-danger">
                            {errors.description}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="ImageFile" className="control-label">
                          <strong>Image</strong> (height: 535px, width: 480px)
                        </label>
                        <input
                          type="file"
                          name="imageFile"
                          className="form-control"
                          onChange={handleFileChange}
                        />
                        {errors.imageFile && (
                          <span className="text-danger">
                            {errors.imageFile}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-group mt-4">
                      <input
                        type="submit"
                        value="Save"
                        className="btn btn-info btn-fw"
                      />
                      <button
                        type="button"
                        className="btn btn-primary btn-border"
                        onClick={() => window.history.back()}
                      >
                        Cancel
                      </button>
                    </div>
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

export default About;
