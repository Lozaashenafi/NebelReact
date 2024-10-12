import React from "react";

function SingleDoctor({ image, name, profession, socialLinks }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-doctor">
        <a href="dentist-details.html">
          <img src={image} alt={name} />
        </a>
        <div className="doctor-content">
          <h3>
            <a>{name}</a>
          </h3>
          <span>{profession}</span>
          <div className="share-link">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                <i className="bx bxl-facebook"></i>
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                <i className="bx bxl-twitter"></i>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <i className="bx bxl-linkedin"></i>
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDoctor;
