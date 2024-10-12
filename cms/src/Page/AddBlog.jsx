import React from "react";

function AddBlog() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold mb-4">Add Post</h3>
                <form
                  action="/add-post" // Update this URL to your API endpoint
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="title" className="control-label">
                          Title
                        </label>
                        <input
                          id="title"
                          name="title"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description" className="control-label">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          id="description"
                          name="description"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="imageFile1" className="control-label">
                          <strong>Image 1</strong>
                        </label>
                        <label className="control-label">
                          Height: 650 px, Width: 650 px
                        </label>
                        <input
                          id="imageFile1"
                          name="imageFile1"
                          className="form-control"
                          type="file"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="imageFile2" className="control-label">
                          <strong>Image 2</strong>
                        </label>
                        <label className="control-label">
                          Height: 650 px, Width: 650 px
                        </label>
                        <input
                          id="imageFile2"
                          name="imageFile2"
                          className="form-control"
                          type="file"
                        />
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

export default AddBlog;
