import React from "react";

function Banner() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Add Banner Content</h3>
                <form
                  asp-action="AddBanner"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label asp-for="Title" className="control-label">
                          Title
                        </label>
                        <input asp-for="Title" className="form-control" />
                        <span
                          asp-validation-for="Title"
                          className="text-danger"
                        ></span>
                      </div>
                      <div className="form-group">
                        <label asp-for="Description" className="control-label">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          asp-for="Description"
                          className="form-control"
                        ></textarea>
                        <span
                          asp-validation-for="Description"
                          className="text-danger"
                        ></span>
                      </div>
                      <div className="form-group">
                        <label asp-for="ImageFile" className="control-label">
                          <strong>Image</strong>
                        </label>
                        <label asp-for="ImageFile" className="control-label">
                          height: 1000 px width: 1920 px
                        </label>
                        <input
                          asp-for="ImageFile"
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

export default Banner;
