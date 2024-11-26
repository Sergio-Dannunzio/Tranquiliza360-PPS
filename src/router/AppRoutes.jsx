import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AministrarBlog from "../pages/AministrarBlog";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogsDetail from "../pages/BlogsDetail";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const location = useLocation();

  const showHeaderFooterRoutes = [
    /^\/$/,
    /^\/home$/,
    /^\/blog$/,
    /^\/contacto$/,
    /^\/admin$/,
  ];

  const shouldShowHeaderFooter = () => {
    return showHeaderFooterRoutes.some((pattern) =>
      pattern.test(location.pathname)
    );
  };

  return (
    <>
      {shouldShowHeaderFooter() && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogsDetail />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AministrarBlog />} />
        </Route>
      </Routes>
      {shouldShowHeaderFooter() && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default AppWrapper;
