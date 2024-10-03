import React from "react";
import Image1 from "../assets/images/blog/blog-1.jpg";
import Image2 from "../assets/images/blog/blog-2.jpg";

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
                    <h3>New Technology Make for Dental Operation</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore
                      magnam aliquam quaerat voluptatem.
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
                      <span>Posted On:</span>
                      @Model.AddedDate
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
