import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import SingleTestimonials from "./SingleTestimonials";

function Testimonials() {
  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show three slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: false, // Hide next and prev arrows
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show two slides at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show one slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="review-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                Our Clients Review
              </span>
              <h2>Real Review From Our Real Customers</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-warp-btn">
              <a href="testimonials.html" className="default-btn">
                View All
              </a>
            </div>
          </div>
        </div>
        <Slider {...settings} className="mx-2">
          <SingleTestimonials />
          <SingleTestimonials />
          <SingleTestimonials />
          <SingleTestimonials />
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
