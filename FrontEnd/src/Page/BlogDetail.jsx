import React from "react";
import Image1 from "../assets/images/blog/blog1.png";
import Image2 from "../assets/images/blog/blog2.png";

function BlogDetail() {
  return (
    <>
      <section className="review-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title-warp">
                <span className="sub-title">
                  <i className="flaticon-hashtag-symbol"></i>
                  Effective Patient Care
                </span>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
          <div className="dental-tourism-tourists-area pb-75 mt-4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="dental-tourism-tourists-content">
                    <h3>
                      We’re Excited to Announce the Launch of Our offical
                      Website!
                    </h3>
                    <p style={{ fontSize: "16px" }}>
                      We are delighted to share the news that Nebel Dental has
                      officially launched its brand-new website! After months of
                      hard work and dedication, we are proud to unveil a website
                      designed with you in mind. Our new site offers a
                      streamlined user experience with a modern, fresh look,
                      making it easier than ever to explore our services and
                      learn about the cutting-edge dental care we provide.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="">
                          <img src={Image1} alt="image" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="">
                          <img src={Image2} alt="image" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-2">
                      <span>Posted On: </span>
                      24/01/2017
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
