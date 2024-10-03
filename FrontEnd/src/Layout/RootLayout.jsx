import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/flaticon-two.css";
import "../assets/css/flaticon.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/dark.css";
import "../assets/css/responsive.css";
import "../assets/css/odometer.min.css";
import "../assets/css/nice-select.min.css";
import Header from "../Components/Root/Header";
import Footer from "../Components/Root/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      {/* Outlet will render the nested route component */}
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
