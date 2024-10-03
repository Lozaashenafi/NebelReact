import React from "react";
import Banner from "../Components/Root/Banner";
import SingleDoctor from "../Components/Root/SingleDoctor";
import Image1 from "../assets/images/doctor/doctor-1.jpg";
import Image2 from "../assets/images/doctor/doctor-2.jpg";
import Image3 from "../assets/images/doctor/doctor-3.jpg";
import Image4 from "../assets/images/doctor/doctor-4.jpg";
import Image5 from "../assets/images/doctor/doctor-5.jpg";
import Image6 from "../assets/images/doctor/doctor-6.jpg";

function Dentist() {
  return (
    <>
      <Banner title="Dentist" />
      <section class="doctor-area pt-100 pb-70">
        <div class="container">
          <div class="section-title">
            <span class="sub-title">
              <i class="flaticon-hashtag-symbol"></i>
              Our Dentist
            </span>
            <h2>Our Specialized and Experienced Dentist</h2>
          </div>
          <div class="row">
            <SingleDoctor
              image={Image1}
              name="Dr. Johnson Melbourne"
              profession="Prosthodontics Dentist"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
            <SingleDoctor
              image={Image2}
              name="Dr. Ena Dicrosa"
              profession="Aesthetic Dentistry"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
            <SingleDoctor
              image={Image3}
              name="Dr. Addison Smith"
              profession="Gastroenterologists"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
            <SingleDoctor
              image={Image4}
              name="Dr. Ronnie Aaron"
              profession="Dermatologists"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
            <SingleDoctor
              image={Image5}
              name="Dr. Edie Dee"
              profession="Cardiologists"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
            <SingleDoctor
              image={Image6}
              name="Dr. Daisy Gabriela"
              profession="Endocrinologists"
              socialLinks={{
                facebook: "https://www.facebook.com/",
                twitter: "https://twitter.com/?lang=en",
                linkedin: "https://www.linkedin.com/",
                instagram: "https://www.instagram.com/",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dentist;
