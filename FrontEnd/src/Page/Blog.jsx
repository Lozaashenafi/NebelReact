import React from "react";
import Banner from "../Components/Root/Banner";
import SingleBlog from "../Components/Root/SingleBlog";

function Blog() {
  return (
    <div>
      <Banner title="Blog" />
      <section className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i>
              Update News and Blogs
            </span>
            <h2>Stay Updated with Our Latest News and Blog</h2>
          </div>
          <div className="row">
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
