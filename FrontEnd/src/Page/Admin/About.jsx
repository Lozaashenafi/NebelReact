import React from "react";

function About() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Add AboutUS</h3>
                <form
                  asp-action="AddAboutUs"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label name="Title" className="control-label">
                          Title
                        </label>
                        <input name="Title" className="form-control" />
                        <span
                          asp-validation-for="Title"
                          className="text-danger"
                        ></span>
                      </div>
                      <div className="form-group">
                        <label name="Description" className="control-label">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          name="Description"
                          className="form-control"
                        ></textarea>
                        <span
                          asp-validation-for="Description"
                          className="text-danger"
                        ></span>
                      </div>
                      <div className="form-group">
                        <label name="ImageFile" className="control-label">
                          <strong className="">Image</strong>
                        </label>
                        <label name="ImageFile" className="control-label">
                          height: 535 px width: 480 px
                        </label>
                        <input
                          name="ImageFile"
                          className="form-control"
                          type="file"
                        />
                        <span
                          asp-validation-for="ImageFile"
                          className="text-danger"
                        ></span>
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
                        onclick="window.history.back();"
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
