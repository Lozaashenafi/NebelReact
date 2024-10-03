import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import ContactUs from "./Page/ContactUs";
import Blog from "./Page/Blog";
import Services from "./Page/Services";
import Dentist from "./Page/Dentist";
import AboutUs from "./Page/AboutUS";
import BlogDetail from "./Page/BlogDetail";
import RootLayout from "./Layout/RootLayout";
import AdminLayout from "./Layout/AdminLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./Page/Admin/Dashboard";
import Register from "./Page/Admin/Register";
import AddDentists from "./Page/Admin/AddDentists";
import DentistsList from "./Page/Admin/DentistsList";
import AddServices from "./Page/Admin/AddServices";
import ServicesList from "./Page/Admin/ServicesList";
import BlogList from "./Page/Admin/BlogList";
import AddBlog from "./Page/Admin/AddBlog";
import Contacts from "./Page/Admin/Contacts";
import Testimonial from "./Page/Admin/Testimonial";
import About from "./Page/Admin/About";
import Banner from "./Page/Admin/Banner";
import Info from "./Page/Admin/Info";
import { useAuth } from "./Context/authContext";
import Login from "./Page/Login";
import ToastNotification from "./Components/Toast";

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
        </Route>
        {/* Admin layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="dentists/add" element={<AddDentists />} />
          <Route path="dentists/list" element={<DentistsList />} />
          <Route path="services/add" element={<AddServices />} />
          <Route path="services/list" element={<ServicesList />} />
          <Route path="blog/posts" element={<BlogList />} />
          <Route path="blog/add" element={<AddBlog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="about" element={<About />} />
          <Route path="banner" element={<Banner />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
