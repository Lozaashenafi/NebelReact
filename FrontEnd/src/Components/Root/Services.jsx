import React from "react";
import { Link } from "react-router-dom";
import SingleService from "./SingleService";
import Image1 from "../../assets/images/services/services-1.jpg";
import Image2 from "../../assets/images/services/services-2.jpg";
import Image3 from "../../assets/images/services/services-3.jpg";
import Image4 from "../../assets/images/services/services-4.jpg";
import Image5 from "../../assets/images/services/services-5.jpg";
import Image6 from "../../assets/images/services/services-6.jpg";

function Services() {
  return (
    <section className="services-area pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title-warp">
              <span className="sub-title">
                <i className="flaticon-hashtag-symbol"></i>
                Our Best Dental Services
              </span>
              <h2>
                Enjoy Specialized Care Through Precision, Artistry, and
                Experience
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-warp-btn">
              <Link to="/services" className="default-btn">
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <SingleService
            image={Image1}
            title="General Dentistry"
            description="We offer comprehensive dental care for all ages, from routine check-ups and cleanings to restorative treatments. Our expert team prioritizes your oral health with personalized, compassionate care in a comfortable setting."
          />
          <SingleService
            image={Image2}
            title="Orthodontics"
            description="Straighten your teeth and improve your bite with our orthodontic treatments. From traditional braces to clear aligners, we offer options to help you achieve a healthy, beautiful smile."
          />
          <SingleService
            image={Image3}
            title="Teeth Whitening"
            description="Brighten your smile with our professional teeth whitening services. Safe and effective, our treatments remove stains and leave your teeth looking their best."
          />
          <SingleService
            image={Image4}
            title="Pit and Fissure Sealant"
            description="Protect your child's teeth with our pit and fissure sealant service. This preventive treatment involves applying a thin, protective coating to the grooves and crevices of molars to shield them from cavities and decay. It's a quick, painless procedure that helps keep teeth healthy and strong."
          />
          <SingleService
            image={Image5}
            title="Fillings"
            description="Restore your tooth's function and appearance with our filling service. We use high-quality materials to fill cavities caused by decay, ensuring a durable and natural-looking repair. The procedure is quick and comfortable, helping to preserve your"
          />
          <SingleService
            image={Image6}
            title="Root Canal Treatment"
            description="Save your natural tooth with our root canal treatment. This procedure removes infected tissue from inside the tooth, cleans and disinfects the area, and then seals it to prevent further infection. Our treatment helps relieve pain and restore tooth"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
