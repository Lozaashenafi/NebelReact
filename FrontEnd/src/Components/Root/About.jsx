import React, { useEffect, useState } from "react";
import Image from "../../assets/images/about/photonejib.jpg";
import axios from "axios";
import api, { nPoint } from "../../Util/api";

function About() {
  const [aboutus, setAboutus] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await api.get("/aboutus");
      setAboutus(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const latestInfo = aboutus.length > 0 ? aboutus[aboutus.length - 1] : null;

  return (
    <>
      {latestInfo && (
        <section className="about-area pb-100 mt-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="about-content">
                  <span className="sub-title">
                    <i className="flaticon-hashtag-symbol"></i>
                    About Our Hospital
                  </span>
                  {/* <h3>{latestInfo.title}</h3> */}
                  <h3>
                    Our Clients are Our Priority, We Offer Quality Dental
                    Services of Specialists
                  </h3>
                  {/* <p style={{ fontSize: "18px" }}>{latestInfo.description}</p> */}
                  <p style={{ fontSize: "18px" }}>
                    At our practice, our clients are our top priority. We
                    provide quality dental services delivered by experienced
                    specialists who are dedicated to offering personalized care
                    and ensuring the best outcomes for your oral health.
                  </p>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="about-info">
                        <i className="flaticon-caduceus"></i>
                        <h4>2 Years</h4>
                        <span>Dental Experienced</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="about-info">
                        <i className="flaticon-chair"></i>
                        <h4>15+</h4>
                        <span>Dental Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-image">
                  {/* <img src={nPoint + latestInfo.imgUrl} alt="About Us" /> */}
                  <img src={Image} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
