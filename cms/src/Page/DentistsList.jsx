import React, { useState, useEffect } from "react";

function DentistsList() {
  const [dentists, setDentists] = useState([]);
  const [dentistIdToDelete, setDentistIdToDelete] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Fetch the dentist list from an API or a static source
    const fetchDentists = async () => {
      // Example API call
      const response = await fetch("/api/dentists"); // Adjust the API endpoint as needed
      const data = await response.json();
      setDentists(data);
    };

    fetchDentists();
  }, []);

  const handleDeleteClick = (id) => {
    setDentistIdToDelete(id);
    setModalOpen(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    // Send a delete request to your API
    await fetch(`/api/dentists/${dentistIdToDelete}`, {
      method: "DELETE",
    });
    setDentists(dentists.filter((dentist) => dentist.id !== dentistIdToDelete));
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Dentist List</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">{/* <a href="#">Tables</a> */}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="display table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Phone Number</th>
                        <th>Social Media</th>
                        <th style={{ width: "10%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dentists.map((dentist) => (
                        <tr key={dentist.id}>
                          <td>
                            <figure
                              style={{ width: "80px" }}
                              className="imagecheck-figure"
                            >
                              <img
                                src={
                                  dentist.imageUrl ||
                                  "/assets/img/examples/default.jpg"
                                }
                                alt="Dentist"
                                className="imagecheck-image"
                              />
                            </figure>
                          </td>
                          <td>{dentist.name}</td>
                          <td>{dentist.profession}</td>
                          <td>{dentist.phoneNumber}</td>
                          <td>
                            <div className="social-media">
                              {dentist.linkedinLink && (
                                <a
                                  className="btn btn-info btn-twitter btn-sm btn-link"
                                  href={dentist.linkedinLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="btn-label just-icon">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                  </span>
                                </a>
                              )}
                              {dentist.fbLink && (
                                <a
                                  className="btn btn-primary btn-sm btn-link"
                                  href={dentist.fbLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="btn-label just-icon">
                                    <i className="fa-brands fa-facebook"></i>
                                  </span>
                                </a>
                              )}
                              {dentist.igLink && (
                                <a
                                  className="btn btn-danger btn-sm btn-link"
                                  href={dentist.igLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="btn-label just-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                  </span>
                                </a>
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="form-button-action">
                              <button
                                type="button"
                                className="btn btn-link btn-primary"
                                onClick={() =>
                                  (window.location.href = `/dentists/edit/${dentist.id}`)
                                }
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-link"
                                onClick={() => handleDeleteClick(dentist.id)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this dentist?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DentistsList;
