import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/Admin/css/bootstrap.min.css";
import "../assets/Admin/css/plugins.min.css";
import "../assets/Admin/css/kaiadmin.min.css";
import "../assets/Admin/css/demo.css";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
// import Footer from "../Components/Footer";
import "primereact/resources/themes/saga-blue/theme.css"; // Choose your preferred theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function AdminLayout() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <Header />
          <div className="container">
            <Outlet />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default AdminLayout;
