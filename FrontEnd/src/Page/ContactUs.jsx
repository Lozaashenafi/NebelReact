import React from "react";
import Banner from "../Components/Root/Banner";

function ContactUs() {
  return (
    <>
      <Banner title="Contact  Us" />
      <section class="contact-area ptb-100">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              Message Us
            </span>
            <h2>Drop Us Message for Any Query</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div class="contact-form">
            <form id="contactForm">
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                      data-error="Please enter your name"
                      placeholder="Name"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      required
                      data-error="Please enter your email"
                      placeholder="Email"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required
                      data-error="Please enter your number"
                      class="form-control"
                      placeholder="Phone"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      class="form-control"
                      required
                      data-error="Please enter your subject"
                      placeholder="Subject"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your message"
                      placeholder="Your Message"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="default-btn">
                    Send Message
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="contact-info">
            <div class="contact-info-content">
              <h3>Contact Us by Phone Number or Email Address</h3>
              <h2>
                <a href="tel:+0881306298615">+088 130 629 8615</a>
                <span>OR</span>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#6c0b1e05022c0b010d0500420f0301">
                  <span
                    class="__cf_email__"
                    data-cfemail="f790859e99b7909a969e9bd994989a"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </h2>
              <ul class="social">
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i class="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/" target="_blank">
                    <i class="bx bxl-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
