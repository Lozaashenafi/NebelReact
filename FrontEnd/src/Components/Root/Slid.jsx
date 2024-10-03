import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} owl-next`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} owl-prev`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function Slid() {
  const settings = {
    dots: true, // Enable dots at the bottom
    infinite: true, // Loop through slides infinitely
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <Slider {...settings}>
      <div className="main-slides-item">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Personalized Dental <span>Care</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="slides-btn">
              <a href="appointment.html" className="default-btn">
                Book Appointment
              </a>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
                <span>
                  <a href="contact-us.html">Get Free Checkup</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slides-item item-bg2">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Exceptional Care for <span>Women</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="slides-btn">
              <a href="appointment.html" className="default-btn">
                Book Appointment
              </a>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
                <span>
                  <a href="contact-us.html">Get Free Checkup</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-slides-item item-bg3">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Your Health is Our Top <span>Priority</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="slides-btn">
              <a href="appointment.html" className="default-btn">
                Book Appointment
              </a>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
                <span>
                  <a href="contact-us.html">Get Free Checkup</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Slid;
