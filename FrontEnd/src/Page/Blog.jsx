import React from "react";
import Banner from "../Components/Root/Banner";
import SingleBlog from "../Components/Root/SingleBlog";
import Image1 from "../assets/images/blog/blog1.png";

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
            <SingleBlog
              title="Exciting News! Our Brand-New Website is Live!"
              description="We are thrilled to announce the launch of our newly designed website, Nebel. The new site ......"
              image={Image1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
