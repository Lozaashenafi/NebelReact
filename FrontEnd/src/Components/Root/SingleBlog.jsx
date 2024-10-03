import React from "react";
import { Link } from "react-router-dom";

function SingleBlog({ title, description, image }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-blog">
        <div className="blog-image">
          <Link to="/blog/detail">
            <img src={image} alt="Blog Image" />
          </Link>
        </div>
        <div className="blog-content">
          <h3>
            <Link to="/blog/detail">{title}</Link>
          </h3>
          <p>{description}</p>
          <Link to="/blog/detail" className="blog-btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
