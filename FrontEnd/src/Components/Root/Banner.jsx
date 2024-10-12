import React from "react";
import { Link } from "react-router-dom";

function Banner({ title }) {
  return (
    <div className="page-banner-area">
      <div className="container ">
        <div className="page-banner-content ">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
