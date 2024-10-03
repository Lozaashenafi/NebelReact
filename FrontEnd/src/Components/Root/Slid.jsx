import React from "react";
import { Link } from "react-router-dom";

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
      <div className="main-slides-item pt-5">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Personalized Dental <span>Care</span>
            </h1>
            <p style={{ fontSize: "18px" }}>
              Our personalized dental care ensures your smile stays bright and
              healthy with tailored cleaning routines and expert guidance
            </p>
            <div className="slides-btn">
              <Link to="/appointment" className="default-btn">
                Book Appointment
              </Link>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slides-item item-bg2 pt-5">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Exceptional care for <span>Women</span>
            </h1>
            <p style={{ fontSize: "18px" }}>
              Experience exceptional care tailored specifically for women,
              focusing on personalized treatments and comprehensive dental
              health solutions.
            </p>
            <div className="slides-btn">
              <Link to="/appointment" className="default-btn">
                Book Appointment
              </Link>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slides-item item-bg3 pt-5">
        <div className="container">
          <div className="main-slides-content">
            <span className="sub-title">
              <i className="flaticon-hashtag-symbol"></i> Keeping Teeth Clean
            </span>
            <h1>
              Your Health is our top <span>Priority</span>
            </h1>
            <p style={{ fontSize: "18px" }}>
              At our practice, your health is our top priority, with dedicated
              care and personalized treatments to ensure your overall
              well-being.
            </p>
            <div className="slides-btn">
              <Link to="/appointment" className="default-btn">
                Book Appointment
              </Link>
              <div className="checkup-content">
                <div className="icon">
                  <i className="flaticon-chair"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Slid;
