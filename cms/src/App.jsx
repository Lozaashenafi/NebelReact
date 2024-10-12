import { Route, Routes } from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./Page/Dashboard";
import Register from "./Page/Register";
import AddDentists from "./Page/AddDentists";
import DentistsList from "./Page/DentistsList";
import AddServices from "./Page/AddServices";
import ServicesList from "./Page/ServicesList";
import BlogList from "./Page/BlogList";
import AddBlog from "./Page/AddBlog";
import Contacts from "./Page/Contacts";
import Testimonial from "./Page/Testimonial";
import About from "./Page/About";
import Banner from "./Page/Banner";
import Info from "./Page/Info";
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
        {/* Admin layout */}
        <Route path="/" element={<AdminLayout />}>
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
