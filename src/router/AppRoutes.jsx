import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import AdministrarBlog from "../pages/AdministrarBlog";
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
    /^\/blog\/[^/]+$/,
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
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blogs />} />
        <Route
          path="/blog/:id"
          element={<BlogsDetail key={location.pathname} />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdministrarBlog />} />
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
