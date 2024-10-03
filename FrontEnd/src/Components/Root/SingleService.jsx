import React from "react";
import { Link } from "react-router-dom";

function SingleService({ image, title, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-services">
        <div className="services-image" style={{ height: "300px" }}>
          <Link>
            <img src={image} alt={title} className="" />
          </Link>
          <div className="icon">
            <a>
              <i class="flaticon-tooth-2"></i>
            </a>
          </div>
        </div>
        <div className="services-content" style={{ height: "300px" }}>
          <h3 className="font-bold">
            <a>{title}</a>
          </h3>
          <p className="font-serif">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
