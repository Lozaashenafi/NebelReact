import React from "react";
import Banner from "../Components/Root/Banner";
import SingleService from "../Components/Root/SingleService";
import Image1 from "../assets/images/services/services-1.jpg";
import Image2 from "../assets/images/services/services-2.jpg";
import Image3 from "../assets/images/services/services-3.jpg";
import Image4 from "../assets/images/services/services-4.jpg";
import Image5 from "../assets/images/services/services-5.jpg";
import Image6 from "../assets/images/services/services-6.jpg";
import Image7 from "../assets/images/services/services-7.jpg";
import Image8 from "../assets/images/services/services-8.jpg";

function Services() {
  return (
    <>
      <Banner title="Services" />
      <section class="services-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              Our Best Dental Services
            </span>
            <h2>
              Enjoy Specialized Care Through Precision, Artistry, and Experience
            </h2>
            <p>
              Our approach ensures that every detail is meticulously attended
              to, blending advanced techniques with a creative touch. With years
              of expertise, we provide personalized solutions tailored to your
              unique needs, delivering exceptional outcomes that reflect both
              skill and dedication.
            </p>
          </div>
          <div class="row">
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
            <SingleService
              image={Image7}
              title="Crowns"
              description="Restore your tooth's strength and appearance with our dental crowns. These custom-made caps fit over damaged or decayed teeth, providing protection and enhancing your smile. Durable and natural-looking, crowns help preserve your tooth’s function"
            />
            <SingleService
              image={Image8}
              title="Bridges"
              description="Replace missing teeth seamlessly with our dental bridges. These custom restorations bridge the gap between missing teeth, restoring your smile and improving functionality. Durable and natural-looking, bridges help maintain your bite alignment and"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
