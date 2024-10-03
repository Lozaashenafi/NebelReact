import React, { useState, useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel"; // Install react-owl-carousel if you haven't

window.$ = window.jQuery = $;
function ReviewSection() {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials or use a mock/test data
  useEffect(() => {
    // Assuming you have an API or data in JSON format
    const testimonialData = [
      {
        Message: "Great service, highly recommended!",
        Name: "John Doe",
        Subject: "Dental Cleaning",
      },
      {
        Message: "Very professional and friendly staff.",
        Name: "Jane Smith",
        Subject: "Teeth Whitening",
      },
      {
        Message: "I'm happy with my dental treatment.",
        Name: "Alex Johnson",
        Subject: "Braces",
      },
    ];

    // Simulating an API call
    setTestimonials(testimonialData);
  }, []);

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
        </div>

        <div className="review-slides">
          <OwlCarousel className="owl-theme" loop margin={30} nav>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="single-review-item d-flex flex-column"
                style={{ height: "430px" }}
              >
                <div className="icon">
                  <i className="flaticon-left-quote"></i>
                </div>
                <p>{testimonial.Message}</p>
                <div className="review-info mt-auto">
                  <img src="/assets/images/profile.png" alt="Profile" />
                  <h3>{testimonial.Name}</h3>
                  <span>{testimonial.Subject}</span>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
