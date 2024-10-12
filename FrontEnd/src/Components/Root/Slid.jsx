import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images at the top
import bannerImage1 from "../../assets/images/banner/614304fd-3a69-47cb-b38c-21fab013d066_banner3-01.png";
import bannerImage2 from "../../assets/images/banner/be74431a-6e16-4956-a9a7-55a7afdc9d8d_ethiowomen.png";
import bannerImage3 from "../../assets/images/banner/e16c3f96-4bbd-42c7-8b82-6f3f6d650bb5_banner3-01.png";

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
  const [banner, setBanner] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await api.get("/banners");
      setBanner(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
      <div
        className="main-slides-item pt-5"
        style={{
          backgroundImage: `url(${bannerImage1})`,
        }}
      >
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

      <div
        className="main-slides-item pt-5"
        style={{
          backgroundImage: `url(${bannerImage2})`,
        }}
      >
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

      <div
        className="main-slides-item pt-5"
        style={{
          backgroundImage: `url(${bannerImage3})`,
        }}
      >
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
