import React from "react";
import Slid from "../Components/Root/Slid";
import Features from "../Components/Root/Features";
import Services from "../Components/Root/Services";
import Overview from "../Components/Root/Overview";
import AppointmentOverView from "../Components/Root/AppointmentOverView";
import About from "../Components/Root/About";
import CoreFeaturse from "../Components/Root/CoreFeaturse";
import Doctor from "../Components/Root/Doctor";
// import Testimonials from "../Components/Root/Testimonials";
import Location from "../Components/Root/Location";
// import ReviewSection from "../Components/Root/ReviewSection";

function Home() {
  return (
    <div>
      <Slid />
      <Features />
      <Services />
      <Overview />
      <AppointmentOverView />
      <About />
      <CoreFeaturse />
      <Doctor />
      {/* <Testimonials /> */}
      {/* <ReviewSection /> */}
      <Location />
    </div>
  );
}

export default Home;
