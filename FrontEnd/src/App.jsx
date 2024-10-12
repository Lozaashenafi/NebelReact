import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import ContactUs from "./Page/ContactUs";
import Blog from "./Page/Blog";
import Services from "./Page/Services";
import Dentist from "./Page/Dentist";
import AboutUs from "./Page/AboutUS";
import BlogDetail from "./Page/BlogDetail";
import RootLayout from "./Layout/RootLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useAuth } from "./Context/authContext";
import Login from "./Page/Login";
import ToastNotification from "./Components/Toast";
import Appointment from "./Page/Appointment";

function App() {
  const { isLoggedIn, isAdmin, isManager, userData } = useAuth();
  console.log(isLoggedIn, isAdmin, isManager);
  return (
    <>
      <ToastNotification />
      <Routes>
        {/* Root layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dentist" element={<Dentist />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/appointment" element={<Appointment />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
