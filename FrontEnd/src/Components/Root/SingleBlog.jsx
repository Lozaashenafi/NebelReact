import React from "react";
import Image from "../../assets/images/blog/blog-1.jpg";

function SingleBlog() {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-blog">
        <div className="blog-image">
          <a href="blog-details.html">
            <img src={Image} alt="image" />
          </a>
          <div className="tag">10 Mar</div>
          <div className="tag-two">
            <a href="blog.html">Technology</a>
          </div>
        </div>
        <div className="blog-content">
          <h3>
            <a href="blog-details.html">
              New Technology Make for Dental Operation
            </a>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <a href="blog-details.html" className="blog-btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
